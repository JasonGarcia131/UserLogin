export const handlePaginate = (buttonId, api, page) => {

    switch(buttonId){
        case "previous" :
            api(page.previous?.page);
            break;
        case "next" : 
            api(page.next?.page);
            break;
        default :         console.log(`clicked ${buttonId}`)

    }
    
}