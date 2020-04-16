import { Subject } from 'rxjs';


export class SidenavToggle{
  private temp: boolean=false;
  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();

  toggleSidebarVisibility() {
        this.sidebarVisibilityChange.next(!this.temp);
    }

    updateState(event) {
      this.temp=event;
      this.sidebarVisibilityChange.next(this.temp);
    }
}
