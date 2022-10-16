import { AttributeContainer, 
         AttributeChart, 
         ValuesContainer, 
         AttributeValuesRow1, 
         AttributeValuesRow2,
         AttributeValuesRow3,
         Agi,
         ForInt,
         PreVig } from "./styles";
import attributeChart from "../../assets/images/attributes.png";

export default function Attributes() {
  return (
    <AttributeContainer>
      <AttributeChart src={attributeChart} />
      <ValuesContainer>
        <AttributeValuesRow1>
          <Agi>6</Agi>
        </AttributeValuesRow1>
        <AttributeValuesRow2>
          <ForInt>2</ForInt>
          <ForInt>3</ForInt>
        </AttributeValuesRow2>
        <AttributeValuesRow3>
          <PreVig>4</PreVig>
          <PreVig>5</PreVig>
        </AttributeValuesRow3>
      </ValuesContainer>
    </AttributeContainer>
  );
}
