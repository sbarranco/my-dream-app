import { TestBed } from '@angular/core/testing';
import { DreamsformComponent } from './dreams-form.component';

describe('DreamsformComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreamsformComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DreamsformComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'dreams' title`, () => {
    const fixture = TestBed.createComponent(DreamsformComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dreams');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DreamsformComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, dreams'
    );
  });
});
