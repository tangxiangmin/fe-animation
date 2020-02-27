import lottie from "lottie-web";

// https://lottiefiles.com/16393-pin-lotation-color-blue
import pinLotationColorBlue from './16393-pin-lotation-color-blue.json'

let element = document.getElementById("lottie")

lottie.loadAnimation({
    container: element, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: pinLotationColorBlue,
});
