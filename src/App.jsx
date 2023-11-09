import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { collaboratorsBase } from "./assets/js/collaboratorsBase";
import Alert from "./components/Alert";
import Form from "./components/Form";
import List from "./components/List";
import Seeker from "./components/Seeker";

function App() {
  const [data, setData] = useState(collaboratorsBase);
  const [error, setError] = useState("");

  return (
    <>
      <div className="container">
        <section className="list">
          <h4>Lista de colaboradores</h4>
          <List data={data} />
        </section>
        <section className="form">
          <h4>Agregar colaborador</h4>
          <Form setError={setError} data={data} setData={setData}/>
          <Alert error={error}/>
        </section>
      </div>
    </>
  );
}
export default App;
