export const actions = {
  TOGGLE_FAVORITE: 'toggle_favorite',
  UPDATE: 'update',
  SELECT_PHOTO: 'select_photo',
  SEARCH: 'search',
  SELECT_TAG: 'select_tag',
}

export const PhotoReducer = (state, { type, payload }) => {
  switch(type) {
    case actions.TOGGLE_FAVORITE: {
      const photos = state.photos.map(photo => ({
        ...photo,
        isFavorite: photo.id === payload.id ? !photo.isFavorite : photo.isFavorite
      }))
      
      return {...state, photos}
    }

    case actions.UPDATE:
      return {...state, photos: payload}

    case actions.SELECT_PHOTO:
      return {...state, selectedPhoto: payload}
    
    case actions.SEARCH:
      return {...state, searchTerm: payload}

    case actions.SELECT_TAG:
      return {...state, selectedTag: payload}

    default:
      return state
  }
}
