// import React from "react";
// import { useState } from "react";

// // let user = {
// //   id_usuario: "1",
// //   nombre: "Jorge",
// //   apellidos: "Sánchez Cuesta",
// //   email: "coke_vader@hotmail.com",
// //   dni: "51083782T",
// //   direccion: "C/ Sol 5",
// //   cp: "28055",
// //   poblacion: "Madrid",
// //   talla: "L",
// //   target: "Hombre",
// //   color: ["Negro", "Azul"],
// //   estilo: "Casual",
// //   admin: false,
// // };
// // localStorage.setItem("user", JSON.stringify(user));
// var datosUser = JSON.parse(localStorage.getItem("user"));
// var direccion = datosUser.direccion;

// function DatosCompraLogueado() {
//   const [direcciones, setDirecciones] = useState("");

//   const isDisabled = (id) => {
//     return setDirecciones.indexOf(id) === -1;
//   };

//   const addDirection = () => {
//     console.log(direcciones);
//     // setData(datos);
//   };
//   return (
//     <div>
//       <h3>Verifica su dirección</h3>

//       {/* <checkbox onChange={(e) => onChangeCheck(e)}> */}
//       <label>Misma dirección</label>
//       <input
//         type="checkbox"
//         value={direccion}
//         onChange={(e) => setDirecciones(e.target.value)}
//         //    disabled={isDisabled({direccion})}
//       ></input>
//       <br></br>

//       <label>Nueva dirección</label>
//       <input
//         type="text"
//         onChange={(e) => setDirecciones(e.target.value)}
//         //   disabled={isDisabled()}
//       ></input>
//       <br></br>

//       <br></br>
//       <button onClick={addDirection}>Enviar</button>
//       {/* </checkbox> */}
//     </div>
//   );
// }
// export default DatosCompraLogueado;
