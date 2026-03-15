import { Routes } from '@angular/router';
import { ProductoComponent } from './components//pages/producto/producto';
import { InicioComponent } from './components/pages/inicio/inicio';

export const routes: Routes = [
    { path: '', component:InicioComponent},
    {path: 'productos', component:ProductoComponent}
];
