import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  todoForm: FormGroup;

  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      title: [''],
      description: ['']
    });
  }

  onSubmit() {
    if (!this.todoForm.valid) {
      return false;
    } else {
      this.crudService.create(this.todoForm.value)
      .then(() => {
        this.todoForm.reset();
        this.router.navigate(['/folder/database/list']);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

}