// express package
let express = require("express"),
  // create express app
  app = express(),
  routes = require("./controllers/htmlRoutes");
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// express handlebars package and setup
var exphbs = require("express-handlebars");

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.use(express.static(__dirname + "/public"));
app.use(routes);
// port for app to listen on
var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`http://localhost:${port}`);
});
