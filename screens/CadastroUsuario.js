import * as React from 'react';
import { View } from 'react-native';
import {Icon,Text,Button,Input,leftComponent,centerComponent,rightComponent} from 'react-native-elements';


function  CadUsuario({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Header
        leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
            />




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
        onPress={() => navigation.navigate('CadastroUsuario')}
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





export default CadUsuario;
