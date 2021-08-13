import React from "react";

const TableUser = ({ users, dispatch }) => {
  const handleDelete = (id) => {
    const actionDelete = {
      type: "delete",
      payload: id,
    };

    dispatch(actionDelete);
  };

  return (
    <table className="responsive-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Rut</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Acción</th>
        </tr>
      </thead>

      <tbody>
        {users.map((us) => {
          const idUs = us.id.slice(0, 6);
          return (
            <tr key={us.id}>
              <th>{idUs} </th>
              <td>{us.nombre}</td>
              <td>{us.apellido}</td>
              <td>{us.rut}</td>
              <td>{us.email}</td>
              <td>{us.telefono}</td>
              <td>
                <button
                  className="btn waves-effect red darken"
                  type="delete"
                  name="action"
                  onClick={() => handleDelete(us.id)}
                >
                  <i className="material-icons">close</i>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableUser;
