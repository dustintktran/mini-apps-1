
const regexify = (JSONstring) => { //Removes special characters from JSON string and parses it
  // console.log(JSONstring)
  let regex = /[\n\r;]/g
  let obj = JSON.parse(JSONstring.replace(regex,""))
  return convert(obj);
}

const convert = (obj) => { //converts JSON to CSV string
  let finalString = '';
  let keys = Object.keys(obj);
  for(var i = 0; i < keys.length - 1; i++) {
    if(i !== (keys.length - 2)){
      finalString = finalString + keys[i] + ',';
    } else {
      finalString = finalString + keys[i];
    }
  }
  const convert1 = (oneObj) => {
  }
  return finalString;
}

module.exports.regexify = regexify;
