import React from "react";
import headerPic from "./peachTreeGallHeader.png";
import * as S from "./StyledApp";
// import Photo from "../features/photos/photo";
import ItemsList from "./features/items/itemList"
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
