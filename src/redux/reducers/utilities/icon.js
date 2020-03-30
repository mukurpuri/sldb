import _ from 'lodash';
function updateIconSpacing(data, key, val) {
    const newData = data.slice();
    const type = val.split("-")[1];
    const activePage = _.find(newData, page => {return page.active === true});
    switch(type) {
        case 'm':
        activePage.component.data.spacings.margin[key] = val
        break

        case 'p':
        activePage.component.data.spacings.padding[key] = val
        break

        default:
        console.log("undefined");
    }
    return newData;
}
function setIconColor(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.color = val;
    return newData;
}
function setIconSize(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.size = val;
    return newData;
}
function setIcon(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.name = val.name;
  activePage.component.data.type = val.type;
  return newData;
}
function setIconFloat(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.float = val;
    return newData;
}
function setIconFlip(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.flip = val;
    return newData;
}
function setIconDescription(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.description = val;
    return newData;
}

export {
    updateIconSpacing,
    setIconColor,
    setIconSize,
    setIcon,
    setIconFloat,
    setIconFlip,
    setIconDescription
}