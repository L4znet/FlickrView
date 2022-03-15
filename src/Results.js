import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import Galerie from './components/galerie'
import {Link, useLocation, useParams} from "react-router-dom";
import translate from "./helpers";


import {connect} from 'react-redux';
const mapStateToProps = state => {
    return {
        language: state.language.language,
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Results(props) {
    const { search } = useParams();
    const {state} = useLocation();
    const { results } = state;

    return (
        <div>
            <header className={"w-full h-14 flex justify-between bg-[#F33879]"}>
                <h2 className={"h-full flex items-center text-white text-2xl ml-5"}>{translate('results',props.language.toLowerCase() , 'title')} "{capitalizeFirstLetter(search)}"</h2>
                <ul className={'flex h-full items-center justify-between w-56 text-white'}>
                    <li className={"w-full flex justify-center"}><Link to="/favorites">{translate('results', props.language.toLowerCase(), 'favoritesButton')}</Link></li>
                    <li className={"w-full flex justify-center"}><Link to="/">{translate('results', props.language.toLowerCase(), 'searchButton')}</Link></li>
                </ul>
            </header>
            <main className={"w-full bg-white flex flex-wrap"}>
                <div className={"header_calculed"}>
                    <Galerie images={results}/>
                </div>
            </main>
        </div>
    );
}

export default connect(mapStateToProps)(Results)
