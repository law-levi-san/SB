import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export default function Home() {
    const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>TAKE A LOOK AT THESE!</Text>

    <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('VideoPage')}>
      <View style={styles.section}>
        <Image  source={require('./assets/vd.jpg')} style={styles.image} />
        <Text style={styles.text}>WISHES FOR U</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Poem')}>
      <View style={styles.section}>
        <Image source={require('./assets/pencil.jpg')} style={styles.image} />
        <Text style={styles.text}>POEM</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Video')}>
      <View style={styles.section} >
        <Image source={require('./assets/wish.png')} style={styles.image} />
        <Text style={styles.text}>VIDEOS</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Letter')}>
      <View style={styles.section}>
        <Image source={require('./assets/lt.png')} style={styles.image} />
        <Text style={styles.text}>LETTER</Text>
      </View>
      </TouchableOpacity>
    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6', 
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  section: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
