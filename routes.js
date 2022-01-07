var user_controller = require("./controller/users");

module.exports = function (app) {
   app.get("/", (req, res) => {
      res.send("Hello World!");
   });

   // Question - 1
   app.get("/hello-world", (req, res) => {
      res.set("Content-Type", "application/json");
      res.status(200).send({ message: "Hello World!" });
   });

   // Question - 2
   app.get("/message", (req, res) => {
      console.log(req.query);
      if (req.query.message.length > 20) res.status(400).send({ message: "Bad Request" });
      else res.status(200).send(req.query.message);
   });

   // Question - 3
   app.post("/infos/header", (req, res) => {
      res.send(req.headers);
   });

   // Question - 4
   app.post("/welcome", (req, res) => {
      if (req.body.birthdate.split("/")[2] <= 2004) res.status(200).send({ message: `Welcome:${req.body.firstname}` });
      else res.status(403).send({ message: "Forbidden" });
   });

   //Question - 5
   app.get("/rick-roll", (req, res) => {
      res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
   });

   //Question - 6
   app.delete("/custom-header", (req, res) => {
      res.set({
         "content-type": "application/json",
         Message: "Hello World!",
      });
      res.send();
   });

   //Question - 8
   app.get("/params/:id/:key/:slug", (req, res) => {
      res.send(req.params);
   });

   //Question - 9
   app.get("/users", user_controller.index);
   app.get("/users/:id", user_controller.getUser);
   app.put("/user", user_controller.createUser);
   app.delete("/user/:id", user_controller.deleteUser);
};
