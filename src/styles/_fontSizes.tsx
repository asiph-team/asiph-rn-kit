import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const bigFS = hp('5%');
const largeFS = hp('4%');
const mediumFS = hp('3%');
const smallFS = hp('2.2%');
const baseFS = hp('2%');
const tinyFS = hp('1.5%');

export const H1 = {
  fontSize: bigFS,
};

export const H2 = {
  fontSize: largeFS,
};

export const H3 = {
  fontSize: mediumFS,
};

export const H4 = {
  fontSize: smallFS,
};

export const PARAGRAPH = {
  fontSize: baseFS,
};

export const TINY = {
  fontSize: tinyFS,
};
