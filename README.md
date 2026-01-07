# nwget

> A simple, wget-like CLI tool for downloading files, built with Node.js.

**nwget** is a command-line interface tool that allows you to download files from the internet directly via your terminal. It features a visual progress bar, colored output, and flexible file saving options.

## 🚀 Technologies

This project was built using **Node.js** (ES Modules) and the following open-source libraries:

* **[Commander.js](https://www.npmjs.com/package/commander):** For CLI interface creation and argument parsing.
* **[cli-progress](https://www.npmjs.com/package/cli-progress):** For the download progress bar.
* **[ansi-colors](https://www.npmjs.com/package/ansi-colors):** For terminal output styling.

## 📋 Prerequisites

Since this tool uses the native **Fetch API**, you must have a recent Node.js version installed:

* **Node.js** v18.0.0 or higher.
* **npm** (Node Package Manager).

## 📦 Installation

You can install and use `nwget` globally on your machine using npm.

### 1. Local Installation (From Source)
If you have cloned this repository and want to install the tool globally from the source code:

1.  Clone the repository and navigate to the folder:
    ```bash
    git clone https://github.com/BrunoFrad/nwget.git
    cd nwget
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Link the package globally:
    ```bash
    npm install -g .
    # Or use: npm link
    ```
## 💻 Usage
The basic syntax is:
```bash
nwget [options] <url>
```
<strong>Arguments</strong><br/>
<ul>
  <li>  
    <strong>url</strong> : The direct URL of the file you want to download (Required).
  </li>
</ul>

<strong>Options</strong><br/>
<ul>
  <li><strong>-o or --output</strong> ⮕ Specify the output filename or directory.</li>
  <li><strong>-h or --help</strong> ⮕ Display help for command.</li>
  <li><strong>-V or --version</strong> ⮕ Output the version number.</li>
</ul>

## 🌟 Examples
<strong>1. Simple Download</strong><br/>
Downloads the file and saves it in the current directory with its original name.
```bash
  nwget https://example.com/file.zip
```
<strong>2. Rename file</strong><br/>
Downloads the file and saves it as my-download.zip.
```bash
  nwget https://example.com/file.zip -o my-download.zip
```
<strong>3. Save to directory</strong><br/>
Downloads the file into the downloads/ folder (keeping the original filename).<br/> <i>Note: Ensure the path ends with a separator (/ or \\) to indicate a directory.</i>
```bash
  nwget https://example.com/image.png --output ./downloads/
```
## 📝 License
This project is licensed under the ISC License.
