export interface FilterItem {
  id: string;
  name: string;
  parentId?: string;
  parentName?: string;
  childs?: FilterItem[];
}

export interface Filter {
  title: string;
  filterKey: string;
  hasSearch: boolean;
  mode: string;
  items: FilterItem[];
}

export interface FiltersData {
  filters: Filter[];
}
