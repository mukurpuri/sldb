
// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import './index.css';
//import { createNewPage, updatePageName } from '../../../../redux/actions/dataActions';
import _ from 'lodash';


class GridSizer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          device: "desktop"
      }
  }
  render() {
    const  { builderData } = this.props;
    return (
        <div className="grid-sizer">
            <div className="box">
            <div className="slds-grid slds-wrap">
                <div className="slds-large-size_12-of-12">
                    <div className="head bordered">GRID SIZER</div>
                </div>
                <div className="slds-large-size_12-of-12 cont">
                    <div className="slds-grid">
                        <div className="slds-large-size_8-of-12">
                            <div className="slds-p-around_medium">
                                <fieldset className="slds-form-element">
                                <div class="slds-form-element__control"><span class="slds-radio slds-float_left slds-p-right_medium"><input type="radio" id="small" name="device" value="small"/><label class="slds-radio__label" for="small"><span class="slds-radio_faux"></span><span class="slds-form-element__label">Mobiles</span></label>
                                    </span><span class="slds-radio slds-float_left slds-p-right_medium"><input type="radio" id="medium" name="device" value="medium"/><label class="slds-radio__label" for="medium"><span class="slds-radio_faux"></span><span class="slds-form-element__label">Tablets</span></label>
                                    </span><span class="slds-radio slds-float_left slds-p-right_medium"><input type="radio" id="desktop" name="device" value="desktop"/><label class="slds-radio__label" for="desktop"><span class="slds-radio_faux"></span><span class="slds-form-element__label">Desktops</span></label>
                                    </span>
                                </div>
                                </fieldset>
                            </div>
                            <div className="slds-p-around_large">
                                <div className="slds-grid">
                                    <div className="slds-large-size_9-of-12">
                                        <div className="slds-grid">
                                            <div className="slds-large-size_4-of-12">
                                                <input className="full text-center" type="text"/>
                                            </div>
                                            <div className="slds-large-size_4-of-12">
                                                <input className="full text-center" type="text"/>
                                            </div>
                                            <div className="slds-large-size_4-of-12">
                                                <input className="full text-center" type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slds-large-size_2-of-12">
                                        <input class="slds-m-left_xx-small" type="button" value="+" />
                                        <input class="slds-m-left_xx-small" type="button" value="-"/>
                                    </div>
                                    <div className="slds-large-size_3-of-12">
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/><label for="vehicle1">&nbsp;Wrap</label>
                                    </div>
                                </div>
                            </div>
                            <div className="slds-p-around_large slds-p-top_none">
                                <div className="slds-grid">
                                    <div className="slds-large-size_9-of-12">
                                        <input className="full"  type="button" value="Add Row" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className="slds-large-size_4-of-12">
                            <div className="box">
                                <div class="head bordered">COLUMN DETAILS</div>
                            </div>
                        </div>
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
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridSizer);
