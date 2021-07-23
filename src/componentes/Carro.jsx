import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Component } from "react";


export default class Carro extends Component {

  state = {
    marca: "Fiat",
    modelo: "Palio",
    ano: "2014",
    cor: "Preto",
    preco: 21000.00
  };

  render() {
    return (
      <View style={styles.ViewCarro}>
        <Text style={styles.TextCarro}>
          Exercicio 1:
        </Text>
        <Text>-----------------------------</Text>
        <Text style={styles.TextCarro}>{`Marca:  ${this.state.marca}\n`}</Text>
        <Text style={styles.TextCarro}>{`Modelo: ${this.state.modelo}\n`}</Text>
        <Text style={styles.TextCarro}>{`Ano:    ${this.state.ano}\n`}</Text>
        <Text style={styles.TextCarro}>{`Cor:    ${this.state.cor}\n`}</Text>
        <Text style={styles.TextCarro}>{`Preço R$:${this.state.preco}\n`}</Text>

        <Button title="Muda Status!" style="backgroundColor:black"
          onPress={
            () => this.setState({
              marca: "Wolkswagen",
              modelo: "Gol",
              ano: "2016",
              cor: "Prata",
              preco: 23000.00
            })
          } >

        </Button>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  ViewCarro: {
    height: 400,
    width: 500,
    backgroundColor: 'rgba(3, 77, 73 ,30)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  TextCarro: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10
  },

});