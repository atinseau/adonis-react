import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {renderToNodeStream} from "react-dom/server";
import React, {FC} from "react";

import RouterContext from "App/Context/RouterContext";

export default class ReactMiddleware {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>) {

    const ADONIS_DATA = {
      pageProps: {},
      router: {
        path: ctx.request.url()
      }
    }

    ctx.react = {
      render: async (Component: FC<any>, props= {}) => {
        const R = <RouterContext.Provider value={ADONIS_DATA.router}>
          <Component {...props} />
        </RouterContext.Provider>

        const stream = renderToNodeStream(R);
        const html = await new Promise((resolve) => {
          stream.on('data', chunk => resolve(chunk.toString()))
        })
        ADONIS_DATA.pageProps = props;
        return ctx.view.render('app', {
          title: "Home",
          app: html,
          props: `<script>window.ADONIS_DATA = ${JSON.stringify(ADONIS_DATA)}</script>`
        })
      }
    }
    await next()
  }
}
