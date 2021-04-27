import React from 'react';
import {StyleSheet, View, Text} from 'react-native'

function Header(){

    return(
        <View style={styles.header}>
            <Text style={styles.title}>Todos</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    header:{
        padding:20,
        backgroundColor:'coral'
    },
    title:{
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default Header;