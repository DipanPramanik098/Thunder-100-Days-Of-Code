import express from "express";

const app = express();

// Parse incoming JSON request body
app.use(express.json());


// =====================================================
// BACKEND SERVERS
// =====================================================

// Requests will be distributed among these servers
const backendServers = [
    "https://12.3.4.6",
    "https://19.3.4.5",
    "https://21.8.4.6"
];


// Keep track of which server should receive the next request
let index = 0;


// =====================================================
// ROUND ROBIN SERVER SELECTION
// =====================================================

function fetchServer() {

    // Select the current server
    const server = backendServers[index];

    // Move to the next server
    index++;

    // When index reaches the end,
    // start again from index 0
    index = index % backendServers.length;

    return server;
}


// =====================================================
// CALL SELECTED BACKEND SERVER
// =====================================================

async function callServer(server, req) {

    const response = await fetch(server + req.originalUrl, {

        // Forward original HTTP method
        method: req.method,

        // Forward request headers
        headers: {
            "Content-Type": "application/json"
        },

        // GET and HEAD requests cannot have a body
        body:
            req.method !== "GET" && req.method !== "HEAD"
                ? JSON.stringify(req.body)
                : undefined
    });

    // Convert backend response to JSON
    return await response.json();
}


// =====================================================
// LOAD BALANCER
// =====================================================

app.use(async (req, res) => {

    try {

        // Get a backend server using Round Robin
        const server = fetchServer();

        console.log(`Request forwarded to: ${server}`);

        // Send request to selected backend server
        const response = await callServer(server, req);

        // Send backend response to client
        return res.json(response);

    } catch (error) {

        console.log("Load Balancer Error:", error);

        return res.status(500).json({
            message: "Backend Server Error"
        });
    }
});


// =====================================================
// START LOAD BALANCER
// =====================================================

app.listen(3000, () => {
    console.log("Load Balancer Is Listening On Port 3000");
});