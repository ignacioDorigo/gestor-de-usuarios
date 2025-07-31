import React, { useState } from "react";
import FormularioCustomHook from "./components/FormularioCustomHook/FormularioCustomHook";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);

  const agregarUsuario = (nuevoUsuario) => {
    setUsuarios([...usuarios, nuevoUsuario]);
  };

  return (
    <div>
      <FormularioCustomHook
        agregarUsuario={agregarUsuario}
      ></FormularioCustomHook>

      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.email}>{usuario.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
