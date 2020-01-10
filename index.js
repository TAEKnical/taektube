import express from "express";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from my ass");

const handleProfile = (req, res) => res.send("This is profile");

const betweenHome = (req, res, next) => {
    console.log("I'm between")
    next();
};

app.use(betweenHome); //코드 순서가 중요

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);