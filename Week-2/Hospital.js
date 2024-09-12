const express = require("express");
const app = express();
var users = [
  {
    name: "Aditya",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];
app.use(express.json());
app.get("/", function (req, res) {
  const adityaKidneys = users[0].kidneys;
  const numberOfKidneys = adityaKidneys.length;
  let numberOfHealtyKidneys = 0;
  for (i = 0; i < adityaKidneys.length; i++) {
    if (adityaKidneys[i].healthy) {
      numberOfHealtyKidneys = numberOfHealtyKidneys + 1;
    }
  }
  const numberOfUnhealtyKidney = numberOfKidneys - numberOfHealtyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealtyKidneys,
    numberOfUnhealtyKidney,
  });
});

app.post("/", function (req, res) {
  console.log(req.body);
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});
app.put("/", function (req, res) {
  for (i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", function (req, res) {
  // Only if atleast one unhealthy kidnwy is there do this, else return 411
  if (isThereAlestOneUnhealthyKidney()) {
    const newKidneys = [];
    for (i = 0; i < users[0].kidneys.length; i++) {
      if ((users[0].kidneys[i].healthy = true)) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({});
  } else {
    res.status(411).json({
      msg: "You have no bad kidney",
    });
  }
});

function isThereAlestOneUnhealthyKidney() {
  let atLeastOneUnhealthyKidney = false;
  for (i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atLeastOneUnhealthyKidney = true;
    }
  }
  return atLeastOneUnhealthyKidney;
}

app.listen(3000);
