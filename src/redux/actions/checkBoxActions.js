export const setCheckBoxText = val => ({
    type: 'SET_CHECKBOX_TEXT',
    val: val
})
export const setCheckBoxDisabled = val => ({
    type: 'SET_CHECKBOX_DISABLED',
    val: val
})
export const setCheckBoxFloat = val => ({
    type: 'SET_CHECKBOX_FLOAT',
    val: val
})
export const updateCheckBoxSpacing = (key, val) => ({
    type: 'UPDATE_CHECKBOX_SPACING',
    val: val,
    key: key
})
export const setCheckBoxState = (val) => ({
    type: 'SET_CHECKBOX_STATE',
    val: val,
})
export const setCheckBoxShowError = (val) => ({
    type: 'SET_CHECKBOX_SHOW_ERROR',
    val: val,
})
export const setCheckBoxRequired = (val) => ({
    type: 'SET_CHECKBOX_SHOW_REQUIRED',
    val: val,
})
export const setCheckBoxErrorLabel = (val) => ({
    type: 'SET_CHECKBOX_ERROR_LABEL',
    val: val,
})

