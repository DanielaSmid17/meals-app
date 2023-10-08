import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

export default function MealsList({ displayedMeals }) {
  function renderMealItem({ item }) {
    return <MealItem item={item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
