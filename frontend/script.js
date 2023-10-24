console.log("Coucou les SACOD");

fetch("http://localhost:5500/")
  .then((response) => response.json())
  .then((data) => {
    /**
     * Toute notre logique du DOM
     */
    const ul = document.querySelector("ul");

    for (let i = 0; i < data.length; i++) {
      const li = document.createElement("li");
      li.innerText = data[i].name + " apprends le " + data[i].learn;
      // En dernier
      ul.appendChild(li);
    }
  });
