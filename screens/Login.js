import * as React from 'react';
import { View } from 'react-native';
import {Icon,Text,Button,Input} from 'react-native-elements';


function  Login({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

<Icon
        name='user'
        type='evilicon'
        size={150}
        color='#517fa4' />
    <Text>login</Text>
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
        title="Login"
        onPress={() => navigation.navigate('Contatos')}
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{
            backgroundColor: 'blue',
            borderRadius: 5,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
        containerStyle={{
            marginHorizontal: 75,
            height: 50,
            marginVertical: 15,
        }}


       
    />
    <Button
        title="Cadastre-se"
        onPress={() => navigation.navigate('CadUsuario')}
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{
            backgroundColor: 'red',
            borderRadius: 5,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
        containerStyle={{
            marginHorizontal: 75,
            height: 50,
            marginVertical: 10,
        }}
        
    />
        </View>
    );
}





export default Login;

