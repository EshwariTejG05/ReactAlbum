import React from 'react';
import { View, Text, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album;
    const {  thumbnailStyle, headerContentStyle, thumbnailContainerStyle } = styles;
 return (
     <Card>
         <CardSection>
             <View style = {thumbnailContainerStyle}>
                 <Image
                 style={thumbnailStyle}
                  source= {{ uri: props.album.thumbnail_image }} />
             </View>
         <view style={headerContentStyle}>
         <Text style={headerTextStyle}>{title}</Text>
         <Text>{artist}</Text>
         </view>
         </CardSection>
         <CardSection>
             <Image source={{uri: image}}/>
         </CardSection>
         </Card>
 );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'Column',
        justifyContent: 'space-around'
    },
    
    headerTextStyle: {

    },

    thumbnailStyle: {
        height: 50,
        Width: 50
    },
      thumbnailContainerStyle: {
     justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
    },
    Image: {
        height: 300,
        flex: 1,
        width: null

    }
};

export default AlbumDetail;