let dfsOne = function (node) {
  let result = [];
  let treeSearch = (el) => {
    if(el.children) {
      result.push(el.value);
      for(let i = 0; i < el.children.length; i++) {
        treeSearch(el.children[i]);
      }
    } else {
      result.push(el.value);
    }
  }
  treeSearch(node);
  return result;
};

let dfsTwo = function (node) {
  let result = []; 
  function visit(node) {
    // node를 방문한다 => node의 값을 저장한다 => 다음 node를 방문한다
    // 첫번째 노드를 저장하고 자식 노드를 조회
    // => 재귀를 이용해 계속해서 노드의 자식의 노드의 자식으로 들어가서 조회
    result.push(node.value)
    node.children.forEach((el) => visit(el))
  }

  // 1번 목적지에 도착한 A -> 다음 목적지는 [2,3]
  // 2번 목적지에 도착한 B -> 다음 목적지는 [4,5]
  // 3번 목적지에 도착한 C -> 다음 목적지는 []
  // DFS은 call stack을 이용한다 (call stack : 꼬리에 꼬리를 무는 구조) => stack : 나중에 들어간게 가장 나중에 나옴

  visit(node); // 한번만 실행해서 첫번째 노드를 실행/조회
  return result;
};

let Node = function (value) {
  this.value = value;
  this.children = [];
};

Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};