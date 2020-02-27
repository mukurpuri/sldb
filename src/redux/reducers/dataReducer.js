// Initial State
import { builderData, builderDataElement, gridData } from '../../config/dataSkeletons';
import _ from 'lodash';
const initialState = {
    builderData: []
  };
  
  // Reducers (Modifies The State And Returns A New State)
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case 'GET_BUILDER_DATA': {
        return {
          ...state,
          builderData: action.data,
        }
      }

      case 'DELETE_NEW_PAGE': {
        return {
          ...state,
          builderData: deletePage(state.builderData, action.data),
        }
      }

      case 'SET_BUILDER_DATA': {
        return {
          ...state,
          builderData: action.data,
        }
      }

      case 'CREATE_NEW_PAGE': {
        return {
          ...state,
          builderData: addNewPage(state.builderData, action.data)        
        }
      }

      case 'MAKE_PAGE_ACTIVE': {
        return{
          ...state,
          builderData: makePageActive(state.builderData, action.data)
        }
      }

      case 'UPDATE_PAGE_NAME': {
        return {
          ...state,
          builderData: updatePageName(state.builderData, action.data)
        }
      }

      case 'ADD_GRID_TO_CANVAS': {
        return {
          ...state,
          builderData: addGridToCanvas(state.builderData)
        }
      }

      case 'SET_ACTIVE_GRID_DEVICE': {
        return {
          ...state,
          builderData: setActiveGridDevice(state.builderData, action.data)
        }
      }

      case 'ACTIVATE_COLUMN': {
        return {
          ...state,
          builderData: activateColumn(state.builderData, action.id, action.device, action.rowId)
        }
      }
  
      // Default
      default: {
        return state;
      }
    }
  };
  function updatePageName(data, val) {
    var newData = data.slice();
    _.map(newData, d => {
      if(d.active === true) {
        d.name = val;
      }
    });
    return newData
  }
  function deletePage(data, id) {
    var newData = data.slice();
    var pageActiveIndex  = _.findIndex(data, d => {
      return d.active === true && id === d.id;
    });
    
    _.remove(newData, page => {
      return page.id === id;
    });

    if(pageActiveIndex > 0) {
      if(newData.length === 1) {
        newData[0].active = true
      } else {
        newData[pageActiveIndex - 1].active = true
      }
    }
    if(pageActiveIndex === 0) {
      if(newData.length === 0) {
        newData = [];
      } else {
        newData[pageActiveIndex].active = true
      }
    }

    return newData;
  }

  function makePageActive(data, id) {
    var newData = data.slice();
    _.map(newData, nd => {
      if(nd.id === id) {
        nd.active = true;
      } else {
        nd.active = false;
      }
    })
    return newData;
  }

  function addNewPage(data) {
    var newData = data.slice();
    if(newData.length < 50) {
      var newBuilderDataElement = JSON.parse(JSON.stringify(builderDataElement));
      if(Array.isArray(data)) {
        _.map(newData, nd => {
          nd.active = false;
        })
        newBuilderDataElement.id = '_' + Math.random().toString(36).substr(2, 9);
        newBuilderDataElement.name = "Page " + getPageNumber(data);
        newBuilderDataElement.active = true;
        newData.push(newBuilderDataElement);
      }
    }
    return newData;
  }

  function getPageNumber(data) {
    var pageNumbers = [];
    var page = 0;
    if(data.length > 0) {
      _.each(data, p => {
        if(p.name.indexOf("Page") >= 0) {
          pageNumbers.push(parseInt(p.name.split(" ")[1]))
        } else {
          pageNumbers.push(0)
        }
      });
      page = _.max(pageNumbers);
    }
    return page + 1;
  }

  function addGridToCanvas(data) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {
      return page.active === true;
    });
    activePage.component.type = "grid";
    activePage.component.data = JSON.parse(JSON.stringify(gridData));
    return newData;
  }
  function  setActiveGridDevice(data, device) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {
      return page.active === true;
    });
    activePage.component.data.activeEditor = device;
    return newData;
  }
  function activateColumn(data, id, device, rowId) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    if(activePage.component.type === "grid") {
        if(activePage.component.data.activeEditor === device) {
          const rows = activePage.component.data.properties.data[device];
          _.each(rows, (row, rowIndex) => {
            if(rowIndex === rowId) {
              row.active = true;
            } else {
              row.active = false;
            }
            _.each(row.cols, (col, colIndex) => {
              col.active = false;
              if(rowIndex === rowId) {
                if(colIndex === id) {
                  col.active = true;
                }
              }
            })
          });
        }
    }
    return newData
  }
  export default dataReducer;