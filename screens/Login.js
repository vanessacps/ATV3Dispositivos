import * as React from 'react';
import { View } from 'react-native';
import {Icon,Text,Button,Input} from 'react-native-elements';


function  Login({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

<Icon
        name='user'
        type='evilicon'
        size={190}
        alignItems='right' />
    <Text>login
    </Text>
    <Input 
        containerStyle={{
            marginVertical: 15,
        }} />
    <Text>senha</Text>
    <Input 
        containerStyle={{
            marginVertical: 15,
        }} />
       
    <Button
        title= "Login"
        onPress={() => navigation.navigate('Contatos')}
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

