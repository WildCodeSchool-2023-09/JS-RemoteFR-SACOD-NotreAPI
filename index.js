const express = require("express");
const app = express();

const PORT = 5500;

const data = require("./db.json");

/**
 * Ma premiere route GET
 *
 * GET /
 */

app.get("/", (req, res) => {
	res.json(data);
});

/**
 * GET /:id
 */

app.get("/:id", (req, res) => {
	const id = parseInt(req.params.id); // optionnel
	const user = data.users.find((user) => user.id === id);
	res.json({ user: user });
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
