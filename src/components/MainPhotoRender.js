import "./MainPhoto.scss"
import React, {Component, useEffect, useState} from "react";
import {Link} from "react-router-dom";
// const idx = parseInt(window.location.href.split('/')[3]);

async function NamberWarlus(props) {
    document.getElementsByClassName("walrus_count")[0].innerHTML = `${props.walrus_count}`;
}


export function MainPhoto () {
    const idx = parseInt(window.location.href.split('/')[3]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://192.168.0.21:8000/api/walruses/${idx}/`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    NamberWarlus(item)

    function ClickXY() {
        let el = document.getElementById('el');
        el.addEventListener('click', getClickXY, false);
        function getClickXY(event)
        {
            var clickX = (event.layerX == undefined ? event.offsetX : event.layerX) + 1;
            var clickY = (event.layerY == undefined ? event.offsetY : event.layerY) + 1;
            const XY = [clickX, clickY]
            // console.log(XY)
            return XY
        }
    }

    if (error) {
        return <div><div className="gif">
            <img src="./image/morh.png" />
        </div></div>;
    } else if (!isLoaded) {
        return <div><div className="gif">
            <img src="./image/morh.png" />
        </div></div>;
    } else {
        return (
            <>
            <div className="Video" type="button"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <div className="relPPos">
                <img className="minimized" src={item.img}/>
                    <img src="./image/lups.svg" className="lups"/>
                </div>
            </div>
                <div className="modal fade" id="staticBackdrop" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-body" onClick={ClickXY}>
                                <img className="minimized" id="el" src={item.img}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
const MainPhotoRender = () => {
    let idx = parseInt(window.location.href.split('/')[3]);
    const left = idx - 1
    const right = idx + 1
    return(
        <div className="ComponentRender">
            <div className="row">
                <div className="col-md-6">
                    <div className="resDark">
                    <MainPhoto/>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <a href={left}>
                                {left !== 0 &&
                                <button className="sides">❮ фото {left}</button>
                                }
                            </a>

                        </div>
                        <div className="col right">
                            <a href={right}>
                            <button className="sides">фото {right} ❯</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 ps-3">
                    <div className="row">
                        <div className="col-md-9">
                            <h4>Фото №{idx}</h4>
                            <h3>Количество моржей: </h3>
                            <h2 className={"walrus_count"}></h2>


                            <div id="resultCard" className="card text-black text-center p-3 pb-0" style={{display: "none"}}>
                                <h2 id="resultTitle">Everything cool</h2>
                                <p id="resultDesc">The employee is happy to work.  You don't have to worry about his mental state.
                                    Contact the employee to learn how to be happy.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img className={"emotionImage"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainPhotoRender;

