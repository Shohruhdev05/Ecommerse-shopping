import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const showToast = (message, options = {}) => {
    Toastify({
        text: "Mahsulot muvaffaqiyatli qabul qilindi",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `right`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
};

export const errorToast = (options = {}) => {
    Toastify({
        text: "Maxsulot qabul qilinmadi",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        style: {
            background: "linear-gradient(to right,  #FD6969FF, #dc3545)",
        },
        // backgroundColor:  "liner-gradient(to right, #dc3545)",
        stopOnFocus: true,
    }).showToast();
}
