import express from "express";

const App = express();

App.get("/Api/users", function (req, res) {
  res.send(["Minakshi", "Krishika", "Shravni"]);
});

App.post("/Api/users/added", function (req, res) {
  res.send({"msg":"User Added in DB"});
});

App.put("/Api/users/update", function (req, res) {
  res.send({ msg: "User Update in DB" });
});

App.delete("/Api/users/delete", function (req, res) {
  res.send({ msg: "User Delete in DB" });
});

App.listen(4000, function () {
  console.log("Server started on port 4000");
});
