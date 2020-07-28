import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


import {ClienteComponent} from './components/cliente/cliente.component';

const appRoutes: Routes=[
    {path:'',component:ClienteComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);