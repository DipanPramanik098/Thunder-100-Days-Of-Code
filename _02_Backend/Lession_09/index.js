import { MongoClient } from "mongodb";

async function runGetStarted() {
    const uri =
        "mongodb+srv://myselfdipan6_db_user:XxW95ElMlfruxbPm@cluster0.z0nn5ms.mongodb.net/";

    const client = new MongoClient(uri);

    try {
        // Connect to MongoDB
        await client.connect();

        const database = client.db("First DB");
        const demos = database.collection("Demos");

        const result = await demos.insertMany([
            {
                item: "journal",
                qty: 25,
                tags: ["blank", "red"],
                size: {
                    h: 14,
                    w: 21,
                    uom: "cm",
                },
            },
            {
                item: "mat",
                qty: 85,
                tags: ["gray"],
                size: {
                    h: 27.9,
                    w: 35.5,
                    uom: "cm",
                },
            },
            {
                item: "mousepad",
                qty: 25,
                tags: ["gel", "blue"],
                size: {
                    h: 19,
                    w: 22.85,
                    uom: "cm",
                },
            },
        ]);

        console.log(result);
    } finally {
        await client.close();
    }
}

runGetStarted().catch(console.error);