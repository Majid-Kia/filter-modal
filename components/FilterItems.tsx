import { Filter } from "@/types/filters";
import FilterChildItems from "@/components/FilterChildItems";

const FilterItems = ({
  filter,
  selectedFilters,
  toggleSelection,
  searchQueries,
}: {
  filter: Filter;
  selectedFilters: { [key: string]: string[] };
  toggleSelection: (filterKey: string, id: string, mode: string) => void;
  searchQueries: { [key: string]: string };
}) => {
  const query = searchQueries[filter.filterKey]?.toLowerCase() || "";

  return (
    <div className="filter-items">
      {filter.items
        .filter((item) => {
          if (filter.hasSearch && item.childs) {
            return item.childs.some((child) =>
              child.name.toLowerCase().includes(query)
            );
          }
          return item.name.toLowerCase().includes(query);
        })
        .map((item) => (
          <div key={item.id}>
            {item.childs ? (
              <div>
                <strong className="block font-semibold">{item.name}</strong>
                <FilterChildItems
                  filter={filter}
                  item={item}
                  selectedFilters={selectedFilters}
                  toggleSelection={toggleSelection}
                  searchQuery={query}
                />
              </div>
            ) : (
              <label className="flex items-center cursor-pointer">
                <input
                  type={filter.mode === "single" ? "radio" : "checkbox"}
                  name={filter.filterKey}
                  checked={
                    selectedFilters[filter.filterKey]?.includes(item.id) ||
                    false
                  }
                  onChange={() =>
                    toggleSelection(filter.filterKey, item.id, filter.mode)
                  }
                />
                <span className="mr-2 text-sm text-gray-600">{item.name}</span>
              </label>
            )}
          </div>
        ))}
    </div>
  );
};

export default FilterItems;
