import Component,{ tracked } from '@glimmer/component';

export default class ContactComponent extends Component {
@tracked createnewcontact=false;
@tracked caneditcontact=false;
@tracked contactid=3;
@tracked temporary;
@tracked name='';
@tracked mobileno='';
@tracked email='';
@tracked id;
@tracked check=true;
@tracked contacts=[
   {
     name:"Kishore",
     mobileno:"9750839713",
     email:"kishoreyuvan@gmail.com",
     contactid:0
   },
   {
     name:"Sathik",
     mobileno:"9909088773",
     email:"sathikbasha@gmail.com",
     contactid:1
  },
  {
     name:"Kavin",
     mobileno:"9998877663",
     email:"kavinkumar@gmail.com",
     contactid:2
  }
];
addnewcontact(){
    if(this.createnewcontact === true)
    this.createnewcontact=false;
    else
    this.createnewcontact=true;
    this.caneditcontact=false;
    this.name='';
    this.mobileno='';
    this.email='';
}
update(name,e) {
    if(name ==="name")
    this.name = e.target.value;
    if(name ==="mobileno")
    this.mobileno = e.target.value;
    if(name ==="email")
    this.email = e.target.value;
    if((this.name !== '')&&(this.mobileno !== '')&&(this.email !== ''))
    this.check=false;
    else
    this.check=true;
    }
save(){

    let contacts=[
      ...this.contacts,
      {
        name:this.name,
        mobileno:this.mobileno,
        email:this.email,
        contactid:this.contactid
      }
    ];
  this.contacts=contacts;
  this.name='';
  this.mobileno='';
  this.email='';
  this.createnewcontact=false;
  this.check=true;
  this.contactid++;
  }
  deletecontact(contact){
       let contacts=this.contacts.filter((person)=>{return person.contactid !== contact.contactid});
       this.contacts=contacts;
       this.caneditcontact=false;
  }
  enableedit(contact){
       this.createnewcontact=false;
       this.caneditcontact=true;
       this.name=contact.name;
       this.mobileno=contact.mobileno;
       this.email=contact.email;
       this.id=contact.contactid;
  }
  edit(){
      let contacts=this.contacts.map((person)=>{
             if(person.contactid === this.id)
             return Object.assign(person,{  name:this.name, mobileno:this.mobileno, email:this.email,contactid:this.id  })
             else
             return person;
          });
    this.contacts=contacts;
    this.caneditcontact=false;
    this.check=true;
  }

};
