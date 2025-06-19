import express from "express"
const app = express();
const port = process.env.PORT||3000;
// app.get("/",(req,res)=>{
//   res.send("Server is Ready")
// })

app.get('/api/jokes', (req, res) => {
  const jokes=[
  {
    question: "Why don't scientists trust atoms?",
    answer: "Because they make up everything!"
  },
  {
    question: "Why did the math book look sad?",
    answer: "Because it had too many problems."
  },
  {
    question: "What do you call fake spaghetti?",
    answer: "An impasta!"
  },
  {
    question: "Why can’t your nose be 12 inches long?",
    answer: "Because then it would be a foot!"
  },
  {
    question: "How do you organize a space party?",
    answer: "You planet!"
  }
];
res.send(jokes)
});

 app.listen(port,()=>{
  console.log(`server is running at http://localhost:${port}`); 
 })