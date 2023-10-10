import { Transform } from "class-transformer";
import { IsString, MinLength } from "class-validator";

export class RegisterDto{

    
    @IsString()
    @MinLength(1)
    name: string;

    
    @IsString()
    username:string;
    
   
    @IsString()
    @MinLength(6)
    password: string;

}