// format date from 2023-08-31T22:59:25Z to "February 1, 2021, 11:59 PM"
export const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    hour12: true,
    minute: 'numeric'
  };

  return new Date(date).toLocaleDateString('en-US', options);
};
