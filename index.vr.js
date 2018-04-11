import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model
} from 'react-vr';

export default class VRVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={
          {
            uri: [
              '../static_assets/left.jpg',
              '../static_assets/right.jpg',
              '../static_assets/top.jpg',
              '../static_assets/bot.jpg',
              '../static_assets/back.jpg',
              '../static_assets/front.jpg',
            ]  
           }
        } 
        />
        <Text
          style={{
            backgroundColor: 'transparent',
            fontSize: 0.2,
            fontWeight: '200',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
        </Text>

        <Model
          source={{obj: asset('male_head.obj')
        
        }}

          style={{
            transform: [
              {translate: [0, 0, -50]},
              {scale: 0.7}, 
              {rotateX: 0},
              {rotateY: 0}],
            }}
          
          wireframe={true}
            />
      </View>
    );
  }
};

AppRegistry.registerComponent('VRVR', () => VRVR);
