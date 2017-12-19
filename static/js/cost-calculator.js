$(function() {

  const $executions = $('[name="executions"]');
  const $memory = $('[name="memory"]');
  const $durations = $('[name="duration"]');
  const $freeTier = $('#freetier-checked');

  const $requestsCost = $('#requests-cost');
  const $executionsCost = $('#executions-cost');
  const $totalCost = $('#total-cost');

  function _round(x) { return Math.round(x*1000)/1000; }

  function renderCosts(costs) {
    $requestsCost.html(`$${_round(costs[0])}/month`);
    $executionsCost.html(`$${_round(costs[1])}/month`);
    $totalCost.html(`$${_round(costs[0] + costs[1])}/month`);
  }

  function updateCosts() {
    const executions = parseInt($executions.val());
    const memory = parseInt($memory.val());
    const averageDuration = parseInt($durations.val());
    const freeTier = $freeTier.prop('checked');

    if (!executions || !memory || !averageDuration) {
      renderCosts([0,0]);
      return;
    }

    const executionsCount = freeTier ? (executions - 1000000) : executions;
    let requestCosts = 0;
    if (executionsCount > 0) {
      requestCosts = (executionsCount / 1000000) * .20;
    }

    const computeSeconds = executions * (averageDuration/1000);
    const computeGBS = computeSeconds * (memory/1024);
    const totalCompute = freeTier ? (computeGBS - 400000) : computeGBS;

    var executionCosts = 0;

    if (totalCompute > 0) {
      executionCosts = totalCompute * 0.00001667;
    }

    renderCosts([requestCosts, executionCosts]);
  }

  $executions.on('keyup', updateCosts);
  $memory.on('change', updateCosts);
  $freeTier.on('change', updateCosts);
  $durations.on('keyup', updateCosts);
});
