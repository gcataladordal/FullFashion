import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (props) => {

  const [data, setData] = useState("");


  useEffect(() => {
    if (data != "") {
      searchData(props);
    }
  }, [data]);

  const searchData = (props) => {
    console.log("Pulsa el boton buscar");
    console.log(data);
    axios.post(`${props}`, data).then((res) => {
      localStorage.setItem("resultado", JSON.stringify(res.data));
      const saved = JSON.parse(localStorage.getItem("resultado"));

      // voy por aquí
      console.log(saved.partesDeArriba[0])
      console.log(saved.partesDeArriba[0].color)
    });
  };

  return [data, setData]
};

export default useFetch;