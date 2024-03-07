import { FlatList, Text, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id, // disini akan bisa mengirim params(data) ke tujuan nya
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
