(function (window, _) {
  window.mugiwara = window.mugiwara || {
    numz: {},
    phyz: {
      /**
       * calculate the distance
       * @param {object} pointA - the first point on screen
       * @param {number} pointA.y - the y coordinate for pointA
       * @param {number} pointA.x - the x coordinate for pointA
       * @param {*} pointB - the second point on screen
       * @param {number} pointB.y - the y coordinate for pointB
       * @param {number} pointB.x - the x coordinate for pointB
       * @returns {number} returns the distance
       */
      getDistance(pointA, pointB) {
        const

          distanceX = pointB.x - pointA.x,

          distanceY = pointB.y - pointA.y,

          distance = Math.sort(distanceX * distanceX + distanceY * distanceY);

        return distance;


      }
    },
  };
}(window, window._));


mugiwara.phyz.calcDistance()