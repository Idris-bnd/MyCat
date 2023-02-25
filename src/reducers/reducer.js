import { SAVE_FIRST_CATS_HOME, TOGGLE_CAT_TO_FAVORITES_ARRAY } from "../actions/action";

export const initialState = {
    homeDataList: [],
    favoritesDataList: [],
};

const reducer = (state = initialState, action = {}) => {
switch (action.type) {
    case SAVE_FIRST_CATS_HOME:
        return{
            ...state,
            homeDataList: action.data
        }
    case TOGGLE_CAT_TO_FAVORITES_ARRAY:
        action.cat = {
            ...state.homeDataList.find((cat) => cat.id === action.id),
            favorite: !state.homeDataList.find((cat) => cat.id === action.id).favorite,
        }
        action.newCatArray = state.homeDataList
        action.newCatArray.forEach((cat, index) => {
            if (cat.id === action.id) {
                console.log(index);
                action.newCatArray.splice(index, 1, action.cat)
                return
            }
        })
        return{
            ...state,
            favoritesDataList: [
                ...state.favoritesDataList,
                action.cat
            ] 
        }
        default:
    return state;
}
};

export default reducer;