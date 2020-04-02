
// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import { addComponentToCanvas, addComponentToNewPage } from '../../../../redux/actions/dataActions';
import { ComponentList } from '../../../../config/dataSkeletons';
import _ from 'lodash';


class Controls extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchComponent: "",
      showComponentSearch: false
    }
  }

  toggleComponentSearch = () => {
    this.setState({
      showComponentSearch: !this.state.showComponentSearch
    }, () => {
      document.getElementById("component-search-input").focus()
    })
  }

  searchComponents = e => {
    this.setState({
      searchComponent: e.target.value
    });
  }

  nameReducer = comp => {
    let newName = comp.toLowerCase().trim();
    newName = newName.replace(" ", "-");
    return newName;
  }

  setPage(controlName, activePage) {
    if(activePage.component && activePage.component.type !== null) {
      this.props.addComponentToNewPage(controlName)
    } else {
      this.props.addComponentToCanvas(controlName)
    }
  }
  
  render() {
    const { builderData } = this.props;
    const activePage = _.find(builderData, d => { return d.active === true; });
    var components = ComponentList.slice();
    var componentsList = [];
    _.each(components, (comp,index) => {
      const controlName = this.nameReducer(comp);
      const activeBtn = activePage.component.type === controlName ? "active": "";
      if(comp.toLowerCase().indexOf(this.state.searchComponent.toLowerCase()) >= 0) {
        componentsList.push(<div onClick={() => this.setPage(controlName, activePage)} key={index} className={`btn ${activeBtn}`}><p>{comp}</p> <div className={`control-elem`}><img alt={controlName} title={controlName} width="40" src={`./controls/${controlName}.png`}/></div> </div>)
      }
      });
      return (
        <div className="box">
          <div className="head">
            COMPONENTS
          </div>
          <div className="controls">
            {componentsList}
          </div>
          {/* <div className="head">
          COMPONENTS
            {/* <span onClick={this.toggleComponentSearch} className="slds-icon_container slds-icon-utility-search" title="Description of icon when needed">
              <svg className="slds-icon slds-search slds-icon-text-default slds-icon_x-small" aria-hidden="true">
                <use href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
            </span>}
          </div> */}
          {/* <div style={this.state.showComponentSearch ? {"height": "30px" } : {"height": "0px"}} className="control-search">
            <input id="component-search-input" type="text" onChange={this.searchComponents} placeholder="Search components..." className="search text" />
          </div>
          <div className="comp controls">
            {componentsList}
          </div> */}
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
        addComponentToCanvas: component => dispatch(addComponentToCanvas(component)),
        addComponentToNewPage: component => dispatch(addComponentToNewPage(component))
        
      };
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(Controls);
    