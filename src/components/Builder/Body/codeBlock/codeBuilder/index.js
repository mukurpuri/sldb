import _ from 'lodash';
import Helpers from '../../../../../config/helpers';
export function codeBuilder(data, type) {
    switch (type) {
        case "grid":
            return gridbuilder(data);
        case "card":
            return cardbuilder(data);
    
        default:
            return null;
    }
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
    let gridGutters = properties.gutters !== "" ? ` className="${properties.gutters.trim()}"` : '';
    const rows= fetchRows(properties.data);
    const gridCode = `<div className="${gridContainerMarginsPaddings}${gridContainerClasses}"><div${gridGutters}>${rows}</div></div>`;
    return gridCode;
}

function cardbuilder(code) {
    let cardClasses = (`${Helpers.getSpacings(code).trim()} slds-card`).trim();
    let cardHeader = "fwef";
    let cardBody = "ewfwef";
    let cardFooter = "fwefw";
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
        columnString += `<div className="slds-col ${smClasses[index].spacings} ${smString} ${mdString} ${lgString}">Inner Text</div>`
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
        rowString += `<div${height}className="${totalClasses}">${fetchColumns(data,index)}</div>`
    });
    return rowString;
}