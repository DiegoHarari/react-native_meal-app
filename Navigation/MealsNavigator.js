import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMealScreen';
import MealDetails from '../screens/MealsDetail';
import Colors from '../Constants/Colors';
import {platform} from '../Helper/Helper';

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMeals,
    },
    MealDetails: MealDetails,
  },
  {
    mode: 'modal',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: platform('android', '', Colors.primaryColor),
      },
      headerTintColor: platform('android', Colors.primaryColor, 'white'),
    },
  },
);

export default createAppContainer(MealsNavigator);
