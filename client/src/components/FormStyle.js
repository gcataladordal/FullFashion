
import React, { Component, useState } from "react";
import useFetch from "../hooks/useFetch";

const RecogidaLook = () => {

  const [target, setTarget] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [talla, setTalla] = useState("");
  const [color, setColor] = useState("");
  const [estilo, setEstilo] = useState("");

  const [data, setData, dataLook] = useFetch("busquedalook");

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

  console.log(dataLook);

  return (
    <div>
      <form onSubmit={(e) => setTarget(e.target.value)}>
        <label>
          Elige tu target:
          <select value="hombre">
            <option value="hombre"><img width="50" height="100" class="img-fluid mx-auto rounded float-start" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/tyler-nix-Jg7UTkxTruQ-unsplash.jpg" /></option>
            <option value="mujer"><img width="50" height="100" class="img-fluid mx-auto rounded float-start" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/daniel-lincoln-Ppz9LGGN8eE-unsplash.jpg" /></option>
            <option value="niño"><img width="50" height="100" class="img-fluid mx-auto rounded float-start" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/michael-rodichev-dcoFZiXEIxI-unsplash.jpg" /></option>
            <option value="niña"><img width="50" height="100" class="img-fluid mx-auto rounded float-start" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/taylor-hernandez-STiVSlutjt8-unsplash.jpg" /></option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>

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
      <form onSubmit={(e) => setColor(e.target.value)}>
        <label>
          elegir Color:
          <select value="azul">
            <option value="azul"><img width="50" height="100" class="img-fluid mx-auto rounded float-start" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/tyler-nix-Jg7UTkxTruQ-unsplash.jpg" /></option>
            <option value="blanco"><img width="50" height="100" class="img-fluid mx-auto rounded float-start" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/daniel-lincoln-Ppz9LGGN8eE-unsplash.jpg" /></option>
            <option value="marron"><img width="50" height="100" class="img-fluid mx-auto rounded float-start" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/michael-rodichev-dcoFZiXEIxI-unsplash.jpg" /></option>
            <option value="negro"><img width="50" height="100" class="img-fluid mx-auto rounded float-start" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/taylor-hernandez-STiVSlutjt8-unsplash.jpg" /></option>
            <option value="verde"><img width="50" height="100" class="img-fluid mx-auto rounded float-start" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/taylor-hernandez-STiVSlutjt8-unsplash.jpg" /></option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
      <br />

      <label htmlFor="">Añadir Estilo</label>
      <input type="text" onChange={(e) => setEstilo(e.target.value)} />
      <br />


      <button onClick={searchData}>Enviar</button>
      {dataLook != "" ? <div> Ha agregado {dataLook.tipo}
        correctamente a la bbdd  </div> : ""}
    </div>
  );
};

export default RecogidaLook;