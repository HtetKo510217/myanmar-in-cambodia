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
      <Text style={styles.currencyText}>1 {item.currency}</Text>
      <View style={styles.rateContainer}>
        <Text style={styles.rateLabel}>Buy:</Text>
        <Text style={styles.rateValue}>{item.buy} MMK</Text>
      </View>
      <View style={styles.rateContainer}>
        <Text style={styles.rateLabel}>Sell:</Text>
        <Text style={styles.rateValue}>{item.sell} MMK</Text>
      </View>
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
    // backgroundColor: '#713045',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  card: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#7d7c84',
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
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  rateLabel: {
    fontSize: 16,
    color: '#fff',
  },
  rateValue: {
    fontSize: 16,
    color: '#fff',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#7d7c84',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  list: {
    paddingBottom: 20,
  },
});

export default ExchangeScreen;
