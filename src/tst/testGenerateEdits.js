const generateEdits = require('../scripts/generateEdits');
const tList = [
  {
    "input": "/home/o99b/proj/node-video-tool/src/tst/tVid0.webm",
    "output": "/home/o99b/proj/node-video-tool/src/tst/tCuts/tExVid0.mp4",
    "timePairs": [
      ["52","1:36"],
      ["1:31", "2:32"]
    ]
  },{
    "input": "/home/o99b/proj/node-video-tool/src/tst/tVid1.webm",
    "output": "/home/o99b/proj/node-video-tool/src/tst/tCuts/",
    "timePairs": [
      ["53","1:35"],
      ["1:31", "2:32"]
    ]
  }
];

console.log(tList.reduce( generateEdits, [] ))
