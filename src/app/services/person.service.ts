import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Person } from "src/models/person.model";

@Injectable({
  providedIn: "root"
})
export class PersonService {
  constructor(private http: HttpClient) {}

  getAllUser() {
    return this.http.get("http://localhost:8080/person");
  }

  addNewUser(person: Person) {
    console.log(person);
    return this.http.post("http://localhost:8080/person", person, {
      responseType: "text"
    });
  }

  updateUser(index: number, person: Person) {
    return this.http.put(`http://localhost:8080/person/${index}`, person, {
      responseType: "text"
    });
  }

  deleteUser(index: number) {
    return this.http.delete(`http://localhost:8080/person/${index}`, {
      responseType: "text"
    });
  }
}
