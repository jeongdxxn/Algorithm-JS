let tiling = function (n) {
  const board = [0, 1, 2];

  const aux = (size) => {
    if (board[size] !== undefined) return board[size];
    if (size <= 2) return board[n];
    board[size] = aux(size - 1) + aux(size - 2);
    return board[size];
  };
  return aux(n);
};