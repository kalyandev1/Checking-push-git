module.exports = class{
    constructor(repository){
        this.repository = repository
    }
    add(rolesEntity){
        return this.repository.add(rolesEntity)
    }
    email(entity){
        return this.repository.email(entity)

    }
   
}