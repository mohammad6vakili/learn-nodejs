const logger = require("./logger.ts");
const fileWriter = require("./file_writer");

logger.sayHello("Parisa");

fileWriter.writeTextFile("Hello World!");
fileWriter.writeTextFileSync("aloooooo!");
fileWriter.appendTextFile(" This is appended text!");
fileWriter.renameFile("newFile.txt", "test.txt");
