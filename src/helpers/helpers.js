export const truncate = (data, length) => {
  if (!data || data.length <= length) return data;
  return data.slice(0, length) + "...";
};