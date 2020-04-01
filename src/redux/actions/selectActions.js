
  export const updateSelectSpacing = (key, val) => ({
    type: 'SET_SELECT_SPACING',
    key: key,
    val: val
  })
  export const setSelectLabelValue = (val) => ({
    type: 'SET_SELECT_LABEL_VALUE',
    val: val
  })
  export const setHasLabel = (val) => ({
    type: 'SET_SELECT_HAS_LABEL',
    val: val
  })
  export const setSelectIsRequired = (val) => ({
    type: 'SET_SELECT_IS_REQUIRED',
    val: val
  })
  
  export const setSelectIsDisabled = (val) => ({
    type: 'SET_SELECT_IS_DISABLED',
    val: val
  })
  export const setSelectHasError = (val) => ({
    type: 'SET_SELECT_HAS_ERROR',
    val: val
  })
  export const setSelectErrorText = (val) => ({
    type: 'SET_SELECT_ERROR_TEXT',
    val: val
  })
  