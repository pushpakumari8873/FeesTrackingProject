import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { enrollment, IBatch, IDashboard } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class Enrollmentservice {

  http = inject(HttpClient);

  // getting batches for dropdown
  getBatches() {
    return this.http.get<IBatch[]>('https://api.freeprojectapi.com/api/FeesTracking/batches')
  }

  // adding new enrollment
  addEnrollment(obj: enrollment) {
    return this.http.post<enrollment>("https://api.freeprojectapi.com/api/FeesTracking/addNewEnrollment", obj)
  }

  getAllEnrollment() {
    return this.http.get<enrollment[]>("https://api.freeprojectapi.com/api/FeesTracking/getAllEnrollments");
  }

  updateEnrollment(obj: enrollment) {
    return this.http.put<enrollment>("https://api.freeprojectapi.com/api/FeesTracking/updateEnrollment?id=" + obj.enrollmentId, obj)
  }

  deleteEnrollment(id: number) {
    return this.http.delete<enrollment>("https://api.freeprojectapi.com/api/FeesTracking/SoftDeleteById?id=" + id)
  }

  GetDashboardStats() {
    return this.http.get<IDashboard>("https://api.freeprojectapi.com/api/FeesTracking/GetDashboardStats");
  }

}
