import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import VideoPage from './VideoPage';
import Video from './Video';
import Poem from './Poem';
import LL from './LL';
import LauncherPage from './LauncherPage';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LauncherPage">
        <Stack.Screen name="LauncherPage" component={LauncherPage} />
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "VideoPage" component={VideoPage} />
        <Stack.Screen name="Video" component={Video} />
        <Stack.Screen name="Poem" component={Poem} />
        <Stack.Screen name="Letter" component={LL} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;