import { SignedInGuard } from '@remult/core';
import { Injectable } from '@angular/core';



export const Roles = { 
    admin: 'admin'
}


@Injectable()
export class AdminGuard extends SignedInGuard {

    isAllowed() {
        return Roles.admin;
    }
}