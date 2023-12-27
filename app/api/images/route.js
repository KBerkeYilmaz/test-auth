import Image from "@models/image";
import { connectToDB } from "@lib/db";

export const GET = async (request) => {
    try {
        await connectToDB()

        const images = await Image.find({})

        return new Response(JSON.stringify(images), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all images", { status: 500 })
    }
}

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '50mb', // Set the body size limit
      },
    },
  };
  