import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';





function IniciarScreen({navigation}) {
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>Iniciar Screen</Text>
  <Button 
title='Voltar'
onPress={()=>navigation.navigate('Home')}
/>
  </View>
  );
  }




export default IniciarScreen;