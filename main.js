import { db } from "./db.js"
const main = async () => {
    await db.start()
}
main()
