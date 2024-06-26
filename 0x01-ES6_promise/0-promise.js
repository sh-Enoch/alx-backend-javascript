function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         resolve('https://google.com');
         }, 200)
    });
}

export default getResponseFromAPI;
