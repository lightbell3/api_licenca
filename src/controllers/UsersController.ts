import { Request, Response } from 'express'
import { UsersServices } from '../services/UsersServices'

class UsersController {

    async create(request: Request, response: Response) {

        const { name, filial, login } = request.body
        const usersServices = new UsersServices()

        try { 
            const users = await usersServices.create({name, filial, login})
            return response.json(users)
        } catch(err){
            return response
                .status(400)
                .json({message: err.message})
        }
    }

    async index(request: Request, response: Response) {

        const usersServices = new UsersServices()

        try { 
            const users = await usersServices.index()
            return response.status(200).json(users)
        } catch (err) {
            return response
                .status(400)
                .json({message: err.message})
        }
    }




}

export { UsersController }