import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Final extends React.Component {


    render() {
    return (
      <View style={styles.container}>
        
          <View style={styles.cajaUno}>
          <View>
          <Button
                onPress={this.props.sumar}
                title="Aumentar"
                color="#841584"
              />
            </View>
            <View>
          <Button
                onPress={this.props.restar}
                title="Aumentar"
                color="#841584"
              />
            </View>
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
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
 

});
