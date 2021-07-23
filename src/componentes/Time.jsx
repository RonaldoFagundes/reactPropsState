import React from "react";
import { View, Text, StyleSheet } from "react-native";




export default function (props) {
  return (
    <View style={styles.ViewTime}>
      <Text style={styles.TextTime}>{`Time: ${props.time}`}</Text>
      <Text style={styles.TextTime}>{`Pontos: ${props.pontos}`}</Text>
      <Text style={styles.TextTime}>{`Gols Marcados: ${props.gfavor}`}</Text>
      <Text style={styles.TextTime}>{`Gols Contra: ${props.gcontra}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  ViewTime: {
    marginTop: 10,
    height: 200,
    width: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },

  TextTime: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10
  },

});













