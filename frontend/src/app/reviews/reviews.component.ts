import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  protected teachers: any[] = [];
  protected reviews: any[] = [];

  ngOnInit(): void {
    this.getReviews();
  }

  constructor( private reviewsService: ReviewsService ){}

  getReviews(): void {
    this.reviewsService.getReviews().subscribe(
      (data: any) => {
        console.log(data);
        this.reviews = data;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
} 
