import Category from '../models/Category.js'

const categoryFromAPI = (data) => {
  return Category.fromAPI(data)
}

const editionCategoryFromAPI = (data) => {
  return data
}

const categoryToAPI = (data) => {
  return data
}

const categoryFiltersToAPI = (data) => {
  return data
}

const categoryEditedToAPI = (data) => {
  return data
}

export {
  categoryFromAPI,
  editionCategoryFromAPI,
  categoryToAPI,
  categoryFiltersToAPI,
  categoryEditedToAPI,
}
