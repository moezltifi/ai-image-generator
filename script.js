const apiKey= "sk-proj-NTHUs6KEj9Kxa00pht9qT3BlbkFJwxp3DznM46IUEWONdm6w"
const inp = document.getElementById("input")
const images = document.querySelector(".images")

const getImages = async () =>{
    const methods = {
    method: "POST",
       headers:{ "Content-Type": "application/json",
                 "Authorization":`Bearer ${apiKey}` 
       },
       body:JSON.stringify({
        "prompt": inp.value,
        "n": 3,
        "size": "256x256"
       })
    }
    const res = await fetch("https://api.openai.com/v1/images/generations",methods)
    const data = await res.json()
    const listImages = data.data
    listImages.map(photo =>{
        const container = document.createElement("div")
        images.append(container)
        const img = document.createElement("img")
        container.append(img)
        img.src= photo.url
    })
}
