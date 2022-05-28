import "./MainPhoto.scss"
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
// const idx = parseInt(window.location.href.split('/')[3]);

async function NamberWarlus(props) {
    document.getElementsByClassName("walrus_count")[0].innerHTML = `${props.walrus_count}`;
}
export function MainPhoto () {
    const idx = parseInt(window.location.href.split('/')[3]);
    console.log(idx)
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
            <div className="Video">
                <img src={item.img}/>
            </div>
        );
    }
}
const MainPhotoRender = () => {
    const idx = parseInt(window.location.href.split('/')[3]);
    const left = idx - 1
    const right = idx + 1
    return(
        <div className="ComponentRender">
            <div className="row">
                <div className="col-md-6">
                    <MainPhoto/>
                    <div className="row">
                        <div className="col">
                            <Link to={left}>
                            <button>фото {left}</button>
                            </Link>
                        </div>
                        <Link to={right}>
                        <div className="col">
                            <button>фото {right}</button>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 ps-3">
                    <div class="row">
                        <div class="col-md-9">
                            <h1>Interview {idx}</h1>
                            <ul>
                                <li><span>Количество моржей</span></li>
                                <li><span className={"walrus_count"}></span></li>
                            </ul>

                            <div id="resultCard" className="card text-black text-center p-3 pb-0" style={{display: "none"}}>
                                <h2 id="resultTitle">Everything cool</h2>
                                <p id="resultDesc">The employee is happy to work.  You don't have to worry about his mental state.
                                    Contact the employee to learn how to be happy.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <img className={"emotionImage"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainPhotoRender;

