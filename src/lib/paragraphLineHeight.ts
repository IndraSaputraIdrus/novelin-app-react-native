export const paragraphLineHeight = (size: number) => {
  const lineHeightList = {
    14: 20,
    16: 24,
    18: 28,
    20: 28,
    24: 32,
  };

  return lineHeightList[size] || 24;
};
