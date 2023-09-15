import * as React from 'react';
import { useState,useEffect } from 'react';
import { View } from 'react-native';
import {Button,Header,Icon,Avatar,ListItem} from 'react-native-elements';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';


function  Contatos({ navigation }) {
    const  [contact,setContato] = useState([])
    const isFocused = useIsFocused()

      useEffect(() => {
        consultarDados()
        function consultarDados(){

            axios.get('http://localhost:3000/contato')
            
            .then(function (response) {
            setContato(response.data);
            }).catch(function (error) {
            console.log(error);
            
            });
            
            
        }
    }, [isFocused])

         
 
    return (

        <>
        <View style={{ }}>

    <Header
        placement="center"
        centerComponent={{ text: 'Lista de Contatos', style: { fontSize: 30 ,color: '#fff'} }}
        rightComponent={ 
        <Icon
            raised    
            name='add'
            type='ionicon'
            color='#1E90FF'
            onPress={() => navigation.navigate('CadContato')} /> }
              /> 


    
     
        </View>
        <View>
            
            {
                contact.map((l, i) => (
                <ListItem key={i} bottomDivider onPress={() => navigation.navigate('AltContato' , {
                    nome:l.nome,
                    telefone:l.telefone,
                    email:l.email
                    
                })
                }>
                    
                    <Avatar source={{uri: l.avatar_url}} />
                    <ListItem.Content >
                    <ListItem.Title>{l.nome}</ListItem.Title>
                    <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
                    </ListItem.Content >
                   
                    
                </ListItem>
                ))
            }
        </View>

        
        </>
    );
}





export default Contatos;