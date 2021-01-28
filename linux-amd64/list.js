
var soljsonSources = [
  "solc-linux-amd64-v0.8.1+commit.df193b15",
  "solc-linux-amd64-v0.8.0+commit.c7dfd78e",
  "solc-linux-amd64-v0.7.6+commit.7338295f",
  "solc-linux-amd64-v0.7.5+commit.eb77ed08",
  "solc-linux-amd64-v0.7.4+commit.3f05b770",
  "solc-linux-amd64-v0.7.3+commit.9bfce1f6",
  "solc-linux-amd64-v0.7.2+commit.51b20bc0",
  "solc-linux-amd64-v0.7.1+commit.f4a555be",
  "solc-linux-amd64-v0.7.0+commit.9e61f92b",
  "solc-linux-amd64-v0.6.12+commit.27d51765",
  "solc-linux-amd64-v0.6.11+commit.5ef660b1",
  "solc-linux-amd64-v0.6.10+commit.00c0fcaf",
  "solc-linux-amd64-v0.6.9+commit.3e3065ac",
  "solc-linux-amd64-v0.6.8+commit.0bbfe453",
  "solc-linux-amd64-v0.6.7+commit.b8d736ae",
  "solc-linux-amd64-v0.6.6+commit.6c089d02",
  "solc-linux-amd64-v0.6.5+commit.f956cc89",
  "solc-linux-amd64-v0.6.4+commit.1dca32f3",
  "solc-linux-amd64-v0.6.3+commit.8dda9521",
  "solc-linux-amd64-v0.6.2+commit.bacdbe57",
  "solc-linux-amd64-v0.6.1+commit.e6f7d5a4",
  "solc-linux-amd64-v0.6.0+commit.26b70077",
  "solc-linux-amd64-v0.5.17+commit.d19bba13",
  "solc-linux-amd64-v0.5.16+commit.9c3226ce",
  "solc-linux-amd64-v0.5.15+commit.6a57276f",
  "solc-linux-amd64-v0.5.14+commit.01f1aaa4",
  "solc-linux-amd64-v0.5.13+commit.5b0b510c",
  "solc-linux-amd64-v0.5.12+commit.7709ece9",
  "solc-linux-amd64-v0.5.11+commit.22be8592",
  "solc-linux-amd64-v0.5.10+commit.5a6ea5b1",
  "solc-linux-amd64-v0.5.9+commit.c68bc34e",
  "solc-linux-amd64-v0.5.8+commit.23d335f2",
  "solc-linux-amd64-v0.5.7+commit.6da8b019",
  "solc-linux-amd64-v0.5.6+commit.b259423e",
  "solc-linux-amd64-v0.5.5+commit.47a71e8f",
  "solc-linux-amd64-v0.5.4+commit.9549d8ff",
  "solc-linux-amd64-v0.5.3+commit.10d17f24",
  "solc-linux-amd64-v0.5.2+commit.1df8f40c",
  "solc-linux-amd64-v0.5.1+commit.c8a2cb62",
  "solc-linux-amd64-v0.5.0+commit.1d4f565a",
  "solc-linux-amd64-v0.4.26+commit.4563c3fc",
  "solc-linux-amd64-v0.4.25+commit.59dbf8f1",
  "solc-linux-amd64-v0.4.24+commit.e67f0147",
  "solc-linux-amd64-v0.4.23+commit.124ca40d",
  "solc-linux-amd64-v0.4.22+commit.4cb486ee",
  "solc-linux-amd64-v0.4.21+commit.dfe3193c",
  "solc-linux-amd64-v0.4.20+commit.3155dd80",
  "solc-linux-amd64-v0.4.19+commit.c4cbbb05",
  "solc-linux-amd64-v0.4.18+commit.9cf6e910",
  "solc-linux-amd64-v0.4.17+commit.bdeb9e52",
  "solc-linux-amd64-v0.4.16+commit.d7661dd9",
  "solc-linux-amd64-v0.4.15+commit.8b45bddb",
  "solc-linux-amd64-v0.4.14+commit.c2215d46",
  "solc-linux-amd64-v0.4.13+commit.0fb4cb1a",
  "solc-linux-amd64-v0.4.12+commit.194ff033",
  "solc-linux-amd64-v0.4.11+commit.68ef5810",
  "solc-linux-amd64-v0.4.10+commit.9e8cc01b"
];
var soljsonReleases = {
  "0.8.1": "solc-linux-amd64-v0.8.1+commit.df193b15",
  "0.8.0": "solc-linux-amd64-v0.8.0+commit.c7dfd78e",
  "0.7.6": "solc-linux-amd64-v0.7.6+commit.7338295f",
  "0.7.5": "solc-linux-amd64-v0.7.5+commit.eb77ed08",
  "0.7.4": "solc-linux-amd64-v0.7.4+commit.3f05b770",
  "0.7.3": "solc-linux-amd64-v0.7.3+commit.9bfce1f6",
  "0.7.2": "solc-linux-amd64-v0.7.2+commit.51b20bc0",
  "0.7.1": "solc-linux-amd64-v0.7.1+commit.f4a555be",
  "0.7.0": "solc-linux-amd64-v0.7.0+commit.9e61f92b",
  "0.6.12": "solc-linux-amd64-v0.6.12+commit.27d51765",
  "0.6.11": "solc-linux-amd64-v0.6.11+commit.5ef660b1",
  "0.6.10": "solc-linux-amd64-v0.6.10+commit.00c0fcaf",
  "0.6.9": "solc-linux-amd64-v0.6.9+commit.3e3065ac",
  "0.6.8": "solc-linux-amd64-v0.6.8+commit.0bbfe453",
  "0.6.7": "solc-linux-amd64-v0.6.7+commit.b8d736ae",
  "0.6.6": "solc-linux-amd64-v0.6.6+commit.6c089d02",
  "0.6.5": "solc-linux-amd64-v0.6.5+commit.f956cc89",
  "0.6.4": "solc-linux-amd64-v0.6.4+commit.1dca32f3",
  "0.6.3": "solc-linux-amd64-v0.6.3+commit.8dda9521",
  "0.6.2": "solc-linux-amd64-v0.6.2+commit.bacdbe57",
  "0.6.1": "solc-linux-amd64-v0.6.1+commit.e6f7d5a4",
  "0.6.0": "solc-linux-amd64-v0.6.0+commit.26b70077",
  "0.5.17": "solc-linux-amd64-v0.5.17+commit.d19bba13",
  "0.5.16": "solc-linux-amd64-v0.5.16+commit.9c3226ce",
  "0.5.15": "solc-linux-amd64-v0.5.15+commit.6a57276f",
  "0.5.14": "solc-linux-amd64-v0.5.14+commit.01f1aaa4",
  "0.5.13": "solc-linux-amd64-v0.5.13+commit.5b0b510c",
  "0.5.12": "solc-linux-amd64-v0.5.12+commit.7709ece9",
  "0.5.11": "solc-linux-amd64-v0.5.11+commit.22be8592",
  "0.5.10": "solc-linux-amd64-v0.5.10+commit.5a6ea5b1",
  "0.5.9": "solc-linux-amd64-v0.5.9+commit.c68bc34e",
  "0.5.8": "solc-linux-amd64-v0.5.8+commit.23d335f2",
  "0.5.7": "solc-linux-amd64-v0.5.7+commit.6da8b019",
  "0.5.6": "solc-linux-amd64-v0.5.6+commit.b259423e",
  "0.5.5": "solc-linux-amd64-v0.5.5+commit.47a71e8f",
  "0.5.4": "solc-linux-amd64-v0.5.4+commit.9549d8ff",
  "0.5.3": "solc-linux-amd64-v0.5.3+commit.10d17f24",
  "0.5.2": "solc-linux-amd64-v0.5.2+commit.1df8f40c",
  "0.5.1": "solc-linux-amd64-v0.5.1+commit.c8a2cb62",
  "0.5.0": "solc-linux-amd64-v0.5.0+commit.1d4f565a",
  "0.4.26": "solc-linux-amd64-v0.4.26+commit.4563c3fc",
  "0.4.25": "solc-linux-amd64-v0.4.25+commit.59dbf8f1",
  "0.4.24": "solc-linux-amd64-v0.4.24+commit.e67f0147",
  "0.4.23": "solc-linux-amd64-v0.4.23+commit.124ca40d",
  "0.4.22": "solc-linux-amd64-v0.4.22+commit.4cb486ee",
  "0.4.21": "solc-linux-amd64-v0.4.21+commit.dfe3193c",
  "0.4.20": "solc-linux-amd64-v0.4.20+commit.3155dd80",
  "0.4.19": "solc-linux-amd64-v0.4.19+commit.c4cbbb05",
  "0.4.18": "solc-linux-amd64-v0.4.18+commit.9cf6e910",
  "0.4.17": "solc-linux-amd64-v0.4.17+commit.bdeb9e52",
  "0.4.16": "solc-linux-amd64-v0.4.16+commit.d7661dd9",
  "0.4.15": "solc-linux-amd64-v0.4.15+commit.8b45bddb",
  "0.4.14": "solc-linux-amd64-v0.4.14+commit.c2215d46",
  "0.4.13": "solc-linux-amd64-v0.4.13+commit.0fb4cb1a",
  "0.4.12": "solc-linux-amd64-v0.4.12+commit.194ff033",
  "0.4.11": "solc-linux-amd64-v0.4.11+commit.68ef5810",
  "0.4.10": "solc-linux-amd64-v0.4.10+commit.9e8cc01b"
};

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': soljsonSources,
    'releases': soljsonReleases
  };
