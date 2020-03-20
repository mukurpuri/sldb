import _ from 'lodash';
var Helpers = {
    removeLeadingCommas:function (str) {
        return str[0] === "," ? (str.replace(",", "")).trim() : str.trim()
    },
    uniqueArray: function(str) {
        return _.uniq(str.split(","));
    },
    getSpacings: function(data) {
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
    },
    valueGapper: function(val) {
        if(val === "") {
          return "";
        } else {
          return " " + val + " ";
        }
      },
    
      valueGapper2: function(val) {
        if(val === "") {
          return "";
        } else {
          return val + " ";
        }
      }
};

export default Helpers