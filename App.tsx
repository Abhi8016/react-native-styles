import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ScrollCard from './components/ScrollCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ScrollCard />
        <FancyCard />
        <ActionCard />
        {/* <Text>App</Text> */}
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
