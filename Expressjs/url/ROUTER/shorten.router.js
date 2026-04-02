
import { Router } from "express";
import { getShortener, PosturlShortener ,redirectShortener} from "../controllers/postshortener.controller.js";
const router = Router();

 
 // Home Page
router.get("/", getShortener);
 router.post("/",PosturlShortener)
 
 // Create Short URL

    // Redirect to original URL
router.get("/:shortCode", redirectShortener);

 export {router};