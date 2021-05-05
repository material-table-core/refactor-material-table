import React from 'react';
import DoubleScrollbar from 'react-double-scrollbar';
import { withStyles } from '@material-ui/core';

const scrollBarStyle = {
  horizontalScrollContainer: {
    '& ::-webkit-scrollbar': {
      '-webkit-appearance': 'none'
    },
    '& ::-webkit-scrollbar:horizontal': {
      height: 8
    },
    '& ::-webkit-scrollbar-thumb': {
      borderRadius: 4,
      border: '2px solid white',
      backgroundColor: 'rgba(0, 0, 0, .3)'
    }
  }
};

// MTableScrollBar component
export default withStyles(scrollBarStyle)((props) => {
  const { double, children, classes } = props;

  if (double) {
    return <DoubleScrollbar>{children}</DoubleScrollbar>;
  }

  return (
    <div
      className={classes.horizontalScrollContainer}
      style={{ overflowX: 'auto', position: 'relative' }}
    >
      {children}
    </div>
  );
});
