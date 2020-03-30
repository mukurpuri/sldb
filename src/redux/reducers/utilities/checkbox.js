import _ from 'lodash';

function setCheckBoxText(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.label = val;
    return newData;
}

function setCheckBoxDisabled(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.isDisabled = val;
    return newData;
}

function setCheckBoxFloat(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.float = val;
    return newData;
}
function setCheckBoxSpacing(data, key, val) {
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
function setCheckBoxState(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.checked = val;
    return newData;
}
function setCheckBoxShowError(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.showError = val;
    return newData;
}
function setCheckBoxShowRequired(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.isRequired = val;
    return newData;
}
function setCheckBoxShowErrorLabel(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.errorLabel = val;
    return newData;
}

export {
    setCheckBoxText,
    setCheckBoxDisabled,
    setCheckBoxFloat,
    setCheckBoxState,
    setCheckBoxSpacing,
    setCheckBoxShowError,
    setCheckBoxShowRequired,
    setCheckBoxShowErrorLabel
}