
import { getCustomRepository }from 'typeorm'
import { ModulesRepository } from '../repositories/ModulesRepository'
import { UserModulesRepository } from '../repositories/SalesOrdersRepository'
import { UsersRepository } from '../repositories/UsersRepository'

interface IUserModulesServiceCreate {
    user_id: string;
    module_id: string;
}

interface IUserModulesServicesShow {
    id: string;
}

interface IUserModulesServiceUpdate {
    id: string;
    user_id: string;
    module_id: string;
}

class UserModulesServices {
    
    async create( { user_id, module_id}: IUserModulesServiceCreate) {

        const userModulesServicesRepository = getCustomRepository(UserModulesRepository)

        const userModule = await userModulesServicesRepository.create({
            user_id,
            module_id
        })

        await userModulesServicesRepository.save(userModule)
        return userModule
    }

    async index() {
        const userModulesRepository = getCustomRepository(UserModulesRepository)
        const userModule = await userModulesRepository.find({
            relations: ['user', 'module']
        })
        return userModule
    }

    async show({ id }: IUserModulesServicesShow) {

        const userModuleRepository = getCustomRepository(UserModulesRepository)
        const userModule = await userModuleRepository.findOne(
            { id },
            {relations: ['user', 'module']})

        if(!userModule) {
            throw new Error('ID não encontrado!')
        }

        return userModule
    }



    async update({  id, user_id, module_id }: IUserModulesServiceUpdate) {

        const userModuleRepository = getCustomRepository(UserModulesRepository)
        const usersRepository = getCustomRepository(UsersRepository)
        const modulesRepository = getCustomRepository(ModulesRepository)
        let userModule = await userModuleRepository.findOne({ id })
        let user = await usersRepository.findOne({id:  user_id})
        let module = await modulesRepository.findOne({id: module_id})

        if(!userModule) {
            throw new Error('O usuário por módulo a ser alterado não foi encontrado!')
        }

        if(!user) {
            throw new Error('O usuário não foi encontrado!')
        }

        if(!module) {
            throw new Error('O módulo não foi encontrado!')
        }

        await userModuleRepository.update(id, { user_id, module_id })
        userModule = await userModuleRepository.findOne({ id })

        return userModule

    }
}

export { UserModulesServices }