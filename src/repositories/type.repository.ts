import {DefaultCrudRepository} from '@loopback/repository';
import {Type} from '../models';
import {MainconnectionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TypeRepository extends DefaultCrudRepository<
  Type,
  typeof Type.prototype.id
> {
  constructor(
    @inject('datasources.mainconnection') dataSource: MainconnectionDataSource,
  ) {
    super(Type, dataSource);
  }
}
