import app from "./app.js";


const port  = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Backend is live 🚀");
  });
  
//start server at port 
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})