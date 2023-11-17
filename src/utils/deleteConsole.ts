export const deleteConsole = () => {
  if (process.env.NODE_ENV === 'production') {
    console.log = () => {};
    console.info = () => {};
    console.warn = () => {};
    console.error = () => {};
  }
};
