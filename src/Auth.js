import { useNavigate } from "react-router";

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
;

export const registerUser = async function (firstName, lastName, email, phoneNumber, password) {
    const url = `${urlEndpoint}/auth/register-user`
    console.log(url, email, password)
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
            firstName,
            lastName,
            phoneNumber


        })

    });

    const responseJSON = await response.json();
    console.log(responseJSON);


}

export const loginUser = async function (email, password) {
    const url = `${urlEndpoint}/auth/login-user`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password

        }),
    });
    const responseJSON = await response.json();


    if (responseJSON.success) {
        localStorage.setItem(process.env.REACT_APP_TOKEN_HEADER_KEY, JSON.stringify(responseJSON.token));

    }


};




