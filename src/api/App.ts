// import sharp from "sharp";
import express from "express";
import path from "path";
import upload from "../middleware/upload";
import resizeingImage from "../middleware/resizingImage";
import dimensionsFromUrl from "../middleware/dimentionsFromUrl";
import { Request, Response, NextFunction, RequestHandler } from "express";
import fs from "fs";

const app = express();
const uploadsPath = path.join(process.cwd(), "uploads", "images");

// Create uploads directory if it doesn't exist
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}

// Add middleware to parse JSON
app.use(express.json());

// Then add your static file serving
app.use("/uploads/images", express.static(uploadsPath));

// Serve static files and set up routes
app.use(
  "/uploads/images",
  express.static(path.join(process.cwd(), "uploads", "images")),
);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../src/frontend/index.html"));
});

// Place the dimensionsFromUrl route BEFORE static file middleware
app.get("/images/:filename", dimensionsFromUrl as RequestHandler);

// Update your gallery endpoint to include more logging
app.get("/api/images", (req, res) => {
  try {
    const files = fs.readdirSync(uploadsPath);

    const imagePaths = files
      .filter((file) => file.toLowerCase().endsWith(".jpg") || file.toLowerCase().endsWith(".png"))
      .map((file) => `/uploads/images/${file}`);

    res.json(imagePaths);
  } catch (error) {
    console.error("Error reading images directory:", error);
    res.status(500).json({ error: "Unable to read images directory" });
  }
});

// Upload route with proper typing
app.post(
  "/upload",
  upload.single("file") as RequestHandler,
  ((req: Request, res: Response, next: NextFunction) => {
    if (!(req).file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const file = (req).file;
    if (!file.mimetype.startsWith("image/jpeg") && !file.mimetype.startsWith("image/png")) {
      fs.unlinkSync(file.path);
      return res.status(400).json({ error: "Only .jpg and .png images are allowed" });
    }
    next();
  }) as RequestHandler,
  resizeingImage as RequestHandler,
);

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000/");
});

export default app;
