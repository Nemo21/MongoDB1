const express = require("express");
const router = express.Router();
//POST
router.post("/createPost", (req, res) => {
  res.send("post created");
});
//GET
router.get("/getAllPost", (req, res) => {
  res.send("All Post Data :- ");
});

//GETSPECIFIC
router.get("/getPost/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Post with id: ${id}`);
});
//PATCH
router.patch("/editPost/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Patch with id: ${id}`);
});
//DELETE
router.delete("/deletePost/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Delete with id: ${id}`);
});
module.exports = router;
