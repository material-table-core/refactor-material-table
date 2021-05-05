import toolbarState from '../../state/toolbar';
import { toolbar as types } from '../../types';

export default function (state = toolbarState, action) {
  switch (action.type) {
    case types.SET_SEARCH_TEXT: {
      return { ...state, searchText: action.payload };
    }
    case types.SET_COLUMNS_BUTTON_ANCHOR_ELEMENT: {
      console.log(action.payload);
      return { ...state, columnsButtonAnchorEl: action.payload };
    }
    case types.SET_EXPORT_BUTTON_ANCHOR_ELEMENT: {
      return { ...state, exportButtonAnchorEl: action.payload };
    }
    default: {
      return state;
    }
  }
}
