const express = require("express");
const port = 4000;
const app = express(); ///creating express server

app.use(checkDate);

///Load view engine
app.set("view engine", "pug");
app.set("views", "./views");

//Home Route
app.get("/", function (req, res) {
  res.render("Homepage");
});

//contact Us Route
app.get("/contactus", function () {
  console.log("On contact us page ");
  app.render("Contactus", {
    title: "Fill The Form to contact us, Thank You!",
  });
});

///our services route
app.get("/ourservices", function () {
  app.render("Ourservices");
});
////middleware function
function checkDate(req, res, next) {
  var date = new Date();
  console.log("checkingg date");
  console.log(date);
  var day = date.getDate;
  var hour = date.getHours;
  console.log(day);
  console.log(hour);
  if (
    date.getDay > 0 &&
    date.getDay < 6 &&
    date.getHours() > 9 &&
    date.getHours < 17
  ) {
    next();
  } else {
    //res.send("Website is currently closed");
    res.redirect("/offlinepage");
  }
}
///start server
app.listen(port, function () {
  console.log("Server Running on port " + port);
});
