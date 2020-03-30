
export const updateButtonSpacing = (key, val) => ({
    type: 'UPDATE_BUTTON_SPACING',
    key: key,
    val: val
});
export const buttonHideInDeviceList = (device, state) => ({
    type: 'BUTTON_HIDE_IN_DEVICE_LIST',
    device: device,
    state: state
});
export const setButtonText = (val) => ({
    type: 'SET_BUTTON_TEXT',
    val: val
});
export const setButtonTheme = (val) => ({
    type: 'SET_BUTTON_THEME',
    val: val
});
export const setButtonStreched = (val) => ({
    type: 'SET_BUTTON_STRECHED',
    val: val
});
export const setButtonStrong = (val) => ({
    type: 'SET_BUTTON_STRONG',
    val: val
});
export const setButtonDisabled = (val) => ({
    type: 'SET_BUTTON_DISABLED',
    val: val
});
export const setButtonIcon = (val) => ({
    type: 'SET_BUTTON_ICON',
    val: val
});
export const setButtonFloat = val => ({
    type: 'SET_BUTTON_FLOAT',
    val: val
})
export const setButtonHasIcon = val => ({
    type: 'SET_BUTTON_HAS_ICON',
    val: val
})

export const setButtonIconPosition = val => ({
    type: 'SET_BUTTON_HAS_POSITION',
    val: val
})
export const setButtonIconSize = val => ({
    type: 'SET_BUTTON_ICON_SIZE',
    val: val
})
export const setButtonIconFlip = val => ({
    type: 'SET_BUTTON_ICON_FLIP',
    val: val
})
