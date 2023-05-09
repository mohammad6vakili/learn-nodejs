const logger = require("./logger.ts");
const fsHandler = require("./fs_module");

logger.sayHello("Parisa");

fsHandler.writeTextFile("Hello World!");
fsHandler.writeTextFileSync("aloooooo!");
fsHandler.appendTextFile(" This is appended text!");
fsHandler.renameFile("newFile.txt", "test.txt");
fsHandler.removeFile("test.js");
