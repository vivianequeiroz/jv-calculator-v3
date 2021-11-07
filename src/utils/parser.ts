export const decodeParseDweet = (dweet: string) => {
  return decodeURI(dweet).replace('plus', '+');
};

export const encodeParseDweet = (dweet: string) => {
  return decodeURI(dweet).replace('+', 'plus');
};
