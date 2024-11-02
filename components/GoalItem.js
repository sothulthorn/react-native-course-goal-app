import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#37AFE1',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressItem: {
    opacity: 0.5,
  },
});
