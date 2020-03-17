import _ from 'lodash';
var Helpers = {
    removeLeadingCommas:function (str) {
        return str[0] === "," ? (str.replace(",", "")).trim() : str.trim()
    },
    uniqueArray: function(str) {
        return _.uniq(str.split(","));
    }
};

export default Helpers