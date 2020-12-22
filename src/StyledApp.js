import styled from "styled-components";

export const Header = styled.div`
  border: solid;
  border-width: 1px;
  border-color: black;
  width: 500px;
  margin: 7.5px 15px;
`;
export const Logo = styled.img`
  height: 50px;
  width: 100px;
  margin: 5px;
`;
export const Card = styled.div`
  border-color: red;
  width: 200px;
  height: 100px;
  align-content: center;
`;
export const Button = styled.button`
  border: solid;
  border-radius: 3px;
  font-size: 10;
  background-color: ${(props) => (props.primary ? "blue" : "white")};
`;

export const Image = styled.img`
  width: 400px;
  height: 300px;
`;
