import { StyleSheet, View, Text, Pressable } from "react-native";
import { Link } from 'expo-router';

export default function Button({label, alertMsg}) {
    return(
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert(alertMsg)}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}   

const styles = StyleSheet.create({
    buttonContainer: {
        width: 200,
        height: 78,
        marginHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 20,
        width: 'auto',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#E3B04B',
        fontSize: 16,
    },
})