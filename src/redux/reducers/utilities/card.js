import _ from 'lodash';
function updateCardSpacing(data, key, value) {
    const newData = data.slice();
    const type = value.split("-")[1];
    const activePage = _.find(newData, page => {return page.active === true});
    switch(type) {
      case 'm':
      activePage.component.data.spacings.margin[key] = value
      break

      case 'p':
        activePage.component.data.spacings.padding[key] = value
      break

      default:
      console.log("undefined");
    }
    return newData;
}
function updateCardHeaderSpacing(data, key, value) {
  const newData = data.slice();
  const type = value.split("-")[1];
  const activePage = _.find(newData, page => {return page.active === true});
  switch(type) {
    case 'm':
    activePage.component.data.header.spacings.margin[key] = value
    break

    case 'p':
      activePage.component.data.header.spacings.padding[key] = value
    break

    default:
    console.log("undefined");
  }
  return newData;
}

function cardHeaderHideInDeviceList(data, device, state) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  if(state) {
    activePage.component.data.header.hidden.push("slds-show_" + device);
  } else {
    activePage.component.data.header.hidden.pop("slds-show_" + device);
  }
  console.log(activePage.component.data.header.hidden)
  return newData;
}

function setCardHeaderFlip(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.header.flip = val;
  return newData;
}
export {
    updateCardSpacing,
    updateCardHeaderSpacing,
    cardHeaderHideInDeviceList,
    setCardHeaderFlip
}
