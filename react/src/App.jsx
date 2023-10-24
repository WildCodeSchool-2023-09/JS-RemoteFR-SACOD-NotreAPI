import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  /**
   * Liste des states dont on a besoin
   */
  const [list, setList] = useState([]);
  const [jsStudent, setJsStudent] = useState([]);

  /**
   * Variable simple
   * - BASE_API permet de ne pas répéter l'adresse de l'API
   * - langage permet de choisir à la volet le langage
   */
  const BASE_API = "http://localhost:5500";
  const langage = "Ruby";

  // Axios avec la `BASE_API`
  axios
    .get(BASE_API)
    .then((response) => {
      setList(response.data)
    })
    .catch((err) => console.error(err));

  // Axios avec la query learn=langage
  axios
    .get(`${BASE_API}?learn=${langage}`)
    .then((response) => {
      setJsStudent(response.data)
    })
    .catch((err) => console.error(err));

  return (
    <>
      <h1>Coucou les SACOD</h1>
      <h2>Liste des 10 premiers élèves</h2>
      <ul>
        {list.map((student) => (
          <li key={student.id}>
            {student.name} apprends le {student.learn}
          </li>
        ))}
      </ul>
      <h2>Liste des élèves qui font du {langage}</h2>
      <ul>
        {jsStudent.map((student) => (
          <li key={student.id}>
            {student.name} | {student.learn}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
