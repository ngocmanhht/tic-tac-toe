import { Alert, Image, StyleSheet, Text, TouchableOpacity, FlatList, View, TextInput, Modal, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';

export const Square = props => {
    return (
      <View style={styles.square}>
        <TouchableOpacity   onPress={props.handle}>
        <View style={styles.viewParent}>
        <View style={styles.viewChild}>
          <Text style={styles.valueTxt}>{props.values}</Text>
        </View>
      </View>
        </TouchableOpacity>
      </View>
    )
  }

export default Square

const styles = StyleSheet.create({
    square:{
        width: 60,
         flexDirection: 'row', 
         flexWrap: 'wrap'

    },
    viewParent:{
         width: 60, 
         height: 60,
          backgroundColor: 'red',
           borderWidth: 2 
    },
    viewChild:{
        flex: 1, justifyContent: 'center', alignItems: 'center' 

    },
    valueTxt:{
        fontSize: 30
    }

})