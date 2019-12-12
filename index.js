const server = require("./api/server");

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(
    `\n\n\t\t\t *** Welcome Back Sir, we are running on port: ${port}.`
  );
});
