import _ from 'lodash';
  
function updateColumnSpacing(data, key, value) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    const activeRow  = activePage.component.data.activeRow;
    const activeColumn  = activePage.component.data.activeColumn;
    const grid = activePage.component.data.properties.data;
    const type = value.split("-")[1];
    _.each(grid, devices => {
        const column = devices[activeRow].cols[activeColumn];
        switch(type) {
            case 'm':
            column.spacings.margin[key] = value;
            break
      
            case 'p':
            column.spacings.padding[key] = value;
            break
      
            default:
            console.log("undefined");
          }
    })
    return newData;
  }

  function setColumnWidth(data, size) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    const activeRow  = activePage.component.data.activeRow;
    const activeColumn  = activePage.component.data.activeColumn;
    let column = activePage.component.data.properties.data[activePage.component.data.activeEditor][activeRow].cols[activeColumn];
    column.size = size;
    return newData;
  }

  function deleteRowFromGrid(data) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    var deviceData = activePage.component.data.properties.data;
    const sm = [];
    const md = [];
    const lg = [];
    _.each(deviceData, (deviceRow, index) => {
      if(index === "sm") {
        _.each(deviceRow, dr => {
          if(dr.active === false) {
            sm.push(dr);
          }
        });
      }
      if(index === "md") {
        _.each(deviceRow, dr => {
          if(dr.active === false) {
            md.push(dr);
          }
        });
      }
      if(index === "lg") {
        _.each(deviceRow, dr => {
          if(dr.active === false) {
            lg.push(dr);
          }
        });
      }
    });
    if(sm[0]) {
      sm[0].active = true;
      md[0].active = true;
      lg[0].active = true;
      sm[0].cols[0].active = true;
      md[0].cols[0].active = true;
      lg[0].cols[0].active = true;
    }
    deviceData.sm = sm;
    deviceData.md = md;
    deviceData.lg = lg;
    activePage.component.data.activeRow = 0;
    activePage.component.data.activeColumn = 0;
    
    return newData;
  }

  function deleteSelectedcolumn(data) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    const activeRow  = activePage.component.data.activeRow;
    var deviceData = activePage.component.data.properties.data;
    _.each(deviceData, (deviceRow, index) => {
      switch(index) {
        case 'sm':
        _.each(deviceRow, dr => {
          let columns = dr.cols;
          let lsm = [];
          _.each(columns, col => {
            if(col.active !== true) {
              lsm.push(col);
            }
          });
          dr.cols = lsm;
        });
        break;

        case 'md':
        _.each(deviceRow, dr => {
          let columns = dr.cols;
          let lmd = [];
          _.each(columns, col => {
            if(col.active !== true) {
              lmd.push(col);
            }
          });
          dr.cols = lmd;
        });
        break;

        case 'lg':
        _.each(deviceRow, dr => {
          let columns = dr.cols;
          let llg = [];
          _.each(columns, col => {
            if(col.active !== true) {
              llg.push(col);
            }
          });
          dr.cols = llg;
        });
        break;

        default:
        console.log(true)
      }
    });
    if(deviceData.sm[activeRow].cols.length >= 1) {
      deviceData.sm[activeRow].cols[0].active = true;
      deviceData.md[activeRow].cols[0].active = true;
      deviceData.lg[activeRow].cols[0].active = true;
      activePage.component.data.activeColumn = 0;
    } else {
      deviceData.sm[activeRow].cols = [];
      deviceData.md[activeRow].cols = [];
      deviceData.lg[activeRow].cols = [];
      return deleteRowFromGrid(newData)
    }
    return newData;
  }

  function addNewColumn(data) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    const activeRow  = activePage.component.data.activeRow;
    var deviceData = activePage.component.data.properties.data;
    _.each(deviceData, deviceRow => {
      const colums = deviceRow[activeRow].cols;
      _.each(deviceRow[activeRow].cols, col => {
        col.active = false;
      });
      colums.push({
        height: 80,
        size: 4,
        visible: [],
        hide: [],
        active: true,
        spacings: {
          margin: {
            top: "none",
            bottom: "none"
          },
          padding: {
            top: "none",
            bottom: "none"
          },
        }
      });
    });
    activePage.component.data.activeColumn = deviceData.sm[activeRow].cols.length - 1;
    console.log(activePage.component.data)
    return newData;
  }

  function setRowReverse(data, dir) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    const activeRow  = activePage.component.data.activeRow;
    activePage.component.data.properties.data.sm[activeRow].reverse = dir;
    activePage.component.data.properties.data.lg[activeRow].reverse = dir;
    activePage.component.data.properties.data.md[activeRow].reverse = dir;
    return newData;
  }
  function setRowHorizontalAlignment(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    const activeRow  = activePage.component.data.activeRow;
    activePage.component.data.properties.data.sm[activeRow].horizontal_align = val;
    activePage.component.data.properties.data.lg[activeRow].horizontal_align = val;
    activePage.component.data.properties.data.md[activeRow].horizontal_align = val;
    return newData;
  }
  function setRowVerticalAlignment(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    const activeRow  = activePage.component.data.activeRow;
    activePage.component.data.properties.data.sm[activeRow].vertical_align = val;
    activePage.component.data.properties.data.lg[activeRow].vertical_align = val;
    activePage.component.data.properties.data.md[activeRow].vertical_align = val;
    return newData;
  }
export {
  updateColumnSpacing,
  setColumnWidth,
  deleteSelectedcolumn,
  addNewColumn,
  setRowReverse,
  setRowHorizontalAlignment,
  setRowVerticalAlignment
}
