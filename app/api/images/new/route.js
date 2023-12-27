import Image from "@models/image";
import { connectToDB } from "@lib/db";

export const POST = async (request) => {
    const { userId, image } = await request.json();

    try {
        await connectToDB();
        const newImage = new Image({ publisher: userId, image: image });
        await newImage.save();
        return new Response(JSON.stringify({ message: "Image saved successfully", data: newImage }), { status: 201 });
    } catch (error) {
        console.error("Error saving image:", error);
        return new Response(JSON.stringify({ message: "Failed to save image", error: error.message }), { status: 500 });
    }

}