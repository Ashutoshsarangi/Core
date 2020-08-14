let numberValidator = (num) => {
  num.forEach((item) => {
    if (!item.parseInt() >= 0) {
      return false;
    }
  });
  return true;
}