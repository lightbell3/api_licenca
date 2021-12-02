import { Request, Response } from 'express'
import { UserModulesServices } from '../services/UserModulesServices'

class UserModulesController {

    async create(request: Request, response: Response) {

        let {user_id, module_id } = request.body
        const userModulesServices = new UserModulesServices()
        try { 
            const userModules = await userModulesServices.create({
                user_id, module_id
            })
            return response.status(200).json(userModules)  
        } catch (err) {
            return response
                .status(400)
                .json({message: err.message})
        }
         
    }

    async index(request: Request, response: Response) {

        const userModulesServices = new UserModulesServices()

        try { 
            const userModules = await userModulesServices.index()
            return response.status(200).json(userModules)
        } catch (err) {
            return response
                .status(400)
                .json({message: err.message})
        }
    }

    async show(request: Request, response: Response) {

        const userModulesServices = new UserModulesServices()
        const { id } = request.params

        try {
            const userModules = await userModulesServices.show({ id })
            return response.status(200).json(userModules)
        } catch (err) {
            return response
                .status(400)
                .json({message: err.message})
        }
    }



    async update(request: Request, response: Response) {

        const { user_id, module_id} = request.body
        const { id } = request.params
        const userModulesServices = new UserModulesServices()

        try { 
            const userModules = await userModulesServices.update({ id, user_id, module_id })
            return response.status(200).json(userModules)
        } catch (err) {
            return response
                .status(400)
                .json({message: err.message})
        }
    }

}

export { UserModulesController }