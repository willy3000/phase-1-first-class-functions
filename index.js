const receivesAFunction = (func) => {
  func();
};

const returnsANamedFunction = () => {
  const namedFunc = () => {};
  return namedFunc;
};

const returnsAnAnonymousFunction = () => {
  return () => {};
};
