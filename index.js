const fs = require("fs");
const csv = require("csv-parser");

const inputFilePath = "input.csv"; // Đường dẫn đến tệp CSV

function convertCsvToJson(inputFilePath) {
  return new Promise((resolve, reject) => {
    const jsonArray = [];

    fs.createReadStream(inputFilePath)
      .pipe(csv())
      .on("data", (row) => {
        jsonArray.push(row);
      })
      .on("end", () => {
        resolve(jsonArray);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

convertCsvToJson(inputFilePath)
  .then((jsonArray) => {
    console.log(jsonArray); // Mảng các đối tượng JavaScript từ tệp CSV
  })
  .catch((error) => {
    console.error("Error:", error);
  });
