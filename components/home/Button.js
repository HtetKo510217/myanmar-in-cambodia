import { View, Text, Pressable , StyleSheet } from 'react-native'
function Button({ onPress ,children }) {
    return (
        <View style={styles.button}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default Button

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        padding: 10,
        height: 55,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#000'
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
})