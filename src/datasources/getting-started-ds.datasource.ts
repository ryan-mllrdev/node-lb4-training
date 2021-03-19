import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'gettingStartedDS',
  connector: 'postgresql',
  url: 'postgres://postgres:Admin!23@localhost/gettingStartedDB',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'Admin!23',
  database: 'gettingStartedDB'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class GettingStartedDsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'gettingStartedDS';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.gettingStartedDS', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
