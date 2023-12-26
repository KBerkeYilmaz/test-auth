import Post from "@models/post";
import { connectToDB } from "@lib/db";

export const POST = async (request) => {
    const { userId, title, article } = await request.json();

    try {
        await connectToDB();
        const newPost = new Post({ publisher: userId, title, article });

        await newPost.save();
        return new Response(JSON.stringify(newPost), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new post", { status: 500 });
    }
}