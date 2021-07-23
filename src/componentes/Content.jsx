import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Carro from "./Carro";
import Music from "./Music";
import Time from "./Time";


export default function Content() {
   return (


      <View>

         <Carro />

         <View style={styles.ViewTime}>
            <Text style={styles.TextTime} >Exercicio - 2:</Text>
            <Time time='Flamengo' pontos={42} gfavor={39} gcontra={25} />
            <Text>--------------------------------------------------------</Text>
            <Time time='Santos' pontos={37} gfavor={40} gcontra={28} />
            <Text>--------------------------------------------------------</Text>
            <Time time='Palmeiras' pontos={33} gfavor={28} gcontra={22} />
         </View>


         <View style={styles.ViewMusic}>
            <Text style={styles.TextTime} >Exercicio - 3:</Text>
            <Music nome=" Pink Floyd" duracao=" 98 minutos" album=" the wall" estilo="Rock" />
            <Music nome=" Mc CodReact" duracao=" 45 minutos" album=" Agora vai vai" estilo="Funk" />
            <Music nome=" React e style " duracao=" 74 minutos" album=" senta e chora" estilo="Sertanejo" />
         </View>

      </View>
   )
}




const styles = StyleSheet.create({
   ViewTime: {
      height: 800,
      backgroundColor: 'orange',
      alignItems: 'center,',
      alignItems: 'center'

   },
   TextTime: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 25,
      marginBottom: 10

   },

   ViewMusic: {
      height: 700,
      backgroundColor: 'red',
      alignItems: 'center,',
      alignItems: 'center'
   }

});

