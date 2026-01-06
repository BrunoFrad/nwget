import { pipeline } from "stream/promises";
import { Transform } from "stream";
import * as fs from "fs";
import * as cliProgress from "cli-progress";

export async function downloadFile(url, path) {
    const res = await fetch(url);

    const fileSize = Number(res.headers.get('content-length'));
    const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

    progressBar.start(fileSize, 0);

    if (!res.ok) throw new Error("Failed to download file");

    let downloaded = 0;

    const progressStreamTransform = new Transform({
       transform(chunk, encoding, callback) {
            downloaded += chunk.length;

            progressBar.update(downloaded);

            if (progressBar.getProgress() === 1)
                progressBar.stop();

            callback(null, chunk);
       }
    });

    await pipeline(
        res.body,
        progressStreamTransform,
        fs.createWriteStream(path)
    );
}