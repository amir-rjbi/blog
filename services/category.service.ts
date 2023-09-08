import {FetchApi} from "../utilities/CustomFetchApi"
import {GetCat,PostCat,PutCat} from "../models/ApiCategories"

export function GetCategories(
   
    ): Promise<GetCat>{
    
      return FetchApi("/category", {
          method: "Get",
         
      })
    }
    export function GetCategoryById(
        categoryId:Number
           ): Promise<GetCat>{
           
             return FetchApi(`/category/${categoryId}`, {
                 method: "Get",
                 
             })
           }
           export function GetCategoryByParentId(
           ParentId:Number
               ): Promise<GetCat>{
               
                 return FetchApi(`/category/getChild/${ParentId}`, {
                     method: "Get",
                     
                 })
               }
             
               export function GetCategoryBySlug(
                slug:String
                    ): Promise<GetCat>{
                    
                      return FetchApi(`/category/getBySlug/${slug}`, {
                          method: "Get",
                          
                      })
                    }

  export function PostCategories(
    command: PostCat
    ){
      return FetchApi("/category", {
          method: "Post",
          body: command,
      });
    }
    
    export function EditCategories(
      command: PutCat
      ){
        return FetchApi("/category", {
            method: "Put",
            body: command,
        });
      }
      
      export function DeleteCategories(
        id:Number
        ){
            return FetchApi(`/category/${id}`, {
              method: "Delete",
             
          });
        }
        