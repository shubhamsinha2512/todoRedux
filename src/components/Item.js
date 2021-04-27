import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native'

function Item({item, delTodo}){
    return(
        <TouchableOpacity style={styles.item} onPress={()=>delTodo(item.key)}>
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        marginHorizontal:16,
        borderColor: '#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    },
    text:{

    }
})

export default Item;