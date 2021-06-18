import React from 'react'
import {Text, View,StyleSheet} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { doneGettingStarted } from '../../modules/common/actions';
import { homeRoutes } from '../../navigation/routes';
import {useDispatch} from 'react-redux'


const styles = StyleSheet.create({
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


const slides = [
    {
        key: 'one',
        title: 'Title 1 jhjhhj',
        text: 'Description.\nSay something cool',
        // image: require('./assets/1.jpg'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 'two',
        title: 'Title 2',
        text: 'Other cool stuff',
        // image: require('./assets/2.jpg'),
        backgroundColor: '#febe29',
    },
    {
        key: 'three',
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        // image: require('./assets/3.jpg'),
        backgroundColor: '#22bcb5',
    }
];

const _renderItem = ({ item }) => {
    return (
        <View>
            <Text >{item.title}</Text>
            <Text >{item.text}</Text>
        </View>
    );
}
const _renderNextButton = () => {
    return (
        <View>
            <Text>
                NEXT
            </Text>
        </View>
    )
}
const _renderDoneButton = () => {
    return (
        <View>
            <Text>
                DONE
            </Text>
        </View>
    )
}
const GettingStartedScreen= ({callBack,config}) =>{


    const dispatch = useDispatch();

    const _onDone= () => {
        dispatch(doneGettingStarted());
        callBack(config);
    }

        return (
            <AppIntroSlider
                data={slides}
                renderDoneButton={_renderDoneButton}
                renderNextButton={_renderNextButton}
                renderItem={_renderItem}
                onDone={_onDone}
            />
        );
     
}

export default GettingStartedScreen; 