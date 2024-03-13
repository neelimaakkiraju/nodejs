import express from "express";

const app = express();
const port = 3000;

app.get("/" , (req , res ) => {
    const today = new Date();
    const day = today.getDay();

    let weekDay = "It's Weekday";
    let advice = "It's time to work hard";

    if (day === 0 || day === 6) {
      weekDay = "It's Weekend",
      advice = "It's time to have some fun"
    }
    res.render("solution.ejs" , {
      currentDay : weekDay,
      bestAdvice : advice,
    })
  })
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
