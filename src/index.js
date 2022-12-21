const http = require("http");
const app = require("./app");
const server = http.createServer(app);

// server listening 
if(!module.parent)
server.listen(4001, () => {
  console.log(`Server running on port 4001`);
});