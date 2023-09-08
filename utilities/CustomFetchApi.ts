
import  {FetchOptions} from "ohmyfetch"

export  async function FetchApi<T>(
    url: string,
    config:FetchOptions={}):Promise<T>{
        var customConfig={
            baseURL:"https://blog-api.codeyad-project.ir/api",
            ...config,
        };
         //@ts-ignore
return $fetch (url, customConfig);
    }
