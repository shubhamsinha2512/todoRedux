import React, {useState} from 'react';
import {StyleSheet, TextInput, Text, View, Button} from 'react-native'

function AddTodo({addTodo}){

    const [todo, setTodo]=useState('');

    // function changeHandler(e){
    //     console.log(e.target.value);
    //     setTodo(e.target.value);
    // }

    function handleAdd(){
            if(todo.length != 0){
                addTodo(todo);
                setTodo('');
            }
            else alert('Please enter todo to add!');
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={todo} placeholder='Add Todo...' onChange={(e)=>setTodo(e.nativeEvent.text)} />
            <Button title='Add' color='coral' onPress={handleAdd} />
        </View>
    );
}

const styles= StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    },
    container:{
        marginVertical:16,
        marginHorizontal:16
    }
})

export default AddTodo;