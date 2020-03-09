import {monthMap} from "../const";

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

export {formatDate, formatDateTime};
