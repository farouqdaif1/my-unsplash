import app from "./app";
import env from "./util/validateEnv"
import mongoose from 'mongoose';
const PORT = env.PORT
mongoose.connect(env.MONGO_CONNECTION_STRING).then(() => {
    console.log("Mongoose Connected")
    app.listen(PORT, () => {
        console.log(`Server Running on Port: http://localhost:${PORT}`)
    })
}).catch((error) => console.log(`${error} did not connect`));
