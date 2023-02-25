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
export const TOGGLE_CAT_TO_FAVORITES_ARRAY = 'TOGGLE_CAT_TO_FAVORITES_ARRAY';
export const toggleCatToFavoritesArray = (id) => ({
  type: TOGGLE_CAT_TO_FAVORITES_ARRAY,
  id: id,
});