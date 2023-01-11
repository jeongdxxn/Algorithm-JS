function solution(angle) {
  /*
    예각 : 0 < angle < 90
    직각 : angle = 90
    둔각 : 90 < angle < 180
    평각 : angle = 180  
  */
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}
