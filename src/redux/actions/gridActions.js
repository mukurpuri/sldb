
  export const setActiveGridDevice = device => ({
    type: 'SET_ACTIVE_GRID_DEVICE',
    data: device
  })


  export const activateColumn = (id, device, rowId) => ({
    type: 'ACTIVATE_COLUMN',
    id: id,
    device: device,
    rowId: rowId
  })