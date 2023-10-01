const BASE_URL = "https://api.thecatapi.com/v1/";
const END_POINT = "images/search";
const BREEDS = "breeds";
const options = {
    method: "GET",
    headers: {
        "x-api-key": "live_A0SuNUhg8wMQnI1OOhVMud2yvj7qOKHJm15onacOsEfEROdx7GcPHjr0e4lpJrkC"
    }
}

export function fetchBreeds() {
    return fetch(`${BASE_URL}${BREEDS}`)
        .then((resp) => {
            if (!resp.ok) {
            throw new Error(resp.statusText)
            }
            return resp.json()
    })
}

export function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}${END_POINT}?breed_ids=${breedId}`, options)
        .then((resp) => {
            if (!resp.ok) {
            throw new Error(resp.statusText)
            }
            return resp.json()
    })
}