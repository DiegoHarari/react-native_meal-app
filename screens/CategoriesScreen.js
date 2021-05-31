import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {CATEGORIES} from '../Data/mock';
import CategoryGridTitle from '../components/CategoryGridTitle';

const CategoriesScreen = ({navigation}) => {
  const {navigate} = navigation;
  const renderGridItem = itemData => {
    const {title, id, color} = itemData.item;
    return (
      <CategoryGridTitle
        title={title}
        color={color}
        style={styles.gridItem}
        onSelect={() => {
          navigate({
            routeName: 'MealDetails',
            params: {categoryId: id},
          });
        }}
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = ({navigation}) => {
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

export default CategoriesScreen;
