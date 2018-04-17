import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Inicio extends React.Component {


  constructor(){
    super();
    this.state={
    }

  }

 


  render() {
    return (
      <View style={styles.container}>
        
          <View style={styles.cajaUno}>
            <Text>{ this.props.name }</Text>
          </View>
         
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  cajaUno:{
    flex:1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
 

});
