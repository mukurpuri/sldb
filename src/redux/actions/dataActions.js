// Increase Counter
export const getBuilderData = () => ({
    type: 'GET_BUILDER_DATA'
  });
  
  export const setBuilderData = data => ({
    type: 'SET_DATA',
    data: data
  });

  export const createNewPage = data => ({
    type: 'CREATE_NEW_PAGE',
  });

  export const deletePage = id => ({
    type: 'DELETE_NEW_PAGE',
    data: id
  });

  export const makePageActive = id => ({
    type: 'MAKE_PAGE_ACTIVE',
    data: id
  });

  export const updatePageName = val => ({
    type: 'UPDATE_PAGE_NAME',
    data: val
  });

  export const addComponentToCanvas = component => ({
    type: 'ADD_COMPONENT_TO_CANVAS',
    component: component
  })
  export const addComponentToNewPage = component => ({
    type: 'ADD_COMPONENT_TO_NEW_PAGE',
    component: component
  })
  
  export const removeElement = val => ({
    type: 'REMOVE_ELEMENT',
    val: val
  })

  