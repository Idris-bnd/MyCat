import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callFirstCatsHome, toggleCatToFavoritesArray } from '../../actions/action';
import './Home.scss';


function Home() {
    const dispatch = useDispatch();
    const catArray = useSelector((state) => state.reducer.homeDataList);
    const favArray = useSelector((state) => state.reducer.favoritesDataList);

    useEffect(() => {
        if (catArray.length === 0) {
            dispatch(callFirstCatsHome())
        }
    }, [])

    const starButton = (e) => {
        dispatch(toggleCatToFavoritesArray(e.target.id));
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