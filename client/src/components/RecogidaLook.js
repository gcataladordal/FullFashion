import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { motion } from "framer-motion";
import { Checkbox, Row } from "antd";

const RecogidaLook = () => {
  const [target, setTarget] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [talla, setTalla] = useState("");
  const [color, setColor] = useState("");
  const [estilo, setEstilo] = useState("");

  const [data, setData] = useFetch("busquedalook");
  // console.log(color.indexOf(""));
  // console.log(color)

  const onChangeCheck = (checkedValues) => {
   setColor([...color,checkedValues]);
  console.log(checkedValues);
  };
console.log(color)

  const isDisabled = (id) => {
    return color.length > 1 && color.indexOf(id) === -1;
  };

  const searchData = () => {
   
    let datos = {
      target,
      altura,
      peso,
      talla,
      color: [],
      estilo,
    };

    setData(datos);
  };

  return (
    <div>
      {/* TIPO DE PERSONA */}
      <motion.div>
        <motion.input
          initial={{ y: -250, x: -75 }}
          animate={{ fontSize: 60, x: -75, y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          class="buttonFormLook"
          type="button"
          value="mujer"
          onClick={(e) => setTarget(e.target.value)}
        />

        <motion.input
          initial={{ y: -250, x: -25 }}
          transition={{ type: "spring", stiffness: 200 }}
          animate={{ fontSize: 60, x: -25, y: 0 }}
          whileHover={{ scale: 1.1 }}
          class="buttonFormLook"
          type="button"
          value="hombre"
          onClick={(e) => setTarget(e.target.value)}
        />

        <motion.input
          initial={{ y: -250, x: 25 }}
          transition={{ type: "spring", stiffness: 200 }}
          animate={{ fontSize: 60, x: 25, y: 0 }}
          whileHover={{ scale: 1.1 }}
          class="buttonFormLook"
          type="button"
          value="niña"
          onClick={(e) => setTarget(e.target.value)}
        />

        <motion.input
          initial={{ y: -250, x: 75 }}
          transition={{ type: "spring", stiffness: 200 }}
          animate={{ fontSize: 60, x: 75, y: 0 }}
          whileHover={{ scale: 1.1 }}
          class="buttonFormLook"
          type="button"
          value="niño"
          onClick={(e) => setTarget(e.target.value)}
        />
      </motion.div>
      {/* ALTURA Y PESO */}

      <motion.div
        initial={{ x: "75vw" }}
        animate={{ fontSize: 60, x: -50, y: 0 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
      >
        <br />
        <br />
        <label class="textAlturaPeso">Peso: &nbsp;</label>
        <motion.input
          class="textAlturaPeso"
          type="text"
          placeholder="Ej: 70kg"
          onChange={(e) => setAltura(e.target.value)}
        />
        <br />
        <br />
        <label class="textAlturaPeso">Altura: &nbsp;</label>
        <motion.input
          type="text"
          class="textAlturaPeso"
          placeholder="175 cm"
          onChange={(e) => setPeso(e.target.value)}
        />
      </motion.div>

      {/* TALLA */}

      <motion.div>
        <motion.input
          initial={{ x: "-100vw" }}
          animate={{ fontSize: 60, x: -75, y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          class="buttonFormLook"
          type="button"
          value="S"
          onClick={(e) => setTalla(e.target.value)}
        />

        <motion.input
          initial={{ x: "-100vw" }}
          animate={{ fontSize: 60, x: -25, y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          class="buttonFormLook"
          type="button"
          value="M"
          onClick={(e) => setTalla(e.target.value)}
        />

        <motion.input
          initial={{ x: "-100vw" }}
          animate={{ fontSize: 60, x: 25, y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          class="buttonFormLook"
          type="button"
          value="L"
          onClick={(e) => setTalla(e.target.value)}
        />

        <motion.input
          initial={{ x: "-100vw" }}
          animate={{ fontSize: 60, x: 75, y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          class="buttonFormLook"
          type="button"
          value="XL"
          onClick={(e) => setTalla(e.target.value)}
        />
      </motion.div>

      {/* COLORES */}
      <motion.div
        initial={{ y: "75vw", x: 0 }}
        animate={{ fontSize: 60, x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 155, delay: 0.5 }}
      >
        <Checkbox.Group style={{ width: "100%" }} onChange={(e)=>onChangeCheck(e)}>
          <Row>
            <Checkbox value="negro" disabled={isDisabled(target.value)}>
              &nbsp;NEGRO
            </Checkbox>
            &nbsp;&nbsp;&nbsp;
            <Checkbox value="azul" disabled={isDisabled(target.value)}>
              &nbsp;AZUL
            </Checkbox>
            &nbsp;&nbsp;&nbsp;
            <Checkbox value="verde" disabled={isDisabled(target.value)}>
              &nbsp; VERDE
            </Checkbox>
            &nbsp;&nbsp;&nbsp;
            <Checkbox value="blanco" disabled={isDisabled(target.value)}>
              &nbsp;BLANCO
            </Checkbox>
            &nbsp;&nbsp;&nbsp;
            <Checkbox value="marron"  disabled={isDisabled(target.value)}>
              &nbsp; MARRÓN
            </Checkbox>
          </Row>
        </Checkbox.Group>
      </motion.div>

      {/* <label htmlFor="">Añadir color</label>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <br /> */}

      {/* <checkbox onChange={(e) => setColor(e.target.value)}>
        <label>NEGRO</label>
        <input
          type="checkbox"
          value="negro"
          // disabled={(e) => isDisabled(e.target.value)}
        />

        <label>AZUL</label>
        <input
          type="checkbox"
          value="azul"
          // disabled={(e) => isDisabled(e.target.value)}
        />

        <label>VERDE</label>
        <input
          type="checkbox"
          value="verde"
          // disabled={(e) => isDisabled(e.target.value)}
        />

        <label>BLANCO</label>
        <input
          type="checkbox"
          value="blanco"
          // disabled={(e) => isDisabled(e.target.value)}
        />

        <label>MARRON</label>
        <input
          type="checkbox"
          value="marron"
          // disabled={(e) => isDisabled(e.target.value)}
        />
      </checkbox> */}

     

      {/* ESTILOS  */}

      <motion.div>
        <motion.input
          initial={{ x: "-100vw" }}
          animate={{ fontSize: 60, x: -25, y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          class="buttonFormLook"
          type="button"
          value="classic"
          onClick={(e) => setEstilo(e.target.value)}
        />

        <motion.input
          initial={{ x: "-100vw" }}
          animate={{ fontSize: 60, x: -25, y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          class="buttonFormLook"
          type="button"
          value="sport"
          onClick={(e) => setEstilo(e.target.value)}
        />

        <motion.input
          initial={{ x: "-100vw" }}
          animate={{ fontSize: 60, x: -25, y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          class="buttonFormLook"
          type="button"
          value="fashion"
          onClick={(e) => setEstilo(e.target.value)}
        />

        <motion.input
          initial={{ x: "-100vw" }}
          animate={{ fontSize: 60, x: -25, y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          class="buttonFormLook"
          type="button"
          value="casual"
          onClick={(e) => setEstilo(e.target.value)}
        />
      </motion.div>

      <button onClick={searchData}>Enviar</button>
      {data !== "" ? <div> Se ha recogido los datos de la bbdd </div> : ""}
    </div>
  );
};

export default RecogidaLook;
