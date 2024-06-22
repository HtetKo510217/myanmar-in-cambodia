import { View, Text, StyleSheet } from 'react-native'
function Message ({title, children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message}>{children}</Text>
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
        color: '#FFC30B',
        textAlign: 'center',
        marginBottom: 6,
    },
    message: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
    }
})