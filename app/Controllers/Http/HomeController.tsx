import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import React, {useEffect} from 'react';
import Home from "../../../resources/Components/Home";

export default class HomeController {
  async index({ react }: HttpContextContract) {
    return react.render(Home, {
      title: "Home",
      description: "This is the home page"
    })
  }


}
