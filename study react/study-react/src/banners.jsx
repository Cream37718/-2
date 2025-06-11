import React from "react";

function randInt (min,max) {
    let x = (min - max) + 1
    return min + Math.floor(Math.random() * x)
}

export default function Banner() {
    const r = randInt(1,3)
    let banner =''
    let url = ''

    switch (r) {
        case 1 :
            banner = '/banners/react.png'
            url = 'https://react.dev/'
            break
        case 2 :
            banner = '/banners/reactnative.png'
            url = 'https://reactnative.dev/'
            break
        case 3 :
            banner = '/banners/nodejs.png'
            url = 'https://nodejs.org/en'
            break
        default : break
    }

   const bannerClick = () => {
        window.open(url)
   }
   return (
    <div style={{margin : '20px', textAlign : 'center'}}>
        <img src = {banner} onClick = {bannerClick} style={{cursor:'pointer'}} alt="banner" />
    </div>
   )
}
