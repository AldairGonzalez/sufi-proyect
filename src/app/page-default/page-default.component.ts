import { Component, ViewChild, OnInit } from '@angular/core';
import {CustomeNavbarComponent} from '../custome-navbar/custome-navbar.component';
import {CampoTextComponent} from '../campo-text/campo-text.component';
import {CustomeButtonComponent} from '../custome-button/custome-button.component';
import {Desembolso} from '../interfaces/page-default.interface';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-page-default',
  standalone: true,
  imports: [CommonModule, CampoTextComponent, CustomeButtonComponent, CustomeNavbarComponent, MatTableModule, MatPaginatorModule ],
  templateUrl: './page-default.component.html',
  styleUrl: './page-default.component.css'
})

export class PageDefaultComponent implements OnInit {
  showText: boolean = true;
  minWidthRequired: number = 560;
  opciones: string[] = ['Tarjeta de Identidad', 'Cédula', 'Cédula Extranjera'];
  seleccion: string = '';
  dataSource: MatTableDataSource<Desembolso> = new MatTableDataSource<Desembolso>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['fecha', 'numeroDesembolso', 'tipoDocumento', 'numeroDocumento', 'monto'];

  screenValidation() {
    this.showText = window.innerWidth >= this.minWidthRequired;
  }

  ngOnInit() {
    this.screenValidation();
    window.addEventListener('resize', () => {
      this.screenValidation();
    });

    this.dataSource.data = this.generarDesembolsos(20);
    this.dataSource.paginator = this.paginator;
  }

  generarDesembolsos(cantidad: number): Desembolso[] {
    const desembolsos: Desembolso[] = [];

    for (let i = 1; i <= cantidad; i++) {
      const desembolso: Desembolso = {
        fecha: new Date(),
        numeroDesembolso: i,
        tipoDocumento: 'Tipo ' + i,
        numeroDocumento: i * 100,
        monto: i * 1000
      };

      desembolsos.push(desembolso);
    }

    return desembolsos;
  }
}
