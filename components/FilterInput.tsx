import { Filter } from "@/types/filters";

const FilterInput = ({
  filter,
  handleSearch,
}: {
  filter: Filter;
  handleSearch: (filterKey: string, query: string) => void;
}) => (
  <>
    {filter.hasSearch && (
      <input
        type="text"
        placeholder="جستجو..."
        className="mb-2 p-2 w-full border rounded"
        onChange={(e) => handleSearch(filter.filterKey, e.target.value)}
      />
    )}
  </>
);

export default FilterInput;
