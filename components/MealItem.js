import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MealDetails from './MealDetails';

// import { useNavigation } from '@react-navigation/native';

const MealItem = ({ title, imageUrl, duration, complexity, affordability, onPress }) => {
    // const navigation = useNavigation()
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;
const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    //! for ios
    shadowColor: 'black',
    shadowOpacity: '0.25',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer:{
    borderRadius: 8,
    overflow: 'hidden',
  },//! for ios
  image: {
    width: '100%',
    height: 299,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  desc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  descItem: {
    marginHorizontal: 4,
    fontSize: 14,
  },
});
