
export const incrementSearchParams = (currentPage:number ,totalPages:number,typeOfData:string) =>{
    return (currentPage+1).toString();
}
 export const decrementSearchParams = (currentPage:number,totalPages:number,typeOfData:string) =>{
     if(currentPage !== 1){
         return (currentPage-1).toString();
     } return 1
}

export const pagination ={
    isDisabledDec: (totalPages:number,currentPage:number,typeOfData:string) =>{
        let isDisabled = false;
        switch (typeOfData){
            case 'movies' :{
                if(currentPage === 1){
                    return  isDisabled = true;
                }
                break;
            }
            case 'moviesByGenre':{
                if(currentPage === 1){
                    return  isDisabled = true;
                }
                break;
            }
            default:{
                return isDisabled
            }
        }
        console.log(isDisabled);
    },
    isDisabledInc: (totalPages:number,currentPage:number,typeOfData:string) =>{
        let isDisabled = false;
        switch (typeOfData){
            case 'movies' :{
                if(currentPage * 20 >= totalPages){
                    return isDisabled = true;
                }
                break;
            }
            case 'moviesByGenre':{
                if(currentPage * 20 >= totalPages){
                    return isDisabled = true;
                }
                break;
            }
            default:{
                return isDisabled
            }
        }
        console.log(isDisabled);
    }
}