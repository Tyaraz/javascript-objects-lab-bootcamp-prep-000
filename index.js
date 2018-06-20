var recipe = {};

function updateObjectWithKeyAndValue (obj, key, value){
  return Object.assign({}, obj, {[key]:value})
}

updateObjectWithKeyAndValue(recipe, 'chocolate','1 cup')

