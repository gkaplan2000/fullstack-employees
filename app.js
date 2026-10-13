import router from "#api/employees";
import express from "express";
const app = express();
export default app;

app.use(express.json());

app.route("/").get((req, res) => {
    res.send("Welcome to the Fullstack Employees API.")
});

app.use("/employees", router);

