import { ContactItem } from "@/types/ContactItem";

export default function SortFunctions() {
  const sortByLastName = (a: ContactItem, b: ContactItem) => {
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
