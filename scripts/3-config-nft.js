import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = await sdk.getEditionDrop("0xC84aD3128C7Fb8C4bf3aa8ddb0be23787068aBCD");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "The pen",
        description: "This NFT will give you access to WriteDAO!",
        image: readFileSync("scripts/assets/pen.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();