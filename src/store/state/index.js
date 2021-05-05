/**
 * The root state is essentially the default state
 */
import toolbarState from './toolbar';

export default {
  // root: rootState,
  toolbar: toolbarState
};

/*
const materialTableDefaultState = {
  ...renderState,
  query: {
    filters: renderState.columns
      .filter((a) => a.tableData.filterValue)
      .map((a) => ({
        column: a,
        operator: '=',
        value: a.tableData.filterValue
      })),
    orderBy: renderState.columns.find(
      (a) => a.tableData.id === renderState.orderBy
    ),
    orderDirection: renderState.orderDirection,
    page: 0,
    pageSize: calculatedProps.options.pageSize,
    search: renderState.searchText,
    totalCount: 0
  },
  showAddRow: false,
  bulkEditOpen: false,
  width: 0
};

const rootState = {
  applyFilters: false,
  applySearch: false,
  applySort: false,
  currentPage: 0,
  detailPanelType: 'multiple',
  errorState: undefined,
  lastDetailPanelRow: undefined,
  lastEditingRow: undefined,
  orderBy: -1,
  orderDirection: '',
  pageSize: 5,
  paging: true,
  parentFunc: null,
  searchText: '',
  selectedCount: 0,
  treefiedDataLength: 0,
  treeDataMaxLevel: 0,
  groupedDataLength: 0,
  defaultExpanded: false,
  bulkEditOpen: false,
  bulkEditChangedRows: {},

  data: [],
  columns: [],

  filteredData: [],
  searchedData: [],
  groupedData: [],
  treefiedData: [],
  sortedData: [],
  pagedData: [],
  renderData: [],

  filtered: false,
  searched: false,
  grouped: false,
  treefied: false,
  sorted: false,
  paged: false,

  rootGroupsIndex: {}
};
*/
