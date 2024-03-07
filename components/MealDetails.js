import { StyleSheet, Text, View } from "react-native";


const MealDetails = ({duration, complexity, affordability, style, textStyle}) => {
    return (
      <View style={[styles.desc, style]}>
        <Text style={[styles.descItem, textStyle]}>{duration} Min</Text>
        <Text style={[styles.descItem, textStyle]}>
          {complexity.toUpperCase()}
        </Text>
        <Text style={[styles.descItem, textStyle]}>
          {affordability.toUpperCase()}
        </Text>
      </View>
    );
}

export default MealDetails;


const styles = StyleSheet.create({
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