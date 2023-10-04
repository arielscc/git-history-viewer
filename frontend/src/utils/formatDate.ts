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
