import React from 'react'
import { ScrollView,View,Button,Text } from 'react-native'


export const SideMenuScreen = () => {

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
        <View>
        <Text>
            SideMenu 
        </Text>

            <Button title="Button" onPress={()=> console.log('hi')}/>

        </View>
        </ScrollView>
    )
}