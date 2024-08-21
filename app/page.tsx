import FilterData from "../constants/filters.json";
import Filter from "@/modules/Filter";
export default function Home() {
  return (
    <div className="p-4 max-w-4xl mx-auto mt-28 w-full">
      <Filter filterData={FilterData} />
    </div>
  );
}
