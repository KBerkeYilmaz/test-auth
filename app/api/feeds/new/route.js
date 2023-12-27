import Feed from "@models/feed";
import { connectToDB } from "@lib/db";

export const POST = async (request) => {
    const { title, article } = await request.json();

    try {
        await connectToDB();
        const newFeed = new Feed({  title, article });

        await newFeed.save();
        return new Response(JSON.stringify(newFeed), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new feed", { status: 500 });
    }
}