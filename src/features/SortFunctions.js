export default function SortFunctions() {
  const sortByLastName = (a, b) => {
    const nameA = a.lastName.toLowerCase();
    const nameB = b.lastName.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  };

  return {
    sortByLastName,
  };
}
