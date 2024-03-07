import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({children}) => {
    return (
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{children}</Text>
      </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    color: '#436850',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#436850',
    marginHorizontal: 12,
    marginVertical: 8,
    padding: 6,
  },
});