import { View, Text, StyleSheet, Pressable, Image, Platform } from 'react-native'
function ContentItem({id, title, imageUrl}) {
    return (
        <Pressable style={styles.container}>
            <Image source={{uri: imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
}

export default ContentItem

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 10,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: '#5C453A',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
        color: '#FA6326',
        textAlign: 'center',
    }
})  