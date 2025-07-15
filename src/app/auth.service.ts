import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) {}  // ✅ Inject Router service
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let loggedIn = false;

    if (loggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);  // ✅ Use navigate() on Router
      return false;
    }
  }
}
