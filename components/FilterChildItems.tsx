import { FilterItem, Filter } from "@/types/filters";

const FilterChildItems = ({
  filter,
  item,
  selectedFilters,
  toggleSelection,
  searchQuery,
}: {
  filter: Filter;
  item: FilterItem;
  selectedFilters: { [key: string]: string[] };
  toggleSelection: (filterKey: string, id: string, mode: string) => void;
  searchQuery: string;
}) => (
  <div className="pr-4 mt-1 mb-2">
    {item.childs
      ?.filter((child) =>
        child.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((child) => (
        <label key={child.id} className="flex items-center cursor-pointer">
          <input
            type={filter.mode === "single" ? "radio" : "checkbox"}
            name={filter.filterKey}
            checked={
              selectedFilters[filter.filterKey]?.includes(child.id) || false
            }
            onChange={() =>
              toggleSelection(filter.filterKey, child.id, filter.mode)
            }
          />
          <span className="mr-2 text-sm text-gray-600">{child.name}</span>
        </label>
      ))}
  </div>
);

export default FilterChildItems;
