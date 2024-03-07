import React, { useState, useEffect, useLayoutEffect } from 'react';

import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';
// import { useRoute } from '@react-navigation/native';

const MealsOverviewScreen = ({ route, navigation }) => {
  // const route = useRoute()
  // route.params
  const catId = route.params.categoryId; //!  mengambil data dari params yang dikirim

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
      function pressHandler() {
        navigation.navigate('DetailMealsOverview', {
          mealId: item.id,
        });
      }
    return (
      // <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} /> agar lebih mudah, menggunakan spred operator
      <MealItem {...mealItemProps} onPress={pressHandler} />
    );
  };



  return (
    <View style={style.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
