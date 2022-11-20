const MOVE = {
  up: 'U',
  down: 'D',
};

const MOVE_INDEX = {
  [MOVE.up]: 0,
  [MOVE.down]: 1,
};

const INPUT = {
  bridgeSize: '다리의 길이를 입력해주세요.\n',
  moving: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  gameCommand:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const ERROR = {
  bridgeSizeException: '3부터 20 사이의 숫자를 입력해 주세요.',
  movingException: 'U와 D만 입력해 주세요.',
  gameCommandException: 'R과 Q만 입력해 주세요.',
};

module.exports = {
  MOVE,
  MOVE_INDEX,
  INPUT,
  ERROR,
};
