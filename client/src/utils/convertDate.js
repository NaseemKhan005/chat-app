const convertDate = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export default convertDate;
