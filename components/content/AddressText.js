import React from 'react';
import { Text, Linking , StyleSheet} from 'react-native';

const AddressText = ({ address }) => {
    const isLink = address.startsWith('http') || address.startsWith('https');

    if (isLink) {
        return (
            <Text
                style={styles.address}
                onPress={() => Linking.openURL(address)}
            >
                {address}
            </Text>
        );
    } else {
        return <Text>{address}</Text>;
    }
};

export default AddressText;

const styles = StyleSheet.create({
    address: {
        color: '#FA6326',
        fontSize: 16,
        margin: 10,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
})