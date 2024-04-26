const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://shamilcf:500109886@bike-rental-db.9gw93w2.mongodb.net/?retryWrites=true&w=majority&appName=bike-rental-db";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
    try {
   
        await client.connect();
        console.log("Connected to MongoDB");
        const database = client.db("yourDatabaseName");
        const collection = database.collection("yourCollectionName");
        const documents = await collection.find({}).toArray();
        console.log("Documents from the collection:", documents);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
       
        await client.close();
    }
}

connectToMongoDB();
