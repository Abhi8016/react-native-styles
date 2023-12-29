import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ScrollCard = () => {
  return (
    <View style={{borderWidth: 2, borderColor: 'skyblue'}}>
      <Text style={styles.headingText}>Scrolleble Cards</Text>
      <ScrollView horizontal>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text>Orange</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text style={{color: 'blue'}}>☸</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.card, styles.cardFour]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardOne]}>
            <Text>Orange</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text style={{color: 'blue'}}>☸</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.card, styles.cardFour]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardOne]}>
            <Text>Orange</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text style={{color: 'blue'}}>☸</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.card, styles.cardFour]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardOne]}>
            <Text>Orange</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text style={{color: 'blue'}}>☸</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.card, styles.cardFour]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardOne]}>
            <Text>Orange</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text style={{color: 'blue'}}>☸</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.card, styles.cardFour]}>
            <Text>Blue</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ScrollCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    backgroundColor: 'wheat',
  },
  card: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 100,
    borderRadius: 4,
    margin: 8,
    //  for android only
    elevation: 8,
    // borderCurve: 'circular' in ios only
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  cardOne: {
    backgroundColor: 'orange',
  },
  cardTwo: {
    backgroundColor: 'white',
  },
  cardThree: {
    backgroundColor: 'green',
  },
  cardFour: {
    backgroundColor: 'blue',
  },
});
