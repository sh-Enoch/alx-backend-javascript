//Return a promise using function getResponseFromAPI()
export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeOut(() => {
         resolve('https://google.com');
         }, 200)
    });
}
