import _ from 'lodash';
import Helpers from '../../../../../config/helpers';
import React from 'react';

export function codeBuilder(data, type) {
    switch (type) {
        case "grid":
            return gridbuilder(data);
        case "card":
            return cardbuilder(data);
        case "button":
            return buttonbuilder(data);
        case "checkbox":
            return checkboxBuilder(data)
        case "icon":
            return iconBuilder(data)
    
        default:
            return null;
    }
}
function iconBuilder(icon) {
    let iconSize =  icon.size;
    let iconColor= icon.color;
    let iconFloat= icon.float || "";
    let iconFlip = icon.flip ? " slds-icon_flip" : "";
    let iconMarginsPaddings = Helpers.getSpacings(icon);
    let iconDescription = icon.description;

    let useNode = `<use href="/assets/icons/${icon.type}-sprite/svg/symbols.svg#${(icon.name)}"></use>`;
    let svgClasses = Helpers.extraSpaceRemover(`${iconColor} ${iconSize} slds-icon ${icon.type === "utility" ? "slds-icon-text-default" : ""}`);
    let svgNode = Helpers.extraSpaceRemover(`<svg class="${svgClasses}" aria-hidden="true">${useNode}</svg>`);

    let assertiveTextDescription = "";
    assertiveTextDescription = `  <span class="${`slds-assistive-text`}">${iconDescription}</span>`

    let iconName = renameIcon(icon.name);
    let iconContainerClass = Helpers.extraSpaceRemover(`class="${Helpers.extraSpaceRemover(`slds-icon_container slds-icon-${icon.type}-${iconName} ${iconFlip}`)}" title="${iconName}"`);
    let iconContainer = `<span ${iconContainerClass}>${svgNode}${assertiveTextDescription}</span>`;

    let iconDirectionProps = `dir="${icon.flip ? "rtl" : "ltr"}"`
    let iconDirection = `<div ${iconDirectionProps}>${iconContainer}</div>`
    
    let iconCapsuleClasses = Helpers.extraSpaceRemover(`${iconMarginsPaddings} ${iconFloat}`);
    iconCapsuleClasses = iconCapsuleClasses.trim() !== "" ? `class="${iconCapsuleClasses}"` : "";
    let iconCapsule = `<div ${iconCapsuleClasses}>${iconDirection}</div>`;

    return iconCapsule
}
function checkboxBuilder(checkbox) {
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
    
    const abbr = checkboxIsRequired === "true" ? <abbr class="slds-required" title="required">*</abbr> : "";
    let disabledString = checkboxIsDisabled === "true" ?  "disabled" : ""; 
    const checkBoxInput = checkboxChecked === "true" ?
    `<input type="checkbox" name="options" id="checkbox-id" value="checkbox-id" checked  ${disabledString} />` :
    `<input type="checkbox" name="options" id="checkbox-id" value="checkbox-id" ${disabledString} />`;
    const checkboxFaux = `<span class="slds-checkbox_faux ${checkbox.hasLabel ? "": "slds-m-right--none"}"></span>`;
    let checkBoxLabel = "";
    if(checkbox.hasLabel) {
        checkBoxLabel = `<span class="slds-form-element__label">${checkboxText}</span>`
    }
    const checkboxLabelContainer = `<label class="slds-checkbox__label" htmlFor="checkbox-id">${checkboxFaux}${checkBoxLabel}</label>`;
    let formControl = `<div class="slds-form-element__control"><div class="slds-checkbox">${abbr}${checkBoxInput}${checkboxLabelContainer}</div></div>`;
    let errorLabel = "";
    if(checkboxHasError === "true") {
        errorLabel = `<div class="slds-form-element__help" id="showError">${checkboxErrorLabel}</div>`;
    }
    const checkBoxContainerClass =  Helpers.extraSpaceRemover(`slds-form-element ${errorClass}  ${checkboxFloat} ${checkboxSpacing}`);
    const checkBoxContainer = `<div class="${checkBoxContainerClass}">${formControl}${errorLabel}</div>`;
    return (
        checkBoxContainer  
    );
}
function buttonbuilder(button) {
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

    let iconUse = `<use href="/assets/icons/${buttonIconType}-sprite/svg/symbols.svg#${buttonIconName}"></use>`
    let svgClasses  = Helpers.extraSpaceRemover(`slds-button__icon ${buttonIconPosition} ${buttonIconSize} slds-m-bottom_xx-small`);
    let iconCode = buttonHasIcon === "true" ? (
      `<svg class="${svgClasses}" aria-hidden="true">${iconUse}</svg>`) : "";
    if(button.hidden.length > 0) {
      _.each(button.hidden, cls => {
        hiddenButton += `${cls} `;
      })
    }
    
    buttonText = buttonStrong ? `<strong>${buttonText}</strong>` : `${buttonText}`;
    let buttonTextWithIconPosition = `<span>${buttonIconPosition === "slds-button__icon_left" ? `${iconCode}${buttonText}` : `${buttonText}${iconCode}`}</span>`;
    let classes = `slds-button ${buttonFloat} ${hiddenButton} ${buttonSpacing} ${buttonType} ${buttonStreched}`;
    return (
        `<button ${buttonIsDisabled ? "disabled": ""} class="${Helpers.extraSpaceRemover(classes)}">${buttonTextWithIconPosition}</button>`
    )

}
function gridbuilder(properties) {
    //console.log("properties" ,properties);
    const gridClasses = {
        gutter: properties.gutters,
        margin: {
            top: properties.margin.top,
            bottom: properties.margin.bottom
        },
        padding: {
            top: properties.padding.top,
            bottom: properties.padding.bottom
        }
    }
    const gridContainerClasses =  gridClasses.gutter === "" && !gridClasses.gutter ? `` : ` slds-p-left_${gridClasses.gutter.split("_")[1]} slds-p-right_${gridClasses.gutter.split("_")[1]}`;
    const margins = properties.margin || "";
    const paddings = properties.padding || "";
    const marginTop = margins.top.split("_")[1] ? Helpers.valueGapper(margins.top) : '';
    const marginBottom = margins.bottom.split("_")[1] ? Helpers.valueGapper(margins.bottom) : '';
    const paddingTop = paddings.top.split("_")[1] ? Helpers.valueGapper(paddings.top) : '';
    const paddingBottom = paddings.bottom.split("_")[1] ? Helpers.valueGapper(paddings.bottom) : '';
    let gridContainerMarginsPaddings = `${marginTop}${marginBottom}${paddingTop}${paddingBottom}`;
    gridContainerMarginsPaddings = gridContainerMarginsPaddings !== "" ? `${gridContainerMarginsPaddings.trim()}` : '';
    let gridGutters = properties.gutters !== "" ? ` class="${properties.gutters.trim()}"` : '';
    const rows= fetchRows(properties.data);
    const gridRowCode = Helpers.extraSpaceRemover(`${gridContainerMarginsPaddings}${gridContainerClasses}`);
    const gridCode = `<div class="${gridRowCode}"><div${gridGutters}>${rows}</div></div>`;
    return gridCode;
}
function renameIcon(icon) {
    let icon_name = icon.replace(/_/g, "-");
    return icon_name;
  }
function fetchmediaFigure(icon, remover) {
    if(remover.icon) {
        return "";
    }
    let headerIcon = icon;
    let headerIconSize = Helpers.valueGapper2(headerIcon.size) || "";
    let headerIconColor= Helpers.valueGapper2(headerIcon.color || "");
    let headerIconFlip = headerIcon.flip ? " slds-icon_flip" : "";
    let headerIconMarginsPaddings = Helpers.getSpacings(headerIcon);
    let hiddenHeaderIcon = "";
    if(headerIcon.hidden.length > 0) {
      _.each(icon.hidden, cls => {
        hiddenHeaderIcon += `${cls} `;
      })
    }
    let headerIconClasses = `${headerIconColor}${headerIconSize}`;
    let mediaIconUse = `<use href="/assets/icons/${headerIcon.type}-sprite/svg/symbols.svg#${(headerIcon.name)}"></use>`
    let mediaIconSvg = `<svg class="${Helpers.extraSpaceRemover(`${headerIconClasses}slds-icon ${headerIcon.type === "utility" ? "slds-icon-text-default" : ""}`)}" aria-hidden="true">${mediaIconUse}</svg><span class="slds-assistive-text">${headerIcon.description}</span>`;
    let mediaIconContainer = `<span class="${Helpers.extraSpaceRemover(`slds-icon_container slds-icon-${headerIcon.type}-${renameIcon(headerIcon.name)}${headerIconFlip}`)}" title="${renameIcon(headerIcon.name)}">${mediaIconSvg}</span>`;
    let mediaFigureCapsule = `<div dir="${headerIcon.flip ? "rtl" : "ltr"}">${mediaIconContainer}</div>`;
    let mediaFigureContainer = `<div class="${Helpers.extraSpaceRemover(`slds-media__figure ${headerIconMarginsPaddings} ${hiddenHeaderIcon}`)}">${mediaFigureCapsule}</div>`;
    return mediaFigureContainer;
}
function fetchmediaBody(title, remover) {
    if(remover.title) {
        return "";
    }
    let mediaBody = "";
    let headerText = title.text;
    let headerTitleMarginsPaddings = Helpers.getSpacings(title);
    let headerTitleAlign = title.align;
    let headerTitleColor = title.color;
    let hiddenHeaderTitle = "";
    if(title.hidden.length > 0) {
      _.each(title.hidden, cls => {
        hiddenHeaderTitle += `${cls} `;
      })
    }
    let bodyClasses = Helpers.extraSpaceRemover(`${headerTitleMarginsPaddings} ${headerTitleAlign} slds-media__body ${hiddenHeaderTitle}`);
    mediaBody = `<div class="${bodyClasses}"><h2 class="slds-card__header-title"><a class="slds-card__header-link slds-truncate ${headerTitleColor}" title=${headerText}><span>${headerText}</span></a></h2></div>`;
    return mediaBody;
}
function fetchmediaButton(button, remover) {
    if(remover.footer) {
        return "";
    }
    let mediaButton = "";
    let headerButtonText = button.text;
    let headerButtonStreched = button.streched ? "slds-button_stretch" : "";
    let headerButtonType = button.theme;
    let headerButtonStrong = button.strong;
    let headerButtonSpacing = Helpers.getSpacings(button);
    let headerButtonIsDisabled= button.isDisabled;
    let hiddenHeaderButton = "";
    if(button.hidden.length > 0) {
      _.each(button.hidden, cls => {
        hiddenHeaderButton += `${cls} `;
      })
    }
    let mediaButtonClasses = Helpers.extraSpaceRemover(`slds-no-flex ${hiddenHeaderButton} ${headerButtonStreched} ${headerButtonSpacing}`);
    let mediaButtonMainClass = Helpers.extraSpaceRemover(`slds-button ${headerButtonType} ${headerButtonStreched}`);
    let isDisabled = headerButtonIsDisabled ? "disabled" : "";
    mediaButton = `<div class="${mediaButtonClasses}"><button ${isDisabled} class="${mediaButtonMainClass}">${headerButtonStrong ? `<strong>${headerButtonText}</strong>` : `<span>${headerButtonText}</span>`}</button></div>`
    return mediaButton;
}
function fetchCardHeaderNode(header, remover) {
    let headerAlignment = header.alignment;
    let headerReverse = Helpers.valueGapper2(header.flip);
    let classes = Helpers.extraSpaceRemover(`slds-media slds-media_center slds-has-flexi-truncate ${headerReverse}${headerAlignment}`);
    let headerNode = `<header class="${classes}">${fetchmediaFigure(header.icon, remover)}${fetchmediaBody(header.title, remover)}${fetchmediaButton(header.button, remover)}</header>`;
    return headerNode;
}
function fetchCardHeader(header, remover) {
    let hiddenHeader = "";
    if(header.hidden.length > 0) {
      _.each(header.hidden, cls => {
        hiddenHeader += `${cls} `;
      })
    }
    let headerClasses = (`${hiddenHeader}${Helpers.getSpacings(header)}`).trim();
    let cardHeaderClasses = Helpers.extraSpaceRemover(`${headerClasses}slds-card__header slds-grid`);
    let cardHeader = `<div class="${cardHeaderClasses}">${fetchCardHeaderNode(header, remover)}</div>`;
    
    return cardHeader;
}
function fetchCardBody(body) {
    let bodyAlign = body.align;
    let bodyColor = body.color;
    let bodySize = body.size;
    let bodyMarginPadding = Helpers.getSpacings(body);
    let hiddenBody = "";
    if(body.hidden.length > 0) {
      _.each(body.hidden, cls => {
        hiddenBody += `${cls} `;
      })
    }
    let bodyClasses = Helpers.extraSpaceRemover(`slds-card__body slds-card__body_inner ${bodyColor} ${bodyAlign} ${bodyMarginPadding} ${hiddenBody} ${bodySize}`);
    let cardBody = `<div class="${bodyClasses}">${body.text}</div>`;
    return cardBody;
}
function fetchCardFooter(footer) {
    let hiddenFooter = "";
    let footerSpacing = Helpers.getSpacings(footer);
    let footerText = footer.text;
    let footerAlign = footer.align;
    if(footer.hidden.length > 0) {
      _.each(footer.hidden, cls => {
        hiddenFooter += `${cls} `;
      })
    }
    let footerClasses = Helpers.extraSpaceRemover(`slds-card__footer ${hiddenFooter} ${footerAlign} ${footerSpacing}`);
    return `<footer class="${footerClasses}"><a class="slds-card__footer-action">${footerText}</a></footer>`;
}
function cardbuilder(code) {
    const remover = code.remove;
    let cardClasses = Helpers.extraSpaceRemover((`${Helpers.getSpacings(code).trim()} slds-card`).trim());
    let cardHeader = remover.header ? "" : fetchCardHeader(code.header, remover);
    let cardBody = remover.body ? "" : fetchCardBody(code.body);
    let cardFooter = remover.footer ? "" : fetchCardFooter(code.footer);
    let cardCode = `<article class="${cardClasses}">${cardHeader}${cardBody}${cardFooter}</article>`;
    return cardCode;
}

function getSpacing(spacings) {
    let margin = spacings.margin;
    let padding = spacings.padding;
    return (`${Helpers.valueGapper2(margin.top)}${Helpers.valueGapper2(margin.bottom)}${Helpers.valueGapper2(padding.top)}${Helpers.valueGapper2(padding.bottom)}`).trim();
}
function fetchColumns(data,ind) {
    const smClasses = [];
    const mdClasses = [];
    const lgClasses = [];
    let columnString = "";
    _.each(data, (device, devIndex) => {
        _.each(device, (row, index) => {
            if(index === ind){
                let cols = row.cols;
                if(devIndex === "sm") { 
                    _.each(cols, col => {
                        smClasses.push(
                            {
                                size: col.size,
                                spacings: getSpacing(col.spacings)
                            }
                        );
                    })
                }
                if(devIndex === "md") { 
                    _.each(cols, col => {
                        mdClasses.push(
                            {
                                size: col.size
                            }
                        );
                    })
                }
                if(devIndex === "lg") { 
                    _.each(cols, col => {
                        lgClasses.push(
                            {
                                size: col.size
                            }
                        );
                    })
                }
            }
        });
    });
    _.each(smClasses, (cls, index) => {
        const smString = "slds-small-size_" + smClasses[index].size + "-of-12"
        const mdString = "slds-medium-size_" + mdClasses[index].size + "-of-12"
        const lgString = "slds-large-size_" + lgClasses[index].size + "-of-12"
        columnString += Helpers.extraSpaceRemover(`<div class="slds-col ${smClasses[index].spacings} ${smString} ${mdString} ${lgString}">Inner Text</div>`)
    });
    return columnString;
}
function fetchRows(data) {
    let rowString = "";
    _.each(data.sm, (row, index) => {
        const margins = row.spacings.margin || "";
        const paddings = row.spacings.padding || "";
        const marginTop = margins.top && margins.top !== "" ? (margins.top.split("_")[1] ? Helpers.valueGapper(margins.top) : '') : '';
        const marginBottom = margins.bottom && margins.bottom !== "" ? (margins.bottom.split("_")[1] ? Helpers.valueGapper(margins.bottom) : '') : '';
        const paddingTop = paddings.top && paddings.top !== "" ? (paddings.top.split("_")[1] ? Helpers.valueGapper(paddings.top) : '') : '';
        const paddingBottom = paddings.bottom && paddings.bottom !== "" ? (paddings.bottom.split("_")[1] ? Helpers.valueGapper(paddings.bottom) : '') : '';
        let rowMarginsPaddings = `${marginTop}${marginBottom}${paddingTop}${paddingBottom}`;
        const horizontal_align = Helpers.valueGapper(row.horizontal_align);
        const vertical_align = Helpers.valueGapper(row.vertical_align);
        const reverse = row.reverse;
        const height = row.height === "auto" ? ` style="height:${row.height}"` : ` style="height:${row.height}px"` ;
        const totalClasses = (`slds-grid slds-wrap${rowMarginsPaddings}${horizontal_align}${vertical_align}${reverse}`).trim().replace(new RegExp(' {2}', "g"), ' ');
        rowString += `<div${height}class="${totalClasses}">${fetchColumns(data,index)}</div>`
    });
    return rowString;
}