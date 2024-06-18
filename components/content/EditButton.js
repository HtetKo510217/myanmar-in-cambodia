import { Pressable, StyleSheet, View, Text } from 'react-native';
import { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../store/auth-context';
function EditButton({ onPress, id }) {
    const authCtx = useContext(AuthContext);
    const canEdit = authCtx.userId === id;

    if (!canEdit) {
        return null;
    }
    return (

        <View style={styles.container}>
            <Text style={styles.text}>Edit Your Content</Text>
            <Pressable
                style={({ pressed }) => [styles.button, pressed && styles.pressed]}
                onPress={onPress}
            >
                <Ionicons name="create-outline" size={24} color="white" />
            </Pressable>
        </View>

    );
}

export default EditButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 10,
        gap: 10,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    button: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: 'black',
    },
    pressed: {
        opacity: 0.7,
    },
})  