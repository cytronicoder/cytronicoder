import fs from "fs";
import path from "path";

export async function GET() {
    const photosDirectory = path.join(process.cwd(), "public", "photos");
    const photoFiles = fs.readdirSync(photosDirectory);
    const photos = photoFiles.map((fileName) => `/photos/${fileName}`);

    return Response.json(photos);
}
