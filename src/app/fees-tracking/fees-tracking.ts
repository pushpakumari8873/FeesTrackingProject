import { Component, ElementRef, inject, Inject, ViewChild } from '@angular/core';
import { enrollment, IDashboard } from '../model/model';
import { FormsModule } from '@angular/forms';
import { Enrollmentservice } from '../services/enrollmentservice';
import { IBatch } from '../model/model';
@Component({
  selector: 'app-fees-tracking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fees-tracking.html',
  styleUrl: './fees-tracking.css'
})
export class FeesTrackingComponent {

  @ViewChild('modal') modal!: ElementRef;


  // variables
  batchList: IBatch[] = [];
  addNewEnrollment: enrollment = new enrollment();
  enrollmentList: enrollment[] = [];
  IDashboard: IDashboard[] = [];

  // services
  enrollmentSrv = inject(Enrollmentservice);
  batchData: IDashboard | undefined;

  ngOnInit(): void {
    this.newBatch();
    this.getAEnrollment();
    this.getDashboardData();
  }

  // getting batches for dropdown

  newBatch() {
    this.enrollmentSrv.getBatches().subscribe({
      next: (res: any) => {
        this.batchList = res.data ? res.data : res;
      },
      error: (error) => {
        console.error("Error fetching batches:", error);
      }
    })
  }


  getAEnrollment() {
    this.enrollmentSrv.getAllEnrollment().subscribe({
      next: (res: any) => {
        this.enrollmentList = res.data ? res.data : res;
      },
      error: (error) => {
        alert("Error fetching Data");
        console.error("Error fetching enrollments:", error);
      }
    })
  }

  // saving new enrollment

  onAdd() {
    this.addNewEnrollment = new enrollment();
    this.openModal();
  }

  AddEnrollment() {
    this.enrollmentSrv.addEnrollment(this.addNewEnrollment).subscribe({
      next: (res: any) => {
        if (res.result || res) {
          this.getAEnrollment();
          alert("Enrollment saved successfully");
          this.closeModal();
          this.addNewEnrollment = new enrollment();
        } else {
          alert(res.message || "Error saving enrollment");
        }
      },
      error: (error) => {
        alert("Error saving enrollment");
        console.error("Error saving enrollment:", error);
      }
    })
  }

  onEdit(item: enrollment) {
    this.addNewEnrollment = item
    this.openModal();
  }


  onUpdateEnrollment() {
    this.enrollmentSrv.updateEnrollment(this.addNewEnrollment).subscribe({
      next: (res: any) => {
        if (res.result || res) {
          this.getAEnrollment();
          alert("Enrollment updated successfully");
          this.closeModal();
          this.addNewEnrollment = new enrollment();
        } else {
          alert(res.message || "Error updating enrollment");
        }
      },
      error: (error) => {
        alert("Error updating enrollment");
        console.error("Error updating enrollment:", error);
      }
    })
  }

  onDelete(id: number) {

    const isDelete = confirm("Are you sure you want to delete enrollment?");
    if (isDelete) {
      this.enrollmentSrv.deleteEnrollment(id).subscribe({
        next: (res: any) => {
          if (res.result) {
            this.getAEnrollment();
            alert("Enrollment deleted successfully");
          } else {
            alert(res.message);
          }
        },
        error: (error) => {
          alert("Error deleting enrollment");
          console.error("Error deleting enrollment:", error);
        }
      })
    }

  }


  getDashboardData() {
    this.enrollmentSrv.GetDashboardStats().subscribe((res: IDashboard) => {
      this.batchData = res;
    })
  }

  // opening modal

  openModal() {
    if (this.modal) {
      this.modal.nativeElement.classList.add('open');
    }
  }

  // closing modal

  closeModal() {
    if (this.modal) {
      this.modal.nativeElement.classList.remove('open');
    }
  }


}
