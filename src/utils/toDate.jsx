const options = { year: 'numeric', month: 'long', day: 'numeric'};

export const toDate= ((date) => {
  const setDate = new Date(date);
  return setDate.toLocaleDateString('en-US', options);
})