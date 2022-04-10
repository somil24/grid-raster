
const csv = require("csvtojson");
const fs = require("fs");


const covidData=()=>{
    const CSV_FILE_PATH = "./assets/covid_data.csv";

const source = fs.createReadStream(CSV_FILE_PATH);

// contains the final result
const result= [];

source.pipe(
  csv(
    {
      delimiter: ",",
      checkType: true,
    },
    {
      objectMode: true,
    }
  )
    .on("data", (data) => {
     // console.log(data);
     result.push(data)
    })
    .on("error", (err) => {
      console.log(err);
    })
    .on("done", () => {
      console.log("Converted csv to json");
      
      // write to the file 'result.json'
       fs.writeFileSync("result.json", JSON.stringify(result));
    })
);
return result;

}

module.exports=covidData;