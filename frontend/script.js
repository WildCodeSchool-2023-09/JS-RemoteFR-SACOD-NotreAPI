// console.log("Coucou les SACOD");

/**
 * Nous allons avoir notre base API
 */

const BASE_API = "http://localhost:5500/";

/**
 * doc: fetch
 * https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
 */
fetch(BASE_API)
  .then((response) => response.json())
  .then((data) => {
    /**
     * Toute notre logique du DOM
     */
    // Je récupère mon ul depuis le DOM
    const ul = document.querySelector("ul");

    for (let i = 0; i < data.length; i++) {
      // Je créer une balise li
      const li = document.createElement("li");
      // Je lui injecte la data via `.innerText`
      li.innerText = data[i].name + " apprends le " + data[i].learn;
      // J'ajoute ensuite ce li en tant qu'enfant de mon `ul`
      ul.appendChild(li);
    }
  });

// Et voilà 🎊
