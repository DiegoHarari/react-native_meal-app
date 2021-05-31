import {Platform} from 'react-native';

export const platform = (os, paramOne, paramTwo) =>
  Platform.OS === `${os}` ? `${paramOne}` : `${paramTwo}`;
