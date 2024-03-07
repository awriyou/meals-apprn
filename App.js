import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import {Ionicons} from '@expo/vector-icons'

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import DetailsMealOverviewScreen from './screens/DetailsMealOverviewScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#12372A' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#BBC3A4' },
        drawerContentStyle: { backgroundColor: '#12372A' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#12372A',
        drawerActiveBackgroundColor: '#BBC3A4',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="list-sharp" />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="heart-outline" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
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
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
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
