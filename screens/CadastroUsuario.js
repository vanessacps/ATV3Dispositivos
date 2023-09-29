import * as React from 'react';
import { View } from 'react-native';
import {Text,Button,Input,Header,Icon }from 'react-native-elements';
import { useEffect,useState } from 'react'
import axios from 'axios';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function  CadUsuario({ navigation }) {

   // const [getNome,setNome] = useState();
    const [email,setEmail]= useState();
    //const[getCpf,setCpf]= useState();
    const[senha,setSenha] = useState();

    const firebaseConfig = {
        apiKey: "AIzaSyCrXgC_8G2nAGQXerfjjdoq2tlYNeJCvG8",
        authDomain: "logindm-3e012.firebaseapp.com",
        projectId: "logindm-3e012",
        storageBucket: "logindm-3e012.appspot.com",
        messagingSenderId: "793524213954",
        appId: "1:793524213954:web:f105fbb1f411255b30035b",
        measurementId: "G-RCY0H5G7VT"
      };

      const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

      const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
// Signed in
    const user = userCredential.user;
// ...
})
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
// ..
});

      


    function inserirDados(){

        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
    // Signed in
        const user = userCredential.user;
    // ...
    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    // ..
    });

}

     /*    axios.post('http://localhost:3000/usuario'
        , {
        
        //nome: getNome,
       // cpf: getCpf,
        email: email,
        senha: senha,
       
        }).then(function (response) {
        alert ("Usuario cadastrado com sucesso")
        navigation.navigate('Login')(response);
        }).catch(function (error) {
        console.log(error);
        
        });
        
        }
 */




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
        
    {/* <Text>nome</Text>
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
            value={getCpf}/>   */}
    <Text>email</Text>
    <Input 
        containerStyle={{
            marginVertical: 15,
        }}
        onChangeText={text => setEmail(text)}
            value={email} />
    <Text>senha</Text>
    <Input 
        containerStyle={{
            marginVertical: 15,
        }} 
        onChangeText={text => setSenha(text)}
            value={senha}/>

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
