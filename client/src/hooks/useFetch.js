import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (props) => {

  const [data, setData] = useState("");

  useEffect(() => {
    if (data !== "") {
      searchData(props);
    }
  }, [data]);


  const searchData = (props) => {
    console.log(data);
    axios.post(`${props}`, data).then((res) => {
      localStorage.setItem("resultado", JSON.stringify(res.data));
      localStorage.setItem("contadorCambios", JSON.stringify(0))
      // saved tiene toda la información ya capada y random (3 de arriba, 2 de abajo y 1 zapato)
      const todoRandom = JSON.parse(localStorage.getItem("resultado"));
      console.log(todoRandom)
      window.location.href = "http://localhost:3000/resultadolook"

    });
  };



  return [data, setData]
};

export default useFetch;