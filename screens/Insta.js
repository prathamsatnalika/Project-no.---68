import React, { Component } from 'react';
import {View,Text} from 'react-native';

export default class BookTransactionScreen extends React.Component {
   render() {
       return(
        <View>

        <View style={{flex:1,justifyContent: 'center',alignItems: 'center',backgroundColor: 'yellow'}}>
           <Text style={{fontSize: 35,fontWeight: '900'}}>
               Buzz App
           </Text>
        </View>

      <View style={{flex: 1,alignItems: 'center'}}>
           <Text style={{fontSize: 30,fontWeight: '800',color: 'red',marginTop: 300,}}>
                Instagram
           </Text>
      </View>

      </View>
       )
   }
} 