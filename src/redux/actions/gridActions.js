
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

  export const setRowGutter = selectedOption => ({
    type: 'SET_ROW_GUTTER',
    selectedOption: selectedOption
  })

  export const setRowHeight = height => ({
    type: 'SET_ROW_HEIGHT',
    height: height
  })

  export const setRowWrap = wrap => ({
    type: 'SET_ROW_WRAP',
    wrap: wrap
  })

  export const addRowToGrid = () => ({
    type: 'ADD_ROW_TO_GRID'
  })
  
  export const deleteRow = () => ({
    type: 'DELETE_ROW'
  })

  export const setRowPosition = (i,f) => ({
    type: 'SET_ROW_POSITION',
    initialPosition: i,
    finalPosition: f,
  })

  export const updateGridSpacing = (k,v) => ({
    type: 'UPDATE_GRID_SPACING',
    key: k,
    value: v,
  })

  export const updateRowSpacing = (k,v) => ({
    type: 'UPDATE_ROW_SPACING',
    key: k,
    value: v
  })
  
  export const updateColumnSpacing = (k,v) => ({
    type: 'UPDATE_COLUMN_SPACING',
    key: k,
    value: v
  })

  export const setColumnWidth = size => ({
    type: 'SET_COLUMN_SIZE',
    size: size
  })

  export const deleteSelectedcolumn = (ids) => ({
    type: 'DELETE_SELECTED_COLUMN',
    ids: ids
  })

  export const addNewColumn = () => ({
    type: 'ADD_NEW_COLUMN'
  })

  export const setRowReverse = dir => ({
    type: 'SET_ROW_REVERSE',
    dir: dir
  })

  export const setRowHorizontalAlignment = val => ({
    type: 'SET_ROW_HORIZONTAL_ALIGNMENT',
    alignment: val
  })

  export const setRowVerticalAlignment = val => ({
    type: 'SET_ROW_VERTICAL_ALIGNMENT',
    alignment: val
  })

  export const activateRow = (device, rowId) => ({
    type: 'ACTIVATE_ROW',
    device: device,
    rowId: rowId
  })
  export const cloneRow = () => ({
    type: 'CLONE_ROW'
  })
  export const cloneColumn = (ids) => ({
    type: 'CLONE_COLUMN',
    ids: ids
  })
  