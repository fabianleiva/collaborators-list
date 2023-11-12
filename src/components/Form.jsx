import { useState } from "react";

const Form = ({ setError, data, setData, setDataFiltered }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
    position: "",
    phone: "",
  });

  const addCollaborator = (e) => {
    e.preventDefault();

    const { name, email, age, position, phone } = formData;
    const dataValidation = !name || !email || !age || !position || !phone;
    const emailValidation = email.indexOf("@");

    if (dataValidation) {
      setError({
        error: true,
        message: "Completa todos los campos!",
        color: "text-danger",
      });
      return;
    } else {
      setError({
        error: false,
        message: "Registro exitoso!",
        color: "text-success",
      });
    }

    if (emailValidation >= 0) {
      null;
    } else {
      setError({
        error: true,
        message: "Ingresa un correo válido!",
        color: "text-danger",
      });
      return;
    }

    const newData = [
      ...data,
      {
        id: Number(data[data.length - 1].id) + 1,
        name: formData.name,
        email: formData.email,
        age: formData.age,
        position: formData.position,
        phone: formData.phone,
      },
    ];
    setData(newData)
    setDataFiltered(newData);
    setFormData({
      name: "",
      email: "",
      age: "",
      position: "",
      phone: "",
    });
  };

  const setChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="form" onSubmit={(e) => addCollaborator(e)}>
        <div className="form-group">
          <label></label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={setChanges}
            value={formData.name}
            placeholder="Nombre del colaborador"
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={setChanges}
            value={formData.email}
            placeholder="Email del colaborador"
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="number"
            min={1}
            name="age"
            className="form-control"
            onChange={setChanges}
            value={formData.age}
            placeholder="Edad del colaborador"
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="text"
            name="position"
            className="form-control"
            onChange={setChanges}
            value={formData.position}
            placeholder="Cargo del colaborador"
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="number"
            name="phone"
            className="form-control"
            onChange={setChanges}
            value={formData.phone}
            placeholder="Teléfono del colaborador"
          />
        </div>
        <button type="submit" className="addButton btn btn-primary">
          Añadir colaborador
        </button>
      </form>
    </>
  );
};
export default Form;
