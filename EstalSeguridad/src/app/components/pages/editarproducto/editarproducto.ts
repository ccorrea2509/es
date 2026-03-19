import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-editarproducto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './editarproducto.html',
  styleUrls: ['./editarproducto.css']
})
export class EditarProductoComponent implements OnInit {
  private fb = inject(FormBuilder); // 👈 inject FormBuilder correctamente
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  form!: FormGroup; // 👈 inicializamos en ngOnInit
  productoId!: string;

  ngOnInit(): void {
    // Obtenemos el id de la ruta
    this.productoId = this.route.snapshot.paramMap.get('id')!;

    // Inicializamos el formulario
    this.form = this.fb.group({
      sku: ['', Validators.required],
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(0)]],
      stock_actual: [0, [Validators.required, Validators.min(0)]],
      stock_minimo: [0, [Validators.required, Validators.min(0)]],
    });

    // Cargamos los datos del producto
    this.http.get<any>(`http://localhost:3000/api/productos/${this.productoId}`)
      .subscribe({
        next: (data) => this.form.patchValue(data), // 👈 asignamos valores al form
        error: (err) => console.error(err)
      });
  }

  enviarEdicion() {
    if (this.form.valid) {
      const producto = this.form.value;
      this.http.put(`http://localhost:3000/api/productos/${this.productoId}`, producto)
        .subscribe({
          next: (res) => {alert('Producto actualizado con éxito');
            this.router.navigate(['/productos']);
          },
          error: (err) => console.error(err)
        });
    } else {
      alert('Formulario inválido');
    }
  }
}