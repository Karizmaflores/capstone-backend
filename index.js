const express = require("express");

const app = express();
const cors = require("cors");

//routes
const usersRouter = require("./src/routes/users");
const signupRouter = require("./src/routes/signup");
const signinRouter = require("./src/routes/signin");
const vinylRouter = require("./src/routes/vinyl");

//middleware
const authenticateJWT = require("./src/auth");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    // !!THiS IS FOR DEV - We replace this once we have our production URL in place.
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");

    //FOR PRODUCTION
    // res.setHeader("Access-Control-Allow-Origin", "https://bespoke-salmiakki-49f7a4.netlify.app");
    // res.setHeader(
    //   "Access-Control-Allow-Origin",
    //   "https://melodious-churros-bab5cd.netlify.app"
    // );
  
    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "POST");
  
    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    // Pass to next layer of middleware
    next();
  });

app.use("/", usersRouter);
app.use("/", signupRouter);
app.use("/", signinRouter);
app.use("/", vinylRouter);
// app.use("/", authenticateJWT, vinylRouter);

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the API",
    });
});

app.listen(PORT, console.log(`Listening on ${PORT}`));