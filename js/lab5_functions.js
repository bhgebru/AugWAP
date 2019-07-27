/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if(Array.isArray(expected)) {
    if(! Array.isArray(found)) {
      return "TEST FAILED.  Expected [" + found  + "] found [" + expected + " ] ";
    }
    if(expected.length != found.length )
      return "TEST FAILED.  Expected [" + found  + "] found [" + expected + " ] ";
    for(var i=0; i < found.length; i++) {
      if(expected[i] !== found[i])
        return "TEST FAILED.  Expected [" + found  + "] found [" + expected + " ] ";
    }
    return "TEST SUCCEEDED";
  }
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + found  + " found " + expected;
  }
}
function max(num1, num2) {
  //return ( num1 > num2 ? num1 : num2);
  if (num1 > num2)
    return num1;
  return num2;
}
function maxOfThree(num1, num2, num3) {
  var tempMax= max(num1, num2);
  if(tempMax > num3)
    return tempMax;
  return num3;
}
function isVowel(str) {
  if((typeof str !== "string"))
    return false;
  if(str.length > 1)
    return false;
  var vowels= ["a", "e", "i", "o", "u"];
  return (-1 != vowels.indexOf(str));
}
function sum(numbers ) {
  if(! Array.isArray(numbers) )
    return 0;
  var resultSum=0;
  for(var i=0; i < numbers.length; i++)
    resultSum+= numbers[i];
  return resultSum;
}
function multiply(numbers ) {
  if(! Array.isArray(numbers))
    return 1;
  var resultProduct=1;
  for(var i=0; i < numbers.length; i++)
    resultProduct = resultProduct * numbers[i];
  return resultProduct;
}
function reverse(str) {
  var res="";
  for( var i=0; i < str.length; i++ )
    res = str[i] + res;
  return res;
}
function findLongestWord(strList){
  if( ! Array.isArray(strList) )
    return -1;
  var longestLen= strList[0].length;
  for( var i=1; i < strList.length; i++ )
    if( strList[i].length > longestLen )
      longestLen= strList[i].length;
  return longestLen;
}
function filterLongWords(strArray, minWordLength) {
  if( ! Array.isArray(strArray))
    return -1;
  var resArray= strArray.filter(function(elem, i, array) {
    return elem.length >= minWordLength;
  });
  console.log(resArray.length);
  return resArray;
}
function getMultipliedBy10 (numArray) {
  const res = numArray.map(function(elem, i, array) {
    return elem * 10;
  });
  return res;
}
function getElementsEqualtoThree(numArray) {
  const res = numArray.filter(function(elem, i, numArray){
    return elem === 3;});
  return res;
}
function getArrayProduct(numArray) {
  var totalProduct = numArray.reduce(function (accumulator, num) {
    return accumulator * num; }, 1);
  return totalProduct;
}
