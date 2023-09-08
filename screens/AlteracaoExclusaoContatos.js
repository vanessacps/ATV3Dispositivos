import * as React from 'react';
import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text, Button, Input, Header, Icon } from 'react-native-elements';



function AltContato({ navigation,route }) {

    const [nome, setNome] = useState();
    const [telefone , setTelefone] = useState();
    const [email, setEmail] = useState();
    useEffect(() => {
        if (route.params) {
            const { nome } = route.params
            setNome(nome)
            const { telefone } = route.params
            setTelefone(telefone)
            const { email } = route.params
            setEmail(email)
        }
    }, [])


    return (
        <View style={{ flex: 1 }}>

            <Header
                placement="center"
                leftComponent={
                    <Icon
                        raised
                        name='chevron-back-circle'
                        type='ionicon'
                        color='#1E90FF'
                        onPress={() => navigation.navigate('Contatos')} />}
                centerComponent={{ text: 'Contato', style: { fontSize: 50, color: '#fff' } }}

            />

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text>nome</Text>
                <Input
                    value= {nome}
                    containerStyle={{
                        marginVertical: 15,
                    }} />
                <Text>email</Text>
                <Input
                    value={email}
                    containerStyle={{
                        marginVertical: 15,
                    }} />
                <Text>Telefone</Text>
                <Input
                    value={telefone}
                    containerStyle={{
                        marginVertical: 15,
                    }} />

            </View>


            <Button
                title="Alterar"
                //onPress={() => navigation.navigate('Login')}
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
            <Button
                title="Excluir"
                //onPress={() => navigation.navigate('CadUsuario')}
                buttonStyle={{
                    backgroundColor: '#FF0000',
                    borderRadius: 5,
                }}
                titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
                containerStyle={{
                    marginHorizontal: 75,
                    height: 50,
                    marginVertical: 10,
                }}

            />

        </View>
    );
}





export default AltContato;
