import create from 'zustand';

export default create((set) => {
  return {
    // Fields
    columnsButtonAnchorEl: null,
    exportButtonAnchorEl: null,
    searchText: '',
    // Actions
    setSearchText: (text) => {
      set((state) => {
        return { searchText: text };
      });
    },
    setColumnsButtonAnchorEl: (el) => {
      set((state) => {
        return {
          columnsButtonAnchorEl: el
        };
      });
    },
    setExportButtonAnchorEl: (el) => {
      set((state) => ({ exportButtonAnchorEl: el }));
    }
  };
});
