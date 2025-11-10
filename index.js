const fs = require('fs').promises;

async function readFileContent(filename) {
    try {
        const content = await fs.readFile(filename, 'utf-8');

        const clenedContent = content.replace(/\s+/g, ' ').trim();

        await fs.writeFile(filename, clenedContent, 'utf-8');

        console.log("File processed successfully.");

    } catch(error) {
        console.log("Error : ", error.message);
    }
};

const filename = 'a.txt';
readFileContent(filename);