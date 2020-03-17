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
