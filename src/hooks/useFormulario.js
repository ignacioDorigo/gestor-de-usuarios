import React, { useState } from "react";
import Swal from "sweetalert2";

const useFormulario = (estadoInicial, agregarUsuario) => {
  const [formulario, setFormulario] = useState(estadoInicial);

  const actualizarFormulario = (evento) => {
    //Funciona todo ok salvo que el input sea un checkbox
    const propQueCambia = evento.target.name;
    const nuevoValor = evento.target.value;
    setFormulario({ ...formulario, [propQueCambia]: nuevoValor });
  };

  const resetFormulario = (estadoInicial) => {
    setFormulario(estadoInicial);
  };

  const enviarFormulario = (evento) => {
    evento.preventDefault();
    console.log(formulario);
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Los datos ingresados son correctos?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, enviar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Formulario enviado!",
          text: "Los datos se han guardado correctamente.",
          icon: "success",
        });
        agregarUsuario(formulario);
        resetFormulario(estadoInicial);
      }
    });
  };

  return { formulario, actualizarFormulario, enviarFormulario };
};

export default useFormulario;
