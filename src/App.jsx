import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { collaboratorsBase } from "./assets/js/collaboratorsBase";
import { useState } from "react";
import Alert from "./components/Alert";
import Background from "./components/Background"
import Form from "./components/Form";
import List from "./components/List";
import Search from "./components/Search";

function App() {
  const [data, setData] = useState(collaboratorsBase);
  const [dataFiltered, setDataFiltered] = useState(collaboratorsBase);
  const [error, setError] = useState("");

  return (
    <>
      <div className="container">
        <section className="listSection">
          <h4>- Lista de colaboradores -</h4>
          <Search
            dataFiltered={dataFiltered}
            setDataFiltered={setDataFiltered}
          />
          <List data={data} />
        </section>
        <section className="formSection">
          <h4>Agregar colaborador:</h4>
          <Form setError={setError} data={data} setData={setData} />
          <Alert error={error} />
        </section>
      </div>
      <Background />
    </>
  );
}
export default App;
