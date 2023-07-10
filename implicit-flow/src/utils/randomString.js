export const randomString = {
    generate: (length) => {
        let result = ""
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        let charactersLength = characters.length; 
        for (let index = 0; index < length; index++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))            
        }
        return result
    }
}