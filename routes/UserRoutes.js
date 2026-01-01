import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../Controller/UserController.js";

const router = express.Router();

// CREATE user
router.post("/", createUser);

// READ all users
router.get("/", getAllUsers);

// READ single user
router.get("/:id", getUserById);

// UPDATE user
router.put("/:id", updateUser);

// DELETE user
router.delete("/:id", deleteUser);

export default router;
