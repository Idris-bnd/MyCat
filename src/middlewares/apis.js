import axios from "axios";
import { CALL_FIRST_CATS_HOME, saveFirstCatsHome } from "../actions/action";

const apis = (store) => (next) => (action) => {
  switch (action.type) {
    case CALL_FIRST_CATS_HOME:{

        axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
        .then((res) => {
            const catArray = res.data.map((cat) => {
                return {
                    ...cat,
                    favorite: false,
                }
            })
            store.dispatch(saveFirstCatsHome(catArray))
        })
        .catch((err) => {
            console.error(err);
        })

        
        next(action);
        break;
    }
  default:
    next(action);
    break;
  }
};

export default apis;