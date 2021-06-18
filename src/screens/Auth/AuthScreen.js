import React from 'react'
import { Text, View, TextInput, Button, SafeAreaView, StyleSheet} from 'react-native'
import {loginUser} from '../../modules/auth/actions'
import {useDispatch} from 'react-redux'

function onChangeText(text){
    console.log(text);
}

const LoginScreen =(props)=>{

const dispatch = useDispatch();
    return (
        <SafeAreaView>
            <View style={styles.container} >
        <TextInput

        placeholder="Enter Email or Phone"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1,marginBottom:30 }}
                onChangeText={text => onChangeText(text)}
                // value={value}
        />
        <Button 
        
                onPress={()=> dispatch(loginUser)}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            
        />

            </View>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        marginTop:200,
        marginHorizontal: 55,
    },
    button:{
        borderRadius:100,
        marginTop:90,
    }
    
});

export default LoginScreen;