const Validation = {
  isPositiveInteger(size) {
    // FIXME: fix if condition
    if (
      !(Number.isInteger(size) && size > 0 && size % parseInt(size, 10) === 0)
    ) {
      return false;
    }
    return true;
  },

  isRightUserMove(input) {
    if (input !== 'U' && input !== 'D') return false;

    return true;
  },

  isRightUserCommand(input) {
    if (input !== 'R' && input !== 'Q') return false;

    return true;
  },

  /**
   * @param {Array} answer 정답 배열
   * @param {Array} currentInput 지금까지 user가 입력한 값들의 배열
   * @return {Boolean} 가장 마지막으로 입력받은 값이 정답인지 true, false를 반환한다.
   */
  isCurrentLastIndexValueSame(answer, currentInput) {
    const lastIndexOfCurrentInput = currentInput.length - 1;
    return (
      answer[lastIndexOfCurrentInput] === currentInput[lastIndexOfCurrentInput]
    );
  },

  isLengthSame(firstInput, secondInput) {
    return firstInput.length === secondInput.length;
  },
};

module.exports = Validation;
