// import { OpenRouter } from "@openrouter/sdk";

// const client = new OpenRouter({
//     apiKey: process.env.API_KEY,
// });

// const completion = await client.chat.send({
//     chatRequest: {
//         model: "~openai/gpt-latest",
//         messages: [
//             {
//                 role: "user",
//                 content: "Who is the Prime Minister of India?",
//             },
//         ],
//     },
// });

// console.log(completion.choices[0].message.content);


// * node --env-file=.env .\config\api.js

// * {
//   "scripts": {
//     "start": "node --env-file=.env config/api.js"
//   }
// }
// ! npm start --> can use now.



// ? 
import { OpenRouter } from "@openrouter/sdk";
import readlineSync from "readline-sync";

const client = new OpenRouter({
    apiKey: process.env.API_KEY,
});

const history = [];

async function chatApp(question) {
    const completion = await client.chat.send({
        chatRequest: {
            model: "~openai/gpt-latest",

            messages: [
                ...history,

                {
                    role: "user",
                    content: question,
                },
            ],
        },
    });

    const answer = completion.choices[0].message.content;

    // Store user message
    history.push({
        role: "user",
        content: question,
    });

    // Store AI response
    history.push({
        role: "assistant",
        content: answer,
    });

    console.log("\nAI:", answer);
}

while (true) {
    const question = readlineSync.question("\nAsk Me Anything -- ");

    await chatApp(question);
}