import { Text, TextInput, View, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";

import SplashScreen from "./src/assets/screens/SplashScreen";
function App() {
  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <View style={styles.container}>
        <SplashScreen />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({

  container: { 
    display:'flex',
    flex: 1,
  }
})
export default App;