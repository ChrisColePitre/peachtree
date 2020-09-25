import React from "react";
import headerPic from "./peachTreeGallHeader.png";

const handleClick = () => {
  alert("HEY");
};
function App() {
  return (
    <div style={{ width: "200px", heigh: "100px", alignContent: "center" }}>
      <img src={headerPic} alt={"Oopsies..."} style={{ width: "200px" }} />
      <button
        onClick={handleClick}
        style={{
          alignContent: "center",
          backgroundColor: "grey",
          fontSize: 10,
        }}
      >
        Click To Give Me Your Hair
      </button>
    </div>
  );
}

export default App;
