import Elysia from "elysia";
import cors from "@elysiajs/cors";
import { html } from "@elysiajs/html";
import staticPlugin from "@elysiajs/static";

import { httpResponse } from "./@warcayac/const-elysia";
import wlogger from "./@warcayac/wlogger";
import Home from "./pages/Home";


export const app = new Elysia();

app
  .use(html())
  .use(staticPlugin())
  .use(cors({methods: '*'}))
  .use(wlogger(true))
  .get('/', (c) => c.html(<Home />))
  .all('*', () => httpResponse[404]('Path name not found'))
  .listen(
    process.env.PORT || 3001,
    () => console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
  )
;
