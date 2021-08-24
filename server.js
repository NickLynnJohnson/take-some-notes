// ==============================================================================
// DEPENDENCIES

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION

var app = express();
var PORT = process.env.PORT || 8888;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER

// require("./routes/apiRoutes")(app);
require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);

// =============================================================================
// LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
