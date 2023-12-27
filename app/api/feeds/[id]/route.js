import Feed from "@models/feed";
import { connectToDB } from "@lib/db";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const feed = await Feed.findById(params.id).populate("creator")
        if (!feed) return new Response("Feed Not Found", { status: 404 });

        return new Response(JSON.stringify(feed), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { article, title } = await request.json();

    try {
        await connectToDB();

        // Find the existing post by ID
        const existingFeed = await Feed.findById(params.id);

        if (!existingFeed) {
            return new Response("Feed not found", { status: 404 });
        }

        // Update the post with new data
        existingFeed.title = title;
        existingFeed.article = article;

        await existingFeed.save();

        return new Response("Successfully updated the Feeds", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Feed", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the post by ID and remove it
        await Feed.findByIdAndRemove(params.id);

        return new Response("Feed deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting Feed", { status: 500 });
    }
};