/* eslint-disable jsx-a11y/anchor-is-valid */

// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { addNewColumn, addRowToGrid, deleteRow, cloneRow } from '../../../../../../redux/actions/gridActions';
import './index.css';

class RowAction extends React.Component {

  addNewColumn = e => {
    this.props.addNewColumn();
    e.stopPropagation();
    e.preventDefault();
  }
  render() {
    const { builderData } = this.props;
    if(builderData.length === 0) {
      return null
    }
    const activePage = _.find(builderData, d => { return d.active === true;})
    return (
      <div className="rowAction">
          <div className="addColumn">
            <div title="Add new Column" onClick={this.addNewColumn} dir="ltr"><span className="slds-icon_container slds-icon-utility-add"><svg className="slds-icon_xx-small slds-icon" aria-hidden="true"><use href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use></svg></span></div>
          </div>
          <ul>
              <li onClick={() => this.props.addRowToGrid()} className="slds-text-align--center slds-p-around--xx-small row_icon_action">
                <div title="Add new Row" dir="ltr"><span className="slds-icon_container slds-icon-utility-add"><svg className="slds-icon_xx-small slds-icon" aria-hidden="true"><use href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use></svg></span></div>
              </li>
              <li className="slds-text-align--center slds-p-around--xx-small row_icon_action">
              <div onClick={() => this.props.cloneRow()} title="Add duplicate Row" dir="ltr"><span className="slds-icon_container slds-icon-utility-copy"><svg className="slds-icon_xx-small slds-icon" aria-hidden="true"><use href="/assets/icons/utility-sprite/svg/symbols.svg#copy"></use></svg></span></div>
              </li>
              <li className="slds-text-align--center slds-p-around--xx-small row_icon_action last">
              <div onClick={() => this.props.deleteRow()} title="Delete Row" dir="ltr"><span className="slds-icon_container slds-icon-utility-delete"><svg className="slds-icon_xx-small slds-icon" aria-hidden="true"><use href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use></svg></span></div>
              </li>
          </ul>
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
      addNewColumn: () => dispatch(addNewColumn()),
      addRowToGrid: () => dispatch(addRowToGrid()),
      deleteRow: () => dispatch(deleteRow()),
      cloneRow: () => dispatch(cloneRow())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(RowAction);
