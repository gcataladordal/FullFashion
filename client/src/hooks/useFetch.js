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
    console.log("Pulsa el boton buscar");
    console.log(data);
    axios.post(`${props}`, data).then((res) => console.log(res.data));
  };

  return [data,setData]
};

export default useFetch;