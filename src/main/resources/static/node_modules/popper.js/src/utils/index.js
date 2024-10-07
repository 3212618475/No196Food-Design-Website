import computeAutoPlacement from 'popper.js/src/utils/computeAutoPlacement';
import debounce from 'popper.js/src/utils/debounce';
import findIndex from 'popper.js/src/utils/findIndex';
import getBordersSize from 'popper.js/src/utils/getBordersSize';
import getBoundaries from 'popper.js/src/utils/getBoundaries';
import getBoundingClientRect from 'popper.js/src/utils/getBoundingClientRect';
import getClientRect from 'popper.js/src/utils/getClientRect';
import getOffsetParent from 'popper.js/src/utils/getOffsetParent';
import getOffsetRect from 'popper.js/src/utils/getOffsetRect';
import getOffsetRectRelativeToArbitraryNode from 'popper.js/src/utils/getOffsetRectRelativeToArbitraryNode';
import getOuterSizes from 'popper.js/src/utils/getOuterSizes';
import getParentNode from 'popper.js/src/utils/getParentNode';
import getPopperOffsets from 'popper.js/src/utils/getPopperOffsets';
import getReferenceOffsets from 'popper.js/src/utils/getReferenceOffsets';
import getScroll from 'popper.js/src/utils/getScroll';
import getScrollParent from 'popper.js/src/utils/getScrollParent';
import getStyleComputedProperty from 'popper.js/src/utils/getStyleComputedProperty';
import getSupportedPropertyName from 'popper.js/src/utils/getSupportedPropertyName';
import getWindowSizes from 'popper.js/src/utils/getWindowSizes';
import isFixed from 'popper.js/src/utils/isFixed';
import isFunction from 'popper.js/src/utils/isFunction';
import isModifierEnabled from 'popper.js/src/utils/isModifierEnabled';
import isModifierRequired from 'popper.js/src/utils/isModifierRequired';
import isNumeric from 'popper.js/src/utils/isNumeric';
import removeEventListeners from 'popper.js/src/utils/removeEventListeners';
import runModifiers from 'popper.js/src/utils/runModifiers';
import setAttributes from 'popper.js/src/utils/setAttributes';
import setStyles from 'popper.js/src/utils/setStyles';
import setupEventListeners from 'popper.js/src/utils/setupEventListeners';

/** @namespace Popper.Utils */
export {
  computeAutoPlacement,
  debounce,
  findIndex,
  getBordersSize,
  getBoundaries,
  getBoundingClientRect,
  getClientRect,
  getOffsetParent,
  getOffsetRect,
  getOffsetRectRelativeToArbitraryNode,
  getOuterSizes,
  getParentNode,
  getPopperOffsets,
  getReferenceOffsets,
  getScroll,
  getScrollParent,
  getStyleComputedProperty,
  getSupportedPropertyName,
  getWindowSizes,
  isFixed,
  isFunction,
  isModifierEnabled,
  isModifierRequired,
  isNumeric,
  removeEventListeners,
  runModifiers,
  setAttributes,
  setStyles,
  setupEventListeners,
};

// This is here just for backward compatibility with versions lower than v1.10.3
// you should import the utilities using named exports, if you want them all use:
// ```
// import * as PopperUtils from 'popper-utils';
// ```
// The default export will be removed in the next major version.
export default {
  computeAutoPlacement,
  debounce,
  findIndex,
  getBordersSize,
  getBoundaries,
  getBoundingClientRect,
  getClientRect,
  getOffsetParent,
  getOffsetRect,
  getOffsetRectRelativeToArbitraryNode,
  getOuterSizes,
  getParentNode,
  getPopperOffsets,
  getReferenceOffsets,
  getScroll,
  getScrollParent,
  getStyleComputedProperty,
  getSupportedPropertyName,
  getWindowSizes,
  isFixed,
  isFunction,
  isModifierEnabled,
  isModifierRequired,
  isNumeric,
  removeEventListeners,
  runModifiers,
  setAttributes,
  setStyles,
  setupEventListeners,
};
