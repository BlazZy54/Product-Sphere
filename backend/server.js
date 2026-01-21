import express from "express"
import { connectDB } from "./config/db.js"


import dotenv from "dotenv"
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

import cors from "cors"
app.use(cors())

app.use(express.json()) //parses incoming JSON request bodies and makes them available as req.body.



import productRoutes from "./routes/product.route.js"
app.use("/api/products", productRoutes)

import path from "path"
const __dirname = path.resolve() // D:\Project4\Project1   -> root directory name              :    returns an absolute path.

//then do npm run build in react app -> this will create a dist folder of static files, now when user send a req to frontend we just send the static files
// Static files are pre-built files (HTML, CSS, JS, images) that are served directly to the client without server-side processing.


if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "/frontend/dist")))

    app.get(/.*/, (req,res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")) //same as joining paths
    })
}

// Yes, API routes are publicly reachable by design, but security is enforced through authentication, authorization, and database-level protection—not by hiding the API URL.


//if NODE_ENV = "development"
if (process.env.NODE_ENV !== "production") {
    app.get("/", (req, res) => {
        res.send("Hello world");
    });
}


app.listen(port, () => {
    connectDB()
})