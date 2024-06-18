import { View, Text, Pressable , StyleSheet } from 'react-native'
function Button({ onPress, setBackground ,children }) {
    const buttonStyle = setBackground ? { backgroundColor: 'linear-gradient(90deg, rgb(249, 87, 42), rgb(255, 155, 5))' } : {};
    const buttonColor = setBackground ? { color: 'white' } : {color: 'linear-gradient(90deg, rgb(249, 87, 42), rgb(255, 155, 5))'};
    return (
        <View style={[styles.button, buttonStyle]}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                onPress={onPress}
            >
                <Text style={[styles.buttonText, buttonColor]}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default Button

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        padding: 6,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
})