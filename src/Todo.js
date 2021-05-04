
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import {connect} from 'react-redux';

import Header from './components/Header'
import Item from './components/Item'
import AddTodo from './components/AddTodo';


function Todo(props){

  // const [todos, setTodos] = useState([
  //   {text: 'create native app', key:'1'},
  //   {text: 'make changes', key:'2'},
  //   {text: 'run & test on device', key:'3'},
  //   {text: 'build apk', key:'4'},
  //   {text: 'release', key:'5'},
  // ])

// console.log('Todo', props.todos);
  useEffect(()=>{}, [props.todos])

  return (
    <View style={styles.container}>
      {/* <Text>Working</Text> */}
      <View style={styles.content}>
        <Header />
        <AddTodo addTodo={props.addTodo} />
        <View style={styles.list}>
          <FlatList
            data={props.todos}
            renderItem={({item})=>(
              <Item item={item} delTodo={props.delTodo} />
            )}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
  },
  content:{},
  list:{}
});


const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo : (todoText) => dispatch({
      type: 'ADD_TODO',
      payload: todoText
      }),

    delTodo: (key) => dispatch({
        type: 'DEL_TODO',
        payload: key
    })
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todo)
