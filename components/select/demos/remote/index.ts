import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-select [filterable]="true" [filter]="filter" ($change-keywords)="search($event)">
            <k-option *ngFor="let value of users; index as key" 
                [value]="value.login.username"
            >{{ value.name.first }} {{ value.name.last }}</k-option>
        </k-select>
    `,
})
export class AppDemoComponent {
    private users = [];
    private lastFetchId = 0;

    filter = () => true;
    
    search([select, keywords]) {
        console.log(keywords);
    
        if (!keywords) return;
    
        const fetchId = ++this.lastFetchId
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(body => {
                if (fetchId !== this.lastFetchId) return;
                this.users = body.results;
            });
    }
}