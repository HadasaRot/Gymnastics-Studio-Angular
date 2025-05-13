import { Component } from '@angular/core';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { AfterViewInit } from '@angular/core';
interface IRow {
  firstName: string;
  lastName: string;
  phone: string;
  id: string;
  lessonName: string;
  price: number;
  isPaid: boolean;
  details?: any;
}
@Component({
  selector: 'app-registrants-list',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './registrants-list.component.html',
  styleUrl: './registrants-list.component.css'
})
export class RegistrantsListComponent implements AfterViewInit {  
  
  rowData: IRow[] = [
    {
      firstName: "Noa",
      lastName: "Cohen",
      phone: "050-1112233",
      id: "123456789",
      lessonName: "Yoga for Beginners",
      price: 300,
      isPaid: true,
     
      
    },
    {
      firstName: "Shir",
      lastName: "Levi",
      phone: "052-3344556",
      id: "234567891",
      lessonName: "Pilates Core",
      price: 350,
      isPaid: false,
    
    },
    {
      firstName: "Orit",
      lastName: "Ron",
      phone: "053-9988776",
      id: "345678912",
      lessonName: "HIIT Training",
      price: 400,
      isPaid: true,
     
      
    },
    {
      firstName: "Ayelet",
      lastName: "Avital",
      phone: "054-7766554",
      id: "456789123",
      lessonName: "Zumba Dance",
      price: 320,
      isPaid: false,
    
    },
    {
      firstName: "Tamar",
      lastName: "Ben-Haim",
      phone: "055-6655443",
      id: "567891234",
      lessonName: "Stretching and Flexibility",
      price: 250,
      isPaid: true,
      
    }
  ];
  
  colDefs: ColDef<IRow>[] = [
    { field: "firstName", filter: 'agTextColumnFilter' },
    { field: "lastName", filter: 'agTextColumnFilter' },
    { field: "phone", filter: 'agTextColumnFilter' },
    { field: "id", filter: 'agTextColumnFilter' },
    { field: "lessonName", filter: 'agSetColumnFilter' },
    { field: "price", filter: 'agNumberColumnFilter' },
    { field: "isPaid", filter: 'agSetColumnFilter' },
    {
      field: "details",
      headerName: "details",
      cellRenderer: () => {
        return `<button class="details-btn">details</button>`;
      },
      filter: false
    }
    
];
 defaultColDef: ColDef = {
flex: 1,
filter: true,
floatingFilter: true,
};

ngAfterViewInit(): void {
  // האזנה כללית לכל הלחיצות בטבלה
  document.addEventListener('click', (event: any) => {
    if (event.target && event.target.classList.contains('details-btn')) {
      const rowElement = event.target.closest('.ag-row');
      if (rowElement) {
        const rowIndex = rowElement.getAttribute('row-index');
        const rowData = this.rowData[parseInt(rowIndex, 10)];
        this.showDetails(rowData);
      }
    }
  });
}

showDetails(row: IRow): void {
  alert(
    `פרטי המשתתף:\n` +
    `שם: ${row.firstName} ${row.lastName}\n` +
    `טלפון: ${row.phone}\n` +
    `ת.ז: ${row.id}\n` +
    `שיעור: ${row.lessonName}\n` +
    `מחיר: ${row.price} ש"ח\n` +
    `שולם: ${row.isPaid ? 'כן' : 'לא'}`
  );
}




}