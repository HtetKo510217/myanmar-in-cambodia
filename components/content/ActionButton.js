import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
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
  const buttonStyle = type === 'edit' ? styles.editButton : styles.deleteButton;
  const textStyle = type === 'edit' ? styles.editText : styles.deleteText;

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons name={icon} size={20} style={styles.icon} />
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

export default ActionButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  editButton: {
    backgroundColor: '#f0f0f0',
  },
  deleteButton: {
    backgroundColor: '#ffe5e5',
  },
  text: {
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 5,
  },
  editText: {
    color: '#007AFF',
  },
  deleteText: {
    color: '#FF3B30',
  },
  icon: {
    marginRight: 5,
  },
});