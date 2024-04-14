import React, {Component} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import TransactionScreen  from "../screens/Transaction";
import SearchScreen from "../screens/Search";
import { TextInput, TouchableOpacity, View } from "react-native";

const Tab=createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
    render(){
        return (
            <NavigationContainer>
                <Tab.Navigator
                screenOptions={({route}) =>({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Trasaction") {
                            iconName = "book";
                        } else if (route.name === "Search") {
                            iconName = "search"
                        }

                        return (
                            <Ionicons
                            name={iconName}
                            size={size}
                            color={color}
                            />
                        );
                    }
                })}
                return (
                    <View style={styles.container}>
                    <View style={styles.lowerContainer}>
                    <View style={styles.textinputContainer}>
                    <TextInput
                    style={styles.textinput}
                    placeholder={"Book Id"}
                    placeholderTextColor={"#FFFFFF"}
                    value={bookId}
                    />
                    <TouchableOpacity
                    style={styles.scanbutton}
                    >
                    <Text style={styles.scanbuttonText}>Scan</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={[styles.textinputContainer, { marginTop: 25 }]}>
                    <TextInput
                    style={styles.textinput}
                    placeholder={"Student Id"}
                    placeholderTextColor={"#FFFFFF"}
                    value={studentId}
                    />
                    <TouchableOpacity
                    style={styles.scanbutton}
                    >
                    <Text style={styles.scanbuttonText}>Scan</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                    </View>
                   );
                tabBarOptions={{
                    activeTintColor:"#FFFFFF",
                    inactiveTintColor: "black",
                    style: {
                        height:130,
                        borderTopWidth:0,
                        backgroundColor:"#5653d4"
                    },
                    labelStyle:{
                        fontSize:20,
                        fontFamily:"Rajdhani_600SemiBold"
                    },
                    labelPosition:"beside-icon",
                    tabStyle: {
                        marginTop:25,
                        marginLeft:10,
                        marginRight:10,
                        borderRadius:30,
                        borderWidth:2,
                        alignItems:"center",
                        justifyContent:"center",
                        backgroundColor:"#5653d4"
                        }    }
                    }>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}