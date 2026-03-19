import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-editarproducto',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './editarproducto.html',
  styleUrl: './editarproducto.css'
})
export class editarProducto implements OnInit {

  productos = signal<Producto[]>([]);
  private http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<Producto[]>('http://localhost:3000/api/productos/1')
      .subscribe({
        next: (data) => this.productos.set(data),
        error: (err) => console.error(err)
      });
      
  }
  
}