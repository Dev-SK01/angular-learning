import { Routes } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';
import { MyHttpClient } from './http-client/http-client';
import { CarForm } from './car-form/car-form';

export const routes: Routes = [
    {path:'',component:HelloWorld},
    {path:'forms',component:CarForm},
    {path:'http',component:MyHttpClient}
];
