import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";



@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    
    async CanActivate(context: ExecutionContext) {
        console.log('login 3')
        const result = (await super.canActivate(context)) as boolean;
        const request = context.switchToHttp().getRequest();
        await super.logIn(request);
        console.log(result,'///')
        return result;


    }
}