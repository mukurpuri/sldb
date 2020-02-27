
// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import DeviceToggler from './Component/Grid/DeviceToggler';
import { activateColumn } from '../../../redux/actions/gridActions';
import './index.css';

class Body extends React.Component {

  renderer = component => {
    const data = component.data;
    const type = component.type;
    switch(type) {
        case 'grid':
        return this.renderGrid(data);

        default:
        return <p>Add component</p>;
    }
  }
  renderGrid = data => {
      const properties = data.properties;
      const gutters = properties.gutters || "";
      var parentGridClasses =  `slds-p-left_${gutters.split("_")[1]} slds-p-right_${gutters.split("_")[1]}`;
      const stack = data.properties.data[data.activeEditor];
      const grid = [];
      _.each(stack, (row, rowIndex) => {
        const rowId = rowIndex;
        const activeRowClass = row.active ? "active" : "";
        const columns = [];
        _.each(row.cols, (col, index) => {
          const activeClass = col.active ? "active" : "";
          const classNames =  `${activeClass} slds-large-size_${col.size}-of-12`;
          columns.push(
            <div key={index} onClick={() => this.activateColumn(index, data.activeEditor, rowId)} className={`slds-col ${classNames} text_col_${col.size} text_col`}></div>
          )
        });
        
        grid.push(<div key={rowIndex} className={`slds-grid ${gutters} ${activeRowClass} ${row.wrap}`}>{columns}</div>)
      });

      return <div><DeviceToggler/><div className={`grid-container ${data.activeEditor}  ${parentGridClasses}`}>{grid}</div></div>;
  }
  generateComponent = () => {
    const gridBuilder = this.props.builderData;
    if(gridBuilder.length > 0) {
      const activePageBuilder = _.find(gridBuilder, page => {
        return page.active === true;
      });
      if(activePageBuilder) {
        if(activePageBuilder.component.data !== null) {
          return this.renderer(activePageBuilder.component)
        } else {
          return <p>Add component now</p>
        }
      }
    }
  }
  activateColumn = (id, device, rowId) => {
    if(id !== null &&  device && rowId !== null) {
      this.props.reduxActivateColumn(id, device, rowId);
    }
  }
  render() {
    return (
      <div className="body">
        <div className="canvas">
          { this.generateComponent() }
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
      reduxActivateColumn: (id, device, rowId) => dispatch(activateColumn(id, device, rowId)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
