import { useDispatch } from 'react-redux';
import * as actions from '../actions/toolbar';

/**
 * Provides access to the toolbar state
 */
export default function useMTableToolbar() {
  const dispatch = useDispatch();

  const setSearchText = (text, callback = (txt) => {}) => {
    dispatch(actions.setSearchText(text));
    callback(text);
  };

  const setColumnsButtonAnchorEl = (el) => {
    dispatch(actions.setColumnsButtonAnchorEl(el));
  };

  const setExportButtonAnchorEl = (el) => {
    dispatch(actions.setExportButtonAnchorEl(el));
  };

  return { setSearchText, setColumnsButtonAnchorEl, setExportButtonAnchorEl };
}
