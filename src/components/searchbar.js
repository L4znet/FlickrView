import React, {useState} from 'react';
import axios from "axios";
import {
    useNavigate,
} from "react-router-dom";
import Loader from "./loader";
import translate from "../helpers";

import {connect} from 'react-redux';
const mapStateToProps = state => {
    return {
        language: state.language.language,
    }
}

function Searchbar(props) {

    let navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [showError, setShowError] = useState(false);
    const [searching, setSearching] = useState(false);

    const API_KEY = "YOUR API KEY"
    const API_URL = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key="+API_KEY+"&text="
    const defaultStyle = "bg-black h-14 w-32 ml-6 rounded-2xl text-xl text-white"
    const disabledStyle = "bg-gray-400 h-14 w-32 ml-6 rounded-2xl text-xl text-white cursor-not-allowed"


    function updateInput(event){
        setSearchTerm(event.target.value)
    }

    function makeSearch(event){
        if(!searching){
            if(searchTerm === ""){
                setShowError(true)
            } else {
                setLoading(true)
                setSearching(true)
                axios.get(API_URL+ searchTerm +'&format=json&nojsoncallback=1').then((response) => {
                    navigate("/results/" + searchTerm.toLowerCase(), { state: { results: response.data.photos.photo} });
                }).finally(() => {
                    setLoading(false)
                    setSearching(false)
                })
            }
            event.preventDefault()
        }
    }

    return (

        <div>

            <form action="">
                <input onChange={updateInput} type="text" className="w-[500px] h-14 rounded-2xl outline-none pl-4 text-xl"
                       placeholder={translate('home', props.language.toLowerCase(), 'searchbarPlaceholder')}/>
                <button onClick={makeSearch} className={searching ? disabledStyle : defaultStyle}>{translate('home', props.language.toLowerCase(), 'searchbarButton')}</button>
            </form>

            {showError ? <span className={"text-white flex mt-5 text-xl"}>{translate('home', props.language.toLowerCase(), 'enterSearchTerm')}</span> : ''}

            {loading ? <Loader/> : ''}
        </div>
    );
}
export default connect(mapStateToProps)(Searchbar)
