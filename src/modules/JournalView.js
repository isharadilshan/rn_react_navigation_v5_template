import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const JournalView = () => {
  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity style={styles.buttonWrapper}>
        <Text>HomeView 11 1 1 1 1 1 1 1 1 1 1 1 1 1 </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    backgroundColor: '#add8e6',
  },
});

export default JournalView;
