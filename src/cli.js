#!/usr/bin/env node

import { Command } from "commander";
import { downloadFile } from "./lib.js";
import * as path from "path";

const program = new Command().name("nwget").version("0.1.0");

program
    .arguments("<url>")
    .option("-o, --output <output>", "Path to download the file")
    .action(async (url, options) => {
        try {
            let filePath;

            if (options.output) {
                if (!options.output.endsWith(path.sep))
                    filePath = options.output;
                else {
                    const urlObj = new URL(url);
                    const fileName = path.basename(urlObj.pathname) || "unnamed";

                    filePath = path.resolve(options.output, fileName);
                }
            } else {
                const urlObj = new URL(url);
                const fileName = path.basename(urlObj.pathname) || "unnamed";
                filePath = path.resolve(process.cwd(), fileName);
            }

            await downloadFile(url, filePath);
        } catch (err) {
            console.error("An error occurred: ", err.message);
            process.exit(1);
        }
    }).parse();