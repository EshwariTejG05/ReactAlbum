//import a library to creact a component
import React from 'react';
import { AppRegistry, View }from 'react-native';
import Header from './src/component/Header';
import AlbumList from './src/component/AlbumList';
//Creat a component
const App = () => (
    <View>
        <Header headerText={'Albums'}/>
        <AlbumList />
    </View>
    );


// Render it to the device
AppRegistry.registerComponent('albums', () => APP);