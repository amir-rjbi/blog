import {FetchApi} from "../utilities/CustomFetchApi"
import {UsersFilterResult} from "../models/ApiUserGet"
import {postuser} from "../models/ApiUserPost"


export function GetUser(
   
  ): Promise<UsersFilterResult>{
    return FetchApi("/user", {
        method: "Get",
        query: { pageId: 1, take: 10 }
    });
  }

export function PostUser(
  command: postuser
  ){
    return FetchApi("/user", {
        method: "Post",
        body: command,
    });
  }
  
