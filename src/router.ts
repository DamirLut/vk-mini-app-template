import { Page, Router } from '@happysanta/router';

export enum Modal {
  Example = 'example'
}

export enum Views {
  Example = 'example'
}

export enum Panels {
  Example = 'example'
}

export enum Pages {
  Example = '/'
}

const routes = {
  [Pages.Example]: new Page(Panels.Example, Views.Example),
};

export const router = new Router(routes);

router.start();