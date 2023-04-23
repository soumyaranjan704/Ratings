import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})

export class RatingComponent implements OnInit {
  rating: number;
  //formData: any = {};
  //form: FormGroup;
  constructor(private http: HttpClient) {}


  ngOnInit(): void {
  }
  onSubmit(){

    this.http.post('http://localhost:8080/rating', { rating: this.rating }).subscribe(response => {
    console.log(response);
     
    });
  }
    //console.log(f.value);s
  }

