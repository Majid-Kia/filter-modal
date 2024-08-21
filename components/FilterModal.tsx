import { useState } from "react";
import { Accordion } from "@/components/Accordion";
import FilterItems from "@/components/FilterItems";
import { Filter } from "@/types/filters";
import SelectedFilterTags from "@/components/SelectedFilterTags";
import FilterInput from "@/components/FilterInput";

interface FilterModalProps {
  filters: Filter[];
  selectedFilters: { [key: string]: string[] };
  setSelectedFilters: (filters: { [key: string]: string[] }) => void;
  closeModal: () => void;
}

const FilterModal = ({
  filters,
  selectedFilters,
  setSelectedFilters,
  closeModal,
}: FilterModalProps) => {
  const [searchQueries, setSearchQueries] = useState<{ [key: string]: string }>(
    {}
  );
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleSelection = (filterKey: string, id: string, mode: string) => {
    const currentSelections = selectedFilters[filterKey] || [];
    const updatedSelections =
      mode === "single"
        ? [id]
        : currentSelections.includes(id)
        ? currentSelections.filter((item) => item !== id)
        : [...currentSelections, id];

    setSelectedFilters({ ...selectedFilters, [filterKey]: updatedSelections });
  };

  const handleSearch = (filterKey: string, query: string) => {
    setSearchQueries({ ...searchQueries, [filterKey]: query });
  };

  const removeSelectedFilter = (filterKey: string, id: string) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterKey]:
        selectedFilters[filterKey]?.filter((item) => item !== id) || [],
    });
  };

  const applyFilters = () => {
    closeModal();
  };

  const handleAccordionToggle = (filterKey: string) => {
    setActiveAccordion(activeAccordion === filterKey ? null : filterKey);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-full max-w-4xl sm:h-4/5 h-full p-4 sm:rounded-lg overflow-y-auto">
        <h2 className="text-xl mb-4">فیلتر‌ها</h2>
        <SelectedFilterTags
          filters={filters}
          selectedFilters={selectedFilters}
          removeSelectedFilter={removeSelectedFilter}
        />

        {filters.map((filter) => (
          <Accordion
            key={filter.filterKey}
            title={filter.title}
            isOpen={activeAccordion === filter.filterKey}
            onToggle={() => handleAccordionToggle(filter.filterKey)}
          >
            <FilterInput filter={filter} handleSearch={handleSearch} />
            <FilterItems
              filter={filter}
              selectedFilters={selectedFilters}
              toggleSelection={toggleSelection}
              searchQueries={searchQueries}
            />
          </Accordion>
        ))}
        <div className="flex justify-center mt-10">
          <button
            className=" bg-blue-400 text-white  rounded h-12 px-4 "
            onClick={applyFilters}
          >
            اعمال فیلتر‌ها
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
