import _ from 'lodash';

function updateRadioSpacing(data, key, val) {
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
function setRadioLabelValue(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.label = val;
    return newData;
}
function setRadioHasLabel(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.hasLabel = (val === "true");
    return newData;
}
function setRadioIsRequired(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.isRequired = (val === "true");
    return newData;
}
function setRadioIsDisabled(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.isDisabled = (val === "true");
    _.each(activePage.component.data.radioButtons, radioButton => {
        radioButton.isDisabled = (val === "true")
    })
    return newData;
}
function setRadioHasError(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.hasError = (val === "true");
    return newData;
}
function setRadioErrorText(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.erroLabel = val;
    return newData;
}
function setRadioButtonText(data, val, index) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.radioButtons[index].text = val;
    return newData;
}
function setRadioButtonDisabled(data, val, index) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.radioButtons[index].isDisabled = val;
    return newData;
}

function setRadioDirection(data, val, index) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.floatChildren = val;
    return newData;
}
function setRadioSpacing(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.innerGapping = val;
    return newData;
}
function deleteRadioButton(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    const newRadios = [];
    _.each(activePage.component.data.radioButtons, (radioButton, index) => {
        if(index === val) {
        } else {
            newRadios.push(radioButton);
        }
    })
    activePage.component.data.radioButtons = newRadios;
    return newData;
}
function addNewRadioButton(data) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    let radios = activePage.component.data.radioButtons;
    radios.push({
        text: "Radio Label",
        isDisabled: false
    });
    activePage.component.data.radioButtons = radios;
    return newData;
}


export {
    updateRadioSpacing,
    setRadioLabelValue,
    setRadioHasLabel,
    setRadioIsRequired,
    setRadioIsDisabled,
    setRadioHasError,
    setRadioErrorText,
    setRadioButtonText,
    setRadioButtonDisabled,
    setRadioDirection,
    setRadioSpacing,
    deleteRadioButton,
    addNewRadioButton
}