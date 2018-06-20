var recipe = {};

function updateObjectWithKeyAndValue (obj, key, value){
  return Object.assign({}, obj, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValur(obj, key, value){
  
  obj[key]=value
  return obj
}

function destructivelyUpdateObjectWithKeyAndValur
