import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCatToFavorites, callFirstCatsHome, changeFavoriteToTrue, deleteCatToFavorites, initiateFavCatArray } from '../../actions/action';
import './Home.scss';


function Home() {
    const dispatch = useDispatch();
    const catArray = useSelector((state) => state.reducer.homeDataList);
    const favArray = useSelector((state) => state.reducer.favoritesDataList);

    useEffect(() => {
        if (localStorage.getItem('favoriteCatArray')) {
            const favCatArrayFromLocalStorage = JSON.parse(localStorage.getItem('favoriteCatArray'));
            dispatch(initiateFavCatArray(favCatArrayFromLocalStorage));
        }
        if (catArray.length === 0) {
            dispatch(callFirstCatsHome())
        }

    }, [])

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
        
        const myCat = {
            ...catArray.find((cat) => cat.id === e.target.id),
            favorite: true,
        };
        const FavDataWithNewCat = favArray;
        FavDataWithNewCat.push(myCat)
        
        otherArray.forEach((cat, index) => {
            if (cat.id === e.target.id) {
                otherArray.splice(index, 1, {...cat, favorite: true})
                return
            }
        });

        dispatch(addCatToFavorites(otherArray, FavDataWithNewCat));
    };

  return(
    <section className='Home'>
        <div className="catSection">

            {catArray?.map((cat, index) => (
                <div key={index} className="catDiv">
                    <img src={cat.url} alt="image d'un chat" />
                    <i onClick={starButton} id={cat.id} className={`fa-solid fa-star ${cat.favorite && "favorite"}`} />
                </div>
            ))}

       </div>

        <button className='callMoreCatsButton'>Call more cats</button>
    </section>
 )
}
export default Home;