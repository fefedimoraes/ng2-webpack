import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [AppComponent] });
    });

    it('should be created when using Create Component', () => {
        const fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent)
        .toBeTruthy('should create AppComponent');
    });
});