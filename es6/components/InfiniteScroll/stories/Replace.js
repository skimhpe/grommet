function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';
import { grommet } from 'grommet/themes';
import { Grommet, Box, InfiniteScroll, Text } from 'grommet';
var allItems = Array(240).fill().map(function (_, i) {
  return "item " + (i + 1);
});

var Example = function Example(props) {
  return /*#__PURE__*/React.createElement(Grommet, {
    theme: grommet
  }, /*#__PURE__*/React.createElement(InfiniteScroll, _extends({
    items: allItems
  }, props), function (item) {
    return /*#__PURE__*/React.createElement(Box, {
      key: item,
      pad: "medium",
      border: {
        side: 'bottom'
      },
      align: "center"
    }, /*#__PURE__*/React.createElement(Text, null, item));
  }));
};

if (!isChromatic()) {
  storiesOf('InfiniteScroll', module).add('Replace', function () {
    return /*#__PURE__*/React.createElement(Example, {
      replace: true
    });
  }).add('Replace, show before step', function () {
    return /*#__PURE__*/React.createElement(Example, {
      replace: true,
      show: 27
    });
  }).add('Replace, show after step', function () {
    return /*#__PURE__*/React.createElement(Example, {
      replace: true,
      show: 87
    });
  });
}