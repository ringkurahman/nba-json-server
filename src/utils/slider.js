import React from 'react'
import Slider from "react-slick"


const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const generateSlides = (slides) => (
    slides?
        <Slider { ...settings }>
            {slides.map(slide => (
                <div key={slide.id}>
                    <div
                        className="item_slider"
                        style={{ background:`url(/images/covers/${slide.cover})`}}
                    >
                        <div className="caption">
                            <h1>{slide.topic}</h1>
                            <p>{ slide.title }</p>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    : null
)

const SliderWidget = (props) => {
    return (
        <>
            { generateSlides(props.slides) }
        </>
    )
}

export default SliderWidget
