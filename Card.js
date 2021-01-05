import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={style.containerStyle}>
           {props.children}
        </View>
    );
};

Const styles = {
    containerStyle: {
    borderWidth: 1, 
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 1,
    marginRight: 5,
    mardinTop: 10,
    

    }

};

export default Card;