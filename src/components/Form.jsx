import React, { useState } from "react";
import { v4 as uuid } from "uuid";
const Form = ({ dispatch }) => {
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
    rut: "",
    email: "",
    telefono: "",
  });

  const { nombre, apellido, rut, email, telefono } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };
  
  const actionAdd = {
    type: "add",
    payload: {
      id: uuid(),
      nombre,
      apellido,
      rut,
      email,
      telefono,
    },
  };

  const handleAdd = () => {
    dispatch(actionAdd);
  };

  return (
    <>
      <div className="row container">
        <div className="row">
          <div className="input-field col s6">
            <input
              id="nombre"
              type="text"
              className="validate"
              value={nombre}
              onChange={handleChange}
            />
            <label>Nombre</label>
          </div>
          <div className="input-field col s6">
            <input
              id="apellido"
              type="text"
              className="validate"
              value={apellido}
              onChange={handleChange}
            />
            <label>Apellido</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input
              id="rut"
              type="text"
              className="validate"
              value={rut}
              onChange={handleChange}
            />
            <label>Rut</label>
          </div>
          <div className="input-field col s6">
            <input
              id="telefono"
              type="text"
              className="validate"
              value={telefono}
              onChange={handleChange}
            />
            <label>Telefono</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s9 ">
            <input
              id="email"
              type="email"
              className="validate"
              value={email}
              onChange={handleChange}
            />
            <label>Email</label>
          </div>
          <div className="input-field col s3 ">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              onClick={handleAdd}
            >
              Agregar
              <i className="material-icons right">add</i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
