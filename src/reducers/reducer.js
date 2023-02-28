import { ADD_CAT_TO_FAVORITES, CHANGE_FAVORITE_TO_TRUE, DELETE_CAT_TO_FAVORITES, INITIATE_FAV_CAT_ARRAY, SAVE_FIRST_CATS_HOME } from "../actions/action";

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
        };
    case ADD_CAT_TO_FAVORITES:
        localStorage.setItem('favoriteCatArray', JSON.stringify(action.favData));
        return{
            ...state,
            homeDataList: action.homeData,
            favoritesDataList: action.favData,
        };
    case DELETE_CAT_TO_FAVORITES:
        const localArray = JSON.parse(localStorage.getItem('favoriteCatArray'));
        localStorage.setItem('favoriteCatArray', JSON.stringify(localArray.filter((cat) => cat.id !== action.id)))
        return{
            ...state,
            homeDataList: action.homeData,
            favoritesDataList: state.favoritesDataList.filter((cat) => cat.id !== action.id)
        };
    case INITIATE_FAV_CAT_ARRAY:
        return{
            ...state,
            favoritesDataList: action.data
        };
    case CHANGE_FAVORITE_TO_TRUE:
        const myCatt = {
            ...state.homeDataList.find((cat) => cat.id === action.id),
            favorite: true,
        }
        action.actualHomeData = state.homeDataList;
        console.log(action.actualHomeData);
        state.homeDataList.forEach((cat, index) => {
            if(cat.id === action.id){
                console.log(index);
                action.actualHomeData.splice(index, 0, myCatt)
                return
            }
        })
        return{
            ...state,
            homeDataList: action.actualHomeData
        };
        default:
    return state;
}
};

export default reducer;