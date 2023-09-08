import * as React from 'react';
import { View } from 'react-native';
import {Text,Button,Input,Header,Icon }from 'react-native-elements';


function  CadContato({ navigation }) {
    return (

        <>
        <View style={{ }}>

    <Header
        placement="center"
        leftComponent={  
            <Icon
            raised    
            name='chevron-back-circle'
            type='ionicon'
            color='#1E90FF'
            onPress={() => navigation.navigate('Contatos')} /> }
        centerComponent={{ text: 'Contato', style: { fontSize: 50 ,color: '#fff'} }}
        
    />  
    <View style={{ flex: 1 , alignItems: 'center', justifyContent: 'center' }}>
        
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

</View>
   <Button
        title= "Salvar"
        onPress={() => navigation.navigate('Login')}
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
   
        </View>
        </>
    );
}





export default CadContato;
