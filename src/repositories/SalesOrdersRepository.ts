import { EntityRepository, Repository } from 'typeorm'
import { UserModule } from '../entities/UserModule'

@EntityRepository(UserModule)
class UserModulesRepository extends Repository<UserModule> {

}

export { UserModulesRepository }