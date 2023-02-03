import { Alert, Image, StyleSheet, Text, TouchableOpacity, FlatList, View, TextInput, Modal, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Square} from './Square'
import { checkWin } from './Rules';
export const Home = () => {
  const array = [
    '', '', '',
    '', '', '',
    '', '', '',
  ]
  const [list, setList] = useState(array)
  const [turn, setTurn] = useState(true)
  const [whoTurn, setWHoTurn] = useState('you')
  const restart = () => {
    setList(array)
    setWHoTurn('you')
  }
  const handleDraw = () => {
    
    if (whoTurn == 'you') {
      setWHoTurn('com')
     return 'x'
    }
    else {
      setWHoTurn('you')
      return  'o'
    }
  }
  const [key, setKey] = useState('')
  const [text, setText] = useState('default')
  return (
    <View style={styles.backGround}>
      <Text style={styles.turn}>{whoTurn.toUpperCase()} TURN</Text>
      <View style={styles.square}>
        <Square values={list[0]}
         handle={()=>list[0]= handleDraw()} />
         <Square values={list[1]}
         handle={()=>list[1]= handleDraw()} />
         <Square values={list[2]}
         handle={()=>list[2]= handleDraw()} />
      
      </View>
      <View style={styles.square}>
        <Square values={list[3]}
         handle={()=>list[3]= handleDraw()} />
         <Square values={list[4]}
         handle={()=>list[4]= handleDraw()} />
         <Square values={list[5]}
         handle={()=>list[5]= handleDraw()} />
      
      </View>
      <View style={styles.square}>
        <Square values={list[6]}
         handle={()=>list[6]= handleDraw()} />
         <Square values={list[7]}
         handle={()=>list[7]= handleDraw()} />
         <Square values={list[8]}
         handle={()=>list[8]= handleDraw()} />
      
      </View>
      <TouchableOpacity onPress={()=>restart()}>
        <Text style={styles.btnRestart}>CLICK HERE TO RESTART</Text>
      </TouchableOpacity>
      {
        checkWin(list)
      }
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  backGround:
  {
    backgroundColor: '#B5BCBB',
    flex: 1,
    alignItems: 'center',

  },
  turn:{
    fontSize:25

  },
  square:{
    width: 180, height: 60, backgroundColor: 'blue', flexDirection: 'row'

  },
  btnRestart:{
    fontSize:20,
    borderWidth:1,
    marginTop:10,
    backgroundColor:'#CEBEBE'

  }
})