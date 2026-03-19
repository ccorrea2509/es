import { Routes } from '@angular/router';
import { ProductoComponent } from './components//pages/producto/producto';
import { CrearProductoComponent } from './components/pages/crearproducto/crearproducto';
import { EditarProductoComponent } from './components/pages/editarproducto/editarproducto';
import { productostock } from './components/pages/productostock/productostock';
import { InicioComponent } from './components/pages/inicio/inicio';

export const routes: Routes = [
    { path: '', component:InicioComponent},
    {path: 'productos', component:ProductoComponent},
    {path: 'crear_producto', component:CrearProductoComponent},
    {path: 'productostock', component:productostock},
    {path: 'editar_producto/:id', component:EditarProductoComponent}
];
