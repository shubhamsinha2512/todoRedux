import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native'

function Item({item, delTodo}){
    // console.log(item)
    return(
        <TouchableOpacity style={styles.item} onPress={()=>delTodo(item.id)}>
            <Text style={styles.text}>{item.title}</Text>
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