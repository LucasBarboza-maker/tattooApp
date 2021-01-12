import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function ButtonIcon({text, onPress, width, height}){
    return(
        <TouchableOpacity style={{width:width, height:50, marginBottom:'3%'}} onPress={onPress}>
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
        width:'100%',
        height:'100%',
        marginTop:10,
        borderRadius: 8,
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