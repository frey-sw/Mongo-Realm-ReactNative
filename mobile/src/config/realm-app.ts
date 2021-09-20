import Realm from 'realm';

// @ts-ignore
let app;

// Returns the shared instance of the Realm app.
export function getRealmApp(): any {
  // @ts-ignore
  if (app === undefined) {
    const appId = 'application-0-qnphi';
    const appConfig = {
      id: appId,
      timeout: 10000,
      app: {
        name: 'default',
        version: '0',
      },
    };
    app = new Realm.App(appConfig);
  }
  // @ts-ignore
  return app;
}
