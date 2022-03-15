import React from 'react';
import ReactDOM from "react-dom";
import axios from "axios";

function addToFavorites(){
    let title = document.querySelector('#title').innerText
    let picture = document.querySelector('#picture').getAttribute('src')

    axios.post('https://flickrview-f91d9-default-rtdb.europe-west1.firebasedatabase.app/favorites.json', {
        title:title,
        url:picture
    })
}

const Modal = ({ isShowing, hide, image }) =>
    isShowing
        ? ReactDOM.createPortal(
            <div className={"absolute z-50 top-0 w-screen h-screen flex justify-center items-center"}>
                <div className={"absolute z-30 top-0 w-[100%] opacity-80 h-screen bg-black"}>
                </div>
                <div className={"absolute z-40 w-[1055px] flex opacity-100 h-[700px]"}>
                    <div  onClick={hide} className={"cursor-pointer bg-slate-700 hover:bg-slate-600 h-10 w-10 top-2 left-2 rounded-full absolute z-50 flex justify-center text-white items-center"}>
                        X
                    </div>
                    <img id="picture" src={image[0].url} className="absolute w-full z-40 h-full" alt={image[0].title}/>
                    <div className={"bg-white w-full h-20 absolute bottom-0 z-50 flex justify-between items-center"}>
                        <div id="title" className={"ml-5 text-xl font-bold"}>{image[0].title}</div>
                        <a onClick={addToFavorites} className={"mr-5"}>Like button</a>
                    </div>
                </div>
            </div>,
            document.body
        )
        : null;



export default Modal;
