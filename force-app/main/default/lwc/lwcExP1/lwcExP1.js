import { LightningElement,track } from 'lwc';

export default class LwcExP1 extends LightningElement {
    @track greeting;
    changeHandler(event)
    {
        this.greeting=event.target.value;
    }
}