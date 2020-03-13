import _ from 'lodash';
function setCode(data, code) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.code.lightning  = code.trim();
    return newData;
}
function setCodeMinify(data, boo) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.code.isMinified  = boo;
    return newData;
}
function setCodeVirtualProperty(data, boo) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.code.allowVirtualProperties  = boo;
    return newData;
}
function setCodeinnerText(data, boo) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.code.innerText  = boo;
    return newData;
}
export {
    setCode,
    setCodeMinify,
    setCodeVirtualProperty,
    setCodeinnerText
}
