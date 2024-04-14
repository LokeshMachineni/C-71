import React, {Component} from "react";
import { View, Text, Stylesheet, TextInput } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class TransactionScreen extends Component {
    render () {
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

                <TouchableOpacity 
                style={[styles.button, {marginTop:25}]}
                >
                    <Text style={style.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
            </View>
        );
    }
}

const styles = Stylesheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#563D4"
    },
    text: {
        color: "#ffff",
        fontSize: 25
    },
    button: {
        width:"43%",
        height:55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "F48D20",
        borderRadius:15
    },
    buttonText: {
        fontSize: 24,
        color: "#FFFFFF"
    },
    scanbutton:{
        width:100,
        height:50,
        backgroundColor:"#9DFD24",
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    scanbuttonText:{
        fontSize:24,
        color:"#0A0101",
        fontFamily:"Rajdhani_600SemiBold"
    },
    button:{
        width:"43%",
        height:55,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F48D20",
        borderRadius:15,
    },
    buttonText:{
        fontSize:24,
        color:"#FFFFFF",
        fontFamily:"Rajdhani_600SemiBold"
    }
});