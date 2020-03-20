import React from 'react';
import ReactDOM from 'react-dom';
import { iconList } from '../../config/dataSkeletons';
import _ from 'lodash';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: '90%',
    height: '80%',
    padding: 0,
  }
};
class IconSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actionType: "all",
            searchValue: "",
            selectedIcon: {
                name: "",
                type: ""
            }
        }
    }
    closeModal = () =>{
        this.setState({modalIsOpen: false});
    }
    setActiontype = e => {
        this.setState( {
            actionType: e.target.value
        });
    }
    setSearchValue = e => {
        this.setState({
            searchValue: (e.target.value.trim()).toLowerCase()
        })
    }
    selectIcon = (name, type) => {
        let { selectedIcon } = this.state;
        selectedIcon.name = name;
        selectedIcon.type = type;
        this.setState(selectedIcon);
    }
    selectIconClose = () => {
        this.props.selectIconClose(this.state.selectedIcon);
    }
    selectClose = () => {
        this.props.selectClose();
    }
    render() {
        const icons = [];
        _.each(iconList, list => {
            if(list.type === this.state.actionType || this.state.actionType === "all") {
                _.each(list.icons, icon => {
                    let icon_name = icon.replace(/_/g, "-");
                    let utilityClass = list.type === "utility" ? "slds-icon-text-default" : "";
                    if(icon_name.indexOf(this.state.searchValue) >= 0) {
                        icons.push(
                            <div onClick={() => this.selectIcon(icon,list.type)} key={`${list.type}-${icon}`} className="slds-large-size_1-of-12">
                                <div className={`iconContainer ${this.state.selectedIcon.name === icon ? "active" : ""}`}>
                                    <span className={`slds-icon_container slds-icon-${list.type}-${icon_name}`}>
                                        <svg className={`slds-icon ${utilityClass}`} aria-hidden="true">
                                            <use href={`/assets/icons/${list.type}-sprite/svg/symbols.svg#${icon}`}></use>
                                        </svg>
                                    </span>
                                    <p>
                                        <small>
                                            {icon_name}
                                        </small>
                                    </p>
                                </div>
                            </div>
                        )
                    }
                })
            }
        });
        return (
        <Modal
            isOpen={this.props.modalOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Icon Selector"
            ariaHideApp={false}
          >
            <div className="box iconSelector">
                <div className="head bordered">
                    SELECT YOUR ICON
                </div>
                <div className="content slds-p-around_xx-small">
                    <div className="slds-grid">
                        <div className="slds-large-size_12-of-12">
                            <div className="slds-grid slds-wrap">
                                {icons}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="icon-actions-bar">          
            <div>
                <div>
                    <div  className="slds-grid slds-wrap slds-p-top_large slds-p-bottom_large">
                        <div className="slds-col  slds-small-size_12-of-12 slds-medium-size_12-of-12 slds-large-size_9-of-12">
                        <div className=" slds-p-left_medium slds-p-right_medium">
                            <div className="slds-gutters_medium">
                                <div  className="slds-grid slds-wrap">
                                <div className="slds-col  slds-small-size_12-of-12 slds-medium-size_12-of-12 slds-large-size_4-of-12">
                                    <div className="slds-form-element">
                                        <div className="slds-form-element__control">
                                        <label className="slds-form-element__label" htmlFor="select-action-type">Select Icon Type</label>
                                            <div className="slds-select_container">
                                            <select onChange={this.setActiontype} className="slds-select" id="select-action-type">
                                                <option value="all">All</option>
                                                <option value="action">Action</option>
                                                <option value="custom">Custom</option>
                                                <option value="doctype">Doctype</option>
                                                <option value="standard">Standard</option>
                                                <option value="utility">Utility</option>
                                            </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slds-col slds-small-size_4-of-12 slds-medium-size_4-of-12 slds-large-size_8-of-12">
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="icon-name-search">Search Icon by name</label>
                                    <div className="slds-form-element__control">
                                        <input onChange={this.setSearchValue} type="text" id="icon-name-search" placeholder="files, dot, cross, check ..." className="slds-input" />
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    <div className="slds-col slds-small-size_4-of-12 slds-medium-size_4-of-12 slds-large-size_3-of-12">
                        <button onClick={this.selectIconClose} className="slds-button slds-button_brand slds-m-top_large slds-m-right_large slds-float--right"><strong>Select</strong></button>
                        <button onClick={this.selectClose} className="slds-button slds-button_neutral slds-m-top_large slds-m-right_large slds-float--right"><strong>Cancel</strong></button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </Modal>
        )
    }
}
export default IconSelector;