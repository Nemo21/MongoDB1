const express = require("express");
const app = express();
const router = require("./routes/routes");
app.use(express.json());

app.use("/genuine", router);
app.listen(3000, () => {
  console.log(`server started at localhost ${3000}`);
});
