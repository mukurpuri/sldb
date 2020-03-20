import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import './index.css';

import { updateColumnSpacing, setColumnWidth, deleteSelectedcolumn} from '../../../../../../redux/actions/gridActions';

class ColumnProperties extends React.Component {

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
      }
    }
  }

  setColumnMargin = (e) => {
    let value = e.target.value;
    this.updateColumnSpacing(this.state.spacing.margin.property, value , "margin");
  }

  setColumnPadding = (e) => {
    let value = e.target.value;
    this.updateColumnSpacing(this.state.spacing.padding.property, value , "padding");
  }

  setColumnMarginProperty = e => {
    const { spacing } = this.state;
    spacing.margin.property = e.target.value;
    this.setState(spacing)
  }

  setColumnPaddingProperty = e => {
    const { spacing } = this.state;
    spacing.padding.property = e.target.value;
    this.setState(spacing)
  }

  updateColumnSpacing = (key, value, property) => {
    key =  key.split("-")[1];
    switch(property) {
      case 'margin':
      value = `slds-m-${key}_${value}`
      this.props.updateColumnSpacing(key, value);
      break;

      case 'padding':
      value = `slds-p-${key}_${value}`
      this.props.updateColumnSpacing(key, value);
      break;

      default:
      console.log("undefined property")
    }
  }

  setColumnWidth = (e) => {
    let size = e.target.value;
    this.props.setColumnWidth(size);
  }

  deleteSelectedcolumn = () => {
    console.log("Delete");
  }

  render() {
    const { builderData } = this.props;
    const activePage = _.find(builderData, page => { return page.active === true } );
    const activeEditor = activePage.component.data.activeEditor;
    const activeRow = activePage.component.data.activeRow;
    const activeColumn = activePage.component.data.activeColumn;
    const selectedRow = activePage.component.data.properties.data[activeEditor];
    let defaultColumnMarginValue = 0; 
    let defaultColumnPaddingValue = 0;
    let columnWidth = 1;
    if(activePage.component.data.properties.data[activeEditor][activeRow] && activePage.component.data.properties.data[activeEditor][activeRow].cols.length >= 1) {
      defaultColumnMarginValue = (activePage.component.data.properties.data[activeEditor][activeRow].cols[activeColumn].spacings.margin[this.state.spacing.margin.property.split("-")[1]]).split("_")[1] || "";
      defaultColumnPaddingValue = (activePage.component.data.properties.data[activeEditor][activeRow].cols[activeColumn].spacings.padding[this.state.spacing.padding.property.split("-")[1]]).split("_")[1] || "";
      columnWidth = activePage.component.data.properties.data[activeEditor][activeRow].cols[activeColumn].size;
    }
    if(selectedRow.length <= 0) {
      return null;
    }
    if(activePage.component.data.properties.data[activeEditor][activeRow].cols.length === 0) {
      return null;
    }
    return (
      <div className="box">
        <div className="head bordered">
            SELECTED COLUMN
        </div>
        <div className="content">
        <div className="property">
          <div className="slds-grid slds-p-left_small slds-p-right_small">
            <div className="slds-col slds-large-size_6-of-12 value property">
                <div className="slds-form-element">
                  <div className="slds-form-element__control">
                    <div className="slds-select_container">
                      <select onChange={this.setColumnMarginProperty} className="slds-select">
                        <option value="margin-top">Margin Top</option>
                        <option value="margin-bottom">Margin Bottom</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slds-col slds-large-size_6-of-12 value">
                <div className="slds-form-element">
                  <div className="slds-form-element__control">
                    <div className="slds-select_container">
                      <select value={defaultColumnMarginValue} onChange={this.setColumnMargin} className="slds-select" id="grid-gutters">
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
                      <select onChange={this.setColumnPaddingProperty} className="slds-select">
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
                      <select value={defaultColumnPaddingValue} onChange={this.setColumnPadding} className="slds-select" id="grid-gutters">
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
              <div className="slds-col slds-large-size_6-of-12 value key">
                Width <span className="textUpper">({activeEditor})</span>
              </div>
              <div className="slds-col slds-large-size_6-of-12 value">
                <div className="slds-form-element">
                  <div className="slds-form-element__control">
                    <div className="slds-select_container">
                      <select value={columnWidth} onChange={this.setColumnWidth} className="slds-select" id="grid-gutters">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="property">
          <div className="slds-grid">
            <div className="slds-col slds-large-size_12-of-12 key slds-text-align_center slds-p-around_x-small">
              <a onClick={() => this.props.deleteSelectedcolumn()} href="#" className="link-button">Delete Column</a>
            </div>
          </div>
        </div>
        </div>
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
      updateColumnSpacing: (k,v) => dispatch(updateColumnSpacing(k,v)),
      setColumnWidth: (size) => dispatch(setColumnWidth(size)),
      deleteSelectedcolumn: () => dispatch(deleteSelectedcolumn())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColumnProperties);