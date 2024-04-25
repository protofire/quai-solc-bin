
var soljsonSources = [
  "solc-linux-amd64-v0.8.19+commit.c88f40f"
];
var soljsonReleases = {
  "0.8.19": "solc-linux-amd64-v0.8.19+commit.c88f40f"
};

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': soljsonSources,
    'releases': soljsonReleases
  };
