import { Routes } from '@angular/router';
import { RoutesEnum } from './shared/enum/routes.enum';

export const routes: Routes = [
    {
        path: '',
        redirectTo: RoutesEnum.HOME,
        pathMatch: 'full'
    },
    {
        path: RoutesEnum.HOME,
        loadComponent: () => import('../app/pages/home/home.component').then((m) => m.HomeComponent)
    },
    {
        path: RoutesEnum.NOTICE,
        loadComponent: () => import('../app/pages/blog/components/notice/notice.component').then((m) => m.NoticeComponent)
    },
];
