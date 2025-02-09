import fs from "fs";
import path from "path";

export async function GET() {
    const photosSuffixes = ["jpg", "jpeg", "png", "gif"];
    const photosDirectory = path.join(process.cwd(), "public", "photos");

    const Files = fs.readdirSync(photosDirectory);
    const photoFiles = Files.filter((file) =>
        photosSuffixes.includes(file.split(".").pop())
    ); // Only include files with the specified suffixes

    const photos = photoFiles.map((fileName) => `/photos/${fileName}`);

    return Response.json(photos);
}
