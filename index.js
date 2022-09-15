const express = require("express");
const router = require("./routes/Users");

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(router);

app.listen(PORT, () =>
  console.log(
    `server running on port : ${PORT} open on http://localhost:${PORT}`
  )
);
