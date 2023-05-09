const fs = require("fs");

const writeTextFile = (content: string) => {
  fs.writeFile("newFile.txt", content, (err: any) => {
    console.log(err);
  });
};

const writeTextFileSync = (content: string) => {
  fs.writeFileSync("newFile.txt", content, (err: any) => {
    console.log(err);
  });
};

const appendTextFile = (content: string) => {
  fs.appendFile("newFile.txt", content, (err: any) => {
    console.log(err);
  });
};

const renameFile = (old_path: string, new_path: string) => {
  fs.rename(old_path, new_path, (err: any) => {
    console.log(err);
  });
};

module.exports = {
  writeTextFile,
  writeTextFileSync,
  appendTextFile,
  renameFile,
};
