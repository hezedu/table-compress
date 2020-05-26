
function compress(header, coll, isContainHeader){ 
  var i = 0,  
    len = header.length, 
    i2 = 0, 
    len2 = coll.length,
    tbody = [],
    row,
    line;
  for(; i2 < len2; i2++){
    row = coll[i2];
    line = [];
    for(; i <len; i++){
      line.push(row[header[i]]);
    }
    tbody.push(line);
    i = 0;
  }
  if(isContainHeader){
    return [header, tbody];
  }
  return tbody;
}

function decompress(arr1, arr2){
  var header, tbody;
  if(arr1.length === 2){
    header = arr1[0];
    tbody = arr1[1];
  } else if(arr.length === 1 && arr2.length === 1){
    header = arr1;
    tbody = arr2;
  } else {
    throw new Error('not has header.');
  }
  var coll = [],
  line,
  row,
  i = 0,
  len = header.length,
  i2 = 0,
  len2 = tbody.length;
  for(; i2 < len2; i2++){
    line = tbody[i2];
    row = Object.create(null);
    for(; i < len; i++){
      row[header[i]] = line[i];
    }
    coll.push(row);
  }
  return coll;
}

module.exports = {
  compress,
  decompress
}