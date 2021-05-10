//transform the date in format Epoch into Unix for match in the API response object

const newDate = (date) => {
  return (new Date(date) / 1000.0);
};

module.exports = {
  newDate: newDate
};
