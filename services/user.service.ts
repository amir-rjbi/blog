import { editUser } from './../models/ApiUserPut';
import {FetchApi} from "../utilities/CustomFetchApi"
import {User, UsersFilterResult,take} from "../models/ApiUserGet"
import {postuser} from "../models/ApiUserPost"



export function GetUser(
  command:take
  ): Promise<UsersFilterResult>{
  
    return FetchApi("/user", {
        method: "Get",
        query: command
    })
  }
 
export function PostUser(
  command: postuser
  ){
    return FetchApi("/user", {
        method: "Post",
        body: command,
    });
  }
  
  export function EditUser(
    command: editUser
    ){
      return FetchApi("/user", {
          method: "Put",
          body: command,
      });
    }
    
    export function GetUserById(
   userId:Number
      ): Promise<User>{
      
        return FetchApi(`/user/${userId}`, {
            method: "Get",
            
        })
      }