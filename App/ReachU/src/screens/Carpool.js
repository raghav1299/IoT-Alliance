import React, { useEffect, useState, useCallback } from 'react';
import { Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { height } from '../const/const';


export default function Carpool() {


    return (
        <View style={{ flex: 1, padding: 15, backgroundColor: '#ffffff' }}>
            <TouchableOpacity style={{
                flexDirection: 'row', justifyContent: 'flex-end'
            }}>
                <Image source={require('../assets/driver.png')}
                    style={{
                        marginLeft: 20,
                        alignSelf: "flex-end",
                        resizeMode: 'contain',
                        marginBottom: 15,
                        height: height / 45
                    }} />
                <Text style={{
                    fontFamily: "Montserrat-Regular", fontWeight: 'bold', color: '#5CA878',
                    marginLeft: 3, fontSize: 11.5, marginBottom: 10
                }}>Switch to driver</Text>
            </TouchableOpacity>
            <Text style={{ fontFamily: "Montserrat-Regular", fontWeight: 'bold', color: '#828282' }}>Suggested Rides</Text>
        </View>
    )
}