const express = require("express");

function calCulateSum(n) {
  let ans = 0;
  // Convert n to a number to prevent string concatenation
  n = Number(n);
  
  for (let i = 0; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

const app = express();

app.get("/", function (req, res) {
  const n = req.query.n;
  const ans = calCulateSum(n);
  res.send(ans.toString());
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
