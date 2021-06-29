import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService, TODO } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  tasks: TODO[];

  constructor(private crudService: CrudService, private router: Router) {}

  ngOnInit() {
    this.crudService.getTasks().subscribe((res) => {
      this.tasks = res.map((t) => ({
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as TODO),
        }));
    });
  }

  todoList() {
    this.crudService.getTasks().subscribe((data) => {
      console.log(data);
    });
  }

  remove(id) {
    console.log(id);
    if (window.confirm('Are you sure?')) {
      this.crudService.delete(id);
    }
  }

  goToCreate() {
    this.router.navigate(['/folder/database/create']);
  }

}
