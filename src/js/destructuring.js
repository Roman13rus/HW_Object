export default function itemDesstruct(obj) {
  const attackArr = [];
  obj.special.forEach((item) => {
    const attacObj = {};
    const {
      id, name, icon, description = 'Недоступно',
    } = item;
    attacObj.id = id;
    attacObj.name = name;
    attacObj.icon = icon;
    attacObj.description = description;
    attackArr.push(attacObj);
  });
  return attackArr;
}
