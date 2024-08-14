import express from "express";
import userController from "../controller/userController.js";
const router = express.Router();

router.get("/users", userController.getAllusers);
router.get("/user/:id", userController.getOneUser); // 동적 라우팅(id가 바뀌는)
router.post("/user", userController.addUser);

export default router;