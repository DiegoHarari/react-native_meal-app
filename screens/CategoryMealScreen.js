import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {CATEGORIES} from '../Data/mock';

const CategoryMeal = ({navigation}) => {
  const {navigate, goBack} = navigation;
  // const categoryId = getParam('categoryId');

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>

      <Button
        title="Go to Details"
        onPress={() => {
          navigate('MealDetails');
        }}
      />
      <Button title="Go Back" onPress={() => goBack()} />
    </View>
  );
};

CategoryMeal.navigationOptions = ({navigation}) => {
  const {getParam} = navigation;
  const categoryId = getParam('categoryId');
  const selectedCategory = CATEGORIES.find(
    category => categoryId === category.id,
  );
  const {title} = selectedCategory;
  return {
    headerTitle: title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMeal;
