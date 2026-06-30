const nunavutCities = [
  "Arviat", "Baker Lake", "Cambridge Bay", "Cape Dorset", "Chesterfield Inlet",
  "Coral Harbour", "Gjoa Haven", "Iqaluit", "Rankin Inlet", "Resolute",
  "Whale Cove",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < nunavutCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(nunavutCities[i]);
}

module.exports = { batches };
