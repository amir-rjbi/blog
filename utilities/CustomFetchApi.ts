
import  {FetchOptions} from "ohmyfetch"

export  async function FetchApi<T>(
    url: string,
    config:FetchOptions={}):Promise<T>{
        var customConfig={
            baseURL:"http://localhost:3000/api",
            ...config,
        };
         //@ts-ignore
return $fetch (url, customConfig);
    }
