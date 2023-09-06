import * as React from 'react';
import { View } from 'react-native';
import {Button,Header,Icon,Avatar,ListItem} from 'react-native-elements';


function  Contatos({ navigation }) {
    const list = [
        {
          name: 'Marcos Andrande',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',         
          subtitle: '81 988553424'
        },
        {
          name: 'Patrícia Tavares',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: '81 998765332'
        },
        {
            name: 'Rodrigo Antunes',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: '81 987765525'
          },
       
      ]

         
 
    return (

        <>
        <View style={{ alignItems: 'center' }}>

    <Header
        placement="center"
        centerComponent={{ text: 'Lista de Contatos', style: { fontSize: '25' ,color: '#fff'} }}
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
                <ListItem key={i} bottomDivider>
                    
                    <Avatar source={{uri: l.avatar_url}} />
                    <ListItem.Content >
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                    </ListItem.Content >
                    <Button onPress={() => navigation.navigate('AltContato')}/>
                    
                </ListItem>
                ))
            }
        </View>

        
        </>
    );
}





export default Contatos;