import crypto from "crypto"
import { loadLinks,saveLinks } from "../models/shoterner.model.js";
//  import { readFile, writeFile } from "fs/promises";
// import path from "path";

export const getShortener = async (req, res) => {
   try {
    //  const file = await readFile(path.join("views", "index.html"));

     const links = await loadLinks();
      return res.render("index",{links,hosts:req.headers.host})
 
  
   } catch (error) {
     console.error(error);
     return res.status(500).send("Internal Server Error");
   }};


export const PosturlShortener = async (req, res) => {
   try {
     const { url, shortCode } = req.body;
 
     const finalShortCode =
       shortCode || crypto.randomBytes(4).toString("hex");
 
     const links = await loadLinks();
 
     if (links[finalShortCode]) {
       return res
         .status(400)
         .send("Short code already exists. Please choose another.");
     }
 
     links[finalShortCode] = url;
     await saveLinks(links);
 
     return res.redirect("/");
   } catch (error) {
     console.error(error);
     return res.status(500).send("Internal Server Error");
   }
 };
 export const redirectShortener = async (req, res) => {
   try {
     const { shortCode } = req.params;
     const links = await loadLinks();
 
     if (!links[shortCode]) {
       return res.status(404).send("404 Not Found");
     }
 
     return res.redirect(links[shortCode]);
   } catch (error) {
     console.error(error);
     return res.status(500).send("Internal Server Error");
   }};