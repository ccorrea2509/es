import { Component, OnInit, signal, inject } from '@angular/core';
import { NgFor } from '@angular/common'; // 👈 necesario para *ngFor
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

interface Producto {
  id: number;
  sku: string;
  nombre: string;
  categoria: string;
  precio: number;
  stock_actual: number;
  stock_minimo: number;
}

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [ NgFor,RouterLink], // 👈 agregar NgFor
  templateUrl: './producto.html',
  styleUrls: ['./producto.css']
})
export class ProductoComponent implements OnInit {

  productos = signal<Producto[]>([]);
  private http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<Producto[]>('http://localhost:3000/api/productos')
      .subscribe({
        next: (data) => this.productos.set(data),
        error: (err) => console.error(err)
      });
      
  }
  
}