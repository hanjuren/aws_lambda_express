const express = require('express');
const router = express.Router();

// router files

router.get('/meta', (req, res) => {
  res.json({ message: "hello world" });
});

module.exports = router;