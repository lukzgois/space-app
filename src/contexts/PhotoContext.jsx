import photosJson from '@/fotos.json'
import { createContext, useEffect, useState } from "react";

export const PhotoContext = createContext()
PhotoContext.displayName = 'Photo'

export const PhotoContextProvider = ({children}) => {
  const [photos, setPhotos] = useState(photosJson)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState({ id: 0})

  const onToggleFavPhoto = (favPhoto) => {
    if (favPhoto.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        isFavorite: !selectedPhoto.isFavorite
      })
    }

    setPhotos(photos.map(photo => ({
      ...photo,
      isFavorite: photo.id === favPhoto.id ? !photo.isFavorite : photo.isFavorite
    })))
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

    setPhotos(filteredPhotos)
  }, [searchTerm, selectedTag])

  return (
    <PhotoContext.Provider value={{
      photos,
      setPhotos,
      onToggleFavPhoto,
      selectedPhoto,
      setSelectedPhoto,
      searchTerm,
      setSearchTerm,
      selectedTag,
      setSelectedTag,
    }}>
      {children}
    </PhotoContext.Provider>
  )
}
