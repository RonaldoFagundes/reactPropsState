import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Component } from "react";



export default class Music extends Component {

  state = {
    nome: this.props.nome,
    duracao: this.props.duracao,
    album: this.props.album,
    estilo: "",

  }
  render() {
    return (
      <View style={styles.ViewMusic}>
        <Text style={styles.TextMusic}>Nome:{this.state.nome}</Text>
        <Text style={styles.TextMusic}>Duração:{this.state.duracao}</Text>
        <Text style={styles.TextMusic}>Album:{this.state.album}</Text>
        <Text style={styles.TextMusic}>Estilo:{this.state.estilo}</Text>
        <Button title="Estilo Musical!" color="#43CD80"
          onPress={
            () => this.setState({
              estilo: this.props.estilo,
            })
          } />

      </View>

    )
  }
}


const styles = StyleSheet.create({
  ViewMusic: {
    marginTop: 10,
    height: 200,
    width: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },

  TextMusic: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10
  },
  ClickMusic: {
    backgroundColor: "black",
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 20,
    marginBottom: 10
  }
});
