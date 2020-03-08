const monthMap = {
  "0": `January`,
  "1": `February`,
  "2": `March`,
  "3": `April`,
  "4": `May`,
  "5": `June`,
  "6": `July`,
  "7": `August`,
  "8": `September`,
  "9": `October`,
  "10": `November`,
  "11": `December`,
};


const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const formatDate = (date) => {
  const dateFormat = new Date(date);
  const day = dateFormat.getDate();
  const year = dateFormat.getFullYear();
  const month = monthMap[dateFormat.getMonth()];

  return `${month} ${day} ${year}`;
};

const formatDateTime = (date) => {
  const dateFormat = new Date(date);
  const day = dateFormat.getDate() < 10 ? `0${dateFormat.getDate()}` : `${dateFormat.getDate()}`;
  const year = dateFormat.getFullYear();
  const month = dateFormat.getMonth() < 10 ? `0${dateFormat.getMonth()}` : `${dateFormat.getMonth()}`;

  return `${year}-${month}-${day}`;
};

export {getRandomInteger, formatDate, formatDateTime};
