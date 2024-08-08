import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Video } from 'expo-av';

const videoData = [
  { id: '1', title: 'Video 1', url: require('./assets/Video 1.mp4'), thumbnail: require('./assets/VID 1.png') },
  { id: '2', title: 'Video 2', url: require('./assets/Video 2.mp4'), thumbnail: require('./assets/VID 2.png') },
];

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedVideo(item.url)} style={styles.itemContainer}>
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
    fontSize: 24,
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
