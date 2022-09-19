import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {  FormGroup, FormControl, EmailValidator } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  @Output() addProfile = new EventEmitter<Profile>();

  constructor(
    private httpService: HttpService
  ) { }

  readonly profileForm: FormGroup = new FormGroup({
    profilePicture: new FormControl(''), 
    name: new FormControl(''),
    email: new FormControl(''), 
    phone: new FormControl('')
  });

  ngOnInit(): void {
  }

  onSubmit() {
    const newProfile: Profile = this.profileForm.getRawValue();
    this.addProfile.emit(newProfile);
  }



}
