import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/service.service';
import { User } from '../types/user.entity'
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  constructor(private testService: TestService) { }

  listData: any;
  User: User = {
    id: '',
    name: '',
    age: "",
    address: '',
  }

  ngOnInit(): void { this.get() }
  get() {
    this.testService.getAsset().subscribe((res: User) => { this.listData = res })
  }

  select(item: User) {
    this.User.id = item.id,
    this.User.name = item.name,
    this.User.age = item.age,
    this.User.address = item.address
  }
  handleAdd(): void {
    this.testService.addItem(this.User).subscribe(() => {
      this.get()
    })
  }
  handleDelete(id: String): void {
    this.testService.deleteItem(id).subscribe(() => {
      this.get()
    })
  }
  handleUpdate(): void {
    this.testService.updateItem(this.User, this.User.id).subscribe(() => {
      this.get()
    })
  }

}
