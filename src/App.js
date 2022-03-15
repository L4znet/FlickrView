import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import translate from './images/translate.svg'
import Searchbar from './components/searchbar'
import logo from './images/logo.svg'
import { Link } from "react-router-dom";
import Results from "./Results";
import {useState} from "react";

import { connect } from "react-redux"

import {
    switchToFrench,
    switchToEnglish,
} from "./redux/Language/language.actions"

const mapStateToProps = state => {
    return {
        language: state.language.language,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchToEnglish: () => dispatch(switchToEnglish()),

        switchToFrench: () => dispatch(switchToFrench()),
    }
}


function App(props) {
    const [showSwitch, setShowSwitch] = useState(false)

    function switchMenu(){
        return (
            <ul className={"w-36 h-auto bg-white absolute top-16 right-3"}>
                <li onClick={() => props.switchToEnglish()} className={'p-3 hover:bg-gray-200 cursor-pointer select-none'}>English</li>
                <li onClick={() => props.switchToFrench()} className={'p-3 hover:bg-gray-200 cursor-pointer select-none'}>Français</li>
            </ul>
        )
    }

    return (
        <div>
            <header className={"w-full h-14 bg-[#F33879]"}>
                <ul className={"flex h-full w-full items-center justify-end"}>
                    <li onClick={() => setShowSwitch(!showSwitch)} className={"h-full w-32 flex justify-around items-center hover:bg-[#f35d93] mt-3 mr-3 rounded-xl cursor-pointer"}>
                        <img src={translate}  alt={"translate icon"}/>

                        <a className={"text-white relative cursor-pointer select-none"}> {props.language}</a>
                        {showSwitch ? switchMenu() : ''}
                    </li>
                </ul>
            </header>
            <main className={"header_calculed flex justify-center items-center flex-col bg-[#F33879] py-20"}>
                <img src={logo} alt="" className={"mb-10"}/>
                <Searchbar/>
            </main>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
