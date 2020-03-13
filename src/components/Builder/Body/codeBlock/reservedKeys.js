import _ from 'lodash';
const keys = [
'lg',
'sm',
'md',
'_12',
'_11',
'_10',
'_9',
'_8',
'_7',
'_6',
'_5',
'_4',
'_3',
'_2',
'_1',
'text_col',
'active',
'none',
'class=""'];
const keyValue = [
    {
        key: 'class=" ',
        value: 'class="'
    },
    {
        key: '" ',
        value: '"'
    },
    {
        key: '  "',
        value: '"'
    },
    {
        key: ' none',
        value: " "
    },
    {
        key: '  none',
        value: ''
    },
    {
        key: 'none ',
        value: " "
    },
    {
        key: ' active',
        value: ""
    },
    {
        key: 'active ',
        value: ""
    },
    {
        key: '   ',
        value: " "
    },
    {
    key: '    ',
    value: ''
    },
    {
        key: '  ',
        value: ' '
    }
]

function trimAllKeys(code) {
    code = code.trim();
    _.each(keys, key  => {
        code = code.replace(new RegExp(key, "g"), "")
    });
    return trimKeyValue(code);
}

function trimKeyValue(code) {
    code = code.trim();
    _.each(keyValue, k  => {
        code = code.replace(new RegExp(k.key, "g"), k.value)
    });
    return code;
}

export {
    trimAllKeys
}