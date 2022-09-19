import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit, OnChanges {
  @Input() profile!: Profile;
  @Output() editProfile = new EventEmitter<Profile>();
  @Output() deleteProfile = new EventEmitter<string>();

  constructor() { }

  editing: boolean = false;

  readonly profileForm: FormGroup = new FormGroup({
    profilePicture: new FormControl({value: '', disabled: !this.editing}), 
    name: new FormControl({value: '', disabled: !this.editing}),
    email: new FormControl({value: '', disabled: !this.editing}), 
    phone: new FormControl({value: '', disabled: !this.editing})
  });

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.profile){
      this.profileForm.setValue({
        profilePicture: this.profile.profilePicture ,
        name: this.profile.name, 
        email: this.profile.email,
        phone: this.profile.phone
      });
    }
  }

  onEdit(){
    this.editing = true;
    this.profileForm.enable();
  }

  onDelete(){
    this.deleteProfile.emit(this.profile.id);
  }

  onSubmit(){
    const updatedInfo = this.profileForm.getRawValue();
    const updatedProfile: Profile = {
      id: this.profile.id,
      name: updatedInfo.name,
      email: updatedInfo.email,
      phone: updatedInfo.phone,
      profilePicture: updatedInfo.profilePicture
    };

    this.editProfile.emit(updatedProfile);
  }
}
