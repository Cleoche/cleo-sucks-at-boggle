var randPerm = require('random-permutation');
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
const diceSet = [[' A ', ' A ', ' E ', ' E ', ' G ', ' N '], [' A ', ' O ', ' O ', ' T ', ' T ', ' W '], [' A ', ' F ', ' F ', ' K ', ' P ', ' S '], [' A ', ' C ', ' H ', ' O ', ' P ', ' S '], [' A ', ' B ', ' B ', ' J ', ' O ', ' O '], [' C ', ' I ', ' M ', ' O ', ' T ', ' U '], [' D ', ' E ', ' L ', ' R ', ' V ', ' Y '], [' D ', ' I ', ' S ', ' T ', ' T ', ' Y '], [' D ', ' E ', ' I ', ' L ', ' R ', ' X '], [' E ', ' H ', ' R ', ' T ', ' V ', ' W '], [' E ', ' E ', ' G ', ' H ', ' N ', ' W '], [' E ', ' L ', ' R ', ' T ', ' T ', ' Y '], [' E ', ' I ', ' O ', ' S ', ' S ', ' T '], [' E ', ' E ', ' I ', ' N ', ' S ', ' V '], [' H ', ' I ', ' M ', ' N ', ' Qu', ' U '], [' H ', ' L ', ' N ', ' N ', ' R ', ' Z ']];
order = randPerm(16);
order.forEach(element => element - 1);
var output = [];
for(var i = 0; i < 16; i++){
    var pushed = diceSet[order[i]];
    output.push(pushed[getRndInteger(0, 5)]);
};
var outputString = output[0] + output[1] + output[2] + output[3] + '\n' + output[4] + output[5] + output[6] + output[7] + '\n' + output[8] + output[9] + output[10] + output[11] + '\n' + output[12] + output[13] + output[14] + output[15];
console.log(outputString);