import { pipeline } from "stream/promises";
import * as fs from "fs";

export async function downloadFile(url, path) {
    const res = await fetch(url);

    if (!res.ok) throw new Error("Failed to download file");

    await pipeline(
        res.body,
        fs.createWriteStream(path)
    );
}