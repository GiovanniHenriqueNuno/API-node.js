var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
    res.json(["Nome1","NomeDoFilmeFavorito","ComidaFavoritanp","ID"]);
   });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
