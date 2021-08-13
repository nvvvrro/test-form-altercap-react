import React, { useReducer } from "react";
import { UserReducer } from "../reducers/UserReducer";
import Form from "./Form";
import TableUser from "./TableUser";


const User = () => {
  const [state, dispatch] = useReducer(UserReducer, []);

  return (
    <div className="container mt-3">
      <Form dispatch={dispatch} />
      <TableUser users={state} dispatch={dispatch}></TableUser>
    </div>
  );
};

export default User;
