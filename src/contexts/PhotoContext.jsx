import photosJson from '@/fotos.json'
import { createContext, useEffect, useReducer, useState } from "react";
import { PhotoReducer, actions } from '@reducers/PhotoReducer';

export const PhotoContext = createContext()
PhotoContext.displayName = 'Photo'

const initialState = {
  photos: photosJson,
  selectedPhoto: null,
  searchTerm: '',
  selectedTag: {id: 0}
}

export const PhotoContextProvider = ({children}) => {
  const [{
    photos,
    selectedPhoto,
    searchTerm,
    selectedTag,
  }, dispatch] = useReducer(PhotoReducer, initialState)

  const toggleFavorite = (payload) => {
    const favPhoto = {
      ...payload,
      isFavorite: !payload.isFavorite
    }

    if (favPhoto.id === selectedPhoto?.id) {
      dispatch({ type: actions.SELECT_PHOTO, payload: favPhoto})
    }

    dispatch({ type: actions.TOGGLE_FAVORITE, payload: { id: favPhoto.id } })
  }

  const selectPhoto = (photo) => {
    dispatch({ type: actions.SELECT_PHOTO, payload: photo }) 
  }

  const search = (search) => {
    dispatch({ type: actions.SEARCH, payload: search })
  }

  const selectTag = (tag) => {
    dispatch({ type: actions.SELECT_TAG, payload: tag })
  }

  useEffect(() => {
    const isPhotoVisible = (photo) => {
      const bySearchTerm = !searchTerm || photo.title.toLowerCase().startsWith(searchTerm.toLowerCase())
      const byTag = (!selectedTag || selectedTag.id === 0) || photo.tagId === selectedTag.id

      return bySearchTerm && byTag
    }

    const filteredPhotos = photos.map(photo => ({
      ...photo,
      isVisible: isPhotoVisible(photo)
    }))

    dispatch({ type: actions.UPDATE, payload: filteredPhotos })
  }, [searchTerm, selectedTag])

  return (
    <PhotoContext.Provider value={{
      photos,
      selectedPhoto,
      toggleFavorite,
      selectPhoto,
      searchTerm,
      search,
      selectedTag,
      selectTag,
    }}>
      {children}
    </PhotoContext.Provider>
  )
}
