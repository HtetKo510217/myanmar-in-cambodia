import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, FlatList } from 'react-native';
import { Card, Button } from '@rneui/themed';
import axios from 'axios';

const ExchangeScreen = () => {
  const [rates, setRates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRates = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://myanmar-currency-api.github.io/api/latest.json');
      setRates(response.data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FA6326" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card}>
      <Text style={styles.currencyText}>{item.currency}</Text>
      <Text style={styles.rateText}>Buy: {item.buy}</Text>
      <Text style={styles.rateText}>Sell: {item.sell}</Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Exchange Rates in Myanmar</Text>
      <FlatList
        data={rates}
        renderItem={renderItem}
        keyExtractor={(item) => item.currency}
        contentContainerStyle={styles.list}
      />
      <View style={styles.btnContainer}>
        <Button
          title="Refresh Rates"
          onPress={fetchRates}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#6A5AE0',
  },
  card: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#6A5AE0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 10,
  },
  currencyText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 10,
  },
  rateText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#6A5AE0',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
  list: {
    paddingBottom: 20,
  },
});

export default ExchangeScreen;
