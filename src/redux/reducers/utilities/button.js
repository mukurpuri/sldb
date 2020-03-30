import _ from 'lodash';
function updateButtonSpacing(data, key, val) {
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
function buttonHideInDeviceList(data, device, state) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    if(state) {
        activePage.component.data.hidden.push((device !== "hide" ? "slds-show_" : "slds-") + device);
    } else {
        activePage.component.data.hidden.pop((device !== "hide" ? "slds-show_" : "slds-") + device);
    }
    return newData;
}
function setButtonText(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.text = val;
    return newData;
}
function setButtonTheme(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.theme = val;
    return newData;
}
function setButtonStreched(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.streched = val;
  return newData;
}
function setButtonStrong(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.strong = val;
    return newData;
}
function setButtonDisabled(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.isDisabled = val;
    return newData;
}
function setButtonIcon(data, icon) {
    const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.icon.name = icon.name;
  activePage.component.data.icon.type = icon.type;
  return newData;
}
function setButtonFloat(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.float = val;
    return newData;
}
function setButtonHasIcon(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.hasIcon = val;
    return newData;
}
function setButtonHasPosition(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.icon.position = val;
    return newData;
}
function setButtonIconSize(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.icon.size = val;
    return newData;
}
function setButtonIconFlip(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.icon.flip = val;
    return newData;
}
export {
    updateButtonSpacing,
    buttonHideInDeviceList,
    setButtonText,
    setButtonTheme,
    setButtonStreched,
    setButtonStrong,
    setButtonDisabled,
    setButtonIcon,
    setButtonFloat,
    setButtonHasIcon,
    setButtonHasPosition,
    setButtonIconSize,
    setButtonIconFlip
}