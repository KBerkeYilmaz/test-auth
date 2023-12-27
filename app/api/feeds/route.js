import Feed from "@models/feed";
import { connectToDB } from "@lib/db";

export const GET = async (request) => {
    try {
        await connectToDB()

        const feeds = await Feed.find({})

        return new Response(JSON.stringify(feeds), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all feeds", { status: 500 })
    }
}