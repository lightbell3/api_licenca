import { Request, Response } from 'express'
import { ModulesServices } from '../services/ModulesServices'

class ModulesController {

    async create(request: Request, response: Response) {

        const { name } = request.body
        const modulesServices = new ModulesServices()

        try { 
            const modules = await modulesServices.create({name})
            return response.json(modules)
        } catch(err){
            return response
                .status(400)
                .json({message: err.message})
        }
    }

    async index(request: Request, response: Response) {

        const modulesServices = new ModulesServices()

        try { 
            const modules = await modulesServices.index()
            return response.status(200).json(modules)
        } catch (err) {
            return response
                .status(400)
                .json({message: err.message})
        }
    }


    
}

export { ModulesController }