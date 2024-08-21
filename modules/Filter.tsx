"use client";
import { useState } from "react";
import FilterModal from "@/components/FilterModal";
import { FiltersData } from "@/types/filters";
import SelectedFilterTags from "@/components/SelectedFilterTags";
import FilterIcon from "@/icons/FilterIcon";

type FilterPtopTypes = {
  filterData: FiltersData;
};

export default function Filter({ filterData }: FilterPtopTypes) {
  const [showModal, setShowModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string[];
  }>({});

  const closeModal = () => {
    setShowModal(false);
  };

  const removeSelectedFilter = (filterKey: string, id: string) => {
    const updatedSelections = (selectedFilters[filterKey] || []).filter(
      (item) => item !== id
    );
    setSelectedFilters({ ...selectedFilters, [filterKey]: updatedSelections });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto mt-28">
      <button
        className="border border-gray-300 text-gray-800 h-12 rounded px-4 flex items-center  justify-between"
        onClick={() => setShowModal(true)}
      >
        فیلتر‌ها
        <FilterIcon className="text-gray-400 mr-2" />
      </button>

      {Object.entries(selectedFilters).length > 0 && (
        <div className="selected-filters mt-4">
          <h3>فیلترهای انتخاب شده</h3>
          <SelectedFilterTags
            filters={filterData.filters}
            selectedFilters={selectedFilters}
            removeSelectedFilter={removeSelectedFilter}
          />
        </div>
      )}

      {showModal && (
        <FilterModal
          filters={filterData.filters}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
