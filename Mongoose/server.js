const mongoose = require("mongoose");

const url = "mongodb://localhost:27016/test";

async function conn(url) {
    try {
        await mongoose.connect(url);
    } catch (error) {
        console.error(error);
    }
    mongoose.disconnect();
}
conn(url);
