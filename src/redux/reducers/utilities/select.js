import _ from 'lodash';

function updateSelectSpacing(data, key, val) {
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
function setSelectLabelValue(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.label = val;
    return newData;
}
function setSelectHasLabel(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.hasLabel = (val === "true");
    return newData;
}
function setSelectIsRequired(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.isRequired = (val === "true");
    return newData;
}
function setSelectIsDisabled(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.isDisabled = (val === "true");
    _.each(activePage.component.data.radioButtons, radioButton => {
        radioButton.isDisabled = (val === "true")
    })
    return newData;
}
function setSelectHasError(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.hasError = (val === "true");
    return newData;
}
function setSelectErrorText(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.erroLabel = val;
    return newData;
}
export {
    updateSelectSpacing,
    setSelectLabelValue,
    setSelectHasLabel,
    setSelectIsRequired,
    setSelectIsDisabled,
    setSelectHasError,
    setSelectErrorText,
}