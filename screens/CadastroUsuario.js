import * as React from 'react';
import { View } from 'react-native';
import {Text,Button,Input,Header,Icon }from 'react-native-elements';
import { useEffect,useState } from 'react'
import axios from 'axios';


function  CadUsuario({ navigation }) {

    const [getNome,setNome] = useState();
    const [getEmail,setEmail]= useState();
    const[getCpf,setCpf]= useState();
    const[getSenha,setSenha] = useState();

    function inserirDados(){

        axios.post('http://localhost:3000/usuario'
        , {
        
        nome: getNome,
        cpf: getCpf,
        email: getEmail,
        senha: getSenha,
       
        }).then(function (response) {
        alert ("Usuario cadastrado com sucesso")
        navigation.navigate('Login')(response);
        }).catch(function (error) {
        console.log(error);
        
        });
        
        }





    return (
        <>
        <View style={{ flex: 1 }}>
    
    

    <Header  
        placement="center"                
        leftComponent={  
            <Icon
            raised    
            name='chevron-back-circle'
            type='ionicon'
            color='#1E90FF'
            onPress={() => navigation.navigate('Login')} /> }
        centerComponent={{ text: 'Usuário', style: { fontSize: 50 ,color: '#fff'} }}
       
            
    />  
     <View style={{ flex: 1 , alignItems: 'center', justifyContent: 'center' }}>
        
    <Text>nome</Text>
    <Input 
        containerStyle={{
            marginVertical: 15,
        }} 
        onChangeText={text => setNome(text)}
            value={getNome} />
    <Text>cpf</Text>
    <Input 
        containerStyle={{
            marginVertical: 15,
        }} 
        onChangeText={text => setCpf(text)}
            value={getCpf}/>  
    <Text>email</Text>
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
            value={getSenha}/>

</View>
   <Button
        title= "Salvar"
        onPress={() => inserirDados()}
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





export default CadUsuario;
