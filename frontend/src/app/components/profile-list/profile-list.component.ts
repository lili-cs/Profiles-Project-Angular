import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { HttpService } from 'src/app/services/http/http.service';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  @Input()  profiles!: Profile[];

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
  }
 
  editProfile(updatedProfile: Profile){
    this.httpService.updateProfile(updatedProfile)
      .subscribe((data: any) => {
        let obj = this.profiles.filter(item => item._id == data._id)[0];
        obj = data;
      });
  }

  deleteProfile(profileId: string){
    console.log(`delete profile ${profileId}`);
    this.httpService.deleteProfile(profileId)
      .subscribe((deletedProfile: Profile) => {
        console.log(deletedProfile);
        this.profiles = this.profiles.filter(item => {
          item._id !== deletedProfile._id
        });
      });
  }
}
