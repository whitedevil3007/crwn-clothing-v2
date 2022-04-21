import { createContext , useState , useEffect} from "react";

// import SHOP_DATA from '../shop-data.js' no need now

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    CategoriesMap : {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap , setCategoriesMap] = useState({});
    
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');       
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();

    } , []);
    
    const value ={categoriesMap};
    return (
        <CategoriesContext.Provider value={value}>
        {children}</CategoriesContext.Provider>
    );
};

