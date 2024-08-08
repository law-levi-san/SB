import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const lt = [
  {
    lines: [
      "You just made my spring so much more beautiful by being a big part of my life. Your warm embrace is the most precious to me and I adore you so much. Your love has transformed my world, infusing it with beauty and meaning. In your embrace, I find solace and strength, knowing that I am cherished beyond measure.\n\nYour laughter is the sweetest melody, echoing in the chambers of my soul and bringing endless delight to my days. I am grateful for every moment we share, every smile exchanged, and every whispered word of affection. You are the anchor that steadies me in stormy seas, the guiding light that leads me through the darkest nights. With you by my side, I am whole, complete, and utterly fulfilled.\n\nMy love for you knows no bounds, stretching across time and space, transcending every obstacle in its path. You are my everything, my reason for being, and I cherish you more deeply than words can express.\n\nI wish you only the bestest in this entire world, no the entire universe and I’m so so happy I could be a part of your life. You have just made me so much more happier than what I deserve.\n\nGod bless you and May all your dreams come true, sweetheart.\n\nWith lots of love and a million kisses,\nPampies",
    ]
  }
];

const LL = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('./assets/pic.jpeg')} style={styles.image}></Image>
      {lt.map((poem, index) => (
        <View key={index} style={styles.poemContainer}>
          {poem.lines.map((line, lineIndex) => (
            <Text key={lineIndex} style={styles.line}>{line}</Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  poemContainer: {
    marginBottom: 40,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  line: {
    fontSize: 18,
    lineHeight: 28,
    color: '#555',
    marginBottom: 8,
    textAlign: 'justify', 
  },
  image: {
    width: '100%',
    height: 600,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,

  },
});

export default LL;
