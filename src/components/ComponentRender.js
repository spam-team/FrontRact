// import React, {useEffect, useState} from "react";
// import ReactPlayer from "react-player";
//
// import "./Video.scss"
//
// let isEnded = false;
//
// function captureVideoFrame(video) {
//     const canvas = document.createElement("canvas");
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     canvas.getContext('2d')
//         .drawImage(video, 0, 0, canvas.width, canvas.height);
//     const dataURL = canvas.toDataURL();
//
//     return dataURL;
// }
//
// async function plotChart(item) {
//     const ctx = document.getElementById('myChart').getContext('2d');
//
// }
//
//
// async function plotEmotion(result, is_ending) {
//     if(isEnded) {
//         return
//     }
//
//     const method = [
//         document.getElementsByClassName("angry_percent")[0],
//         document.getElementsByClassName("happy_percent")[0],
//         document.getElementsByClassName("neutral_percent")[0],
//         document.getElementsByClassName("sad_percent")[0],
//         document.getElementsByClassName("surprise_percent")[0]
//     ]
//     const emotionsConfigs = [
//         ["angry_percent", 0, 29, "angry_percentActiv", "Angry", "./image/Angry.png"],
//         ["happy_percent", 0, 29, "happy_percentActiv", "Happy", "./image/Happy.png"],
//         ["neutral_percent", 0, 29, "neutral_percentActiv", "Neutral", "./image/Neutral.png" ],
//         ["sad_percent", 0, 29, "sad_percentActiv", "Sad", "./image/Sad.png" ],
//         ["surprise_percent", 0, 29, "surprise_percentActiv", "Surprised", "./image/Surprised.png"],
//     ]
//
//
//     method[0].innerHTML = `Angry ${result.percentage[0]}%`;
//     method[1].innerHTML = `Happy ${result.percentage[1]}%`;
//     method[2].innerHTML = `Neutral ${result.percentage[2]}%`;
//     method[3].innerHTML = `Sad ${result.percentage[3]}%`;
//     method[4].innerHTML = `Surprise ${result.percentage[4]}%`;
//     for (let i = 0; i < emotionsConfigs.length; i++) {
//         if (result.percentage[i] > emotionsConfigs[i][2]) {
//             document.getElementsByClassName(emotionsConfigs[i][0])[0].classList.add(emotionsConfigs[i][3])
//         } else {
//             document.getElementsByClassName(emotionsConfigs[i][0])[0].classList.remove(emotionsConfigs[i][3])
//         }
//
//     }
//     let labels = result;
//     const d = {
//         'params': [
//             {
//                 'emotions': `${result.emotions[0]}`,
//                 'percentage': `${result.percentage[0]}`,
//             },
//             {
//                 'emotions': `${result.emotions[1]}`,
//                 'percentage': `${result.percentage[1]}`,
//             },
//             {
//                 'emotions': `${result.emotions[2]}`,
//                 'percentage': `${result.percentage[2]}`,
//             },{
//                 'emotions': `${result.emotions[3]}`,
//                 'percentage': `${result.percentage[3]}`,
//             },{
//                 'emotions': `${result.emotions[4]}`,
//                 'percentage': `${result.percentage[4]}`,
//             }
//         ]
//     }
//
//     d.params.sort(function(a, b) {
//         return b.percentage - a.percentage;
//     });
//     const data = d.params;
//
//
//     let resultTitle = document.getElementById('resultTitle')
//     let resultDesc = document.getElementById('resultDesc')
//     let resultCard = document.getElementById('resultCard')
//
//     if(data[0].percentage>30 && data[1].percentage>30){
//         if(data[0].emotions === "Happy" && data[1].emotions === "Surprise"){
//             document.getElementsByClassName('emotionImage')[0].src = "./image/Surprised.png"
//         } else if (data[0].emotions === "Happy" && data[1].emotions === "Sad"){
//             document.getElementsByClassName('emotionImage')[0].src = "./image/HappySad.png"
//         }else if (data[0].emotions === "Angry" && data[1].emotions === "Sad"){
//             document.getElementsByClassName('emotionImage')[0].src = "./image/AnngrySad.png"
//         } else if(data[1].emotions === "Happy" && data[0].emotions === "Surprise"){
//             document.getElementsByClassName('emotionImage')[0].src = "./image/Surprised.png"
//         } else if (data[1].emotions === "Happy" && data[0].emotions === "Sad"){
//             document.getElementsByClassName('emotionImage')[0].src = "./image/HappySad.png"
//         } else if (data[1].emotions === "Angry" && data[0].emotions === "Sad"){
//             document.getElementsByClassName('emotionImage')[0].src = "./image/AnngrySad.png"
//         }
//     }else if (data[0].emotions === "Angry"){
//         document.getElementsByClassName('emotionImage')[0].src = "./image/Angry.png"
//         resultTitle.innerHTML = "ATTENTION!!!"
//         resultCard.style.display = is_ending ? "block" : "none"
//         resultTitle.style.color = "#FF0B53"
//         resultDesc.innerHTML = "it seems that the employee needs psychological help. The stress level exceeds the normal value by 61%. Contact him to speak in person."
//     }else if (data[0].emotions === "Happy"){
//         document.getElementsByClassName('emotionImage')[0].src = "./image/Happy.png"
//         resultTitle.innerHTML = "EVERYTHING COOL"
//         resultCard.style.display = is_ending ? "block" : "none"
//         resultTitle.style.color = "#78CDC3"
//         resultDesc.innerHTML = "The employee is happy to work. You don't have to worry about his mental state. Contact the employee to learn how to be happy."
//     }else if (data[0].emotions === "Neutral"){
//         document.getElementsByClassName('emotionImage')[0].src = "./image/Neutral.png"
//         resultTitle.innerHTML = "OK"
//         resultCard.style.display = is_ending ? "block" : "none"
//         resultTitle.style.color = "#CD64FF"
//         resultDesc.innerHTML = "Norm employee. He is neither good nor bad. He's okay."
//     }else if (data[0].emotions === "Sad"){
//         document.getElementsByClassName('emotionImage')[0].src = "./image/Sad.png"
//         resultTitle.innerHTML = "ATTENTION!!!"
//         resultCard.style.display = is_ending ? "block" : "none"
//         resultTitle.style.color = "#FF0B53"
//         resultDesc.innerHTML = "it seems that the employee needs psychological help. The stress level exceeds the normal value by 41%. Contact him to speak in person."
//     }else if (data[0].emotions === "Surprised"){
//         document.getElementsByClassName('emotionImage')[0].src = "./image/Surprised.png"
//         resultTitle.innerHTML = "WARNING"
//         resultCard.style.display = is_ending ? "block" : "none"
//         resultTitle.style.color = "#FFF967"
//         resultDesc.innerHTML = "It seems the employee is surprised and does not understand what to do. Contact him to help him figure it out."
//     }
// }
//
// async function processframe(frame) {
//     const frame_base64 = frame.substr(22);
//
//     const response = await fetch('http://172.28.73.204:9698/api/get_emotions/', {
//         method: 'POST',
//         mode: 'cors',
//         cache: 'no-cache',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         redirect: 'follow',
//         referrerPolicy: 'no-referrer',
//         body: JSON.stringify({img: frame_base64})
//     });
//     const result = await response.json();
//     if (result && result.person) {
//         console.log(result.person)
//         document.getElementsByClassName("fase")[0].innerHTML = `person: ${result.person.name}`;
//         document.getElementsByClassName("telegram")[0].innerHTML = `telegram: ${result.person.telegram}`;
//     }
//
//     plotEmotion(result)
// }
//
// function MainPhoto() {
//     const idx = parseInt(window.location.href);
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [item, setItems] = useState([]);
//
//     useEffect(() => {
//         fetch(`http://localhost:3000/items/${idx}/`)
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     setIsLoaded(true);
//                     setItems(result);
//                 },
//
//                 (error) => {
//                     setIsLoaded(true);
//                     setError(error);
//                 }
//             )
//     }, [])
//
//     // plotChart(item);
//
//
//     if (error) {
//         return <div><div className="gif">
//             <img src="../image/morh.png" />
//         </div></div>;
//     } else if (!isLoaded) {
//         return <div><div className="gif">
//             <img src="../image/morh.png" />
//         </div></div>;
//     } else {
//         console.log('sd', item)
//         return (
//             <div className="Video">
//                 <img src={item.name}/>
//             </div>
//         );
//     }
// }
//
//
// const ComponentRender = () => {
//     const idx = parseInt(window.location.href);
//     return(
//         <div className="ComponentRender">
//         <div className="row">
//             <div className="col-md-6">
//                 <MainPhoto/>
//                 <div className="row">
//                     <p class="mb-0"><span className="fase"></span></p>
//                     <p><span className={"telegram"}></span></p>
//                 </div>
//             </div>
//             <div className="col-md-4 ps-3">
//                 <div class="row">
//                     <div class="col-md-9">
//                         <h1>Interview {idx}</h1>
//                         <ul>
//                             <li><span className={"angry_percent"}>Angry 0</span></li>
//                             <li><span className={"happy_percent"}>Happy 0</span></li>
//                             <li><span className={"neutral_percent"}>Neutral 0</span></li>
//                             <li><span className={"sad_percent"}>Sad 0</span></li>
//                             <li><span className={"surprise_percent"}>Surprise 0</span></li>
//                         </ul>
//
//                         <div id="resultCard" className="card text-black text-center p-3 pb-0" style={{display: "none"}}>
//                             <h2 id="resultTitle">Everything cool</h2>
//                             <p id="resultDesc">The employee is happy to work.  You don't have to worry about his mental state.
//                                 Contact the employee to learn how to be happy.
//                             </p>
//                         </div>
//                     </div>
//                     <div class="col-md-3">
//                         <img className={"emotionImage"}/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//     )
// }
// export default ComponentRender;
