const URL_API = 'https://dog.ceo/api/breeds/image/random'

export async function useRandog(){
    const res = await fetch(URL_API)
    const data = await res.json()
    const {message} = data//{} significa que busca la clave con el mismo nombre y agrega el valor
    return message
}