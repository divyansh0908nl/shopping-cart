import { baseUrl } from "../utils/baseUrl"



interface Product {
    id: string;
    name: string;
    image: string;
    unitPrice: number;
    quantity: number;
  }

export const getAllProducts = async () =>{
    let data:Product[] = [];
    try{
        const response = await fetch(`${baseUrl}api/products`);
        data = await response.json();
        console.log(data)
        return data;
    
    }catch (err){
        throw err
    }

}

export const addProduct = async (product: any) =>{
    try{
        const response = await fetch(`${baseUrl}api/products`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(product)
        });
        const data = await response.json();
        return data;
    
    }catch (err){
        throw err
    }

}