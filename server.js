import express from "express";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();


// Serve Astro build files
app.use(express.static(path.join(__dirname, "dist")));


// Handle all routes
app.get("*", (req, res) => {

    res.sendFile(
        path.join(__dirname, "dist", "index.html")
    );

});


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {

    console.log(`Uni Tech running on port ${PORT}`);

});