  import _ from 'lodash';
  
  function setRowGutter(data, selectedOption) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    activePage.component.data.properties.gutters = selectedOption;
    return newData;
  }
  function setRowHeight(data, height) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    const activeRow = parseInt(activePage.component.data.activeRow);
    const activeColumn = parseInt(activePage.component.data.activeColumn);
    
    var deviceData = activePage.component.data.properties.data;
    
    _.each(deviceData, deviceRow => {
      _.each(deviceRow, (row, index) => {
        if(index === (activeRow)) {
          console.log(row.cols);
          _.each(row.cols, col => {
              col.height = height;
          })
          row.cols[activeColumn].active = true;
          row.active = true;
        } else {
          row.cols[activeColumn].active = false;
          row.active = false;
        }
      })
    })
    return newData;
  }
  function setRowWrap(data,val) {
    // const newData = data.slice();
    // const activePage = _.find(newData, page => {return page.active === true});
    // var rows = activePage.component.data.properties.data;
    // _.each(rows, row => {
    //   _.each(row, r => {
    //     if(r.active === true) {
    //       r.wrap = val;
    //     }
    //   })
    // })
    return data;
  }
  function addRowToGrid(data) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    const devicesData = activePage.component.data.properties.data;
    _.each(devicesData, deviceRow => {
      deviceRow.push(
        {
          spacings: {
            margin: {
              top: "none",
              bottom: "none"
            },
            padding: {
              top: "none",
              bottom: "none",
            },
          },
          cols: [
            {
              height: 80,
              size: 12,
              visible: [],
              hide: [],
              active: false,
              spacings: {
                margin: {
                  top: "none",
                  bottom: "none",
                  left: "none",
                  right: "none"
                },
                padding: {
                  top: "none",
                  bottom: "none",
                  left: "none",
                  right: "none"
                },
              }
            }
          ],
          active: false
        }
      )
    });
    if(devicesData.sm.length === 1) {
      devicesData.sm[0].active = true;
      devicesData.md[0].active = true;
      devicesData.lg[0].active = true;
      devicesData.sm[0].cols[0].active = true;
      devicesData.md[0].cols[0].active = true;
      devicesData.lg[0].cols[0].active = true;
      activePage.component.data.activeRow = 0;
      activePage.component.data.activeColumn = 0;
    }
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
  function setRowPosition(data, i ,f) {

    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    var deviceData = activePage.component.data.properties.data;
    _.each(deviceData, (deviceRow, index) => {
      let temp = deviceRow[i];
      deviceRow[i] = deviceRow[f];
      deviceRow[f] = temp;
    });
    activePage.component.data.activeRow = f;
    return newData;
  }

  function updateGridSpacing(data, key, value) {
    const type = value.split("-")[1];
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    //const spacing = activePage.component.data.properties.
    switch(type) {
      case 'm':
      activePage.component.data.properties.margin[key] = value
      break

      case 'p':
      activePage.component.data.properties.padding[key] = value
      break

      default:
      console.log("undefined");
    }
    return newData;
  }

  function updateRowSpacing(data, key, value){
    const type = value.split("-")[1];
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    //const spacing = activePage.component.data.properties.
    const activeRow = (activePage.component.data.activeRow);
    switch(type) {
      case 'm':
      activePage.component.data.properties.data["sm"][activeRow].spacings.margin[key] = value;
      activePage.component.data.properties.data["md"][activeRow].spacings.margin[key] = value;
      activePage.component.data.properties.data["lg"][activeRow].spacings.margin[key] = value;
      break

      case 'p':
      activePage.component.data.properties.data["sm"][activeRow].spacings.padding[key] = value;
      activePage.component.data.properties.data["md"][activeRow].spacings.padding[key] = value;
      activePage.component.data.properties.data["lg"][activeRow].spacings.padding[key] = value;
      break

      default:
      console.log("undefined");
    }
    console.log(activePage)
    return newData;
  }

  export {
    setRowGutter,
    setRowHeight,
    setRowWrap,
    addRowToGrid,
    deleteRowFromGrid,
    setRowPosition,
    updateGridSpacing,
    updateRowSpacing
  }