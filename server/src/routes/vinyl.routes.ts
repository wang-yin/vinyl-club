import { Router } from "express";
import {
  getVinyls,
  getVinylById,
  createVinyl,
} from "../controllers/vinyl.controller";

const router = Router();

router.get("/", getVinyls);
router.get("/:id", getVinylById);
router.post("/", createVinyl);

export default router;
