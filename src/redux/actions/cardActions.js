export const updateCardSpacing = (key, val) => ({
  type: 'UPDATE_CARD_SPACING',
  key: key,
  val: val
});
export const updateCardHeaderSpacing = (key, val) => ({
  type: 'UPDATE_CARD_HEADER_SPACING',
  key: key,
  val: val
});
export const cardHeaderHideInDeviceList = (device,state) => ({
  type: 'CARD_HEADER_HIDEN_IN_DEVICE_LIST',
  device: device,
  state: state
})
export const setCardHeaderFlip = val => ({
  type: 'SET_CARD_HEADER_FLIP',
  val: val
})

export const updateCardHeaderIconSpacing = (key, val) => ({
  type: 'UPDATE_CARD_HEADER_ICON_SPACING',
  key: key,
  val: val
});
export const cardHeaderIconHideInDeviceList = (device,state) => ({
  type: 'CARD_HEADER_ICON_HIDEN_IN_DEVICE_LIST',
  device: device,
  state: state
})
export const setCardHeaderIconFlip = val => ({
  type: 'SET_CARD_HEADER_ICON_FLIP',
  val: val
})
export const setCardHeaderIcon = icon => ({
  type: 'SET_CARD_HEADER_ICON',
  icon: icon
})
export const setCardHeaderIconSize = iconSize => ({
  type: 'SET_CARD_HEADER_ICON_SIZE',
  iconSize: iconSize
})
export const setCardHeaderIconColor = color => ({
  type: 'SET_CARD_HEADER_ICON_COLOR',
  color: color
})


export const updateCardHeaderTitleSpacing = (key, val) => ({
  type: 'UPDATE_CARD_HEADER_TITLE_SPACING',
  key: key,
  val: val
});
export const cardHeaderTitleHideInDeviceList = (device,state) => ({
  type: 'UPDATE_CARD_HEADER_TITLE_HIDEN_IN_DEVICE_LIST',
  device: device,
  state: state
});
export const setCardHeaderTitleAlign = val => ({
  type: 'UPDATE_CARD_HEADER_TITLE_ALIGN',
  val: val
})
export const setCardHeaderTitleText = val => ({
  type: 'UPDATE_CARD_HEADER_TITLE_TEXT',
  val: val
})
export const setCardHeaderTitleSize = val => ({
  type: 'UPDATE_CARD_HEADER_TITLE_SIZE',
  val: val
})
export const setCardHeaderTitleColor = val => ({
  type: 'UPDATE_CARD_HEADER_TITLE_COLOR',
  val: val
})
export const setCardHeaderAlignment = val => ({
  type: 'SET_CARD_HEADER_ALIGNMENT',
  val: val
})

export const updateCardHeaderButtonSpacing = (key, val) => ({
  type: 'UPDATE_CARD_HEADER_BUTTON_SPACING',
  key: key,
  val: val
})
export const cardHeaderButtonHideInDeviceList = (device, state) => ({
  type: 'UPDATE_CARD_HEADER_BUTTON_HIDEN_IN_DEVICE_LIST',
  device: device,
  state: state
})
export const setCardHeaderButtonText = (val) => ({
  type: 'UPDATE_CARD_HEADER_BUTTON_TEXT',
  val: val
})

export const setCardHeaderButtonTheme = val =>  ({
  type: 'UPDATE_CARD_HEADER_BUTTON_THEME',
  val: val
})

export const setCardHeaderButtonStreched = val => ({
  type: 'UPDATE_CARD_HEADER_BUTTON_STRECHED',
  val: val
})

export const setCardHeaderButtonStrong = val => ({
  type: 'UPDATE_CARD_HEADER_BUTTON_STRONG',
  val: val
})

export const setCardHeaderButtonDisabled = val => ({
  type: 'UPDATE_CARD_HEADER_BUTTON_DISABLED',
  val: val
})

export const updateCardBodySpacing = (key, val) => ({
  type: 'UPDATE_CARD_BODY_SPACING',
  key: key,
  val: val
})
export const cardBodyHideInDeviceList = (device, state) => ({
  type: 'UPDATE_CARD_BODY_HIDEN_IN_DEVICE_LIST',
  device: device,
  state: state
})
export const setCardBodyText = val => ({
  type: 'UPDATE_CARD_BODY_TEXT',
  val: val
})
export const setCardBodyAlign = val => ({
  type: 'UPDATE_CARD_BODY_ALIGN',
  val: val
})
export const setCardBodyColor = val => ({
  type: 'UPDATE_CARD_BODY_COLOR',
  val: val
})
export const setCardBodySize = val => ({
  type: 'UPDATE_CARD_BODY_SIZE',
  val: val
})
export const setHeaderButtonIcon = icon => ({
  type: 'UPDATE_CARD_HEADER_BUTTON_ICON',
  icon: icon
})

export const updateCardFooterSpacing = (key, val) => ({
  type: 'UPDATE_CARD_FOOTER_SPACING',
  key: key,
  val: val
})
export const cardFooterHideInDeviceList = (device, state) => ({
  type: 'UPDATE_CARD_FOOTER_HIDEN_IN_DEVICE_LIST',
  device: device,
  state: state
})
export const setCardFooterText = val => ({
  type: 'UPDATE_CARD_FOOTER_TEXT',
  val: val
})