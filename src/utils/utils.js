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

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const formatDate = (date) => {
  const day = date.getDate();
  const year = date.getFullYear();
  const month = monthMap[date.getMonth()];

  return `${month} ${day} ${year}`;
};

const formatDateTime = (date) => {
  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  const year = date.getFullYear();
  const month = date.getMonth() < 10 ? `0${date.getMonth()}` : `${date.getMonth()}`;

  return `${year}-${month}-${day}`;
};

export {getRandomInteger, randomDate, formatDate, formatDateTime};
