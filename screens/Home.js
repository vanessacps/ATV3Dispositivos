import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';



function  HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text>Home Screen</Text>
            <Button
                title='Começar'
                onPress={() => navigation.navigate('Home1')}
            />
        </View>
    );
}





export default HomeScreen;


