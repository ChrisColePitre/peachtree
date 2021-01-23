import React from "react";
import headerPic from "../header.png";
import * as S from "../styling";
// import Photo from "../features/photos/photo";
import ItemsList from "../features/items/list"
// const handleClick = () => {
//   alert("*Fart Noise*");
// };
function App() {
  return (
    <>
      <S.Header>
        <S.Logo src={headerPic} alt={"Oopsies..."} />
      </S.Header>

      <S.Card>
        {/* <S.Button onClick={handleClick} primary>
          Pull My Finger
        </S.Button> */}
        <ItemsList />
      </S.Card>
      {/* <Photo /> */}
    </>
  );
}

export default App;

