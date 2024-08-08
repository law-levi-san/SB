import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Video } from 'expo-av';

const videoData = [
  { id: '1', title: 'Prakash Sir', url: require('./assets/Prakash sir.mp4'), thumbnail: require('./assets/PS.jpeg') },
  { id: '2', title: 'Pampies', url: require('./assets/Pampies.mp4'), thumbnail: require('./assets/ME.jpeg') },
  { id: '3', title: 'Karthik', url: require('./assets/Karthik.mp4'), thumbnail: require('./assets/KAR.png') },
  { id: '4', title: 'Akhila', url: require('./assets/Akhila.mp4'), thumbnail: require('./assets/AKH.jpeg') },
  { id: '5', title: 'Grishma', url: require('./assets/Grishma.mp4'), thumbnail: require('./assets/GREE.jpeg') },
  { id: '6', title: 'Jyoshitha', url: require('./assets/Jyoshitha.mp4'), thumbnail: require('./assets/JYO.jpeg') },
  { id: '7', title: 'Keerthi', url: require('./assets/Keerthi.mp4'), thumbnail: require('./assets/KEE.jpeg') },
  { id: '8', title: 'Nandan', url: require('./assets/Nandan.mp4'), thumbnail: require('./assets/NAN.jpeg') },
  { id: '9', title: 'Nimmi', url: require('./assets/Nimmi.mp4'), thumbnail: require('./assets/NIMS.jpeg') },
];

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedVideo(item.url)} style={styles.itemContainer}>
      <Text style={styles.item}>{item.title}</Text>
      <Image source={item.thumbnail} style={styles.thumbnail} />
      
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {selectedVideo ? (
        <View style={styles.videoContainer}>
          <Video
            source={selectedVideo}
            style={styles.video}
            useNativeControls
            resizeMode="contain"
            volume={1.0} 
            onEnd={() => setSelectedVideo(null)}
          />
        </View>
      ) : (
        <FlatList
          data={videoData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  list: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 100,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  thumbnail: {
    width: 300, 
    height: 500,
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
  videoContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});


export default VideoPage;
