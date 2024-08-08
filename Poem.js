import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const poem = [
    {
        
        lines : [
            "In the gentle embrace of dawn's first light,",
"I find the essence of all that's right.",
"For in your eyes, the morning finds its grace,",
"A reflection of love in your tender gaze.",

"With each passing day, as the sun does rise,",
"My heart sings aloud, its joy belies.",
"For in your presence, every moment's bright,",
"Filled with laughter, love, and sheer delight.",

"On this special day, as the candles glow,",
"I celebrate the man I've come to know.",
"A soul so kind, a heart so true,",
"My love for you, forever anew.",

"Through every trial, every storm we weather,",
"Our bond grows stronger, binding us together.",
"In your arms, I've found my home,",
"A sanctuary where love is known.",

"So here's to you, my dear, on this day so grand,",
"May your spirit soar, may you forever stand.",
"For in your love, I find my greatest treasure,",
"My guiding light, my source of pleasure.",

"Happy Birthday, my darling, my heart's delight,",
"May your day be filled with love's sweet light.",
"With each passing year, may our love only grow,",
"For with you by my side, I am whole, I am whole"
        ]
    }
];

const Poem = () =>{
    return (
        <ScrollView style={styles.container}>
            {poem.map((poem, index) => (
                <View key={index} style={styles.poemContainer}>
                    <Text style={styles.title}>{poem.title}</Text>
                    {poem.lines.map((line, lineIndex) => (
                        <Text key={lineIndex} style={styles.line}>{line}</Text>
                    ))}

                </View>
            ))}

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f8ff',
      padding: 20,
    },
    poemContainer: {
      marginBottom: 40,
      padding:20,
      borderRadius: 10,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {width: 0,height:2},
      shadowOpacity: 0.1,
      shadowRadius:4,
      elevation:5,

    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    line: {
      fontSize: 18,
      lineHeight: 25,
      color:'#555',
      marginBottom:8,
    },
  });

  export default Poem;