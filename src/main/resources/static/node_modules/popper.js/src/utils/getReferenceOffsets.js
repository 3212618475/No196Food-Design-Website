import findCommonOffsetParent from 'popper.js/src/utils/findCommonOffsetParent';
import getOffsetRectRelativeToArbitraryNode from 'popper.js/src/utils/getOffsetRectRelativeToArbitraryNode';
import getFixedPositionOffsetParent from 'popper.js/src/utils/getFixedPositionOffsetParent';
import getReferenceNode from 'popper.js/src/utils/getReferenceNode';

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
export default function getReferenceOffsets(state, popper, reference, fixedPosition = null) {
  const commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
