import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 5000;
const DB = `mongodb://localhost/node_back`;

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);


async function startApp() {
    try {
    await mongoose.connect(DB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log("Server started on port" + PORT));
    } catch (e) {
    console.log(e);
    }
}

startApp();
