// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/**
 * @dev Library for managing uint256 to uint256 counters, which allows to
 * increment the counter and obtain the current value all in one function call.
 *
 * Include with `using Counters for Counters.Counter;`
 * Since it is not possible to overflow a 256 bits integer with increments
 * of one, `increment` can skip the {SafeMath} overflow check, and revert
 * on overflow (when the counter is already at the maximum value).
 */
library Counters {
    struct Counter {
        // This variable should never be directly accessed by users of the library: use the
        // `current` and `increment` functions to interact with it.
        uint256 _value; // default: 0
    }

    /**
     * @dev Returns the current value of the counter.
     */
    function current(Counter storage counter) internal view returns (uint256) {
        return counter._value;
    }

    /**
     * @dev Increments the counter by 1, returns the updated value.
     *
     * WARNING: If `increment` is used on an initialized counter with the maximum
     * possible value, the counter will overflow to 0. This could have
     * undesirable effects if used carelessly, and could introduce vulnerabilities
     * if it's used to control access to a system (e.g. by preventing
     * usage of certain features after a certain number of requests).
     */
    function increment(Counter storage counter) internal returns (uint256) {
        // The {SafeMath} overflow check can be skipped here, see the comment at the
        // beginning of this library for why.
        unchecked {
            counter._value += 1;
            return counter._value;
        }
    }

    /**
     * @dev Decrements the counter by 1, returns the updated value.
     *
     * WARNING: If `decrement` is used on an initialized counter with the minimum
     * possible value, the counter will overflow to a very high value (when cast to `uint256`).
     * This could have undesirable effects if used carelessly, and could introduce vulnerabilities
     * if it's used to control access to a system (e.g. by preventing
     * usage of certain features after a certain number of requests).
     */
    function decrement(Counter storage counter) internal returns (uint256) {
        uint256 value = counter._value;
        require(value > 0, "Counter: decrement overflow");
        unchecked {
            counter._value = value - 1;
        }
        return counter._value;
    }
}
