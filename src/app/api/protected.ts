{/*import { auth } from "@clerk/nextjs/server";
import { sanityClient } from "@/lib/sanity"; 
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const authData = await auth(); // ✅ Await the function properly

    if (!authData.userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { queryType } = req.body;

    if (!queryType) {
        return res.status(400).json({ error: "Query type is required" });
      }
  
      let sanityData;

      switch (queryType) {
        case "products":
          sanityData = await sanityClient.fetch(`*[_type == "product"]`);
          break;
        case "category":
          sanityData = await sanityClient.fetch(`*[_type == "category"]`);
          break;
        case "snkrs":
          sanityData = await sanityClient.fetch(`*[_type == "snrks"]`);
          break;
        default:
          return res.status(400).json({ error: "Invalid query type" });
      }
    return res.status(200).json({ sanityData });
  } catch (error) {
    console.error("Clerk authentication error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}*/}
