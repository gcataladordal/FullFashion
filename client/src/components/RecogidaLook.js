
import React, { Component, useState  } from "react";
import useFetch from "../hooks/useFetch";
import ResultadoLook from "../pages/ResultadoLook";

const RecogidaLook = () => {

  const [target, setTarget] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [talla, setTalla] = useState("");
  const [color, setColor] = useState("");
  const [estilo, setEstilo] = useState("");

  const [data, setData] = useFetch("busquedalook");

  const searchData = () => {
    let datos = {
      target,
      altura,
      peso,
      talla,
      color,
      estilo,
    };

    setData(datos);
  };

  return (
    <div>
      <h1>recoger datos Component</h1>
      <label htmlFor="">Añadir Tipo persona</label>
      <input type="text" onChange={(e) => setTarget(e.target.value)} />
      <br />

      <label htmlFor="">Añadir Altura</label>
      <br />
      <input type="text" onChange={(e) => setAltura(e.target.value)} />
      <br />

      <label htmlFor="">Añadir Peso</label>
      <input type="text" onChange={(e) => setPeso(e.target.value)} />
      <br />

      <label htmlFor="">Añadir Tipo Talla</label>
      <input type="text" onChange={(e) => setTalla(e.target.value)} />
      <br />

      <label htmlFor="">Añadir color</label>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <br />

      <label htmlFor="">Añadir Estilo</label>
      <input type="text" onChange={(e) => setEstilo(e.target.value)} />
      <br />
    

      <button onClick={searchData}>Enviar</button>
      {data != "" ?  <div> Ha agregado {data.tipo}
          correctamente a la bbdd  </div> :  ""}
    </div>
  );
};

export default RecogidaLook;