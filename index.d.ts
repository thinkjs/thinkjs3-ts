import * as thinkjs from 'thinkjs';

declare global {
  interface ThinkReqeust extends thinkjs.Request {}
  interface ThinkResponse extends thinkjs.Response {}
  interface ThinkContext extends thinkjs.Context {
    new(): ThinkContext;
  }
  interface ThinkController extends thinkjs.Controller {
    new(ctx: ThinkContext): ThinkController
  }
  interface ThinkLogic extends thinkjs.Logic {
    new(ctx: ThinkContext): ThinkController
  }
  interface ThinkService {
    new(...arg: any[]): ThinkService
  }
  interface ThinkApplication extends thinkjs.Application {
    modules: string[]
    controllers: any[]
    logics: any[]
    models: any[]
    services: any[]
    routers: any
    validators: any
    server: any
  }
  interface Think extends thinkjs.Think {
    app: ThinkApplication
    Controller: ThinkController
    Logic: ThinkLogic
    Service: ThinkService
  }
  const think: Think;
}
declare class Application {
  constructor(arg: Object)
  run(): void
}
export = Application;

