
// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import { createNewPage, deletePage, makePageActive } from '../../../../redux/actions/dataActions';
import Constants from '../../../../config/constants';
import _ from 'lodash';


class Pagination extends React.Component {

  addBuilderPage = () => {
    this.props.reduxCreateNewPage(true);
  }
  deletePage = (id, e) => {
    this.props.reduxDeleteNewPage(id);
    e.stopPropagation();
  }

  makePageActive = id => {
    this.props.reduxMakePageActive(id);
  }

  

  render() {
    var pages = [];
    var gradClasses = Constants.gradClasses;
    var gradient = gradClasses[[Math.floor(Math.random() * Math.floor(gradClasses.length))]];
    _.each(this.props.pages, (page,index) => {
      var li = <li onClick={() => { this.makePageActive(page.id)}} key={page.id} className={page.active ? Constants.appGradientTheme : ""} id={page.id}>{page.name} <span className="minus-page" title="Close this page" onClick={(e) => {this.deletePage(page.id, e)}}>+</span></li>;
      pages.push(li);
    });
    
    return (
      <div className="box">
          <div className="head">
              PAGES <span title="Add new page" onClick={() => this.addBuilderPage()} className="add">+</span>
          </div>
          <ul className="pages">
              {_.reverse(pages)}
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
      reduxCreateNewPage: () => dispatch(createNewPage(true)),
      reduxDeleteNewPage: id => dispatch(deletePage(id)),
      reduxMakePageActive: id => dispatch(makePageActive(id))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
