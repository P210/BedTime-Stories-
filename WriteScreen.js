import React from 'react';
import {Stylesheet, Text,View} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class WriteScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <AppHeader/>
            <Text style={styles.b}>Write Stories</Text>
            </View>
        )
    }
}

const styles = Stylesheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      b:{
            color:'green',
            font:20
            
        
      }
})