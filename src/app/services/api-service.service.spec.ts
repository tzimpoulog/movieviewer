import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';

import { ApiService } from './api-service.service';

describe('ApiServiceService', () => {
  let service: ApiService;
  let httpTestingController :HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [ApiService]
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  // it('be able to retrieve movies from the API via getList method', () => {
  //   service.getList('popular').subscribe(movies => {
  //       expect(movies).length == 20;
  //       //expect(posts).toEqual(dummyPosts);
  //   });
  // });

  // it('returned Observable should match the right data', () => {
  //   const mockCourses = [
  //     { popularity: '569.811',
  //     original_title: "Ad Astra"
  //     },
  //     { popularity: '111',
  //     original_title: "Joker"
  //     }
  //   ];

  //   service.getList('popular')
  //     .subscribe(coursesData => {
  //       expect(coursesData[0].name).toEqual('569.811');
  //       expect(coursesData[0].description).toEqual('Ad Astra');
        
  //       expect(coursesData[1].name).toEqual('111');
  //       expect(coursesData[1].description).toEqual('Joker');
  //     });

  //   const req = httpTestingController.expectOne(
  //     'http://localhost:8089/topics/1/courses'
  //   );

  //   req.flush(mockCourses);
  // });

});
