import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.iconRow}>
        <FontAwesome style={styles.iconPadding} name="glass" size={40} color="green" />
        <FontAwesome style={styles.iconPadding} name="beer" size={40} color="red" />
        <FontAwesome style={styles.iconPadding} name="music" size={40} color="blue" />
        <FontAwesome style={styles.iconPadding} name="taxi" size={40} color="#1cb5ad" />
      </View>
      <View style={styles.iconRow}>
        <Ionicons style={styles.iconPadding} name="md-pizza" size={48} color="orange" />
        <Ionicons style={styles.iconPadding} name="md-tennisball" size={48} color="maroon" />
        <Ionicons style={styles.iconPadding} name="ios-airplane" size={48} color="purple" />
        <Ionicons style={styles.iconPadding} name="ios-happy" size={48} color="#DF7977" />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRow: {
    flexDirection: 'row',
  },
  iconPadding: {
  padding: 10,
}
});
