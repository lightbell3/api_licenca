import { getCustomRepository } from 'typeorm'
import { ModulesRepository } from '../repositories/ModulesRepository'

interface IModulesCreate {
    name: string;
}

class ModulesServices {

    async create({ name }: IModulesCreate){

        const modulesRepository = getCustomRepository(ModulesRepository)


        const module = await modulesRepository.create({
            name
        })

        await modulesRepository.save(module)
        return module
    }

    async index() {

        const modulesRepository = getCustomRepository(ModulesRepository)
        const modules = await modulesRepository.find()
        return modules
    }

}

export { ModulesServices }