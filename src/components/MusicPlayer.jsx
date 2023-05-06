import React from 'react'
import NF from '../assets/NFcover.jpg'
import Lyrics from './Lyrics'
import Prev from '../assets/previous.png'
import Next from '../assets/next.png'
import Pause from '../assets/pause.png'

const MusicPlayer = () => {  
    const helper = () => {
        const musicSlider = document.querySelector('.slider');
        const progressSlider = document.querySelector('#progress-slider');
        progressSlider.style.width = musicSlider.value + '%'
        musicSlider.addEventListener('input', e => {
            progressSlider.style.width = e.target.value +'%'
    })
}
  return (
      <body className="bg-primary font-open-sans grid place-items-center h-screen">
    <div onLoad={helper} className="bg-gray-800 grid grid-cols-2 rounded-xl overflow-hidden shadow-music-player">
    <div>
        <img className="w-full h-full object-cover" src={NF} alt="NF" />
    </div>
    <div className="text-center bg-black text-gray-200">
        <div className="px-10 py-12">
            <h1 className="text-3xl font-bold text-[#0f766e]">NF, Julia Michaels</h1>
            <h2 className="text-2xl mt-3 font-bold text-[#6b7280]">GONE</h2>
            <div className="py-6">
                <div className="relative h-44 overflow-hidden">
                    <div className="absolute -top-5 -inset-x-5 bg-black h-12 blur-lg "></div>
                    <div className="absolute top-1/2 -translate-y-1/2 bg-white h-12 w-full mix-blend-overlay blur-md"></div>
                    <Lyrics></Lyrics>
                    <div className="absolute -bottom-5 -inset-x-5 bg-black h-12 blur-lg "></div>
                </div>
            </div>
            <div className="flex items-center justify-around text-primary px-5">
                <button className="control-button">
                    <img className="w-6 h-6" src={Prev} alt="prev" />
                </button>
                <button className="control-button">
                    <img className="w-12 h-12" src={Pause} alt="prev" />
                </button>
                <button className="control-button">
                    <img className="w-6 h-6" src={Next} alt="prev" />
                </button>
            </div>
    <div className="flex items-center gap-5 mt-8">
        <div className="text-sm opacity-80">00:30</div>
        <div className="relative bg-gray-800 w-full h-2 rounded">
            <div id="progress-slider" className="absolute top-0 left-0 bg-secondary h-2 rounded-l-md"></div>
        <input type="range" className="slider" />
        </div>
        <div className="text-sm opacity-80">04:07</div>
    </div>
        </div>
    </div>
    </div>
    </body>
  )
}

export default MusicPlayer
