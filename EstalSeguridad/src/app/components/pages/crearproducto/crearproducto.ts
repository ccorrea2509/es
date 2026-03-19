/*import { Component } from '@angular/core';

@Component({
  selector: 'app-crearproducto',
  imports: [],
  templateUrl: './crearproducto.html',
  styleUrl: './crearproducto.css',
})
export class CrearProductoComponent {}
*/

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crearproducto',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crearproducto.html',
  styleUrl: './crearproducto.css',
})
export class CrearProductoComponent {
  form: FormGroup;
  private http = inject(HttpClient);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      sku: ['', Validators.required],
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(0)]],
      stock_actual: [0, [Validators.required, Validators.min(0)]],
      stock_minimo: [0, [Validators.required, Validators.min(0)]],
    });
  }

  enviarProducto() {
    if (this.form.valid) {
      const producto = this.form.value;
      console.log('Enviando producto:', producto);

      this.http.post('http://localhost:3000/api/productos', producto)
        .subscribe({
          next: (res) => {
            console.log('Respuesta API:', res);
            alert('Producto creado con éxito');
            this.form.reset();
          },
          error: (err) => {
            console.error('Error al enviar producto:', err);
            alert('Error al enviar producto');
          }
        });
    } else {
      alert('Formulario inválido. Revisa los campos.');
    }
  }
}