import React from 'react';
import {Text,View,Button} from 'react-native';
import {Navigation} from 'react-native-navigation'

class HomeScreen extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <View>
                <Text>
                    Home New update
                </Text>
                {/* <Button title="Push to cart" onPress={() => {
                    Navigation.push(this.props.componentId, {
                        component: {
                            name: 'Cart',
                        },
                    });
                }}
                 /> */}
            </View>
        );
    }
}

export default HomeScreen;