import { View, Text, StyleSheet } from 'react-native'
function Message ({title, message}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message}>{message}</Text>
        </View>
    );
}

export default Message

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FA6326',
        textAlign: 'center',
        marginBottom: 6,
    },
    message: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    }
})