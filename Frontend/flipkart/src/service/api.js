
import axios from "axios"
import { Navigate } from "react-router-dom"

const URL = "https://flipkart-backend-deploy-zwcf.onrender.com/api/v1"
export const signupUser = async (data) => {
    try {
        return await axios.post(`${URL}/users/register`, data)
    } catch (error) {
        // console.log('error:', error)
    }
}



export const loginUser = async (data) => {
    try {
        return await axios.post(`${URL}/users/login`, data)
    } catch (error) {
        // console.log('error:', error)
        return error.response
    }
}

export const payUsingPaytm = async (data) => {
    try {
        const { data: { key } } = await axios.get("https://flipkart-backend-deploy-zwcf.onrender.com/api/getkey")

        let { data: { order } } = await axios.post(`${URL}/payment/checkout`, data)
        const options = {
            "key": key,
            "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Nitin Jamwal",
            "description": "Test Transaction",
            "image": "https://razorpay.com/docs/build/browser/static/razorpay-docs-light.009264f2.svg",
            "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response) {
                console.log("working")

                window.location.href = "https://incredible-basbousa-7d2a10.netlify.app/success"
            },
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        const rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', function (response) {
            // console.log(error)
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });
        rzp1.open();

    } catch (error) {
        // console.log('error:', error)
    }
}



