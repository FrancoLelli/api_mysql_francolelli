import app from "./app"

const main = () => {
     app.listen(app.get("port"))
     console.log("Server On");
}

main()