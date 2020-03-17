/* eslint-disable jsx-a11y/anchor-is-valid */

// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import DeviceToggler from './Component/Grid/DeviceToggler';
import { activateColumn, activateRow } from '../../../redux/actions/gridActions';
import Codeblock from './codeBlock';
import AddComponent from './AddComponent';
import './index.css';

class Body extends React.Component {

  renderer = component => {
    const data = component.data;
    const type = component.type;
    switch(type) {
        case 'grid':
        return this.renderGrid(data);

        case 'card':
        return this.renderCard(data);

        default:
        return <p>Add component</p>;
    }
  }
  valueGapper = val => {
    if(val === "") {
      return "";
    } else {
      return " " + val + " ";
    }
  }

  valueGapper2 = val => {
    if(val === "") {
      return "";
    } else {
      return val + " ";
    }
  }

  getSpacings = data => {
    const spacings = data.spacings;
    const margins = spacings.margin || "";
    const paddings = spacings.padding || "";
    const marginTop = margins.top.split("_")[1] ? this.valueGapper2(margins.top) : '';
    const marginBottom = margins.bottom.split("_")[1] ? this.valueGapper2(margins.bottom) : '';
    const marginLeft = margins.left.split("_")[1] ? this.valueGapper2(margins.left) : '';
    const marginRight = margins.right.split("_")[1] ? this.valueGapper2(margins.right) : '';
    const paddingTop = paddings.top.split("_")[1] ? this.valueGapper2(paddings.top) : '';
    const paddingBottom = paddings.bottom.split("_")[1] ? this.valueGapper2(paddings.bottom) : '';
    const paddingLeft = paddings.left.split("_")[1] ? this.valueGapper2(paddings.left) : '';
    const paddingRight = paddings.right.split("_")[1] ? this.valueGapper2(paddings.right) : '';
    return `${marginTop}${marginBottom}${marginLeft}${marginRight}${paddingTop}${paddingBottom}${paddingLeft}${paddingRight} `;
  }

  renderGrid = data => {
      const properties = data.properties;
      const gutters = properties.gutters || "";
      const margins = properties.margin || "";
      const paddings = properties.padding || "";
      
      const marginTop = margins.top.split("_")[1] ? margins.top + this.valueGapper(margins.top) : '';
      const marginBottom = margins.bottom.split("_")[1] ? margins.bottom + this.valueGapper(margins.bottom) : '';
      const paddingTop = paddings.top.split("_")[1] ? paddings.top + this.valueGapper(paddings.top) : '';
      const paddingBottom = paddings.bottom.split("_")[1] ? paddings.bottom + this.valueGapper(paddings.bottom) : '';

      let marginsPaddings = ` ${marginTop}${marginBottom}${paddingTop}${paddingBottom} `;

      var parentGridClasses =  gutters === "" ? `` : `slds-p-left_${gutters.split("_")[1]} slds-p-right_${gutters.split("_")[1]}`;
      const stack = data.properties.data[data.activeEditor];
      const grid = [];
      _.each(stack, (row, rowIndex) => {

        const rowId = rowIndex;
        const activeRowClass = row.active ? " active " : "";
        const reverseClass = this.valueGapper(row.reverse);

        const horizontalAlignmentClass = this.valueGapper(row.horizontal_align);
        const verticalAlignmentClass = this.valueGapper(row.vertical_align);

        const columns = [];
        _.each(row.cols, (col, index) => {
          const activeClass = col.active ? "active" : "";
          const classNames =  ` ${activeClass} slds-large-size_${col.size}-of-12`;

          const colMarginTop = col.spacings.margin.top.split("_")[1] ? this.valueGapper(col.spacings.margin.top) : ''; ;
          const colMarginBottom = col.spacings.margin.bottom.split("_")[1] ? this.valueGapper(col.spacings.margin.bottom) : '';
          const colPaddingTop = col.spacings.padding.top.split("_")[1] ? this.valueGapper(col.spacings.padding.top) : ''; ;
          const colPaddingBottom = col.spacings.padding.bottom.split("_")[1] ? this.valueGapper(col.spacings.padding.bottom) : '';

          let colMarginsPaddings = `${colMarginTop}${colMarginBottom}${colPaddingTop}${colPaddingBottom}`;
          columns.push(
            <div style={{"height": `78px`}} key={index} onClick={() => this.activateColumn(index, data.activeEditor, rowId)} className={`${colMarginsPaddings}slds-col${classNames} text_col_${col.size} text_col`}></div>
          )
        });

        const { spacings } = row;
        const rowMarginTop = spacings.margin.top.split("_")[1] ? this.valueGapper(spacings.margin.top) : ''; ;
        const rowMarginBottom = spacings.margin.bottom.split("_")[1] ? this.valueGapper(spacings.margin.bottom) : ''; ;
        const rowPaddingTop = spacings.padding.top.split("_")[1] ? this.valueGapper(spacings.padding.top) : ''; ;
        const rowPaddingBottom = spacings.padding.bottom.split("_")[1] ? this.valueGapper(spacings.padding.bottom) : ''; ;

      let rowMarginsPaddings = `${rowMarginTop}${rowMarginBottom}${rowPaddingTop}${rowPaddingBottom}`;
        grid.push(<div onClick={() => this.activateRow(data.activeEditor, rowId)} key={rowIndex} style={{"height": row.height === "auto" ? `auto` : `${row.height}px`}} className={`slds-grid${horizontalAlignmentClass}${verticalAlignmentClass}${activeRowClass}${reverseClass}${rowMarginsPaddings} slds-wrap`}>{columns}</div>)
      });

      return <div><DeviceToggler/><div className="code-target"><div className={`grid-container ${data.activeEditor}  ${parentGridClasses}`}><div className={`${marginsPaddings}`} ><div className={`${gutters}`}>{grid}</div></div></div></div></div>;
  }

  renderCard = data => {
    let marginsPaddings = this.getSpacings(data);
    let header = data.header;
    let headerSpacing = this.getSpacings(header);
    let headerReverse = this.valueGapper2(header.flip);
    let hiddenHeader = "";
    if(header.hidden.length > 0) {
      _.each(header.hidden, cls => {
        hiddenHeader += `${cls} `;
      })
    }

    let headerIcon = header.icon;
    let headerIconSize = this.valueGapper2(headerIcon.size);
    let headerIconFlip = headerIcon.flip ? " slds-icon_flip" : "";
    let headerIconMarginsPaddings = this.getSpacings(headerIcon);
    let hiddenHeaderIcon = "";
    if(headerIcon.hidden.length > 0) {
      _.each(header.hidden, cls => {
        hiddenHeaderIcon += `${cls} `;
      })
    }


    let headerTitle = header.title;
    let headerText = headerTitle.text;
    let headerTitleMarginsPaddings = this.getSpacings(headerTitle);
    let headerTitleAlign = headerTitle.align;
    let hiddenHeaderTitle = "";
    if(headerIcon.hidden.length > 0) {
      _.each(header.hidden, cls => {
        hiddenHeaderTitle += `${cls} `;
      })
    }

    let headerButton = header.button;
    let headerButtonText = headerButton.text;
    let headerButtonStreched = headerButton.streched ? "slds-size_12-of-12" : "";
    let headerButtonType = headerButton.type;
    let headerButtonStrong = headerButton.strong;
    let headerButtonSpacing = this.getSpacings(headerButton);
    let headerButtonIsDisabled= headerButton.isDisabled;
    let hiddenHeaderButton = "";
    let noMargin = "";
    noMargin = headerButton.text !== "" ? "" : "slds-m-right_none";
    let headerButtonIcon = <svg className={`slds-button__icon ${noMargin} ${headerButton.icon.position}`} aria-hidden="true">
      <use href={`/assets/icons/utility-sprite/svg/symbols.svg#${headerButton.icon.name}`}></use>
    </svg>
    if(headerButton.hidden.length > 0) {
      _.each(header.hidden, cls => {
        hiddenHeaderButton += `${cls} `;
      })
    }

    let mediaFigure = <div className={`slds-media__figure ${headerIconMarginsPaddings} ${hiddenHeaderIcon}`}>
      <div dir={headerIcon.flip ? `rtl` : "ltr"} >
        <span className={`slds-icon_container slds-icon-${headerIcon.type}-${headerIcon.name}${headerIconFlip}`} title={`${headerIcon.name}`}>
          <svg className={`${headerIconSize}slds-icon ${headerIcon.type === "utility" ? "slds-icon-text-default" : ""}`} aria-hidden={true}>
          <use href={`/assets/icons/${headerIcon.type}-sprite/svg/symbols.svg#${headerIcon.name}`}></use>
          </svg>
          <span className={`slds-assistive-text`}>{headerIcon.description}</span>
        </span>
      </div>
    </div>
    let mediaBody = <div className={`${headerTitleMarginsPaddings} ${headerTitleAlign} slds-media__body ${hiddenHeaderTitle}`}>
      <h2 className="slds-card__header-title">
        <a className="slds-card__header-link slds-truncate" title="Accounts"><span>{headerText}</span>
        </a>
      </h2>
    </div>
    
    let mediaButton = <div className={`slds-no-flex ${hiddenHeaderButton} ${headerButtonStreched} ${headerButtonSpacing}`}>
      <button disabled={headerButtonIsDisabled} className={`slds-button ${headerButtonType} ${headerButtonStreched}`}>{headerButton.icon.name !== "" && headerButton.icon.position === "slds-button__icon_left"  ? headerButtonIcon : ""}{headerButtonStrong ? <strong>{headerButtonText}</strong> : <span>{headerButtonText}</span>}{headerButton.icon.name !== "" && headerButton.icon.position === "slds-button__icon_right"  ? headerButtonIcon : ""}</button>
    </div>
    let headerNode = <header className={`slds-media slds-media_center slds-has-flexi-truncate ${headerReverse}`}>{mediaFigure}{mediaBody}{mediaButton}</header>;
    let cardHeader = <div className={`${hiddenHeader}${headerSpacing}slds-card__header slds-grid`}>{headerNode}</div>;
    

    let body = data.body;
    let bodyAlign = body.align;
    let bodyMarginPadding = this.getSpacings(body);
    let hiddenBody = "";
    if(body.hidden.length > 0) {
      _.each(body.hidden, cls => {
        hiddenBody += `${cls} `;
      })
    }
    let cardBody = <div className={`slds-card__body slds-card__body_inner ${bodyAlign} ${bodyMarginPadding} ${hiddenBody}`}>{body.text}</div>;
    
    let footer = data.footer;
    let hiddenFooter = "";
    let footerSpacing = this.getSpacings(footer);
    let footerText = footer.text;
    let footerAlign = footer.align;
    if(footer.hidden.length > 0) {
      _.each(footer.hidden, cls => {
        hiddenFooter += `${cls} `;
      })
    }
    let cardFooter = <footer className={`slds-card__footer ${hiddenFooter} ${footerAlign} ${footerSpacing}`}><a className="slds-card__footer-action">{footerText} <span className="slds-assistive-text">Accounts</span></a></footer>

    return (
      <div className="canvas-card">
        <article className={`${marginsPaddings}slds-card`}>
          {cardHeader}
          {cardBody}
          {cardFooter}
        </article>
      </div>);
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
          return <AddComponent />
        }
      }
    }
  }
  generateCode = () => {
    return <Codeblock/>
  }
  activateColumn = (id, device, rowId) => {
    if(id !== null &&  device && rowId !== null) {
      this.props.reduxActivateColumn(id, device, rowId);
    }
  }
  activateRow = (device, rowId) => {
    if(rowId !== null &&  device && rowId !== null) {
      this.props.reduxActivateRow(device, rowId);
    }
  }
  render() {
    const { builderData } = this.props;
    if(builderData.length === 0) {
      return null
    }
    const activePage = _.find(builderData, d => { return d.active === true;})
    return (
      <div className="body">
        <div className="canvas">
        {
          activePage.state === "builder" ? this.generateComponent() : this.generateCode()
        }
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
      reduxActivateRow: (device, rowId) => dispatch(activateRow(device, rowId))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
