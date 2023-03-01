import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const useAppContext=()=>{
    const context = useContext(AppContext);

    if (context === undefined){
        throw new Error('error')
    }

    return context;
}

const AppContextProvider = ({children}) =>{
    const [wishlist,setWishlist] = useState([])

    const addToWishlist = (shoes) =>{
        const oldWishlist = [...wishlist];

        const newWishlist = oldWishlist.concat(shoes);

        setWishlist(newWishlist);
    }

    const removeFromWishlist =(id)=>{
        const oldWishlist = [...wishlist];
        const newWishlist = oldWishlist.filter((shoes)=>shoes.id !== id);

        setWishlist(newWishlist);
    }

    return(
        <AppContext.Provider value={{wishlist, addToWishlist, removeFromWishlist}}>
            {children}
        </AppContext.Provider>
    )
}


export default AppContextProvider;