import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login"
import CadUsuario from "./screens/CadastroUsuario"
import Contatos from './screens/Contatos';
import AltContato from './screens/AlteracaoExclusaoContatos';
import CadContato from './screens/CadastroContato';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login}options={ {headerShown: false} } />
        <Stack.Screen name="CadUsuario" component={CadUsuario}options={ {headerShown: false} } />
        <Stack.Screen name="Contatos" component={Contatos}options={ {headerShown: false} } />
        <Stack.Screen name="AltContato" component={AltContato}options={{headerShown: false}}/>
        <Stack.Screen name="CadContato" component={CadContato}options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;