import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService, TODO } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  editForm: FormGroup;
  id: any;

  constructor(
    private crudService: CrudService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getTask(this.id).subscribe((data: TODO) => {
      this.editForm = this.formBuilder.group({
        title: [data.title],
        description: [data.description],
      });
    });
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      title: [''],
      description: [''],
    });
  }

  onSubmit() {
    this.crudService.update(this.id, this.editForm.value);
  }
}
