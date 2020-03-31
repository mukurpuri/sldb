import _ from 'lodash';

function updateInputSpacing(data, key, val) {
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
function setHasLabel(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.hasLabel = (val === 'true');
    return newData;
}
function setInputLabel(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.label = val;
    return newData;
}
function setInputDisable(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.isDisabled = (val === 'true');
    return newData;
}
function setInputRequire(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.isRequired = (val === 'true');
    return newData;
}
function setInputReadOnly(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.readOnly = (val === 'true');
    return newData;
}
function setInputValue(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.value = val;
    return newData;
}
function setInputPlaceholder(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.placeholder = val;
    return newData;
}
function setInputSetError(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.hasError = (val === 'true');
    return newData;
}
function setInputSetErrorText(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.errorLabel = val;
    return newData;
}
function setInputIcon(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.hasIcon = (val === 'true');
    return newData;
}
function setInputIconDirection(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.icon.direction = val;
    return newData;
}
function setInputIconData(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.icon.name = val.name;
    activePage.component.data.icon.type = val.type;
    return newData;
}
function setInputShowClearIcon(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.clearButton = (val === 'true');
    return newData;
}
function setInputShowInlineHelp(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.inlineHelp.visible = (val === 'true');
    return newData;
}
function setInputInlineHelpText(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.inlineHelp.text = val;
    return newData;
}

export {
    updateInputSpacing,
    setHasLabel,
    setInputLabel,
    setInputRequire,
    setInputDisable,
    setInputReadOnly,
    setInputValue,
    setInputPlaceholder,
    setInputSetError,
    setInputSetErrorText,
    setInputIcon,
    setInputIconDirection,
    setInputIconData,
    setInputShowClearIcon,
    setInputShowInlineHelp,
    setInputInlineHelpText
}