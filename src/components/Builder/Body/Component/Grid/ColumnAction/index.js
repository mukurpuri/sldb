/* eslint-disable jsx-a11y/anchor-is-valid */

// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { activateColumn, activateRow, deleteSelectedcolumn, cloneColumn } from '../../../../../../redux/actions/gridActions';
import './index.css';

class ColumnAction extends React.Component {

  render() {
    const { builderData, rowId, id } = this.props;
    if(builderData.length === 0) {
      return null
    }
    return (
    <div className="addColumnAction">
        <div onClick={() => this.props.cloneColumn({id, rowId})} className="columnAction" title="Add duplicate Column" dir="ltr"><span className="slds-icon_container slds-icon-utility-copy"><svg className="slds-icon_xx-small slds-icon" aria-hidden="true"><use href="/assets/icons/utility-sprite/svg/symbols.svg#copy"></use></svg></span></div>
        <div onClick={() => this.props.deleteSelectedcolumn({id, rowId})} className="columnAction" title="Delete Column" dir="ltr"><span className="slds-icon_container slds-icon-utility-delete"><svg className="slds-icon_xx-small slds-icon" aria-hidden="true"><use href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use></svg></span></div>
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
      reduxActivateColumn: (id, device, rowId) => dispatch(activateColumn(id, device, rowId)),
      reduxActivateRow: (device, rowId) => dispatch(activateRow(device, rowId)),
      deleteSelectedcolumn: (ids) => dispatch(deleteSelectedcolumn(ids)),
      cloneColumn: (ids) => dispatch(cloneColumn(ids))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColumnAction);
