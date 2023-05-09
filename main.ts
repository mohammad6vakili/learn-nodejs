const logger = require("./logger.ts");
const fileWriter = require("./file_writer");

logger.sayHello("Parisa");

fileWriter.writeTextFile("Hello World!");
fileWriter.appendTextFile(" This is appended text!");
