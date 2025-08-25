// Pulls data from Unofficial World Cube Association API (https://wca-rest-api.robiningelbrecht.be/)
export default function wcaApi(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))    
}