import Component,{tracked} from '@glimmer/component';

export default class BooksComponent extends Component {
@tracked booked;
@tracked returned;
@tracked listbooks;
@tracked bookingcount=0;
@tracked books=[
     {
       name:"Engineering maths",
       year:"1997",
       author:"John",
       count:10
     },
     {
       name:"Engineering Science",
       year:"1996",
       author:"John rix",
       count:9
     },
     {
       name:"Electrical machines",
       year:"1996",
       author:"John bosh",
       count:8
     },
     {
       name:"Circuit theory",
       year:"1999",
       author:"John quin",
       count:7
     },
     {
       name:"Computer science",
       year:"1987",
       author:"John kew",
       count:6
     },
     {
       name:"Java",
       year:"1887",
       author:"John mere",
       count:5
     },
     {
       name:"Fundamendal science",
       year:"1897",
       author:"John raj",
       count:4
     },
     {
       name:"Profits",
       year:"1997",
       author:"John mitchell",
       count:5
     },
     {
       name:"Good man",
       year:"1997",
       author:"John roy",
       count:6
     },
     {
       name:"Philosophy",
       year:"1997",
       author:"John ville",
       count:7
     }

];
@tracked assignedbooks=[];
@tracked returnedbooks=[];
book(){
this.booked=true;
this.returned=false;
this.listbooks=false;
}
return(){
this.booked=false;
this.returned=true;
this.listbooks=false;
}
list(){
this.booked=false;
this.returned=false;
this.listbooks=true;
}
assignbook(book){
if( this.assignedbooks.length <= 2){
 let assignedbooks=[
    ...this.assignedbooks,{
      name:book.name,
      year:book.year,
      author:book.author,
      bookingid:this.bookingcount
    }
  ];
  this.assignedbooks=assignedbooks;
  let books=this.books.map((bookit)=>{
     if(bookit.name === book.name)
     return Object.assign(bookit, { count:bookit.count -1,    });
     else
     return bookit;
  });
   this.books=books;
   this.bookingcount++;
}
else
   alert('You have 3 books...Please return any one to get new');
}
returnbook(book){
    let assignedbooks=this.assignedbooks.filter((bookit)=>{
       return bookit.bookingid !== book.bookingid;
    });
    this.assignedbooks=assignedbooks;
    let returnedbooks=[
       ...this.returnedbooks,{
         name:book.name,
         year:book.year,
         author:book.author,
       }
     ];
     this.returnedbooks=returnedbooks;
     let books=this.books.map((bookit)=>{
        if(bookit.name === book.name)
        return Object.assign(bookit, { count:bookit.count +1,    });
        else
        return bookit;
     });
      this.books=books;

}


};
