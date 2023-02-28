// appelle et enregistre les premières images de chat de la Home
export const CALL_FIRST_CATS_HOME = 'CALL_FIRST_CATS_HOME';
export const callFirstCatsHome = () => ({
  type: CALL_FIRST_CATS_HOME,
});

export const SAVE_FIRST_CATS_HOME = 'SAVE_FIRST_CATS_HOME';
export const saveFirstCatsHome = (data) => ({
  type: SAVE_FIRST_CATS_HOME,
  data: data,
});

// ajouter un chat à ses favoris
export const ADD_CAT_TO_FAVORITES = 'ADD_CAT_TO_FAVORITES';
export const addCatToFavorites = (homeData, favData) => ({
  type: ADD_CAT_TO_FAVORITES,
  homeData: homeData,
  favData: favData,
});

// ajouter un chat à ses favoris
export const CHANGE_FAVORITE_TO_TRUE = 'CHANGE_FAVORITE_TO_TRUE';
export const changeFavoriteToTrue = (id) => ({
  type: CHANGE_FAVORITE_TO_TRUE,
  id: id,
});

// ajouter un chat à ses favoris
export const DELETE_CAT_TO_FAVORITES = 'DELETE_CAT_TO_FAVORITES';
export const deleteCatToFavorites = (homeData, id) => ({
  type: DELETE_CAT_TO_FAVORITES,
  homeData: homeData,
  id: id,
});

// initier le tableau des chats favoris
export const INITIATE_FAV_CAT_ARRAY = 'INITIATE_FAV_CAT_ARRAY';
export const initiateFavCatArray = (data) => ({
  type: INITIATE_FAV_CAT_ARRAY,
  data: data,
});