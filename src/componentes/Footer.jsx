import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "../../styles/style";


export default function Footer() {
    return (       
        <View style = {styles.Footer}>
            <Text style= {styles.TextFooter}>Footer </Text>
            <Text style= {styles.TextFooter}>&copy;Dev@RFagundes</Text>
        </View>
    )
}