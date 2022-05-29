import React, { Component } from "react";
import './Slider.scss'
import {Link} from "react-router-dom";

function getBase64(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async function () {
        console.log((reader.result).substr(22));
        let baseFile = (reader.result).substr(22)
        return baseFile;
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

export default class MultipleItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };

    }

    async sendPhoto(file) {
        console.log(file === null)

        let baseFile = getBase64(file);

        const response = await fetch('http://192.168.0.21:8000/api/count_animals/', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({img: baseFile, animal_type: "walrus"})
        });

        this.setState(() => {});
        console.log(response)

    }

    componentDidMount() {
        fetch("http://192.168.0.21:8000/api/walruses/")
            .then(res => res.json())
            .then(
                async (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },

                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const fileUploader = document.getElementById('input__file');
        const self = this;
        fileUploader.addEventListener('change', (event) => {
            const file = event.target.files[0];
            self.sendPhoto(file)
        });

    }

    render() {
        console.log(this.state.items)
        const error = this.state.error;
        const items = this.state.items;
        const isLoaded = this.state.isLoaded;
        if (error) {
            return <div className="gif">
                <img src="../image/morh.png" /></div>;
        } else if (!isLoaded) {
            return <div className="gif">
                <img src="../image/morh.png" />
            </div>;
        } else {
            return (
                <div className="Slider">
                                <div className="BlockSlider">
                                    <div className="container">
                                        <div className="row align-items-start">
                                            <div className="col-3">
                                                <div className="Bord btn">
                                                    <h3>
                                                        Загрузить фото
                                                    </h3>
                                                    <div className="input__wrapper">
                                                        <input name="file" type="file" name="file" id="input__file"
                                                               className="input input__file"
                                                        />
                                                            <label htmlFor="input__file" className="input__file-button">
                                                                <span
                                                                    className="input__file-button-text">Выберите файл</span>
                                                            </label>
                                                        <div id="imgTest"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            {items.map(item => (
                                                <div className="col-3 relPos">
                                                    <Link to={`${item.id}`} key={item.id}>
                                            <div className="ImdConteiner">
                                            <img className="elemImg" src={item.img} />
                                                <div className="butRel">
                                                    <button type="button"
                                                            className="Open">Открыть
                                                    </button>
                                                </div>
                                            </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                        ))
                </div>

            );
        }
    }}

