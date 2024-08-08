import React from 'react';
import { Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LauncherPage = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('./assets/bg.jpg')} // Replace with your background image
            style={styles.container}
        >
            <Text style={styles.text}>HAPPY HAPPY BIRTHDAY SHONA BABY 😘</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>PRESS ME</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        fontFamily: '',
        marginBottom: 20, 
    },
    button: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        backgroundColor: '#4169E1', 
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
});

export default LauncherPage;
