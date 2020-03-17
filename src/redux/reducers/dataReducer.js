// Initial State
import {builderDataElement, gridData, cardData } from '../../config/dataSkeletons';
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
import { updateColumnSpacing, setColumnWidth, deleteSelectedcolumn, addNewColumn, setRowReverse, setRowHorizontalAlignment, setRowVerticalAlignment } from './utilities/gridColumns';
import { setCode,
  setCodeMinify,
  setCodeVirtualProperty,
  setCodeinnerText } from './utilities/codeColumns';
import { updateCardSpacing, updateCardHeaderSpacing, cardHeaderHideInDeviceList, setCardHeaderFlip } from './utilities/card';
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

      case 'ADD_COMPONENT_TO_CANVAS': {
        return {
          ...state,
          builderData: addComponentToCanvas(state.builderData, action.component)
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

      case 'ACTIVATE_ROW': {
        return {
          ...state,
          builderData: activateRow(state.builderData, action.device, action.rowId)
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

      case 'SET_ROW_REVERSE': {
        return {
          ...state,
          builderData: setRowReverse(state.builderData, action.dir)
        }
      }

      case 'SET_ROW_HORIZONTAL_ALIGNMENT': {
        return {
          ...state,
          builderData: setRowHorizontalAlignment(state.builderData, action.alignment)
        }
      }

      case 'SET_ROW_VERTICAL_ALIGNMENT': {
        return {
          ...state,
          builderData: setRowVerticalAlignment(state.builderData, action.alignment)
        }
      }

      case 'SET_PAGE_STATE': {
        return {
          ...state,
          builderData: setPageState(state.builderData, action.state)
        }
      }

      case 'SET_CODE': {
        return {
          ...state,
          builderData: setCode(state.builderData, action.code)
        }
      }

      case 'SET_CODE_MINIFY': {
        return {
          ...state,
          builderData: setCodeMinify(state.builderData, action.boo)
        }
      }

      case 'SET_CODE_VIRTUAL_PROPERTY': {
        return {
          ...state,
          builderData: setCodeVirtualProperty(state.builderData, action.boo)
        }
      }

      case 'SET_CODE_INNER_TEXT': {
        return {
          ...state,
          builderData: setCodeinnerText(state.builderData, action.boo)
        }
      }

      case 'UPDATE_CARD_SPACING': {
        return {
          ...state,
          builderData: updateCardSpacing(state.builderData, action.key, action.val)
        }
      }

      case 'UPDATE_CARD_HEADER_SPACING': {
        return {
          ...state,
          builderData: updateCardHeaderSpacing(state.builderData, action.key, action.val)
        }
      }

      case 'CARD_HEADER_HIDEN_IN_DEVICE_LIST': {
        return {
          ...state,
          builderData: cardHeaderHideInDeviceList(state.builderData, action.device, action.state)
        }
      }

      case 'SET_CARD_HEADER_FLIP': {
        return {
          ...state,
          builderData: setCardHeaderFlip(state.builderData, action.val)
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
        nd.state = "builder";
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
  function addComponentToCanvas(data, componentType) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {
      return page.active === true;
    });
    switch (componentType) {
      case "grid":
        activePage.component.type = componentType;
        activePage.component.data = JSON.parse(JSON.stringify(gridData));    
        break;

        case "card":
          activePage.component.type = componentType;
          activePage.component.data = JSON.parse(JSON.stringify(cardData));    
          break;
    
      default:
        break;
    }
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
      const rows = activePage.component.data.properties.data;
      _.each(rows, (row) => {
        _.each(row, (r,rowIndex) => {
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
      });
    }
    return newData
  }
  function activateRow(data, device, rowId) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {return page.active === true});
    if(activePage.component.type === "grid") {
      const rows = activePage.component.data.properties.data;
      _.each(rows, (row) => {
        _.each(row, (r,rowIndex) => {
          if(rowIndex === rowId) {
            r.active = true;
            activePage.component.data.activeRow = rowIndex
          } else {
            r.active = false;
          }
        })
      });
    }
    return newData;
  }
  function setPageState(data, state) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {
      return page.active === true;
    });
    activePage.state = state;
    return newData;
}
  export default dataReducer;