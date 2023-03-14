import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import MyStack from './src/navigation/MyStack';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.appContainer}>
        <MyStack />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
export default App;
