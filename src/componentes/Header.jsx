import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles, Styles } from "../../styles/style";


export default function Header() {
    return (       
        <View style={styles.Header}>
            <Text style= {styles.TextHeader}>Header</Text>
        </View>
    )
}


