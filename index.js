var fs = require('fs')
var path = require('path')

var SATWords = {
  getWords: getWords
}

function getWords(callback){
  words = []
  var rl = require('readline').createInterface({
    input: require('fs').createReadStream('word-list.txt')
  });

  rl.on('line', function(line) {
    words.push(line.split(" ")[0])
  });
  rl.on('close', function(){
    callback(words)
  })
}

module.exports = SATWords
