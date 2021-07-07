import { Component, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';
import { setClassMetadata } from '@angular/core/src/r3_symbols';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { ServiceService } from '../../shared/service/service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css'],
  providers: [DatePipe]
})
export class FormDataComponent implements OnInit {
  eventName: string = 'Create Event';
  selectall: boolean;
  languages = new FormControl();
  languagesList: string[] = ['English', 'Spanish', 'Russian', 'Arabic', 'Mandarin Chinese', 'Malay', 'Bengali'];
  area = new FormControl();
  areaList: string[] = ['Lobby', 'Enterence', 'Hall', 'Auditorium', 'Networking launge', 'terece', 'Garden'];
  eventForm: FormGroup;
  myDate: number;
  maxDate: string;
  minDate: string;
  Cdate: Date;
  get l() {
    return this.eventForm.controls;
  }

  //File upload
  name = 'Angular ' + VERSION.major;
  dataimage: any;

  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';

  constructor(private fb: FormBuilder, public datepipe: DatePipe, private _service: ServiceService) {
    this.eventForm = this.fb.group({
      eventName: ['', [Validators.required]],
      eventDescription: [''],
      eventStartdate: ['', [Validators.required]],
      eventEnddate: ['', Validators.required],
      eventArea: ['', [Validators.required]],
      eventLogo: [''],
      eventLanguage: ['', Validators.required],
      eventIntrovideoLink: ['']
    })
    this.myDate = Date.now();
  }

  ngOnInit(): void {
    this.Cdate = new Date();
    this.Cdate.setDate(this.Cdate.getDate() + 1);
    let dsa = this.datepipe.transform(this.Cdate, 'yyyy-MM-dd')
    console.log("cr date ", dsa)
    this.maxDate = dsa;
    this.minDate = dsa;
  }

  onFileSelected(event) {
    if (event.target.files.length > 0) {
      console.log("path is ", event.target.files[0]);
      console.log(event.target.files[0].name);
      this.eventForm.controls['eventLogo'].setValue(event.target.files[0]);
    }
  }

  setData() {
    if (this.languages.value) {
      this.eventForm.controls['eventArea'].setValue(this.area.value.toString());
      this.eventForm.controls['eventLanguage'].setValue(this.languages.value.toString());
    }

  }
  submitData() {
    console.log("Data is ", this.eventForm.value)
    this._service.insertEvent(this.eventForm.value).subscribe(res => {
      console.log("data is inserted")
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Event details has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.resetData();
    })
  }

  resetData() {
    this.eventForm.reset();
    this.languages.reset();
    this.area.reset();
  }




}
