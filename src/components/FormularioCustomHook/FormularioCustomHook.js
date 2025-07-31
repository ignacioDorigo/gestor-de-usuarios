import React from "react";
import "./FormularioCustomHook.css";
import useFormulario from "../../hooks/useFormulario";

const estadoInicial = { nombre: "", apellido: "", email: "" };

export default function FormularioCustomHook(props) {
  const { agregarUsuario } = props;

  const { formulario, actualizarFormulario, enviarFormulario } =
    useFormulario(estadoInicial, agregarUsuario);

  return (
    <form className="form" onSubmit={enviarFormulario}>
      <h2 className="form__titulo">Gestor de Formulario</h2>
      <div className="campos">
        {/* Inicio de campo */}
        <div className="campo">
          <label className="form__label" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="form__input"
            id="nombre"
            onChange={actualizarFormulario}
            name="nombre"
            value={formulario.nombre}
          ></input>
        </div>
        {/* FIN de campo */}

        {/* Inicio de campo */}
        <div className="campo">
          <label className="form__label" htmlFor="apellido">
            Apellido
          </label>
          <input
            className="form__input"
            id="apellido"
            onChange={actualizarFormulario}
            name="apellido"
            value={formulario.apellido}
          ></input>
        </div>
        {/* FIN de campo */}

        {/* Inicio de campo */}
        <div className="campo">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            id="email"
            onChange={actualizarFormulario}
            name="email"
            value={formulario.email}
          ></input>
        </div>
        {/* FIN de campo */}
      </div>
      <button type="submit" className="form__button">
        Enviar
      </button>
    </form>
  );
}
