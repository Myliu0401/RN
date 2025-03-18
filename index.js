import React, { useState } from 'react';
import { Animated, Text, View, StyleSheet, Button, Easing } from 'react-native';

const App = ()=>{
    const [fadeInValue, setFadeInValue] = useState(new Animated.Value(0));

    const fadeIn = ()=>{
        Animated.timing(fadeInValue, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();
    };


    const fadeOut = ()=>{
       Animated.timing(fadeInValue, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true
       }).start();
    };


    return <View style={styles.container}>
       <Animated.View
         style={[styles.fadingContainer, { opactiy: fadeInValue }]}
       >
          <Text style={ styles.fadingText }>Fading View!</Text>
       </Animated.View>
       <View style={ styles.buttonRow  }>
         <Button title="fade in view" onPress />
         <Button title="fade out view" onPress />
       </View>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: 'powderblue'
    },
    fadingText: {
        fontSize: 28
    },
    buttonRow: {
        flexBasis: 100,
        justifyContent: 'space-evenly',
        marginVertical: 16
    }

});



