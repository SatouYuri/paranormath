import { View } from 'react-native';
import { WebView } from 'react-native-webview';

/*
PAROU AQUI 17/10/2022 21:21
Uma vez que o app web em react estiver pronto, basta subí-lo em algum servidor online e colocar o endereço no lugar deste aqui em baixo.
Use o comando "eas build -p android --profile preview" para compilar um apk no cloud da plataforma Expo.
React Native é horrível, puta merda. Parece que, em comparação com codar app web, eu tô amarrado sem perna nem braço, com uma maçã na boca tentando atirar de SMG com a orelha.
*/
export default function App() {
  return (
    <>
      <View></View>
      <WebView source={{ uri: "https://fichasop.com/" }}/> 
    </>
  );
}

