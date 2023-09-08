import * as React from 'react';
import { useState,useEffect } from 'react';
import { View } from 'react-native';
import {Button,Header,Icon,Avatar,ListItem} from 'react-native-elements';


function  Contatos({ navigation }) {
    const list = [
        {
          name: 'Marcos Andrande',
          avatar_url: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',         
          subtitle: '81 988553424',
          email : 'MA@gmail.com'
          
        },
        {
          name: 'Patrícia Tavares',
          avatar_url: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
          subtitle: '81 998765332',
          email : 'PT@gmail.com'
        
        },
        {
            name: 'Rodrigo Antunes',
            avatar_url: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
            subtitle: '81 987765525',
            email : 'RA@gmail.com'
            
          },
       
      ]

         
 
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
                list.map((l, i) => (
                <ListItem key={i} bottomDivider onPress={() => navigation.navigate('AltContato' , {
                    nome:l.name,
                    telefone:l.subtitle,
                    email:l.email
                    
                })
                }>
                    
                    <Avatar source={{uri: l.avatar_url}} />
                    <ListItem.Content >
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                    </ListItem.Content >
                   
                    
                </ListItem>
                ))
            }
        </View>

        
        </>
    );
}





export default Contatos;