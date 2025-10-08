import dotenv from "dotenv"

dotenv.config()

export default{
    port : process.env.PORT as string,
    mongo_url : process.env.MONGO_URL as string,
    secret : process.env.SECRET as string
}