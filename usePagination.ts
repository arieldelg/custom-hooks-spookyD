const usePagination = (number: number) => {
  const array = new Array(number + 1);
  const newArray = [...array.keys()].slice(1);
  return {
    paginationArray: newArray,
  };
};

export { usePagination };
