export const isObjectEmpty = (obj: object | undefined | null) => {
  if (obj === undefined || obj === null) {
    return true;
  }
  return Object.keys(obj).length === 0;
};
