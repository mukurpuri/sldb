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
    activePage.component.data.header.hidden.push((device !== "hide" ? "slds-hide_" : "slds-") + device);
  } else {
    activePage.component.data.header.hidden.pop((device !== "hide" ? "slds-hide_" : "slds-") + device);
  }
  return newData;
}

function setCardHeaderFlip(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.header.flip = val;
  return newData;
}

function updateCardHeaderIconSpacing(data, key, value) {
  const newData = data.slice();
  const type = value.split("-")[1];
  const activePage = _.find(newData, page => {return page.active === true});
  switch(type) {
    case 'm':
    activePage.component.data.header.icon.spacings.margin[key] = value
    break

    case 'p':
      activePage.component.data.header.icon.spacings.padding[key] = value
    break

    default:
    console.log("undefined");
  }
  return newData;
}
function cardHeaderIconHideInDeviceList(data, device, state) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  if(state) {
    activePage.component.data.header.icon.hidden.push((device !== "hide" ? "slds-hide_" : "slds-") + device);
  } else {
    activePage.component.data.header.icon.hidden.pop((device !== "hide" ? "slds-hide_" : "slds-") + device);
  }
  return newData;
}
function setCardHeaderIconFlip(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.header.icon.flip = val;
  return newData;
}

function setCardHeaderIcon(data, icon) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.header.icon.name = icon.name;
  activePage.component.data.header.icon.type = icon.type;
  return newData;
}

function setCardHeaderIconSize(data, iconSize) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.header.icon.size = iconSize;
  return newData;
}

function setCardHeaderIconColor(data, color) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.header.icon.color = color;
  return newData;
}

function updateCardHeaderTitleSpacing(data, key, value) {
  const newData = data.slice();
  const type = value.split("-")[1];
  const activePage = _.find(newData, page => {return page.active === true});
  switch(type) {
    case 'm':
    activePage.component.data.header.title.spacings.margin[key] = value
    break

    case 'p':
      activePage.component.data.header.title.spacings.padding[key] = value
    break

    default:
    console.log("undefined");
  }
  return newData;
}
function cardHeaderTitleHideInDeviceList(data, device, state) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  if(state) {
    activePage.component.data.header.title.hidden.push((device !== "hide" ? "slds-hide_" : "slds-") + device);
  } else {
    activePage.component.data.header.title.hidden.pop((device !== "hide" ? "slds-hide_" : "slds-") + device);
  }
  return newData;
}
function setCardHeaderTitleAlign(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.header.title.align = val;
  return newData;
}
function setCardHeaderTitleText(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.header.title.text = val;
  return newData;
}
function setCardHeaderTitleSize(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.header.title.size = val;
  return newData;
}
function setCardHeaderTitleColor(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.header.title.color = val;
  return newData;
}
function setCardHeaderAlignment(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.header.alignment = val;
  return newData;
}
function updateCardHeaderButtonSpacing(data, key, value) {
  const newData = data.slice();
  const type = value.split("-")[1];
  const activePage = _.find(newData, page => {return page.active === true});
  switch(type) {
    case 'm':
    activePage.component.data.header.button.spacings.margin[key] = value
    break

    case 'p':
      activePage.component.data.header.button.spacings.padding[key] = value
    break

    default:
    console.log("undefined");
  }
  return newData;
}
function cardHeaderButtonHideInDeviceList(data, device, state) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  if(state) {
    activePage.component.data.header.button.hidden.push((device !== "hide" ? "slds-hide_" : "slds-") + device);
  } else {
    activePage.component.data.header.button.hidden.pop((device !== "hide" ? "slds-hide_" : "slds-") + device);
  }
  return newData;
}
function setCardHeaderButtonText(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.header.button.text = val;
  return newData;
}
function setCardHeaderButtonTheme(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.header.button.theme = val;
  return newData;
}
function setCardHeaderButtonStreched(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.header.button.streched = val;
  return newData;
}
function setCardHeaderButtonStrong(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.header.button.strong = val;
  return newData;
}
function setCardHeaderButtonDisabled(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.header.button.isDisabled = val;
  return newData;
}
function updateCardBodySpacing(data, key, value) {
  const newData = data.slice();
  const type = value.split("-")[1];
  const activePage = _.find(newData, page => {return page.active === true});
  switch(type) {
    case 'm':
    activePage.component.data.body.spacings.margin[key] = value
    break

    case 'p':
      activePage.component.data.body.spacings.padding[key] = value
    break

    default:
    console.log("undefined");
  }
  return newData;
}
function cardBodyHideInDeviceList(data, device, state) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  if(state) {
    activePage.component.data.body.hidden.push((device !== "hide" ? "slds-hide_" : "slds-") + device);
  } else {
    activePage.component.data.body.hidden.pop((device !== "hide" ? "slds-hide_" : "slds-") + device);
  }
  return newData;
}
function setCardBodyText(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.body.text = val;
  return newData;
}
function setCardBodyAlign(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.body.align = val;
  return newData;
}
function setCardBodyColor(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.body.color = val;
  return newData;
}
function setCardBodySize(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.body.size = val;
  return newData;
}

function setHeaderButtonIcon(data, icon) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.header.button.icon.name = icon.name;
  activePage.component.data.header.button.icon.type = icon.type;
  return newData;
}
function updateCardFooterSpacing(data, key, value) {
  const newData = data.slice();
  const type = value.split("-")[1];
  const activePage = _.find(newData, page => {return page.active === true});
  switch(type) {
    case 'm':
    activePage.component.data.footer.spacings.margin[key] = value
    break

    case 'p':
      activePage.component.data.footer.spacings.padding[key] = value
    break

    default:
    console.log("undefined");
  }
  return newData;
}
function cardFooterHideInDeviceList(data, device, state) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  if(state) {
    activePage.component.data.footer.hidden.push((device !== "hide" ? "slds-hide_" : "slds-") + device);
  } else {
    activePage.component.data.footer.hidden.pop((device !== "hide" ? "slds-hide_" : "slds-") + device);
  }
  return newData;
}
function setCardFooterText(data, val) {
  const newData = data.slice();
  const activePage = _.find(newData, page => {return page.active === true});
  activePage.component.data.footer.text = val;
  return newData;
}

export {
    updateCardFooterSpacing,
    cardFooterHideInDeviceList,
    setCardFooterText,
    updateCardBodySpacing,
    setHeaderButtonIcon,
    setCardBodyAlign,
    setCardBodyColor,
    setCardBodySize,
    setCardBodyText,
    cardBodyHideInDeviceList,
    updateCardSpacing,
    updateCardHeaderSpacing,
    cardHeaderHideInDeviceList,
    setCardHeaderFlip,
    updateCardHeaderIconSpacing,
    cardHeaderIconHideInDeviceList,
    setCardHeaderIconFlip,
    setCardHeaderIcon,
    setCardHeaderIconSize,
    setCardHeaderIconColor,
    updateCardHeaderTitleSpacing,
    cardHeaderTitleHideInDeviceList,
    setCardHeaderTitleAlign,
    setCardHeaderTitleText,
    setCardHeaderTitleSize,
    setCardHeaderTitleColor,
    setCardHeaderAlignment,
    updateCardHeaderButtonSpacing,
    cardHeaderButtonHideInDeviceList,
    setCardHeaderButtonText,
    setCardHeaderButtonTheme,
    setCardHeaderButtonStreched,
    setCardHeaderButtonStrong,
    setCardHeaderButtonDisabled
}
