import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from "./screens/Home"
import  IniciarScreen  from "./screens/Iniciar"
import Login from "./screens/Login"
import CadUsuario from "./screens/CadastroUsuario"


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Home" component={HomeScreen} options={ {headerShown: false} }/>
        <Stack.Screen name="Home1" component={IniciarScreen} />
        <Stack.Screen name="Login" component={Login}options={ {headerShown: false} } />
        <Stack.Screen name="CadUsuario" component={CadUsuario}options={ {headerShown: false} } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;