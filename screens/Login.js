import * as React from 'react';
import { View } from 'react-native';
import { useState,useEffect } from 'react';
import {Icon,Text,Button,Input} from 'react-native-elements';
import axios from 'axios';
import  {  showMessage ,  hideMessage  } from "react-native-flash-message";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup  } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";





function  Login({ navigation }) {

    
    
   
    const [email,setEmail]=useState([])
    const [senha,setSenha]=useState([])

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

    
            function logar(){

                signInWithEmailAndPassword(auth, email , senha)
                .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert("Seja bem vindo");
                navigation.navigate('Contatos');
                })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                message : "Email ou Senha invalido verifique os dados!" 
               
                });



               
            }

            function logarGoogle(){
                const provider = new GoogleAuthProvider();
                signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;

                    // The signed-in user info.
                    const user = result.user;
                   
                    navigation.navigate('Contatos');
                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    message : "Email ou Senha invalido verifique os dados!" 
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                });

            }
/* 
                axios.get('http://localhost:3000/usuario?email=' +email + '&senha=' +senha)

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

            } */
        
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
        value={email} />
    <Text>senha</Text>
    <Input 
        containerStyle={{
            marginVertical: 15,
        }} 
        onChangeText={text => setSenha(text)}
        value={senha} />
       
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

            <Icon
            raised    
            name='g-translate'
            //type='evilicon'
            color='#00aced'
            
            onPress={() =>logarGoogle()} /> 
              


   
        </View>
    );
}





export default Login;

