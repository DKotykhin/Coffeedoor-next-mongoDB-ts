import { MongoClient } from 'mongodb';
// import dotenv from 'dotenv';
// dotenv.config();

// check the MongoDB URI
if (!process.env.MONGODB_URI) {
    throw new Error('Define the MONGODB_URI environmental variable');
}

// check the MongoDB DB
if (!process.env.MONGODB_DB) {
    throw new Error('Define the MONGODB_DB environmental variable');
}
const MONGODB_URI: string = process.env.MONGODB_URI
const MONGODB_DB: string = process.env.MONGODB_DB

let cachedClient: any = null;
let cachedDb: any = null;

export async function connectToDatabase() {
    // check the cached.
    if (cachedClient && cachedDb) {
        // load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    // set the connection options
    const opts: Object = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    // Connect to cluster
    let client = new MongoClient(MONGODB_URI, opts);
    await client.connect();
    let db = client.db(MONGODB_DB);

    // set cache
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };


}