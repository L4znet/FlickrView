import React, {useState} from 'react';
import Image from "./Image"
import useModal from "../hooks/useModal";
import {useLocation} from "react-router-dom";

export default function Galerie(props) {

    const { isShowing, toggle } = useModal();
    const [clickedPicture, setClickedPicture] = useState([]);
    const location = useLocation();

    function toggleModal(e){
        toggle()
        let picture = e.target.attributes.src.nodeValue.replace('w.jpg', 'b.jpg')
        setClickedPicture([{url:picture, title:e.target.attributes.alt.value}])
    }

    function url_constructor(server, id, secret, size = "w"){
        return "https://live.staticflickr.com/"+ server + "/"+ id +"_"+ secret +"_"+ size +".jpg"
    }
    if(location.pathname === "/favorites"){
        return (
            <div className={"header_calculed relative"}>
                <div className={"flex flex-wrap"}>
                    {Object.entries(props.images).map(([i, image]) => (
                        <img src={image.url} key={i} onClick={toggleModal} className="w-[355px] h-[300px] ml-1 mt-1" alt={image.title}/>
                    ))};
                    <Image image={clickedPicture} isShowing={isShowing} hide={toggle}/>
                </div>
            </div>
        )
    } else {
        return (
        <div className={"header_calculed relative"}>
            <div className={"flex flex-wrap"}>
                {Object.entries(props.images).map(([i, image]) => (
                    <img src={url_constructor(image.server, image.id, image.secret)} key={i} onClick={toggleModal} className="w-[355px] h-[300px] ml-1 mt-1" alt={image.title}/>
                ))};
                <Image image={clickedPicture} isShowing={isShowing} hide={toggle}/>
            </div>
        </div>
        );
    }
}


