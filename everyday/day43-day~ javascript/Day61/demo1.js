var trap = function(height) {
  var len = height.length
  var waterSum = 0

  for (var i = 1; i < len - 1; i++) {
      var leftMaxHeight = 0
      for (var j = i - 1; j >= 0; j--) {
          if (height[j] > leftMaxHeight) {
              leftMaxHeight = height[j]
          }
      }
      var rightMaxHeight = 0
      for (var k = i + 1; k < len; k++) {
          if (height[k] > rightMaxHeight) {
              rightMaxHeight = height[k]
          }
      }

      var waterHeight = Math.min(leftMaxHeight, rightMaxHeight)

      if (waterHeight > height[i]) {
          waterSum += waterHeight - height[i]
      }
  }

  return waterSum
};