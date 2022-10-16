import styled from "styled-components";

export const AttributeContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
  display: flex;
  justify-content: center;
  height: 44vh;
`;

export const AttributeChart = styled.img`
  width: 40vh;
  padding: 2vh;
  z-index: 0;
  position: absolute;
`;

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AttributeValuesRow1 = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: row;
`;

export const AttributeValuesRow2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  flex-direction: row;
  width: 28vh;
`;

export const AttributeValuesRow3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  flex-direction: row;
  width: 21vh;
`;

export const Agi = styled.h1`
  z-index: 1;
  color: white;
  margin: 6.5vh 0 0 0;
  font-size: 5vh;
  font-family: 'Special Elite', sans-serif;
`;


export const ForInt = styled.h1`
  z-index: 1;
  color: white;
  margin: 3vh 0 0 0;
  font-size: 5vh;
  font-family: 'Special Elite', sans-serif;
`;

export const PreVig = styled.h1`
  z-index: 1;
  color: white;
  margin: 10vh 0 0 0;
  font-size: 5vh;
  font-family: 'Special Elite', sans-serif;
`;