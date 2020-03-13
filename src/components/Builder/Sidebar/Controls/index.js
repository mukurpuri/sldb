
// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import { addGridToCanvas } from '../../../../redux/actions/dataActions';
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
    })
  }

  searchComponents = e => {
    this.setState({
      searchComponent: e.target.value
    });
  }

  RduxAddGridToCanvas = () => {
    this.props.addGridToCanvas()
  }
  
  render() {
    const { builderData } = this.props;
    const activePage = _.find(builderData, d => { return d.active === true; });
    if(activePage.component && activePage.component.type !== null) {
      return null;
    }
    var components = ["Accordion"
    ,"Alert"
    ,"Avatar"
    ,"Avatar Group"
    ,"Badges"
    ,"Brand Band"
    ,"Breadcrumbs"
    ,"Button Groups"
    ,"Button Icons"
    ,"Buttons"
    ,"Cards"
    ,"Checkbox"
    ,"Checkbox Button"
    ,"Checkbox Button Group"
    ,"Checkbox Toggle"
    ,"Color Picker"
    ,"Combobox"
    ,"Data Tables"
    ,"Datepickers"
    ,"Datetime Picker"
    ,"Dynamic Icons"
    ,"Dynamic Menu"
    ,"Expandable Section"
    ,"File Selector"
    ,"Files"
    ,"Form Element"
    ,"Icons"
    ,"Illustration"
    ,"Input"
    ,"Lookups"
    ,"Map"
    ,"Menus"
    ,"Modals"
    ,"Notifications"
    ,"Panels"
    ,"Picklist"
    ,"Pills"
    ,"Popovers"
    ,"Progress Bar"
    ,"Progress Indicator"
    ,"Progress Ring"
    ,"Prompt"
    ,"Radio Button Group"
    ,"Radio Group"
    ,"Rich Text Editor"
    ,"Scoped Notifications"
    ,"Scoped Tabs"
    ,"Select"
    ,"Slider"
    ,"Spinners"
    ,"Summary Detail"
    ,"Tabs"
    ,"Textarea"
    ,"Tiles"
    ,"Timepicker"
    ,"Toast"
    ,"Tooltips"
    ,"Trees"
    ,"Vertical Navigation"
    ,"Vertical Tabs"
    ,"Visual Picker"];
    var componentsList = [];
    _.each(components, (comp,index) => {
      if(comp.toLowerCase().indexOf(this.state.searchComponent.toLowerCase()) >= 0) {
        componentsList.push(<div key={index} className="btn"><p>{comp}</p></div>)
      }
      });
      return (
        <div className="box">
          <div className="head">
            CONTAINERS
          </div>
          <div className="controls">
            <div className="btn" onClick={() => this.RduxAddGridToCanvas()}><p>Grid</p></div>
            <div className="btn"><p>Card</p></div>
            
          </div>
          <div className="head">
          COMPONENTS
            <span onClick={this.toggleComponentSearch} className="slds-icon_container slds-icon-utility-search" title="Description of icon when needed">
              <svg className="slds-icon slds-search slds-icon-text-default slds-icon_x-small" aria-hidden="true">
                <use href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
            </span>
          </div>
          <div style={this.state.showComponentSearch ? {"height": "25px" } : {"height": "0px"}} className="control-search">
            <input type="text" onChange={this.searchComponents} placeholder="Search components..." className="search text" />
          </div>
          <div className="comp controls">
            {componentsList}
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
        addGridToCanvas: () => dispatch(addGridToCanvas())
      };
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(Controls);
    