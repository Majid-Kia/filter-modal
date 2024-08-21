export interface Filter {
  title: string;
  filterKey: string;
  hasSearch: boolean;
  mode: "single" | "multiple";
  items: FilterItem[];
}

export interface FilterItem {
  id: string;
  name: string;
  parentId?: string;
  parentName?: string;
  childs?: FilterItem[];
}
