import * as React from 'react';
import { View } from 'react-native';
import {Text,Button,Input,Header,Icon }from 'react-native-elements';


function  AltContato({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>

    <Header
        placement="center"
        leftComponent={  
            <Icon
            raised    
            name='chevron-back-circle'
            type='ionicon'
            color='#1E90FF'
            onPress={() => navigation.navigate('Contatos')} /> }
        centerComponent={{ text: 'Contato', style: { fontSize: '25' ,color: '#fff'} }}
        
    />  
        
    <Text>nome</Text>
    <Input 
        containerStyle={{
            marginVertical: 15,
        }} />
    <Text>email</Text>
    <Input 
        containerStyle={{
            marginVertical: 15,
        }} />
    <Text>Telefone</Text>
    <Input 
        containerStyle={{
            marginVertical: 15,
        }} />
   
     
      <Button
        title= " Alterar                        "
        //onPress={() => navigation.navigate('Login')}
        buttonStyle={{
            backgroundColor: '#1E90FF',
            borderRadius: 5,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
        containerStyle={{
            marginHorizontal: 75,
            height: 50,
            marginVertical: 15,
        }}
     
    />
    <Button
        title="  Excluir                      "
        //onPress={() => navigation.navigate('CadUsuario')}
        buttonStyle={{
            backgroundColor: '#FF0000',
            borderRadius: 5,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
        containerStyle={{
            marginHorizontal: 75,
            height: 50,
            marginVertical: 10,
        }}
        
    />
   
        </View>
    );
}





export default AltContato;
