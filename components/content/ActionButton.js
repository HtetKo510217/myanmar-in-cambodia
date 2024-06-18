import { Pressable, StyleSheet, View, Text } from 'react-native';
import { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../store/auth-context';

function ActionButton({ onPress, userId, type = 'edit' }) {
  const authCtx = useContext(AuthContext);
  const canEdit = authCtx.userId === userId;

  if (!canEdit) {
    return null;
  }

  const icon = type === 'edit' ? 'create-outline' : 'trash-outline';
  const text = type === 'edit' ? 'Edit' : 'Delete';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={onPress}
      >
        <Ionicons name={icon} size={24} color="white" />
      </Pressable>
    </View>
  );
}

export default ActionButton;

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
});