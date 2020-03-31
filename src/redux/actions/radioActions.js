
  export const updateRadioSpacing = (key, val) => ({
    type: 'SET_RADIO_SPACING',
    key: key,
    val: val
  })
  export const setRadioLabelValue = (val) => ({
    type: 'SET_RADIO_LABEL_VALUE',
    val: val
  })
  export const setHasLabel = (val) => ({
    type: 'SET_RADIO_HAS_LABEL',
    val: val
  })
  export const setRadioIsRequired = (val) => ({
    type: 'SET_RADIO_IS_REQUIRED',
    val: val
  })
  
  export const setRadioIsDisabled = (val) => ({
    type: 'SET_RADIO_IS_DISABLED',
    val: val
  })
  export const setRadioHasError = (val) => ({
    type: 'SET_RADIO_HAS_ERROR',
    val: val
  })
  export const setRadioErrorText = (val) => ({
    type: 'SET_RADIO_ERROR_TEXT',
    val: val
  })
  export const setRadioButtonText = (val, index) => ({
    type: 'SET_RADIO_BUTTON_TEXT',
    val: val,
    index: index
  })
  export const setRadioButtonDisabled = (val, index) => ({
    type: 'SET_RADIO_BUTTON_DISABLED',
    val: val,
    index: index
  })
  export const setRadioDirection = (val) => ({
    type: 'SET_RADIO_DIRECTION',
    val: val
  })
  export const setRadioSpacing = (val) => ({
    type: 'SET_RADIO_GAPPINGS',
    val: val
  })
  export const deleteRadioButton = (val) => ({
    type: 'DELETE_RADIO_BUTTON',
    val: val
  })
  export const addNewRadioButton = (val) => ({
    type: 'ADD_NEW_RADIO_BUTTON'
  })
  