import * as React from 'react';
import { View } from 'react-native';
import { useState,useEffect } from 'react';
import {Icon,Text,Button,Input} from 'react-native-elements';
import axios from 'axios';
import  {  showMessage ,  hideMessage  } from "react-native-flash-message";




function  Login({ navigation }) {

    
   
    const [getEmail,setEmail]=useState([])
    const [getSenha,setSenha]=useState([])

    
            function logar(){

                axios.get('http://localhost:3000/usuario?email=' +getEmail + '&senha=' +getSenha)

                .then(function (response) {

                    if (response.data.length == 0 ){

                        showMessage ( { 
                            message : "Email ou Senha invalido verifique os dados!" , 
                            digite : "info" , 
                          } ) ; 
                       
                        //alert ("Email ou Senha invalido verifique os dados!");
                       

                    } else {
                        console.log("login e senha valido");
                        alert("Seja bem vindo");
                        navigation.navigate('Contatos');
                        
                    }
                   
                    })
                    .catch(function (error) {
                    console.log(error);
                    
                    });

            }
        
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

<Icon
        name='user'
        type='evilicon'
        size={190}
        alignItems='right' />
    <Text>Email
    </Text>
    <Input 
        containerStyle={{
            marginVertical: 15,
        }} 
        onChangeText={text => setEmail(text)}
        value={getEmail} />
    <Text>senha</Text>
    <Input 
        containerStyle={{
            marginVertical: 15,
        }} 
        onChangeText={text => setSenha(text)}
        value={getSenha} />
       
    <Button
        title= "Login"
        onPress={() => logar()}


        //onPress={() => navigation.navigate('Contatos')}
        buttonStyle={{
            backgroundColor: '#1E90FF',
            borderRadius: 5,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
        containerStyle={{
            width:300,
            paddingBottom:10
        }}
     
    />

    <Button
        title="Cadastre-se"
        onPress={() => navigation.navigate('CadUsuario')}
        buttonStyle={{
            backgroundColor: '#FF0000',
            borderRadius: 5,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
        containerStyle={{
            width:300
        }}
        
    />

   
        </View>
    );
}





export default Login;

