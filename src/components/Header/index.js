
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Pagination from './Pagination';
import './index.css';

class Header extends React.Component {
  
  fetchSidebarData = pages => {
    var sidebarData = [];
    _.each(pages, page => {
      let comp = page.component.type ? `${page.component.type[0].toUpperCase()}${page.component.type.slice(1)}` : ""
      let pageName = page.name.toLowerCase().indexOf("page") >=0 && page.component.type  ? page.name + " :: " +  comp : page.name;
      sidebarData.push({
        id: page.id,
        name: pageName,
        active: page.active
      });
    });

    return sidebarData;
  }

  render() {
    var { builderData } = this.props;
    if(builderData.length === 0) {
      return null;
    }
    const pageTabData = this.fetchSidebarData(builderData);
    return (
      <div  className={this.props.type}>
      <div className="pageTabs">
        <Pagination pages={pageTabData}/>
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
      
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
