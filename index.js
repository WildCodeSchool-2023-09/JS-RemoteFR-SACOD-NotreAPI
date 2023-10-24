const express = require("express");
const app = express();

const PORT = 5500;

app.listen(PORT, (err) => {
	if (err) {
		console.info("Oups, une erreur est servenu: ", err);
	} else {
		console.info(
			`Le serveur est lancé sur le port ${PORT}. Accès http://localhost:${PORT}`
		);
	}
});
