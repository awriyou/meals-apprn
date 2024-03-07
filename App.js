import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import DetailsMealOverviewScreen from './screens/DetailsMealOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: '#12372A' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#BBC3A4' },
          }} //for set all screen options, but if want to dynamic look at the mealsoverview
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'Meals Categories',
            }}
          />

          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({route, navigation}) => {
            //   const catId = route.params.categoryId
            //   return {
            //     title: catId
            //   }
            // }} //! AGAR LEBIH JELASNYA, LIAT DI SCREENS MEALSOVERVIEW
          />

          <Stack.Screen
            name="DetailMealsOverview"
            component={DetailsMealOverviewScreen}
            // options={{
            //   title: 'Meals Details',
            //   headerRight: () => {
            //     return <Text>In the header</Text>
            //   }
            // }} //! ini tidak bagus digunakan, lebih baik lakukan pada screen component nya
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
