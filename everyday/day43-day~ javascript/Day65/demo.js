var node = {
  val: 2,
  next: null
}
function arrayToList (array) {
  if (array.length == 0) {
    return null
  }
  var nodes = [];
  for (var i  = 0; i < array.length; i++) {
    var node = {
      val: array[i],
      next: null,
    }
    nodes.push(node);
  }
  for (var i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  return nodes[0];
}
