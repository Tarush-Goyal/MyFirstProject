import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

temp=[1,2,2,1,3,3,3]
counter=[1,1,1,1,1,1,1]
removedArrayIndex=[]
newTemp=[]
clickMe(){
  this.newTemp=this.temp.filter((data,index,arr)=>
  {
if(arr.indexOf(data)!==index){
  this.counter[data]++;
}

if(arr.indexOf(data)===index){
  return data
}

}

);
console.log('removed',this.counter)
  console.log('without duplicates:',this.newTemp);



}

  ngOnInit(): void {
  }

}
