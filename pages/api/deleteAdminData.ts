import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../lib/mongodb";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        let { db } = await connectToDatabase();
        const datalist = await db
            .collection(req.body.collection)
            .deleteOne({ _id: new ObjectId(req.body.id) });

        res.status(200).json(datalist);
    } catch (error: any) {
        console.log("error: ", error.message);
        return res.status(500).json({ error: error.message });
    }
}
