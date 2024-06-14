import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./style.css"

const Slide = () => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 15,
        },
    });
    return (
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">1</div>
            <div className="keen-slider__slide number-slide2">2</div>
            <div className="keen-slider__slide number-slide3">3</div>
            <div className="keen-slider__slide number-slide3">4</div>
        </div>
    );
};

export default Slide;

