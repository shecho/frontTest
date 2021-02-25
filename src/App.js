import React, { useEffect, useState } from "react";

import "./App.css";

const App = () => {
  const [respuesta, setRespuesta] = useState({});

  useEffect(() => {
    saludo();
  }, []);

  const saludo = async () => {
    let url = "http://127.0.0.1:8000/testing/";
    let response = await fetch(url);
    let res = await response.json();
    console.log(res)
    setRespuesta(res);
  };
  

  return (
    <div className="App">
      {respuesta.message}
     
    </div>
  );
};
export default App;
