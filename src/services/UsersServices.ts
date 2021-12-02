import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository'

interface IUsersCreate {
    name: string;
    filial: number;
    login: string;
}

interface IClientsUpdate {
    id: string;
    name: string;
    filial: number;
    login: string;
}

class UsersServices {

    async create({ name, filial, login }: IUsersCreate){

        const usersRepository = getCustomRepository(UsersRepository)
        const loginAlreadyExist = await usersRepository.findOne({ login }) 

        if(loginAlreadyExist) {
            throw new Error('Esse login já existe!')
        }

        const users = await usersRepository.create({
            name,
            filial,
            login
        })

        await usersRepository.save(users)
        return users
    }

    async index() {

        const usersRepository = getCustomRepository(UsersRepository)
        const users = await usersRepository.find()
        return users
    }



}

export { UsersServices }