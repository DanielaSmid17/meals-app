import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

export default function MealItem({ item }) {
  const navigation = useNavigation();

  return (
    <View style={styles.cardContainer}>
      <Pressable
        onPress={() => navigation.navigate("MealDetails", { mealId: item.id })}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View>
          <View style={styles.cardInnerContainer}>
            <Image
              style={styles.image}
              source={{
                uri: item.imageUrl,
              }}
            />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <MealDetails
            duration={item.duration}
            affordability={item.affordability}
            complexity={item.complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonPressed: {
    opacity: 0.5,
  },
  cardInnerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 0,
  },
});
