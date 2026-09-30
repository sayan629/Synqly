

import { config } from 'dotenv'
import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'

config({path : resolve(process.cwd(), ".env")})

async function main() {
    const sqlDir =  resolve(process.cwd(), "sql")
    const files = readdirSync(sqlDir).filter(name=> name.endsWith())
}