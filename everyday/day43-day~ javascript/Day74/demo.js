function createTreeNode(val) {
  return {
    val: val,
    left: null,
    right: null,
  }
}

// 将使用顺序数组存储的根节点在rootPos位置的二叉树，转换为二叉链表
function aryToTree (ary, rootPos = 0) {
  if (ary[rootPos] == null) {
    return null;
  }
  var rootNode = createTreeNode(ary[rootPos]);
  var leftPos = rootPos * 2 + 1;
  var rightPos = rootPos * 2 + 2;
  var leftTree = aryToTree(ary, leftPos);
  var rightTree = aryTree(ary, rightPos);
  rootNode.left = leftTree;
  rootNode.right = rightTree;
  return rootNode;
}

function treeToAry (tree, idx = 0) {
  if (tree) {
    ary[idx] = tree.val;
    treeToAry(tree.left, idx * 2 + 1);
    treeToAry(tree.right, idx * 2 + 2);
  }
  return ary;
}

function condensedAryToTree (ary) {
  var node = [];
  for (var i = 0; i < ary.length; i++) {
    var node = createTreeNode(ary[i]);

  }
}