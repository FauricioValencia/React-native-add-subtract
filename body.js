import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Body extends React.Component {


  constructor(){
    super();
    this.state={
    }

  }

 


  render() {
    return (
      <View style={styles.container}>
        
          <View style={styles.cajaUno}>
            <Text>{this.props.numero}</Text>
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
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
 

});
