import Table from "react-bootstrap/Table";

const List = ({ data }) => {
  return (
    <div>
      <Table responsive="lg">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Position</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((collaborator) => (
            <tr key={collaborator.id}>
              <td>{collaborator.id}</td>
              <td>{collaborator.name}</td>
              <td>{collaborator.email}</td>
              <td>{collaborator.age}</td>
              <td>{collaborator.position}</td>
              <td>{collaborator.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    
  );
};

export default List;
