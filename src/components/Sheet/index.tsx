import { View } from 'react-native';
import Attributes from '../Attributes'
import { SheetContainer } from "./styles";

export default function Sheet() {
  return (
    <View>
      <SheetContainer>
        <Attributes/>
      </SheetContainer>
    </View>
  );
}
