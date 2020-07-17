const provincias = ['Álava','Badajoz','Cáceres','Girona','Huelva','Jaén','La Rioja','Madrid','Navarra'];
const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
const expReg = {
    responseOK: 'Response OK',
    responseFAIL: 'Response FAIL',
    email: 'test@test.com',
    telefono: '919784852'
}
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;
export const multiplicar = (a, b) => a * b;
export const dividir = (a, b) => a / b;
export const isNull = () => null;
export const isFalse = () => false;
export const isTrue = () => true;
export const isUndefined = () => undefined;
export const arrProvincias = () => provincias;
export const arrDias = () => dias;
export const objExpReg = () => expReg;
export const callback = callback => setTimeout(() => callback('Hola mundo callback'), 3000);
export const ajaxGet = url => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.onload = () => req.status === 200 ? resolve(JSON.parse(req.response)) : reject(req.statusText);
        req.onerror = () => reject(req.statusText);
        req.send();
    });
};