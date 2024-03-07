import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';

import React, { useState, useEffect, useLayoutEffect } from 'react';
import IconButton from '../components/MealDetail/IconButton';

const DetailsMealOverviewScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId; //! definisikan data parameter yang dikirim dari navigasi sebelumnya
  const selectedMeal = MEALS.find((meal) => meal.id === mealId); //! definisikan data dari hasil pendefinisian diatas

  function headerButtonPressHandler() {
    console.log('Pressed');
  }
  //?
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Detail',
      headerRight: () => {
        return <IconButton onPress={headerButtonPressHandler} icon="star" color="white"/>;
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsMealOverviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },
  detailText: {
    fontSize: 18,
    fontWeight: '200',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
