import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tugas 1 DPM</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', // Latar belakang abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue', // Warna teks biru
    fontWeight: 'bold', // Gaya teks tebal
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Jarak merata di antara kotak
    width: '80%',
  },
  box1: {
    backgroundColor: 'blue', // Warna kotak 
    borderRadius: 10, // Membuat sudut melengkung
    shadowColor: "#000", // Menambahkan efek bayangan
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4, // Untuk efek bayangan di Android
    width: 100,
    height: 100,
  },
  box2: {
    backgroundColor: 'purple', // Warna kotak 
    borderRadius: 10, // Membuat sudut melengkung
    shadowColor: "#000", // Menambahkan efek bayangan
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4, // Untuk efek bayangan di Android
    width: 100,
    height: 100,
  },
});

export default App;
