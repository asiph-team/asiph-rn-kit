import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const HAIRLINE = 1;
export const TINY = hp('0.75%');
export const SMALLEST = hp('1.5%');
export const SMALLER = hp('1.8%');
export const SMALL = hp('2.1%');
export const MEDIUM = hp('2.4%');
export const LARGE = hp('2.72%');
export const LARGER = hp('3%');
export const LARGEST = hp('3.3%');

export const widthPercentage = (percentage: number) => wp(percentage);
export const heightPercentage = (percentage: number) => hp(percentage);

export const section = LARGE;
