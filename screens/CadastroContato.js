import * as React from 'react';
import { View } from 'react-native';
import {Text,Button,Input,Header,Icon,ListItem }from 'react-native-elements';
import { useEffect,useState } from 'react';
import axios from 'axios';




function  CadContato({ navigation }) {

const [getNome,setNome] = useState();
const [getTelefone,setTelefone] = useState();
const [getEmail,setEmail] = useState();


    function inserirDados(){

        axios.post('http://localhost:3000/contato'
        , {
        
        nome: getNome,
        telefone: getTelefone,
        email: getEmail,
        avatar_url: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
        }).then(function (response) {
        alert ("Cadastro cadastrado com sucesso")
        navigation.navigate('Contatos')(response);
        }).catch(function (error) {
        console.log(error);
        
        });
        
        }
        



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
        }}
        onChangeText={text => setNome(text)}
            value={getNome} />  
    <Text>email</Text>
    <Input 
        containerStyle={{
            marginVertical: 15,
        }} 
        onChangeText={text => setEmail(text)}
            value={getEmail}/>
    <Text>Telefone</Text>
    <Input 
        containerStyle={{
            marginVertical: 15,
        }} 
        onChangeText={text => setTelefone(text)}
            value={getTelefone}/>

</View>
   <Button
        title= "Salvar"
        onPress={() => inserirDados() }
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
