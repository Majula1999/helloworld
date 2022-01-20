function Vector(x, y) {
  this.x = x
  this.y = y
}
Vector.prototype.plus = function(v) {
  var x = this.x + v.x
  var y = this.y + v.y
  return new Vector(x, y)
}
Vector.prototype.minus = function(v) {
  var x = this.x - v.x
  var y = this.y - v.y
  return new Vector(x, y)
}
Vector.prototype.getLength = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y)
}