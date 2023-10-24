const express = require("express");
const app = express();

const PORT = 5500;

/**
 * Ma premiere route GET
 *
 * GET /
 */

app.get("/", (req, res) => {
	res.send({ trainer: "Anthony Gorski" });
});

app.listen(PORT, (err) => {
	if (err) {
		console.info("Oups, une erreur est servenu: ", err);
	} else {
		console.info(
			`Le serveur est lancé sur le port ${PORT}. Accès http://localhost:${PORT}`
		);
	}
});
