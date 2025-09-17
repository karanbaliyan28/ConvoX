import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Stream api key or secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

// is not exist it will create and if exists it update that user

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.error("Error userting stream user ", error.message);
  }
};

// todo : do it later
export const genereateStreamToken = (userId) => {};
