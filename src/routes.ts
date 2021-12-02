import { Router } from "express";

import { UsersController } from './controllers/UsersController' 
import { ModulesController } from './controllers/ModulesController'
import { UserModulesController } from "./controllers/UserModulesController"

const routes = Router();

const usersController = new UsersController() 
routes.post('/usuarios', usersController.create)
routes.get('/usuarios', usersController.index)

const modulesController = new ModulesController()
routes.post('/modulos', modulesController.create)
routes.get('/modulos', modulesController.index)

const userModulesController = new UserModulesController()
routes.post('/modulosusuarios', userModulesController.create)
routes.get('/modulosusuarios', userModulesController.index)
routes.get('/modulosusuarios/:id', userModulesController.show)

routes.put('/modulosusuarios/:id', userModulesController.update)


export { routes }