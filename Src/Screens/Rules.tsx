import { Alert, Image, StyleSheet, Text, TouchableOpacity, FlatList, View, TextInput, Modal, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';

const checkWhoWin=(value)=>
  {
    if(value =='x')
    {
    Alert.alert(`YOU win`)      
    }
    else
    {
      Alert.alert(`COM win`)

    }
  }
 export const checkWin = (array) => {
    //Hang ngang
    if(array[0]!==''&&array[0]==array[1]&&array[1]==array[2])
    {
      checkWhoWin(array[0])
    }
    if(array[3]!==''&&array[4]==array[3]&&array[4]==array[5])
    {
      checkWhoWin(array[3])
    }
    if(array[6]!==''&&array[6]==array[7]&&array[7]==array[8])
    {
      checkWhoWin(array[0])
    }
    // Hang doc
    if(array[0]!==''&&array[0]==array[3]&&array[3]==array[6])
    {
      checkWhoWin(array[0])
    }
    if(array[1]!==''&&array[1]==array[4]&&array[4]==array[7])
    {
      checkWhoWin(array[1])
    }
    if(array[2]!==''&&array[2]==array[5]&&array[5]==array[8])
    {
      checkWhoWin(array[2])
    }
    //Hang cheo
    if(array[0]!==''&&array[0]==array[4]&&array[4]==array[8])
    {
      checkWhoWin(array[0])
    }
    if(array[2]!==''&&array[2]==array[4]&&array[4]==array[6])
    {
      checkWhoWin(array[2])
    }

   
  }