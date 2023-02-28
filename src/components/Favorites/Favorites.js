import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCatToFavorites, deleteCatToFavorites, initiateFavCatArray } from '../../actions/action';
import './Favorites.scss';


function Favorites() {
    const dispatch = useDispatch();
    const catArray = useSelector((state) => state.reducer.homeDataList);
    const favArray = useSelector((state) => state.reducer.favoritesDataList);

    useEffect(() => {
        if (localStorage.getItem('favoriteCatArray')) {
            const favCatArrayFromLocalStorage = JSON.parse(localStorage.getItem('favoriteCatArray'));
            dispatch(initiateFavCatArray(favCatArrayFromLocalStorage))
        }
    }, []);
    
    const starButton = (e) => {
        const otherArray = [
            ...catArray
        ]

        if (e.target.className.includes('favorite')) {
            otherArray.forEach((cat, index) => {
                if (cat.id === e.target.id) {
                    otherArray.splice(index, 1, {...cat, favorite: false})
                    return
                }
            });
            dispatch(deleteCatToFavorites(otherArray, e.target.id));
            return
        }

        dispatch(addCatToFavorites(e.target.id));
    };
  return(
    <section className='Favorites'>
       <div className="favCatSection">

            {!favArray[0] && (
                <div className="noCatDiv">
                    <h1>Que c'est triste :'(, tout le monde devrait avoir des chats favoris.. <br/> Au moins un quoi...</h1>
                    <h1>Retournez sur la <Link to="/">Home</Link> et ajoutez-en !</h1>
                </div>
            )}

            {favArray?.map((cat, index) => (
                <div key={index} className="catDiv">
                    <img src={cat.url} alt="image d'un chat" />
                    <i onClick={starButton} id={cat.id} className={`fa-solid fa-star ${cat.favorite && "favorite"}`} />
                </div>
            ))}

        </div>
    </section>
 )
}
export default Favorites;