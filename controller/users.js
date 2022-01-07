exports.index = (req, res) => {
   res.send("All users");
};

exports.getUser = (req, res) => {
   res.send(`User:${req.params.id}`);
};

exports.createUser = (req, res) => {
   res.send("Create user");
};

exports.deleteUser = (req, res) => {
   res.send(`Delete user:${req.params.id}`);
};
