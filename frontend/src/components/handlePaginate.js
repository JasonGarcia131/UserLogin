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

//infinite scroll pagination function
export const handleInfiniteScroll = (api, page) => {
    api(page.next?.page);
}
