import { TestBed } from '@angular/core/testing';
import { DreamsListComponent } from './dreams-list.component';

describe('DreamsListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreamsListComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DreamsListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'dreams' title`, () => {
    const fixture = TestBed.createComponent(DreamsListComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dreams');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DreamsListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, dreams'
    );
  });
});
