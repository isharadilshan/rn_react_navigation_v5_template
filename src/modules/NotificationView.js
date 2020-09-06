import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const NotificationView = () => {
  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity style={styles.buttonWrapper}>
        <Text>NotificationView</Text>
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
    backgroundColor: 'blue',
  },
});

export default NotificationView;
