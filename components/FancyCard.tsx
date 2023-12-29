import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headings}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://deih43ym53wif.cloudfront.net/large_mount-fuji-2_61529898c6.jpeg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Mount Fuji</Text>
          <Text style={styles.cardLable}>Japan</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
            itaque explicabo, voluptate porro ea expedita veniam quibusdam saepe
            aperiam totam reiciendis dolores officia incidunt, ab ullam?
            Voluptas aliquid quibusdam vero!
          </Text>
          <Text style={styles.cardFooter}>Hmmmm Nice Place</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headings: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    // borderWidth: 2,k
    borderColor: 'skyblue',
    // width: "100%",
    height: 360,
    borderRadius: 26,
    marginVertical: 7,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 26,
  },
  cardImage: {
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    width: "100%",
    height: 180,
    marginBottom: 4,
  },
  cardBody: {
    // padding: 10,
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 4,
  },
  cardLable: {
    color: 'black',
    fontSize: 14,
    marginBottom: 4,
  },
  cardDescription: {
    color: 'black',
    fontSize: 12,
    marginBottom: 4,
  },
  cardFooter: {
    color: 'black',
    fontSize: 18,
  },
});
