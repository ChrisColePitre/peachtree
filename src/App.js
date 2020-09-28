import React from "react";
import headerPic from "./peachTreeGallHeader.png";
import * as S from "./StyledApp";

const handleClick = () => {
  alert("*Fart Noise*");
};
function App() {
  return (
    <>
      <S.Header>
        <S.Logo src={headerPic} alt={"Oopsies..."} />
      </S.Header>
      <S.Card>
        <S.Button onClick={handleClick}>Pull My Finger</S.Button>
      </S.Card>
    </>
  );
}

export default App;
