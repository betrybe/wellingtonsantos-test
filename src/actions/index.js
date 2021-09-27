import { saveAuth, removeToken } from "../config/auth"
import { pegarTodasMoedas } from "../services/moedas.service"
import { navigate } from '@reach/router'

export const TYPES = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    GETMOEADAS: "GETMOEDAS"
}

export const userLogin = (form) => {
    return (disppatch) => {
        try {
            disppatch({ type: TYPES.LOGIN, data: form.email })
            saveAuth(form.email)
            navigate('/carteira')
        } catch (e) {
            console.log(e);
        }
    }
}

export const getMoeadas = () => {
    return async (disppatch) => {
        const moedas = await pegarTodasMoedas()
        disppatch({type: TYPES.GETMOEADAS, data: moedas.data})
    }
}

export const userLogout = () => {
    return (disppatch) => {
        try {
            disppatch({ type: TYPES.LOGOUT })
            removeToken()
            window.location.replace('/')
        } catch (e) {
            console.log(e);
        }
    }
}