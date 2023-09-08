import {FetchApi} from "../utilities/CustomFetchApi"
import {getcom,postcom} from "../models/ApiComment"

export function GetComment(
    Postid:Number
    ): Promise<getcom>{
    
      return FetchApi("/comment", {
          method: "Get",
          query: {postId:Postid}
      })
    }
  


  export function PostComment(
    command: postcom
    ){
      return FetchApi("/comment", {
          method: "Post",
          body: command,
      });
    }

      
      export function DeleteComment(
        commentId:Number
        ){
            return FetchApi(`/comment/${commentId}`, {
              method: "Delete",
             
          });
        }
        