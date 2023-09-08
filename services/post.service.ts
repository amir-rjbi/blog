import {FetchApi} from "../utilities/CustomFetchApi"
import {PostFilterResult,Post,Postpost,Putpost,FilterParams} from "../models/ApiPost"

export function GetPost(
  command:FilterParams
    ): Promise<PostFilterResult>{
    
      return FetchApi("/post", {
          method: "Get",
         query:command
      })
    }
    export function GetPostPopular(
       
           ): Promise<Post>{
           
             return FetchApi("/Post/popular", {
                 method: "Get",
                 
             })
           }
           export function GetPostById(
           postId:Number
               ): Promise<Post>{
               
                 return FetchApi(`/post/${postId}`, {
                     method: "Get",
                     
                 })
               }
             
               export function GetpostBySlug(
                slug:String
                    ): Promise<Post>{
                    
                      return FetchApi(`/post/getBySlug/${slug}`, {
                          method: "Get",
                          
                      })
                    }

  export function Postposts(
    command: Postpost
    ){
      return FetchApi("/post", {
          method: "Post",
          body: command,
      });
    }
    
    export function Editpost(
      command: Putpost
      ){
        return FetchApi("/post", {
            method: "Put",
            body: command,
        });
      }
      
      export function Deletepost(
       postId:Number
        ){
            return FetchApi(`/post/${postId}`, {
              method: "Delete",
             
          });
        }
        