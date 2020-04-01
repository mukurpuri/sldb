/* eslint-disable jsx-a11y/anchor-is-valid */

// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import DeviceToggler from './Component/Grid/DeviceToggler';
import { activateColumn, activateRow } from '../../../redux/actions/gridActions';
import Codeblock from './codeBlock';
import AddComponent from './AddComponent';
import Helpers from '../../../config/helpers';
import RowAction from './Component/Grid/RowAction';
import ColumnAction from './Component/Grid/ColumnAction';
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

        case 'alert':
          return this.renderAlert(data)
        
        case 'textarea':
          return this.renderTextArea(data)
        
        case 'button':
          return this.renderButton(data)
        
        case 'checkbox':
          return this.renderCheckBox(data)

        case 'icon':
          return this.renderIcon(data)

        case 'input':
          return this.renderInput(data)
        
        case 'radio-group':
          return this.renderRadioGroup(data)

        case 'select':
          return this.renderSelect(data)

        default:
        return <p>Add component</p>;
    }
  }
  renderSelect = select  => {
    let radioMarginsPaddings = Helpers.getSpacings(select);
    let selectLabel = select.label;
    let selectHasLabel = select.hasLabel;
    let selectIsDisabled = select.isDisabled
    let isRequired = select.isRequired;
    let selectHasError = select.hasError ? "slds-has-error" : "";
    let selectErrorText = select.erroLabel;
    const selectField = 
    <div className="componenet-builder-container">
      <div className={radioMarginsPaddings}>
        <div className={`slds-form-element ${selectHasError}`}>
        {
          selectHasLabel  ? 
          <label className="slds-form-element__label" htmlFor="select-1">
          { isRequired ? <abbr class="slds-required" title="required">* </abbr> : null }
          {selectLabel}</label>
          : null
        }
        <div className="slds-form-element__control">
          <div className="slds-select_container">
            <select className="slds-select" disabled={selectIsDisabled} id="select-1">
              <option value="">Please select</option>
              <option>Option One</option>
              <option>Option Two</option>
              <option>Option Three</option>
            </select>
          </div>
        </div>
        {
          selectHasError ? <div class="slds-form-element__help" id="select-error-1">{selectErrorText}</div> : null
        }
        </div>
      </div>
    </div>
    return selectField
  }
  radios = radio => {
    let radioFloat = radio.floatChildren;
    let radios = radio.radioButtons;
    
    let radioButtons = [];
    _.each(radios, (rad, index) => {
      const radioIndex = index;
      const radioChecked = (rad.checked === "true");
      let isDisabled = rad.isDisabled;
      let marginBottom = "";
      if(radio.innerGapping !== "") {
        marginBottom = `slds-m-bottom--${radio.innerGapping}`
      }
      radioButtons.push(
        <span key={index} className={`slds-radio ${radioFloat} ${marginBottom}`}>
          <input defaultChecked={radioChecked} type="radio" id={radioIndex} name="default" disabled={isDisabled === "true"} />
          <label className="slds-radio__label" htmlFor={radioIndex}>
            <span className="slds-radio_faux"></span>
            <span className="slds-form-element__label">{rad.text}</span>
          </label>
        </span>
      )
    });
    return radioButtons;     
  }
  renderRadioGroup = radio => {
  let radioMarginsPaddings = Helpers.getSpacings(radio);
  let radioLabel = radio.label;
  let radioHasLabel = radio.hasLabel;
  let isRequired = radio.isRequired;
  let radioHasError = radio.hasError ? "slds-has-error" : "";
  const legend = radioHasLabel ? <legend className={`slds-form-element__legend slds-form-element__label slds-m-bottom--${radio.innerGapping}`}>{isRequired ? <abbr className="slds-required" title="required">*</abbr> : ""}{radioLabel}</legend> : "";
  
  const radioGroupField = <div className="componenet-builder-container">
    <div className={radioMarginsPaddings}>
      <fieldset className={`slds-form-element  ${radioHasError}`}>
      {legend}
        <div className="slds-form-element__control">
          {this.radios(radio)}
        </div>
        {
          radio.hasError ?
          <div><br/><div id="error_01" className="slds-form-element__help">{radio.erroLabel}</div></div>
          : null 
        }
      </fieldset>
    </div>
  </div> 
  return radioGroupField;
  }
  renderInput = input => {
    let inputMarginsPaddings = Helpers.getSpacings(input);
    let inputLabel = input.label;
    let inputHasLabel = input.hasLabel;
    let inputPlaceholder = input.placeholder;
    let inputIsRequired = input.isRequired;
    let inputIsDisabled = input.isDisabled;
    
    let inputHasError = input.hasError  ? "slds-has-error" : "";
    let inputErrorLabel = input.errorLabel;
    let inputReadOnly = input.readOnly;
    let inputValue = input.value;

    let inputHasIcon = input.hasIcon;
    let inputIconDirection = input.icon.direction;
    let inputIconName = input.icon.name;
    let inputIconType = input.icon.type;
    let clearButton = input.clearButton;

    let iconDirection = clearButton ? `` : `slds-input-has-icon_${inputIconDirection}`
    let iconClasses = inputHasIcon ? `slds-input-has-icon ${iconDirection}` : "";

    
    let clearButtonClass = clearButton && inputHasIcon ? `slds-input-has-icon slds-input-has-icon_left-right` : ""

    let inlineHelp = input.inlineHelp;

    const inputField = 
    <div className="componenet-builder-container">
    <div className={`slds-form-element ${inputMarginsPaddings} ${inputHasError}`}>
        {
          inputHasLabel ?
          <label className="slds-form-element__label" htmlFor="inputText">
          {
            inputIsRequired ?
            <abbr className="slds-required" title="required">* </abbr> : ""
          }
          {inputLabel}</label> : ""
        }
      <div className={`slds-form-element__control ${iconClasses} ${clearButtonClass}`}>
        {
          inputHasIcon ?
          <svg className={`slds-icon slds-input__icon slds-input__icon_${inputIconDirection} slds-icon-text-default`} aria-hidden="true">
            <use href={`/assets/icons/${inputIconType}-sprite/svg/symbols.svg#${inputIconName}`}></use>
          </svg> : null
        }
        <input defaultValue={inputValue} readOnly={inputReadOnly} disabled={inputIsDisabled}  type="text" id="inputText" placeholder={inputPlaceholder} required={inputIsRequired} className="slds-input" />
        {
          clearButton && inputHasIcon ?
          <button className="slds-button slds-button_icon slds-input__icon slds-input__icon_right" title="Clear">
            <svg className="slds-button__icon slds-icon-text-light" aria-hidden="true">
              <use href="/assets/icons/utility-sprite/svg/symbols.svg#clear"></use>
            </svg>
            <span className="slds-assistive-text">Clear</span>
          </button> : null
        }
      </div>
      { inputHasError ?
        <div className="slds-form-element__help" id="error-message-inputText">{inputErrorLabel}</div> : ""
      }
      {
        inlineHelp.visible ?
        <div className="slds-form-element__help">{inlineHelp.text}</div> : ""
      }
    </div>
    </div>
    return inputField;
  }
  renderIcon = icon => {
    let iconSize =  icon.size;
    let iconColor= icon.color;
    let iconFloat= icon.float;
    let iconFlip = icon.flip ? " slds-icon_flip" : "";
    let iconMarginsPaddings = Helpers.getSpacings(icon);
    let iconDescription = icon.description;
    
    let iconNode = 
    <div className="componenet-builder-container">
      <div className={`icon-container ${iconMarginsPaddings} ${iconFloat}`}>
        <div dir={icon.flip ? `rtl` : "ltr"} >
          <span className={`slds-icon_container slds-icon-${icon.type}-${this.renameIcon(icon.name)}${iconFlip}`} title={`${this.renameIcon(icon.name)}`}>
            <svg className={`${iconColor} ${iconSize} slds-icon ${icon.type === "utility" ? "slds-icon-text-default" : ""}`} aria-hidden={true}>
            <use href={`/assets/icons/${icon.type}-sprite/svg/symbols.svg#${(icon.name)}`}></use>
            </svg>
            <span className={`slds-assistive-text`}>{iconDescription}</span>
          </span>
        </div>
      </div>
    </div>

    return iconNode;
  }
  renderAlert = data => {
    return <p>Alert</p>
  }
  renderCheckBox = data => {
    let checkbox = data;
    let checkboxText = checkbox.label || "";
    let checkboxSpacing = Helpers.getSpacings(checkbox);
    let checkboxIsDisabled= checkbox.isDisabled;
    let checkboxHasError= checkbox.showError;
    let checkboxIsRequired= checkbox.isRequired;
    let checkboxChecked = (checkbox.checked);
    let checkboxFloat= checkbox.float;
    let checkboxErrorLabel = checkbox.errorLabel || "";
    let errorClass = "";
    if(checkboxHasError === "true") {
      errorClass = "slds-has-error"
    }
    return (
    <div className="componenet-builder-container">
      <div className={`slds-form-element ${errorClass}  ${checkboxFloat} ${checkboxSpacing}`}>
        <div className="slds-form-element__control">
          <div className="slds-checkbox">
            { checkboxIsRequired === "true" ?
              <abbr className="slds-required" title="required">*</abbr> : null
            }
            {
              checkboxChecked === "true" ?
              <input onChange={() => { return true; }} type="checkbox" name="options" id="checkbox-id" value="checkbox-id" checked  disabled={checkboxIsDisabled} /> :
              <input type="checkbox" name="options" id="checkbox-id" value="checkbox-id" disabled={checkboxIsDisabled} />
            }
            
              <label className="slds-checkbox__label" htmlFor="checkbox-id">
              <span className={`slds-checkbox_faux ${checkbox.hasLabel ? "": "slds-m-right--none"}`}></span>
                { 
                  checkbox.hasLabel ? 
                  (
                    <React.Fragment>
                    <span className="slds-form-element__label">{checkboxText}</span>
                    </React.Fragment>
                  ) : null
                }
            </label>
          </div>
        </div>
        {
          checkboxHasError === "true" ? 
          <div className="slds-form-element__help" id="showError">{checkboxErrorLabel}</div> : null
        }
      </div>
    </div>);
  }
  renderGrid = data => {
      const properties = data.properties;
      const gutters = properties.gutters || "";
      const margins = properties.margin || "";
      const paddings = properties.padding || "";
      
      const marginTop = margins.top.split("_")[1] ? Helpers.valueGapper(margins.top) : '';
      const marginBottom = margins.bottom.split("_")[1] ? Helpers.valueGapper(margins.bottom) : '';
      const paddingTop = paddings.top.split("_")[1] ? Helpers.valueGapper(paddings.top) : '';
      const paddingBottom = paddings.bottom.split("_")[1] ? Helpers.valueGapper(paddings.bottom) : '';

      let marginsPaddings = ` ${marginTop}${marginBottom}${paddingTop}${paddingBottom} `;

      var parentGridClasses =  gutters === "" ? `` : `slds-p-left_${gutters.split("_")[1]} slds-p-right_${gutters.split("_")[1]}`;
      const stack = data.properties.data[data.activeEditor];
      const grid = [];
      _.each(stack, (row, rowIndex) => {

        const rowId = rowIndex;
        const activeRowClass = row.active ? " active " : "";
        const reverseClass = Helpers.valueGapper(row.reverse);

        const horizontalAlignmentClass = Helpers.valueGapper(row.horizontal_align);
        const verticalAlignmentClass = Helpers.valueGapper(row.vertical_align);

        const columns = [];
        _.each(row.cols, (col, index) => {
          const activeClass = col.active ? "active" : "";
          const classNames =  ` ${activeClass} slds-large-size_${col.size}-of-12`;

          const colMarginTop = col.spacings.margin.top.split("_")[1] ? Helpers.valueGapper(col.spacings.margin.top) : ''; ;
          const colMarginBottom = col.spacings.margin.bottom.split("_")[1] ? Helpers.valueGapper(col.spacings.margin.bottom) : '';
          const colPaddingTop = col.spacings.padding.top.split("_")[1] ? Helpers.valueGapper(col.spacings.padding.top) : ''; ;
          const colPaddingBottom = col.spacings.padding.bottom.split("_")[1] ? Helpers.valueGapper(col.spacings.padding.bottom) : '';

          let colMarginsPaddings = `${colMarginTop}${colMarginBottom}${colPaddingTop}${colPaddingBottom}`;
          columns.push(
            <div style={{"height": `78px`}} key={index} onClick={(e) => { this.activateColumn(index, data.activeEditor, rowId); }} className={`${colMarginsPaddings}slds-col${classNames} text_col_${col.size} text_col builderColumn`}><ColumnAction id={index} rowId={rowId}/></div>
          )
        });

        const { spacings } = row;
        const rowMarginTop = spacings.margin.top.split("_")[1] ? Helpers.valueGapper(spacings.margin.top) : ''; ;
        const rowMarginBottom = spacings.margin.bottom.split("_")[1] ? Helpers.valueGapper(spacings.margin.bottom) : ''; ;
        const rowPaddingTop = spacings.padding.top.split("_")[1] ? Helpers.valueGapper(spacings.padding.top) : ''; ;
        const rowPaddingBottom = spacings.padding.bottom.split("_")[1] ? Helpers.valueGapper(spacings.padding.bottom) : ''; ;

      let rowMarginsPaddings = `${rowMarginTop}${rowMarginBottom}${rowPaddingTop}${rowPaddingBottom}`;
        grid.push(<div onClick={() => this.activateRow(data.activeEditor, rowId)} key={rowIndex} style={{"height": row.height === "auto" ? `auto` : `${row.height}px`}} className={`slds-grid${horizontalAlignmentClass}${verticalAlignmentClass}${activeRowClass}${reverseClass}${rowMarginsPaddings} slds-wrap builderRow`}><RowAction />{columns}</div>)
      });

      return <div className="gridBuilder"><DeviceToggler/><div className="code-target"><div className={`grid-container ${data.activeEditor}  ${parentGridClasses}`}><div className={`${marginsPaddings}`} ><div className={`${gutters}`}>{grid}</div></div></div></div></div>;
  }
  renameIcon = (icon) => {
    let icon_name = icon.replace(/_/g, "-");
    return icon_name;
  }
  renderCard = data => {
    let marginsPaddings = Helpers.getSpacings(data);
    let header = data.header;
    let removeHeader = data.remove.header;
    let headerAlignment = header.alignment;
    let headerSpacing = Helpers.getSpacings(header);
    let headerReverse = Helpers.valueGapper2(header.flip);
    let hiddenHeader = "";
    if(header.hidden.length > 0) {
      _.each(header.hidden, cls => {
        hiddenHeader += `${cls} `;
      })
    }

    let headerIcon = header.icon;
    let removeHeaderIcon = data.remove.icon;
    let headerIconSize = Helpers.valueGapper2(headerIcon.size);
    let headerIconColor=Helpers.valueGapper2(headerIcon.color);
    let headerIconFlip = headerIcon.flip ? " slds-icon_flip" : "";
    let headerIconMarginsPaddings = Helpers.getSpacings(headerIcon);
    let hiddenHeaderIcon = "";
    if(headerIcon.hidden.length > 0) {
      _.each(header.icon.hidden, cls => {
        hiddenHeaderIcon += `${cls} `;
      })
    }

    let headerTitle = header.title;
    let headerText = headerTitle.text;
    let removeHeaderBody =  data.remove.title;
    let headerTitleMarginsPaddings = Helpers.getSpacings(headerTitle);
    let headerTitleAlign = headerTitle.align;
    let headerTitleColor = headerTitle.color;
    let hiddenHeaderTitle = "";
    if(headerTitle.hidden.length > 0) {
      _.each(headerTitle.hidden, cls => {
        hiddenHeaderTitle += `${cls} `;
      })
    }

    let headerButton = header.button;
    let headerButtonText = headerButton.text;
    let removeHeaderButton = data.remove.button;
    let headerButtonStreched = headerButton.streched ? "slds-button_stretch" : "";
    let headerButtonType = headerButton.theme;
    let headerButtonStrong = headerButton.strong;
    let headerButtonSpacing = Helpers.getSpacings(headerButton);
    let headerButtonIsDisabled= headerButton.isDisabled;
    let hiddenHeaderButton = "";
    if(headerButton.hidden.length > 0) {
      _.each(headerButton.hidden, cls => {
        hiddenHeaderButton += `${cls} `;
      })
    }

    let mediaFigure =  removeHeaderIcon ? "" : <div className={`slds-media__figure ${headerIconMarginsPaddings} ${hiddenHeaderIcon}`}>
      <div dir={headerIcon.flip ? `rtl` : "ltr"} >
        <span className={`slds-icon_container slds-icon-${headerIcon.type}-${this.renameIcon(headerIcon.name)}${headerIconFlip}`} title={`${this.renameIcon(headerIcon.name)}`}>
          <svg className={`${headerIconColor}${headerIconSize}slds-icon ${headerIcon.type === "utility" ? "slds-icon-text-default" : ""}`} aria-hidden={true}>
          <use href={`/assets/icons/${headerIcon.type}-sprite/svg/symbols.svg#${(headerIcon.name)}`}></use>
          </svg>
          <span className={`slds-assistive-text`}>{headerIcon.description}</span>
        </span>
      </div>
    </div>
    let mediaBody = removeHeaderBody ? "" :  <div className={`${headerTitleMarginsPaddings} ${headerTitleAlign} slds-media__body ${hiddenHeaderTitle}`}>
      <h2 className="slds-card__header-title">
        <a className= {`slds-card__header-link slds-truncate ${headerTitleColor}`} title={headerText}><span>{headerText}</span>
        </a>
      </h2>
    </div>
    let mediaButton = removeHeaderButton ? "" :  <div className={`slds-no-flex ${hiddenHeaderButton} ${headerButtonStreched} ${headerButtonSpacing}`}>
      <button disabled={headerButtonIsDisabled} className={`slds-button ${headerButtonType} ${headerButtonStreched}`}>{headerButtonStrong ? <strong>{headerButtonText}</strong> : <span>{headerButtonText}</span>}</button>
    </div>
    let headerNode = <header className={`slds-media slds-media_center slds-has-flexi-truncate ${headerReverse} ${headerAlignment}`}>{mediaFigure}{mediaBody}{mediaButton}</header>;
    let headerHiddenClasses = "";
    _.each(header.hidden.slice(), cls => {
      headerHiddenClasses += cls + " ";
    })
    let cardHeader = removeHeader ? "" : <div className={`${hiddenHeader}${headerSpacing}slds-card__header slds-grid ${headerHiddenClasses}`}>{headerNode}</div>;
    

    let body = data.body;
    let bodyAlign = body.align;
    let bodyColor = body.color;
    let removeBody = data.remove.body;
    let bodySize = body.size;
    let bodyMarginPadding = Helpers.getSpacings(body);
    let hiddenBody = "";
    if(body.hidden.length > 0) {
      _.each(body.hidden, cls => {
        hiddenBody += `${cls} `;
      })
    }
    let cardBody = removeBody ? "" : <div className={`slds-card__body slds-card__body_inner ${bodyColor} ${bodyAlign} ${bodyMarginPadding} ${hiddenBody} ${bodySize}`}>{body.text}</div>;
    
    let footer = data.footer;
    let removeFooter = data.remove.footer;
    let hiddenFooter = "";
    let footerSpacing = Helpers.getSpacings(footer);
    let footerText = footer.text;
    let footerAlign = footer.align;
    if(footer.hidden.length > 0) {
      _.each(footer.hidden, cls => {
        hiddenFooter += `${cls} `;
      })
    }
    let cardFooter = removeFooter ? "" : <footer className={`slds-card__footer ${hiddenFooter} ${footerAlign} ${footerSpacing}`}><a className="slds-card__footer-action">{footerText} <span className="slds-assistive-text">Accounts</span></a></footer>

    return (
      <div className="canvas-card">
        <article className={`${marginsPaddings}slds-card`}>
          {cardHeader}
          {cardBody}
          {cardFooter}
        </article>
      </div>);
  }
  renderTextArea = data => {
    let textArea = data;
    let textAreaSpacing = Helpers.getSpacings(textArea);
    let textAreaisDisabled = textArea.isDisabled;
    let textAreaisRequired = textArea.isRequired;
    let textAreaisReadonly = textArea.isReadonly;
    let textAreaisError = textArea.isError;
    
    let hiddenTextArea = "";
    if(textArea.hidden.length > 0) {
      _.each(textArea.hidden, cls => {
        hiddenTextArea += `${cls} `;
      })
    }

    let textAreaLabel = textArea.label;
    let textAreaLabelText =  textAreaLabel.text;
    let textAreaLabelSpacings =  Helpers.getSpacings(textAreaLabel);
    let hiddenTextAreaLabel = "";
    if(textAreaLabel.hidden.length > 0) {
      _.each(textArea.hidden, cls => {
        hiddenTextAreaLabel += `${cls} `;
      })
    }
    let textAreaLabelClasses = Helpers.extraSpaceRemover(`slds-form-element__label ${hiddenTextAreaLabel} ${textAreaLabelSpacings}`);

    let textAreaError = textArea.error;
    let textAreaErrorText = textAreaError.text;
    let textAreaErrorTextPosition = textAreaError.isfloatRight;
    let textAreaErrorLabelClasses =  Helpers.extraSpaceRemover(`slds-form-element__help ${textAreaErrorTextPosition}`);
    let textareaClasses = Helpers.extraSpaceRemover(`slds-form-element ${textAreaisError} ${textAreaSpacing} ${hiddenTextArea}`);
    return (
      <div className={textareaClasses}>
        <label className={textAreaLabelClasses} htmlFor="textarea-sldb">
          {
            textAreaisError ? 
            <abbr className="slds-required" title="required">* </abbr> : null
          }{textAreaLabelText}</label>
          {
            ! textAreaisReadonly ? 
            <div className="slds-form-element__control">
              <textarea value={textArea.value} disabled={textAreaisDisabled} id="textarea-sldb" required="" aria-describedby="error-01" className="slds-textarea" placeholder="Placeholder Text"></textarea>
            </div>
            :
            <div className="slds-form-element__control slds-border_bottom">
              <div className="slds-form-element__static">
                <p>{textArea.value}</p>
              </div>
            </div>
          }
        {
          textAreaisError ? 
          <div className={textAreaErrorLabelClasses} id="error-01">{textAreaErrorText}</div> : null
        }
      </div>
    )
  }
  renderButton = data => {
    let button = data;
    let buttonText = button.text || "";
    let buttonHasIcon = button.hasIcon;
    let buttonStreched = button.streched ? "slds-button_stretch" : "";
    let buttonType = button.theme;
    let buttonStrong = button.strong;
    let buttonSpacing = Helpers.getSpacings(button);
    let buttonIsDisabled= button.isDisabled;
    let buttonFloat= button.float;

    let buttonIcon = button.icon;
    let buttonIconName = buttonIcon.name;
    let buttonIconType = buttonIcon.type;
    let buttonIconPosition = buttonIcon.position;
    let buttonIconSize = buttonIcon.size;
    let hiddenButton = "";
    if(buttonText === "") {
      buttonIconPosition = "";
    }

    let iconUse = <use href={`/assets/icons/${buttonIconType}-sprite/svg/symbols.svg#${buttonIconName}`}></use>
    let iconCode = buttonHasIcon === "true" ? (
      <svg className={`slds-button__icon ${buttonIconPosition} ${buttonIconSize} slds-m-bottom_xx-small` } aria-hidden="true">{iconUse}</svg>) : "";
    if(button.hidden.length > 0) {
      _.each(button.hidden, cls => {
        hiddenButton += `${cls} `;
      })
    }
    
    buttonText = buttonStrong ? <strong>{buttonText}</strong> : `${buttonText}`;
    let buttonTextWithIconPosition = <span>{buttonIconPosition === "slds-button__icon_left" ? <React.Fragment>{iconCode}{buttonText}</React.Fragment> : <React.Fragment>{buttonText}{iconCode}</React.Fragment>}</span>
    let classes = Helpers.extraSpaceRemover(` slds-button ${buttonFloat} ${hiddenButton} ${buttonSpacing} ${buttonType} ${buttonStreched}`)
    return (
      <div className="componenet-builder-container">
        <button disabled={buttonIsDisabled} className={`${classes}`}>{buttonTextWithIconPosition}</button>
      </div>
    )
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
