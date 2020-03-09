// Initial State
import {builderDataElement, gridData } from '../../config/dataSkeletons';
import _ from 'lodash';
import {
  setRowGutter,
  setRowHeight,
  setRowWrap,
  addRowToGrid,
  deleteRowFromGrid,
  setRowPosition,
  updateGridSpacing,
  updateRowSpacing,
} from './utilities/gridRow';
import { updateColumnSpacing, setColumnWidth, deleteSelectedcolumn, addNewColumn } from './utilities/gridColumns';
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

      case 'SET_ROW_GUTTER': { 
        return {
          ...state,
          builderData: setRowGutter(state.builderData, action.selectedOption)
        }
      }

      case 'ACTIVATE_COLUMN': {
        return {
          ...state,
          builderData: activateColumn(state.builderData, action.id, action.device, action.rowId)
        }
      }

      case 'SET_ROW_HEIGHT': {
        return {
          ...state,
          builderData: setRowHeight(state.builderData, action.height)
        }
      }

      case 'SET_ROW_WRAP': {
        return {
          ...state,
          builderData: setRowWrap(state.builderData, action.wrap)
        }
      }

      case 'ADD_ROW_TO_GRID': {
        return {
          ...state,
          builderData: addRowToGrid(state.builderData)
        }
      }

      case 'DELETE_ROW': {
        return {
          ...state,
          builderData: deleteRowFromGrid(state.builderData)
        } 
      }

      case 'SET_ROW_POSITION': {
        return {
          ...state,
          builderData: setRowPosition(state.builderData, action.initialPosition, action.finalPosition)
        }
      }

      case 'UPDATE_GRID_SPACING': {
        return {
          ...state,
          builderData: updateGridSpacing(state.builderData, action.key, action.value)
        }
      }

      case 'UPDATE_ROW_SPACING': {
        return {
          ...state,
          builderData: updateRowSpacing(state.builderData, action.key, action.value)
        }
      }

      case 'UPDATE_COLUMN_SPACING': {
        return {
          ...state,
          builderData: updateColumnSpacing(state.builderData, action.key, action.value)
        }
      }

      case 'SET_COLUMN_SIZE': {
        return {
          ...state,
          builderData: setColumnWidth(state.builderData, action.size)
        }
      }

      case 'DELETE_SELECTED_COLUMN': {
        return {
          ...state,
          builderData: deleteSelectedcolumn(state.builderData)
        }
      }

      case 'ADD_NEW_COLUMN': {
        return {
          ...state,
          builderData: addNewColumn(state.builderData)
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
        if(true) {
          const rows = activePage.component.data.properties.data;
          _.each(rows, (row) => {
            _.each(row, (r,rowIndex) => {
              if(rowIndex === rowId) {
                r.active = true;
                activePage.component.data.activeRow = rowIndex
              } else {
                r.active = false;
              }
              _.each(r.cols, (col, colIndex) => {
                col.active = false;
                if(rowIndex === rowId) {
                  if(colIndex === id) {
                      activePage.component.data.activeColumn = colIndex
                      col.active = true;
                  }
                }
              })
            })
          })
        }
    }
    return newData
  }
  export default dataReducer;