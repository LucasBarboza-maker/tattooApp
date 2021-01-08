import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function Button({text, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.divButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    divButton:{
        
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        width:'98%',
        marginTop:10,
        borderRadius: 8,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'#9E2828',
    },

    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign:'center'
    }

})