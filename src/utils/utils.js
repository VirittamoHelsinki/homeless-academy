// Helper functions

export const formatDate = (dateString) => {
  const inputDate = new Date(dateString);

  const day = inputDate.getDate().toString().padStart(2, '0');
  const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
  const year = inputDate.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;
  return formattedDate;
};
