import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Inicio from './Inicio'
import Body from './body'
import Final from './Final'
export default class App extends React.Component {


  constructor(){
    super();
    this.state={
      numero:0
    }

  }

  aumentar =() =>{
    this.setState(
      {
        numero: this.state.numero + 1
      }
    )

  }

  disminuir =() =>{
    this.setState(
      {
        numero: this.state.numero - 1
      }
    )

  }


  render() {
    return (
      <View style={styles.container}>
        
         <Inicio name="Calculadora"/>         
          <Body numero={this.state.numero}/>
         <Final sumar   =   { this.aumentar}
                restar  =   {this.disminuir}/>
          {/* <View style={styles.cajaTres}>
         
            <Button
                onPress={() =>{this.aumentar();}}
                title="Aumentar"
                color="#841584"
              />
          
              <Button
                onPress={() => {this.disminuir();}}
                title="Disminuir"
                color="#841584"
              />
          </View> */}

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
  }
});
