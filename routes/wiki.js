const express = require('express');
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.send('got to GET /wiki/')
});

router.post("/", async (req, res, next) => {
  res.send('got to POST /wiki/')
});

router.get("/add", async (req, res, next) => {
  res.send('got to GET /wiki/add')
});

module.exports = router
