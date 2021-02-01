import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ModalRegisterVisitorsComponent } from 'src/app/shared/components/modal-register-visitors/modal-register-visitors.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
   selector: 'app-voucher',
   templateUrl: './voucher.component.html',
   styleUrls: ['./voucher.component.scss'],
})
export class VoucherComponent implements AfterViewInit {
   constructor(public dialog: MatDialog) {}

   //  ngOnInit(): void {}
   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

   @ViewChild(MatPaginator)
   paginator!: MatPaginator;

   ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
   }
   applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
         this.dataSource.paginator.firstPage();
      }
   }
   openDialog() {
      const dialogRef = this.dialog.open(ModalRegisterVisitorsComponent);

      dialogRef.afterClosed().subscribe((result) => {
         console.log(`Dialog result: ${result}`);
      });
   }
}

export interface PeriodicElement {
   name: string;
   position: number;
   weight: number;
   symbol: string;
   dtImport: string;
   dtVoucher: string;
   active: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
   {
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H',
      dtImport: '20-01-20',
      dtVoucher: '10-02-20',
      active: 'sim',
   },
];
