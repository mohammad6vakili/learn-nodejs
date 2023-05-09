const fs = require("fs");

const writeTextFile = (content: string) => {
  fs.writeFile("newFile.txt", content, (err: any) => {
    console.log(err);
  });
};

const appendTextFile = (content: string) => {
  fs.appendFile("newFile.txt", content, (err: any) => {
    console.log(err);
  });
};

module.exports = {
  writeTextFile,
  appendTextFile,
};
