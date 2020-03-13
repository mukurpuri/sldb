/* eslint-disable jsx-a11y/anchor-is-valid */
// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import './index.css';

import { setRowGutter,
  setRowHeight,
  setRowWrap,
  addRowToGrid,
  deleteRow,
  setRowPosition,
  updateGridSpacing,
  updateRowSpacing,
  addNewColumn,
  setRowReverse,
  setRowHorizontalAlignment,
  setRowVerticalAlignment
} from '../../../../../../redux/actions/gridActions';
//import validation from '../../../../../../config/validations';

class RowProperties extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      spacing: {
        margin: {
          property: "margin-top",
        },
        padding: {
          property: "padding-top",
        }
      },
      rowSpacing: {
        margin: {
          property: "margin-top"
        },
        padding: {
          property: "padding-top"
        }
      },
      columnSpacing: {
        margin: {
          property: "margin-top"
        },
        padding: {
          property: "padding-top"
        }
      }
    }
  }

  renderRowIndexes = (activePage,activeRow) => {
    const rows = activePage.component.data.properties.data[activePage.component.data.activeEditor];
    let options = [];
    _.each(rows, (row, index) => {
      options.push(<option key={index} value={index}>{index + 1}</option>)
    });
    const select = <div className="slds-form-element"><div className="slds-form-element__control"><div className="slds-select_container"><select value={activeRow} onChange={(e) => this.setRowPosition(e, activeRow)} className="slds-select" id="row-index">{options}</select></div></div></div> 
    return select;
  }

  changeGutter = (e) => {
    const selectedOption = e.target.value;
    this.props.setRowGutter(selectedOption);
  }

  setRowPosition =(e, activeRow) => {
    let finalPosition = e.target.value;
    let intiallPosition = activeRow;
    this.props.setRowPosition(intiallPosition, finalPosition);
  }

  setRowHeightInGrid = e => {
    this.props.reduxSetRowHeight(e.target.value);
  }

  setRowWrap = e => {
    var boolVal = false;
    var val  = e.target.value.toLowerCase();
    if(val === "true") {
      boolVal = true;
    }
    this.props.reduxSetRowWrap(boolVal);
  }

  addNewGrid = () => {
    this.props.addRowToGrid();
  }

  deleteSelectedRow = () => {
    this.props.deleteSelectedRow();
  }


  setGridMargin = (e) => {
    let value = e.target.value;
    this.updateGridSpacing(this.state.spacing.margin.property, value , "margin");
  }

  setGridPadding = (e) => {
    let value = e.target.value;
    this.updateGridSpacing(this.state.spacing.padding.property, value , "padding");
  }

  setGridMarginProperty = e => {
    const { spacing } = this.state;
    spacing.margin.property = e.target.value;
    this.setState(spacing)
  }

  setGridPaddingProperty = e => {
    const { spacing } = this.state;
    spacing.padding.property = e.target.value;
    this.setState(spacing)
  }

  updateGridSpacing = (key, value, property) => {
    key =  key.split("-")[1];
    switch(property) {
      case 'margin':
      value = `slds-m-${key}_${value}`
      this.props.updateGridSpacing(key, value);
      break;

      case 'padding':
      value = `slds-p-${key}_${value}`
      this.props.updateGridSpacing(key, value);
      break;

      default:
      console.log("undefined property")
    }
  }



  setRowMargin = (e) => {
    let value = e.target.value;
    this.updateRowSpacing(this.state.rowSpacing.margin.property, value , "margin");
  }

  setRowPadding = (e) => {
    let value = e.target.value;
    this.updateRowSpacing(this.state.rowSpacing.padding.property, value , "padding");
  }

  setRowMarginProperty = e => {
    const { rowSpacing } = this.state;
    rowSpacing.margin.property = e.target.value;
    this.setState(rowSpacing)
  }

  setRowPaddingProperty = e => {
    const { rowSpacing } = this.state;
    rowSpacing.padding.property = e.target.value;
    this.setState(rowSpacing)
  }

  updateRowSpacing = (key, value, property) => {
    key =  key.split("-")[1];
    switch(property) {
      case 'margin':
      value = `slds-m-${key}_${value}`
      this.props.updateRowSpacing(key, value);
      break;

      case 'padding':
      value = `slds-p-${key}_${value}`
      this.props.updateRowSpacing(key, value);
      break;

      default:
      console.log("undefined property")
    }
  }

  render() {
    const { builderData } = this.props;
    const activePage = _.find(builderData, page => { return page.active === true } );
    const activeEditor = activePage.component.data.activeEditor;
    const selectedRow = activePage.component.data.properties.data[activeEditor];
    const columnHeight = selectedRow[activePage.component.data.activeRow] && selectedRow[activePage.component.data.activeRow].cols.length  >= 1 ? selectedRow[activePage.component.data.activeRow].height : 0;
    
    const defaultMarginValue = (activePage.component.data.properties.margin[this.state.spacing.margin.property.split("-")[1]]).split("_")[1] || "";
    const defaultPaddingValue = (activePage.component.data.properties.padding[this.state.spacing.padding.property.split("-")[1]]).split("_")[1] || "";
    
    const activeRow = activePage.component.data.activeRow;
    let columnReverse = "";
    let defaultRowMarginValue = "";
    let defaultRowPaddingValue = "";
    let rowHorizontalAlignmnet= "";
    let rowVerticalAlignmnet = "";
    if(activePage.component.data.properties.data[activeEditor][activeRow]) {
      defaultRowMarginValue = (activePage.component.data.properties.data[activeEditor][activeRow].spacings.margin[this.state.rowSpacing.margin.property.split("-")[1]]).split("_")[1] || "";
      defaultRowPaddingValue =  (activePage.component.data.properties.data[activeEditor][activeRow].spacings.padding[this.state.rowSpacing.padding.property.split("-")[1]]).split("_")[1] || "";
      columnReverse = activePage.component.data.properties.data[activeEditor][activeRow].reverse;
      rowHorizontalAlignmnet = activePage.component.data.properties.data[activeEditor][activeRow].horizontal_align;
      rowVerticalAlignmnet = activePage.component.data.properties.data[activeEditor][activeRow].vertical_align;
    }
    return (
      <div className="box">
        <div className="head bordered">
            GRID
        </div>
        <div className="content">
          <div className={selectedRow.length <= 0 ? "disabler" : ""}></div>
          {
            selectedRow.length > 0 ?  
            <React.Fragment>
              <div className="property">
                <div className="slds-grid slds-p-left_small slds-p-right_small">
                <div className="slds-col slds-large-size_6-of-12 value property">
                    <div className="slds-form-element">
                      <div className="slds-form-element__control">
                        <div className="slds-select_container">
                          <select value={this.state.spacing.margin.property} onChange={this.setGridMarginProperty} className="slds-select" id="grid-gutters">
                            <option value="margin-top">Margin Top</option>
                            <option value="margint-bottom">Margin Bottom</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slds-col slds-large-size_6-of-12 value">
                    <div className="slds-form-element">
                      <div className="slds-form-element__control">
                        <div className="slds-select_container">
                          <select value={defaultMarginValue} onChange={this.setGridMargin} className="slds-select" id="grid-gutters">
                            <option value="">None</option>
                            <option value="x-small">x-Small</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="x-large">x-Large</option>
                            <option value="xx-large">xx-Large</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property">
                <div className="slds-grid slds-p-left_small slds-p-right_small">
                  <div className="slds-col slds-large-size_6-of-12 value property">
                    <div className="slds-form-element">
                      <div className="slds-form-element__control">
                        <div className="slds-select_container">
                          <select value={this.state.spacing.padding.property} onChange={this.setGridPaddingProperty} className="slds-select" id="grid-gutters">
                            <option value="padding-top">Padding Top</option>
                            <option value="padding-bottom">Padding Bottom</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slds-col slds-large-size_6-of-12 value">
                    <div className="slds-form-element">
                      <div className="slds-form-element__control">
                        <div className="slds-select_container">
                          <select value={defaultPaddingValue} onChange={this.setGridPadding} className="slds-select">    
                            <option value="">None</option>
                            <option value="xxx-small">xxx-Small</option>
                            <option value="xx-small">xx-Small</option>
                            <option value="x-small">x-Small</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="x-large">x-Large</option>
                            <option value="xx-large">xx-Large</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property">
                  <div className="slds-grid slds-p-left_small slds-p-right_small">
                    <div className="slds-col slds-large-size_6-of-12 key">
                      Gutters
                    </div>
                    <div className="slds-col slds-large-size_6-of-12 value">
                    <div className="slds-form-element">
                      <div className="slds-form-element__control">
                        <div className="slds-select_container">
                          <select onChange={this.changeGutter} value={activePage.component.data.properties.gutters} className="slds-select" id="grid-gutters">
                          <option value="">None</option>
                            <option value="slds-gutters_x-small">x-Small</option>
                            <option value="slds-gutters_small">Small</option>
                            <option value="slds-gutters_medium">Medium</option>
                            <option value="slds-gutters_large">Large</option>
                            <option value="slds-gutters_x-large">x-Large</option>
                            <option value="slds-gutters_xx-large">xx-Large</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
            </React.Fragment> : ""
          }
          <div className="property slds-p-around_small">
            <div className="slds-grid">
              <div className="slds-col active slds-large-size_12-of-12 key">
                <button onClick={this.addNewGrid} className="add-row-btn properties-btn-big slds-button slds-button_brand full primary-button">
                  Add row to Grid
                </button>
              </div>
            </div>
          </div>
          {
            selectedRow.length > 0 ?  
            <div className="property slds-p-around_small">
              <div className="slds-grid">
                <div className="slds-col active slds-large-size_12-of-12 key">
                  <button onClick={this.props.addNewColumn} className="green properties-btn-big slds-button slds-button_brand full primary-button">
                    Add Column to Row
                  </button>
                </div>
              </div>
            </div> : null
          }
        </div>
        {
          selectedRow.length > 0 ?  
          <React.Fragment>
          <div className="head bordered">
            SELECTED ROW
          </div>
          <div className="content">
          <div className="property">
            <div className="slds-grid slds-p-left_small slds-p-right_small">
            <div className="slds-col slds-large-size_6-of-12 value property">
                <div className="slds-form-element">
                  <div className="slds-form-element__control">
                    <div className="slds-select_container">
                      <select value={this.state.rowSpacing.margin.property} onChange={this.setRowMarginProperty} className="slds-select" id="grid-gutters">
                        <option value="margin-top">Margin Top</option>
                        <option value="margin-bottom">Margin Bottom</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slds-col slds-large-size_6-of-12 value ">
                <div className="slds-form-element">
                  <div className="slds-form-element__control">
                    <div className="slds-select_container">
                      <select value={defaultRowMarginValue} onChange={this.setRowMargin} className="slds-select">
                        <option value="">None</option>
                        <option value="xxx-small">xxx-Small</option>
                        <option value="xx-small">xx-Small</option>
                        <option value="x-small">x-Small</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="x-large">x-Large</option>
                        <option value="xx-large">xx-Large</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="property">
            <div className="slds-grid slds-p-left_small slds-p-right_small">
              <div className="slds-col slds-large-size_6-of-12 value property">
                <div className="slds-form-element">
                  <div className="slds-form-element__control">
                    <div className="slds-select_container">
                      <select value={this.state.rowSpacing.padding.property} onChange={this.setRowPaddingProperty} className="slds-select">
                        <option value="padding-top">Padding Top</option>
                        <option value="padding-bottom">Padding Bottom</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slds-col slds-large-size_6-of-12 value">
                <div className="slds-form-element">
                  <div className="slds-form-element__control">
                    <div className="slds-select_container">
                      <select value={defaultRowPaddingValue} onChange={this.setRowPadding} className="slds-select">    
                        <option value="">None</option>
                        <option value="xxx-small">xxx-Small</option>
                        <option value="xx-small">xx-Small</option>
                        <option value="x-small">x-Small</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="x-large">x-Large</option>
                        <option value="xx-large">xx-Large</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
            {/* <div className="property">
              <div className="slds-grid slds-p-left_small slds-p-right_small">
                <div className="slds-col slds-large-size_6-of-12 key">
                  Swap Row
                </div>
                <div className="slds-col slds-large-size_6-of-12 value">
                  { this.renderRowIndexes(activePage, activeRow) }
                </div>
              </div>
            </div> */}
            {/* <div className="property">
              <div className="slds-grid slds-p-left_small slds-p-right_small">
                <div className="slds-col slds-large-size_6-of-12 key">
                  Wrap Columns
                </div>
                <div className="slds-col slds-large-size_6-of-12 value">
                <div className="slds-form-element">
                  <div className="slds-form-element__control">
                    <div className="slds-select_container">
                      <select value={selectedRow.wrap} onChange={e => this.setRowWrap(e)} className="slds-select" id="select-01">
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                      </select>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div> */}
            <div className="property">
              <div className="slds-grid slds-p-left_small slds-p-right_small">
                <div className="slds-col slds-large-size_6-of-12 key">
                  Height*
                </div>
                <div className="slds-col slds-large-size_6-of-12 value">
                  <div className="slds-form-element">
                    <div className="slds-form-element__control">
                      <div className="slds-select_container">
                        <select value={columnHeight} onChange={this.setRowHeightInGrid} className="slds-select" id="select-01">
                          <option value={"auto"}>Auto</option>
                          <option value={100}>100px</option>
                          <option value={120}>120px</option>
                          <option value={200}>200px</option>
                          <option value={250}>250px</option>
                          <option value={300}>300px</option>
                          <option value={350}>350px</option>
                          <option value={400}>400px</option>
                          <option value={450}>450px</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="property">
              <div className="slds-grid slds-p-left_small slds-p-right_small">
                <div className="slds-col slds-large-size_6-of-12 key">
                  Alignments (Hor.)
                </div>
                <div className="slds-col slds-large-size_6-of-12 value">
                  <div className="slds-form-element">
                    <div className="slds-form-element__control">
                      <div className="slds-select_container">
                        <select value={rowHorizontalAlignmnet} onChange={e => this.props.setRowHorizontalAlignment(e.target.value)} className="slds-select" id="select-01">
                          <option value={""}>None</option>
                          <option value={"slds-grid_align-center"}>Center align</option>
                          <option value={"slds-grid_align-space"}>Space between</option>
                          <option value={"slds-grid_align-spread"}>Spread</option>
                          <option value={"slds-grid_align-end"}>End</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="property">
              <div className="slds-grid slds-p-left_small slds-p-right_small">
                <div className="slds-col slds-large-size_6-of-12 key">
                  Alignments (Ver.)
                </div>
                <div className="slds-col slds-large-size_6-of-12 value">
                  <div className="slds-form-element">
                    <div className="slds-form-element__control">
                      <div className="slds-select_container">
                        <select value={rowVerticalAlignmnet} onChange={e => this.props.setRowVerticalAlignment(e.target.value)} className="slds-select" id="select-01">
                          <option value={""}>None</option>
                          <option value={"slds-grid_vertical-align-start"}>Start</option>
                          <option value={"slds-grid_vertical-align-center"}>Center</option>
                          <option value={"slds-grid_vertical-align-end"}>End</option>
                          <option value={"slds-grid_vertical-align-center slds-grid_align-center"}>Absolute Center</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="property">
              <div className="slds-grid slds-p-left_small slds-p-right_small">
                <div title="Directions of columns" className="slds-col slds-large-size_6-of-12 key">
                  Columns Dir.
                </div>
                <div className="slds-col slds-large-size_6-of-12 value">
                  <div className="slds-form-element">
                    <div className="slds-form-element__control">
                      <div className="slds-select_container">
                        <select value={columnReverse} onChange={(e) => this.props.setRowReverse(e.target.value)} className="slds-select">
                        <option value={""}>Row</option>
                        <option value={"slds-grid_reverse"}>Row reverse</option>
                        <option value={"slds-grid_vertical"}>Column</option>
                        <option value={"slds-grid_vertical-reverse"}>Column Reverse</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="property">
              <div className="slds-grid slds-p-around_x-small">
                <div className="slds-col slds-large-size_12-of-12 key slds-text-align_center">
                  <a onClick={() => this.deleteSelectedRow()} href="#" className="link-button">Delete Row</a>
                </div>
              </div>
            </div>
            
        </div>
          </React.Fragment> : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    builderData: state.dataReducer.builderData
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      setRowGutter: (selectedOption) => dispatch(setRowGutter(selectedOption)),
      reduxSetRowHeight: height => dispatch(setRowHeight(height)),
      reduxSetRowWrap: wrap => dispatch(setRowWrap(wrap)),
      addRowToGrid: () => dispatch(addRowToGrid()),
      deleteSelectedRow: () => dispatch(deleteRow()),
      setRowPosition: (i, f) => dispatch(setRowPosition(i,f)),
      updateGridSpacing: (key, value) => dispatch(updateGridSpacing(key, value)),
      updateRowSpacing: (key, value) => dispatch(updateRowSpacing(key, value)),
      addNewColumn: () => dispatch(addNewColumn()),
      setRowReverse: dir => dispatch(setRowReverse(dir)),
      setRowVerticalAlignment: val => dispatch(setRowVerticalAlignment(val)),
      setRowHorizontalAlignment: val => dispatch(setRowHorizontalAlignment(val))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(RowProperties);