
declare module '@ioc:Adonis/Core/HttpContext' {

  import React, { ReactElement } from "react";

  interface HttpReact {
    render: (Component: FC<any>, props?: Object) => Promise<string>
  }

  interface HttpContextContract {
    react: HttpReact
  }
}

declare interface ReactRouter {
  path: string
}

declare interface AdonisData {
  router: {
    path: string
  },
  pageProps: any
}

