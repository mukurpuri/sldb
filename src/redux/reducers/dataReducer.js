// Initial State
import {builderDataElement, gridData, cardData, textareaData, alertData } from '../../config/dataSkeletons';
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
  cloneRow
} from './utilities/gridRow';
import { updateColumnSpacing, setColumnWidth, deleteSelectedcolumn, addNewColumn, setRowReverse, setRowHorizontalAlignment, setRowVerticalAlignment, cloneColumn } from './utilities/gridColumns';
import { setCode,
  setCodeMinify,
  setCodeVirtualProperty,
  setCodeinnerText } from './utilities/codeColumns';
import { updateCardSpacing,
  updateCardHeaderSpacing,
  cardHeaderHideInDeviceList,
  setCardHeaderFlip,
  updateCardHeaderIconSpacing,
  cardHeaderIconHideInDeviceList,
  setCardHeaderIconFlip,
  setCardHeaderIcon,
  setCardHeaderIconSize,
  setCardHeaderIconColor,
  updateCardHeaderTitleSpacing,
  cardHeaderTitleHideInDeviceList,
  setCardHeaderTitleAlign,
  setCardHeaderTitleText,
  setCardHeaderTitleSize,
  setCardHeaderTitleColor,
  setCardHeaderAlignment,
  updateCardHeaderButtonSpacing,
  cardHeaderButtonHideInDeviceList,
  setCardHeaderButtonText,
  setCardHeaderButtonTheme,
  setCardHeaderButtonStreched,
  setCardHeaderButtonStrong,
  setCardHeaderButtonDisabled,
  updateCardBodySpacing,
  cardBodyHideInDeviceList,
  setCardBodyText,
  setCardBodyColor,
  setCardBodyAlign,
  setCardBodySize,
  setHeaderButtonIcon,
  updateCardFooterSpacing,
  cardFooterHideInDeviceList,
  setCardFooterText,
  setCardTab
 } from './utilities/card';
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

      case 'CLONE_ROW': {
        return {
          ...state,
          builderData: cloneRow(state.builderData)
        } 
      }

      case 'CLONE_COLUMN': {
        return {
          ...state,
          builderData: cloneColumn(state.builderData, action.ids)
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
          builderData: deleteSelectedcolumn(state.builderData, action.ids)
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

      case 'UPDATE_CARD_HEADER_ICON_SPACING': {
        return {
          ...state,
          builderData: updateCardHeaderIconSpacing(state.builderData, action.key, action.val)
        }
      }

      case 'CARD_HEADER_ICON_HIDEN_IN_DEVICE_LIST': {
        return {
          ...state,
          builderData: cardHeaderIconHideInDeviceList(state.builderData, action.device, action.state)
        }
      }

      case 'SET_CARD_HEADER_ICON_FLIP': {
        return {
          ...state,
          builderData: setCardHeaderIconFlip(state.builderData, action.val)
        }
      }

      case 'SET_CARD_HEADER_ICON': {
        return {
          ...state,
          builderData: setCardHeaderIcon(state.builderData, action.icon)
        }
      }

      case 'SET_CARD_HEADER_ICON_SIZE': {
        return {
          ...state,
          builderData: setCardHeaderIconSize(state.builderData, action.iconSize)
        }
      }

      case 'SET_CARD_HEADER_ICON_COLOR': {
        return {
          ...state,
          builderData: setCardHeaderIconColor(state.builderData, action.color)
        }
      }

      case 'UPDATE_CARD_HEADER_TITLE_SPACING': {
        return{
          ...state,
          builderData: updateCardHeaderTitleSpacing(state.builderData, action.key, action.val)
        }
      }
      case 'UPDATE_CARD_HEADER_TITLE_HIDEN_IN_DEVICE_LIST': {
        return{
          ...state,
          builderData: cardHeaderTitleHideInDeviceList(state.builderData, action.device, action.state)
        }
      }
      case 'UPDATE_CARD_HEADER_TITLE_ALIGN': {
        return{
          ...state,
          builderData: setCardHeaderTitleAlign(state.builderData, action.val)
        }
      }
      case 'UPDATE_CARD_HEADER_TITLE_TEXT': {
        return{
          ...state,
          builderData: setCardHeaderTitleText(state.builderData, action.val)
        }
      }
      case 'UPDATE_CARD_HEADER_TITLE_SIZE': {
        return{
          ...state,
          builderData: setCardHeaderTitleSize(state.builderData, action.val)
        }
      }
      case 'UPDATE_CARD_HEADER_TITLE_COLOR': {
        return{
          ...state,
          builderData: setCardHeaderTitleColor(state.builderData, action.val)
        }
      }

      case 'SET_CARD_HEADER_ALIGNMENT': {
        return {
          ...state,
          builderData: setCardHeaderAlignment(state.builderData, action.val)
        }
      }

      case 'UPDATE_CARD_HEADER_BUTTON_SPACING': {
        return {
          ...state,
          builderData: updateCardHeaderButtonSpacing(state.builderData, action.key, action.val)
        }
      }

      case 'UPDATE_CARD_HEADER_BUTTON_HIDEN_IN_DEVICE_LIST': {
        return {
          ...state,
          builderData: cardHeaderButtonHideInDeviceList(state.builderData, action.device, action.state)
        }
      }

      case 'UPDATE_CARD_HEADER_BUTTON_TEXT': {
        return {
          ...state,
          builderData: setCardHeaderButtonText(state.builderData, action.val)
        }
      }

      case 'UPDATE_CARD_HEADER_BUTTON_THEME': {
        return {
          ...state,
          builderData: setCardHeaderButtonTheme(state.builderData, action.val)
        }
      }

      case 'UPDATE_CARD_HEADER_BUTTON_STRECHED': {
        return {
          ...state,
          builderData: setCardHeaderButtonStreched(state.builderData, action.val)
        }
      }

      case 'UPDATE_CARD_HEADER_BUTTON_STRONG': {
        return {
          ...state,
          builderData: setCardHeaderButtonStrong(state.builderData, action.val)
        }
      }

      case 'UPDATE_CARD_HEADER_BUTTON_DISABLED': {
        return {
          ...state,
          builderData: setCardHeaderButtonDisabled(state.builderData, action.val)
        }
      }

      case 'UPDATE_CARD_BODY_SPACING': {
        return {
          ...state,
          builderData: updateCardBodySpacing(state.builderData, action.key, action.val)
        }
      }

      case 'UPDATE_CARD_BODY_HIDEN_IN_DEVICE_LIST': {
        return {
          ...state,
          builderData: cardBodyHideInDeviceList(state.builderData, action.device, action.state)
        }
      }

      case 'UPDATE_CARD_BODY_TEXT': {
        return {
          ...state,
          builderData: setCardBodyText(state.builderData, action.val)
        }
      }

      case 'UPDATE_CARD_BODY_ALIGN': {
        return {
          ...state,
          builderData: setCardBodyAlign(state.builderData, action.val)
        }
      }

      case 'UPDATE_CARD_BODY_COLOR': {
        return {
          ...state,
          builderData: setCardBodyColor(state.builderData, action.val)
        }
      }

      case 'UPDATE_CARD_BODY_SIZE': {
        return {
          ...state,
          builderData: setCardBodySize(state.builderData, action.val)
        }
      }

      case 'UPDATE_CARD_HEADER_BUTTON_ICON': {
        return {
          ...state,
          builderData: setHeaderButtonIcon(state.builderData, action.icon)
        }
      }

      case 'UPDATE_CARD_FOOTER_SPACING': {
        return {
          ...state,
          builderData: updateCardFooterSpacing(state.builderData, action.key, action.val)
        }
      }

      case 'UPDATE_CARD_FOOTER_HIDEN_IN_DEVICE_LIST': {
        return {
          ...state,
          builderData: cardFooterHideInDeviceList(state.builderData, action.device, action.state)
        }
      }

      case 'UPDATE_CARD_FOOTER_TEXT': {
        return {
          ...state,
          builderData: setCardFooterText(state.builderData, action.val)
        }
      }
      case 'UPDATE_CARD_TAB': {
        return {
          ...state,
          builderData: setCardTab(state.builderData, action.val, action.tabtype)
        }
      }

      case 'REMOVE_ELEMENT': {
        return {
          ...state,
          builderData: removeElement(state.builderData, action.val)
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
        case "textarea":
          activePage.component.type = componentType;
          activePage.component.data = JSON.parse(JSON.stringify(textareaData));
          break;
          case "alert":
            activePage.component.type = componentType;
            activePage.component.data = JSON.parse(JSON.stringify(alertData));
            break;
      default:
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
            let isColSelected = false;
            _.each(r.cols, (col, colIndex) => {
              if(col.active === true) {
                isColSelected = true;;
              }
            });
            if(!isColSelected) {
              activePage.component.data.activeColumn = 0
              r.cols[0].active = true;
            }
          } else {
            _.each(r.cols, (col, colIndex) => {
              col.active = false;
            });
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
  function removeElement(data, val) {
    const newData = data.slice();
    const activePage = _.find(newData, page => {
      return page.active === true;
    });
    let element = (activePage.component.data);
    let value = element.remove[val];
    //element.remove["remove"] = val;
    element.remove[val] = !value
    return newData;
  }
  export default dataReducer;