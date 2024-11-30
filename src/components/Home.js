import React from "react";

const Home = ({ navigateToLogin }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>He creado algo especial para ti 💖</h1>
      <p>Haz clic en el botón para descubrirlo:</p>
      <button onClick={navigateToLogin}>Descubrir</button>
    </div>
  );
};

export default Home;
