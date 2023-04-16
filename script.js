function formatDate(date) {
    let dateNow = Date.now(); 
    date = date.getTime();

    if(dateNow - date < 1000) {
        console.log("прямо сейчас");
    } else if(dateNow - date < 60000) {
        console.log((dateNow - date)/1000 + " сек. назад");
        }
        else if(dateNow - date < 3600000){
            console.log(((dateNow - date)/1000)/60 + " мин. назад");
            }
            else console.log(new Date());
}

