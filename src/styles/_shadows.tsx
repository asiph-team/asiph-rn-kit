import { DARK } from './_colors';

export const shadowGenerator = (opacity: number) => ({
  shadowColor: DARK,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: opacity,
  shadowRadius: 3,
});
