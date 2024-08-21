import CloseIcon from "@/icons/CloseIcon";
import { Filter } from "@/types/filters";

const SelectedFilterTags = ({
  filters,
  selectedFilters,
  removeSelectedFilter,
}: {
  filters: Filter[];
  selectedFilters: { [key: string]: string[] };
  removeSelectedFilter: (filterKey: string, id: string) => void;
}) => {
  return (
    <div className="selected-filters mb-4 flex flex-wrap">
      {Object.entries(selectedFilters).map(([filterKey, values]) =>
        values.map((value) => {
          const filter = filters.find((f) => f.filterKey === filterKey);
          const item = filter?.items.find(
            (i) =>
              i.id === value || i.childs?.some((child) => child.id === value)
          );
          const itemName =
            item?.name ||
            item?.childs?.find((child) => child.id === value)?.name;

          return (
            <span
              key={value}
              className="sm:py-2 sm:px-3 px-2 py-1 bg-gray-200 rounded-full flex ml-2 mb-2 cursor-pointer items-center group"
              onClick={() => removeSelectedFilter(filterKey, value)}
            >
              <span className="sm:ml-2 text-xs sm:text-sm">{itemName}</span>
              <span className="transition-colors rounded-full sm:p-1 group-hover:bg-gray-300 text-sm">
                <CloseIcon />
              </span>
            </span>
          );
        })
      )}
    </div>
  );
};

export default SelectedFilterTags;
