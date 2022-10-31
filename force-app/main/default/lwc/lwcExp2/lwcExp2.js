import { LightningElement,track} from 'lwc';

export default class LwcExp2 extends LightningElement {
    @track name;
    @track age;
    @track salary;

    
    nameHandler(event){
        this.name=event.tareget.value;
    }
    ageHandler(event){
        this.age=event.tareget.value;
    }
    salaryHandler(event){
        this.salary=event.tareget.value;
    }
}