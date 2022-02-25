import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import ResultadoLook from "../pages/ResultadoLook";
import { motion } from "framer-motion";
import { Checkbox, Row } from "antd";

const RecogidaLook = () => {
  const [target, setTarget] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [talla, setTalla] = useState("");
  const [color, setColor] = useState("");
  const [estilo, setEstilo] = useState("");
  const [quien, setQuien] = useState("");

  const [data, setData] = useFetch("busquedalook");

  const onChangeCheck = (checkedValues) => {
    setColor(checkedValues);
  };

  const isDisabled = (id) => {
    return color.length > 1 && color.indexOf(id) === -1;
  };

  const searchData = () => {
    let datos = {
      target,
      altura,
      peso,
      talla,
      color,
      estilo,
    };
    console.log(datos);
    setData(datos);
  };

  return (
    <div>
       <br /> <br />
      {/* ELEGIR DSTINATARIO DE LA COLLECIÓN */}
      <div>
        <input
          type="button"
          className="buttonFormLook"
          value="PARA MI"
          onClick={() => {
            setQuien("myself");
            console.log("Click para mi");
          }}
        />
        <input
          type="button"
          className="buttonFormLook"
          value="PARA REGALO"
          onClick={() => {
            setQuien("regalo");
            console.log("Click Regalo");
          }}
        />
        <br />
      </div>
      <br />
      <div>
        <label>Correo del amigo/a del Regalo</label> &nbsp;&nbsp;
        <input
          type="text"
          className=""
          placeHolder="correo@xmail.com"
          onClick={() => {
            console.log(quien);
          }}
        />
        <br />
        <br />
        <input
          type="button"
          className="buttonFormLook"
          value="Siguiente"
          onClick={() => {
            console.log(quien);
          }}
        />
      </div>

      {/* TIPO DE PERSONA */}
      <motion.div
        initial={{ y: -250, x: -75 }}
        animate={{ fontSize: 60, x: -75, y: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <h2>Tu Perfil</h2>
        <input
          type="image"
          className="persona"
          width="15%"
          height="30%"
          src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/muher.jpg"
          value="mujer"
          onClick={(e) => setTarget(e.target.value)}
        ></input>
        &nbsp;&nbsp; &nbsp;&nbsp;
        <input
          type="image"
          className="persona"
          width="15%"
          height="30%"
          src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/niño.jpg"
          value="niño"
          onClick={(e) => setTarget(e.target.value)}
        />
        &nbsp;&nbsp; &nbsp;&nbsp;
        <input
          type="image"
          className="persona"
          width="15%"
          height="30%"
          src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/niña.jpg"
          value="niña"
          onClick={(e) => setTarget(e.target.value)}
        />
        &nbsp;&nbsp; &nbsp;&nbsp;
        <input
          type="image"
          className="persona"
          width="15%"
          height="30%"
          src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/hombre.jpg"
          value="hombre"
          onClick={(e) => console.log(e.target.value)}
        />
      </motion.div>
      <br />
      {/* ALTURA Y PESO */}

      <motion.div
        initial={{ x: "75vw" }}
        animate={{ fontSize: 60, x: -50, y: 0 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
      >
        <br />
        <br />
        <label className="textAlturaPeso">Peso: &nbsp;</label>
        <motion.input
          className="textAlturaPeso"
          type="text"
          placeholder="Ej: 70kg"
          onChange={(e) => setAltura(e.target.value)}
        />
        <br />
        <br />
        <label className="textAlturaPeso">Altura: &nbsp;</label>
        <motion.input
          type="text"
          className="textAlturaPeso"
          placeholder="175 cm"
          onChange={(e) => setPeso(e.target.value)}
        />
      </motion.div>
      <br /><br />
      {/* TALLA */}

      <motion.div>
        <motion.input
          initial={{ x: "-100vw" }}
          animate={{ fontSize: 60, x: -75, y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          className="buttonFormLook"
          type="button"
          value="S"
          onClick={(e) => setTalla(e.target.value)}
        />

        <motion.input
          initial={{ x: "-100vw" }}
          animate={{ fontSize: 60, x: -25, y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          className="buttonFormLook"
          type="button"
          value="M"
          onClick={(e) => setTalla(e.target.value)}
        />

        <motion.input
          initial={{ x: "-100vw" }}
          animate={{ fontSize: 60, x: 25, y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          className="buttonFormLook"
          type="button"
          value="L"
          onClick={(e) => setTalla(e.target.value)}
        />

        <motion.input
          initial={{ x: "-100vw" }}
          animate={{ fontSize: 60, x: 75, y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          className="buttonFormLook"
          type="button"
          value="XL"
          onClick={(e) => setTalla(e.target.value)}
        />
      </motion.div>
      <br /> <br />
      {/* COLORES */}
      <motion.div
        initial={{ y: "75vw", x: 0 }}
        animate={{ fontSize: 60, x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 155, delay: 0.5 }}
      >
        <h2>Elige uno o dos colores</h2>
        <Checkbox.Group onChange={(e) => onChangeCheck(e)}>
          <Checkbox
            className="color"
            value="negro"
            id="negro"
            disabled={isDisabled("negro")}
          >
            <img
              width="10%"
              height="5%"
              src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/black.jpg"
            ></img>
          </Checkbox>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <Checkbox
            className="color"
            value="azul"
            id="azul"
            disabled={isDisabled("azul")}
          >
            <img
              width="10%"
              height="5%"
              src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/bluelight.jpg"
            ></img>
          </Checkbox>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <Checkbox
            className="color"
            value="verde"
            id="verde"
            disabled={isDisabled("verde")}
          >
            <img
              width="10%"
              height="5%"
              src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/green.jpg"
            ></img>
          </Checkbox>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <Checkbox
            className="color"
            value="blanco"
            id="blanco"
            disabled={isDisabled("blanco")}
          >
            <img
              width="10%"
              height="5%"
              src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/white.jpg"
            ></img>
          </Checkbox>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <Checkbox
            className="color"
            value="marron"
            id="marron"
            disabled={isDisabled("marron")}
          >
            <img
              width="10%"
              height="5%"
              src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/brown.jpg"
            ></img>
          </Checkbox>
        </Checkbox.Group>
      </motion.div>
      <br /> <br />
      {/* ESTILOS  */}
      <motion.div
        initial={{ y: "-80vw", x: 0 }}
        animate={{ fontSize: 60, x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 155, delay: 0.5 }}
      >
        <h2>Qué imagen define mejor tu estilo</h2>
        <input
          type="image"
          className="persona"
          width="15%"
          height="30%"
          src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/classic.jpg"
          value="classic"
          onClick={(e) => setEstilo(e.target.value)}
        />
        &nbsp;&nbsp; &nbsp;&nbsp;
        <input
          type="image"
          className="persona"
          width="15%"
          height="30%"
          src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/sport.jpg"
          value="sport"
          onClick={(e) => setEstilo(e.target.value)}
        />
        &nbsp;&nbsp; &nbsp;&nbsp;
        <input
          type="image"
          className="persona"
          width="15%"
          height="30%"
          src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/fashion.jpg"
          value="fashion"
          onClick={(e) => setEstilo(e.target.value)}
        />
        &nbsp;&nbsp; &nbsp;&nbsp;
        <input
          type="image"
          className="persona"
          width="15%"
          height="30%"
          src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/casual2.jpg"
          value="casual"
          onClick={(e) => setEstilo(e.target.value)}
        />
      </motion.div>
      <br />
      <button className="buttonFormLook" onClick={searchData}>Enviar</button>

      {data !== "" ? <div> Se ha recogido los datos de la bbdd </div> : ""}
    </div>
  );
};

export default RecogidaLook;
