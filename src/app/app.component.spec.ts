import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MockComponents, MockModule } from 'ng-mocks';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        MockModule(MainModule),
        MockComponents(HeaderComponent, HeroComponent, MainComponent, FooterComponent),
        AppComponent,
      ],
      providers: [provideRouter([])],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
