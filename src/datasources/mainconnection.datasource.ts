import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './mainconnection.datasource.json';

export class MainconnectionDataSource extends juggler.DataSource {
  static dataSourceName = 'mainconnection';

  constructor(
    @inject('datasources.config.mainconnection', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
