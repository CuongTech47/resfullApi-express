const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
let mongoUrl = process.env.MONGODB_URL;
async function connect() {
  mongoose
    .connect(`${mongoUrl}`, { serverSelectionTimeoutMS: 5000 })
    .then((result) => console.log("Ket Noi Thanh Cong"))
    .catch((err) => console.log("Ket Noi That bai"));

  mongoose.connection.on("error", (err) => {
    console.log(err.message);
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Mongodb is disconnected");
  });
  process.on('SIGINT',async () => {
    await mongoose.connection.close()
    process.exit(0)
})
}

// function on() {
//     mongoose.connection.on('error' , (err) => {
//         console.log(err.message)
//     })
// }

// function disconnect() {
//     mongoose.connection.on('disconnected' , () => {
//         console.log('Mongodb is disconnected')
//     })
// }

module.exports = { connect };
