import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import Galerie from './components/galerie'
import React, {useEffect, useRef, useState} from "react";
import useModal from "./hooks/useModal";
import axios from "axios";


import translate from "./helpers";

import {connect} from 'react-redux';
import {Link} from "react-router-dom";
const mapStateToProps = state => {
    return {
        language: state.language.language,
    }
}

 async function getFavorites() {

     const resp = await axios.get('https://flickrview-f91d9-default-rtdb.europe-west1.firebasedatabase.app/favorites.json');
     return resp.data
 }

function Favorites(props) {
    const { isShowing, toggle } = useModal();
    const [favorites, setFavorites] = useState([]);
    const componentMounted = useRef(true); // (3) component is mounted

    useEffect(async () => {
        let favorites = await getFavorites()
        if (componentMounted.current) {
            setFavorites(favorites)
        }
        return () => {
            componentMounted.current = false;
        }
    }, []);
    return (
        <div>
            <header className={"w-full h-14 flex justify-between bg-[#F33879]"}>
                <h2 className={"h-full flex items-center text-white text-2xl ml-5"}>{translate('favorites', props.language.toLowerCase(), 'title')}</h2>
                <ul className={'flex h-full items-center justify-between w-56 text-white'}>
                    <li className={"w-full flex justify-center"}><Link to="/favorites">{translate('results', props.language.toLowerCase(), 'favoritesButton')}</Link></li>
                    <li className={"w-full flex justify-center"}><Link to="/">{translate('results', props.language.toLowerCase(), 'searchButton')}</Link></li>
                </ul>
            </header>
            <main className={"w-full bg-white flex flex-wrap"}>
                <div className={"header_calculed"}>
                    <Galerie images={favorites}/>
                </div>
            </main>
        </div>
    );
}

export default connect(mapStateToProps)(Favorites)
