const showFormattedDate = (date, lang) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(lang, options);
};

export default showFormattedDate;
