import express from "express";

const router = express.Router();

// test route
router.get("/", (req, res) => {
  res.json({
    message: "Events route working successfully"
  });
});

export default router;
