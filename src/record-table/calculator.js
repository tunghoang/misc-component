function splitIntoBins(curveData, numBins) {
  // const sortedCurves = [...curveData].sort(
  //   (a, b) => parseFloat(a.x) - parseFloat(b.x)
  // )
  // const maxX = _.last(sortedCurves).x
  // const minX = _.first(sortedCurves).x

  const maxX = _.maxBy(curveData, curve =>
    _.isNumber(curve.x) ? curve.x : -Infinity
  ).x

  const minX = _.minBy(curveData, curve =>
    _.isNumber(curve.x) ? curve.x : Infinity
  ).x

  const xAxis = d3.scaleLinear().domain([minX, maxX])
  const histogram = d3
    .histogram()
    .value(c => c.x)
    .domain(xAxis.domain())
    .thresholds(xAxis.ticks(numBins))

  const bins = histogram(curveData)
  const sanitizedBins = bins.map(bin => sanitize(bin)).filter(bin => bin && bin.length)
  return sanitizedBins
}

function sanitize(bin) {
  //collect only element that have property x
  return bin.filter(el => _.isNumber(el.x))
}

module.exports.getNumPointInEachChunk = function(curveData, numBins) {
  const bins = splitIntoBins(curveData, numBins)
  const countMemOfEachBins = bins.map(bin => bin.length)

  return countMemOfEachBins
}

module.exports.getUpperBoundInEachChunk = function(curveData, numbBins) {
  const bins = splitIntoBins(curveData, numbBins)
  const upperBounds = bins.map(metricsInBin => _.last(metricsInBin).x)

  return upperBounds
}

module.exports.getLowerBoundInEachChunk = function(curveData, numBins) {
  const bins = splitIntoBins(curveData, numBins)
  const lowerBounds = bins.map(metricsInBin => _.first(metricsInBin).x)

  return lowerBounds
}
