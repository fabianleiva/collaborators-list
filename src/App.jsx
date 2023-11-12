import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { collaboratorsBase } from "./assets/js/collaboratorsBase";
import { useState } from "react";
import Alert from "./components/Alert";
import Form from "./components/Form";
import List from "./components/List";
import Search from "./components/Search";

function App() {
  const [data, setData] = useState(collaboratorsBase);
  const [dataFiltered, setDataFiltered] = useState(data);
  const [error, setError] = useState("");

  return (
    <>
      <div className="container">
        <section className="listSection">
          <h4>- Lista de colaboradores -</h4>
          <Search
            data={data}
            setDataFiltered={setDataFiltered}
          />
          <List
            data={data}
            setData={setData}
            dataFiltered={dataFiltered}
            setDataFiltered={setDataFiltered}
          />
        </section>
        <section className="formSection">
          <h4>Agregar colaborador:</h4>
          <Form
            setError={setError}
            data={data}
            setData={setData}
            setDataFiltered={setDataFiltered}
          />
          <Alert error={error} />
        </section>
      </div>
    </>
  );
}
export default App;
