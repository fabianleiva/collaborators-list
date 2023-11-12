import Table from "react-bootstrap/Table";
import { FaTrashCan } from "react-icons/fa6";

const List = ({ data, setData, dataFiltered, setDataFiltered }) => {
  
  const removeCollaborator = (collaborator) => {
    const newData = [...data];
    const index = newData.findIndex((e) => e.name === collaborator.name);
    newData.splice(index, 1);
    setData(newData);
    setDataFiltered(newData);
  };

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {dataFiltered.map((collaborator) => (
            <tr key={collaborator.id}>
              <td>{collaborator.id}</td>
              <td>{collaborator.name}</td>
              <td>{collaborator.email}</td>
              <td>{collaborator.age}</td>
              <td>{collaborator.position}</td>
              <td>{collaborator.phone}</td>
              <td>
                <div className="removeButtonContainer">
                  <button
                    className="removeButton"
                    onClick={() => removeCollaborator(collaborator)}
                  >
                    <FaTrashCan className="icon" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default List;
