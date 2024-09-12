const express = require("express");

const app = express();

// function sum(n) {
//   let ans = 0;
//   for (i = 0; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }
// req and res ==> request and response
// app.get("/", function (req, res) {
//   const n = req.query.n;
//   const ans = sum(n);
//   res.send("Your answer is " + ans);
// });

app.get("/", function (req, res) {
  throw new Error("kbkjaf");
});

app.listen(3000);
