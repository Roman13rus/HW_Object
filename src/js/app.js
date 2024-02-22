function addFinishObj(prop, obj, finishArr) {
  const itemObject = {};
  itemObject.key = prop;
  itemObject.value = obj[prop];
  finishArr.push(itemObject);
  delete obj[prop];
}

export default function orderByProps(obj, arr) {
  const finishArr = [];
  Object.keys(obj).forEach((prop) => {
    if (arr.includes(prop)) {
      addFinishObj(prop, obj, finishArr);
    }
  });
  Object.keys(obj).sort().forEach((prop) => {
    addFinishObj(prop, obj, finishArr);
  });
  return finishArr;
}
