import * as types from '../../types/toolbar';

export const setSearchText = (text) => ({
  type: types.SET_SEARCH_TEXT,
  payload: text
});

export const setColumnsButtonAnchorEl = (el) => ({
  type: types.SET_COLUMNS_BUTTON_ANCHOR_ELEMENT,
  payload: el
});

export const setExportButtonAnchorEl = (el) => ({
  type: types.SET_EXPORT_BUTTON_ANCHOR_ELEMENT,
  payload: el
});
