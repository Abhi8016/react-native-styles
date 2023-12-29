import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ScrollCard from './ScrollCard';

const ActionCard = () => {
  const openWebsite = (website: string) => {
    Linking.openURL(website);
  };
  const openSettings = () => {
    Linking.openSettings();
  };

  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new today</Text>
        </View>
        <Image
          source={{
            uri: 'https://wallpaperaccess.com/full/51174.jpg',
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardBody}>
          <Text numberOfLines={6} style={{color: 'wheat'}}>
            Mount Fuji (富士山, Fujisan) is with 3776 meters Japan's highest
            mountain. It is not surprising that the nearly perfectly shaped
            volcano has been worshiped as a sacred mountain and experienced big
            popularity among artists and common people throughout the centuries.
            Mount Fuji is an active volcano, which most recently erupted in
            1707. It stands on the border between Yamanashi and Shizuoka
            prefectures and can be seen from Tokyo and Yokohama on clear days.
            Another easy way to view Mount Fuji is from the train on a trip
            between Tokyo and Osaka. If you take the shinkansen from Tokyo in
            the direction of Nagoya, Kyoto and Osaka, the best view of the
            mountain can be enjoyed from around Shin-Fuji Station on the right
            hand side of the train, about 40-45 minutes into the journey. Note
            however, that clouds and poor visibility often block the view of
            Mount Fuji, and you have to consider yourself lucky if you get a
            clear view of the mountain. Visibility tends to be better during the
            colder seasons of the year than in summer, and in the early morning
            and late evening hours than during the middle of the day.
          </Text>
        </View>

        <View style={styles.footerBody}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
              )
            } activeOpacity={1}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.instagram.com/hiteshchoudharyofficial/')
            }>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openSettings()} activeOpacity={0.8}>
            <Text style={styles.socialLinks}>Open Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    // flex: 1,
    // width: '100%',
    height: 480,
    borderWidth: 3,
    borderColor: 'wheat',
    borderRadius: 24,
    margin: 14,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  elevatedCard: {
    elevation: 4,
    backgroundColor: 'seagreen',
    shadowColor: 'white',
  },
  headingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'wheat',
  },
  cardImage: {
    height: '50%',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    borderWidth: 3,
    borderColor: 'wheat',
    marginTop: 10,
  },
  cardBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 2,
    marginVertical: 10,
    // borderWidth: 2,
    // borderColor: 'brown',
  },
  footerBody: {
    // flex: 1,
    // borderWidth: 3,
    // borderColor: 'wheat',
    marginHorizontal: 1,
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialLinks: {
    marginHorizontal: 1,
    marginVertical: 4,
    color: 'seagreen',
    fontWeight: 'bold',
    fontSize: 14.3, // fontStyle: 'italic',
    backgroundColor: 'wheat',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 8,
  },
});
