import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../lib/mongodb";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        let { db } = await connectToDatabase();
        const coffeelist = await db
            .collection(req.body.collection)
            .update(
                { _id: new ObjectId(req.body.id) },
                { $set: req.body.data }
            );

        res.status(200).json(coffeelist);
    } catch (error: any) {
        console.log("error: ", error.message);
        return res.status(500).json({ error: error.message });
    }
}
