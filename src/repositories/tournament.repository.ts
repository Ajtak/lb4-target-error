import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Tournament, Type} from '../models';
import {MainconnectionDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {TypeRepository} from "./type.repository";

export class TournamentRepository extends DefaultCrudRepository<Tournament,
    typeof Tournament.prototype.id> {
    public readonly type: BelongsToAccessor<Type, typeof Tournament.prototype.id>;

    constructor(
        @inject('datasources.mainconnection') dataSource: MainconnectionDataSource,
        @repository.getter('TypeRepository')
            customerRepositoryGetter: Getter<TypeRepository>,
    ) {
        super(Tournament, dataSource);
        this.type = this.createBelongsToAccessorFor(
            'type',
            customerRepositoryGetter,
        );
    }
}
