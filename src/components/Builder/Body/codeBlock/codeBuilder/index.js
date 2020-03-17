import _ from 'lodash';
export function codeBuilder(data, type) {
    switch (type) {
        case "grid":
            return gridbuilder(data);
    
        default:
            return null;
    }
}

function valueGapper(val) {
    if(val === "") {
      return "";
    } else {
      return " " + val + " ";
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
    const gridContainerClasses =  gridClasses.gutter === "" && !gridClasses.gutter ? `` : ` className="slds-p-left_${gridClasses.gutter.split("_")[1]} slds-p-right_${gridClasses.gutter.split("_")[1]}"`;
    const margins = properties.margin || "";
    const paddings = properties.padding || "";
    const marginTop = margins.top.split("_")[1] ? margins.top + valueGapper(margins.top) : '';
    const marginBottom = margins.bottom.split("_")[1] ? margins.bottom + valueGapper(margins.bottom) : '';
    const paddingTop = paddings.top.split("_")[1] ? paddings.top + valueGapper(paddings.top) : '';
    const paddingBottom = paddings.bottom.split("_")[1] ? paddings.bottom + valueGapper(paddings.bottom) : '';
    let gridContainerMarginsPaddings = `${marginTop}${marginBottom}${paddingTop}${paddingBottom}`;
    gridContainerMarginsPaddings = gridContainerMarginsPaddings !== "" ? ` className="${gridContainerMarginsPaddings.trim()}"` : '';
    let gridGutters = properties.gutters !== "" ? ` className="${properties.gutters.trim()}"` : '';
    const rows= fetchRows(properties.data);
    const gridCode = `<div${gridContainerMarginsPaddings}${gridContainerClasses}><div${gridGutters}>${rows}</div></div>`;
    return gridCode;
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
                        smClasses.push(col.size);
                    })
                }
                if(devIndex === "md") { 
                    _.each(cols, col => {
                        mdClasses.push(col.size);
                    })
                }
                if(devIndex === "lg") { 
                    _.each(cols, col => {
                        lgClasses.push(col.size);
                    })
                }
            }
        });
    });
    _.each(smClasses, (cls, index) => {
        const smString = "slds-small-size_" + smClasses[index] + "-of-12"
        const mdString = "slds-medium-size_" + mdClasses[index] + "-of-12"
        const lgString = "slds-large-size_" + lgClasses[index] + "-of-12"
        columnString += `<div className="${smString} ${mdString} ${lgString}">Inner Text</div>`
    });
    return columnString;
}

function fetchRows(data) {
    let rowString = "";
    _.each(data.sm, (row, index) => {
        const margins = row.spacings.margin || "";
        const paddings = row.spacings.padding || "";
        const marginTop = margins.top && margins.top !== "" ? (margins.top.split("_")[1] ? valueGapper(margins.top) : '') : '';
        const marginBottom = margins.bottom && margins.bottom !== "" ? (margins.bottom.split("_")[1] ? valueGapper(margins.bottom) : '') : '';
        const paddingTop = paddings.top && paddings.top !== "" ? (paddings.top.split("_")[1] ? valueGapper(paddings.top) : '') : '';
        const paddingBottom = paddings.bottom && paddings.bottom !== "" ? (paddings.bottom.split("_")[1] ? valueGapper(paddings.bottom) : '') : '';
        let rowMarginsPaddings = `${marginTop}${marginBottom}${paddingTop}${paddingBottom}`;
        const horizontal_align = valueGapper(row.horizontal_align);
        const vertical_align = valueGapper(row.vertical_align);
        const reverse = row.reverse;
        const height = row.height === "auto" ? ` style="height:${row.height}"` : ` style="height:${row.height}px"` ;
        const totalClasses = (`slds-grid slds-wrap${rowMarginsPaddings}${horizontal_align}${vertical_align}${reverse}`).trim().replace(new RegExp(' {2}', "g"), ' ');
        rowString += `<div${height}className="${totalClasses}">${fetchColumns(data,index)}</div>`
    });
    return rowString;
}