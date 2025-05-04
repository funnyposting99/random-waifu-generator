function purityCheck(randomIndex){

    if (current_franchise == 0){
        while ((rollCount[current_franchise] < 1 && [4, 11, 13, 14, 16, 23, 37, 43, 53].includes(randomIndex)) 
            || (rollCount[current_franchise] < 3 && [17, 22, 26, 27, 28, 44].includes(randomIndex))
            || (rollCount[current_franchise] < 5 && [42, 59].includes(randomIndex))) {
                randomIndex = getRandomInt(1, totalImages);
            }
        
        if (rollCount[current_franchise] > 30 && [17, 19, 38, 42, 47].includes(randomIndex)){
            acceptImage();
        }    
    }


    if (current_franchise == 1){
        while ((rollCount[current_franchise] < 1 && [3, 37, 42, 47, 93, 97, 103, 137, 138, 147, 151, 163, 178, 180, 183, 208, 230].includes(randomIndex))
            || (rollCount[current_franchise] < 2 && [22, 105, 190, 223].includes(randomIndex))
            || (rollCount[current_franchise] < 3 && [27, 90, 99, 227, 239].includes(randomIndex))
            || (rollCount[current_franchise] < 5 && [35, 158, 194, 229].includes(randomIndex))
        ){
            randomIndex = getRandomInt(1, totalImages);
        }

        if (rollCount[current_franchise] > 30 && [77, 158, 164, 209, 240].includes(randomIndex)){
            acceptImage();
        }
    }


    if (current_franchise == 2){ //22, 42, 79
        while ((rollCount[current_franchise] < 1 && [10, 32, 58, 62, 71, 75, 76, 87, 100, 105, 111, 131, 137].includes(randomIndex)) 
            || (rollCount[current_franchise] < 2 && [122].includes(randomIndex))
            || (rollCount[current_franchise] < 3 && [23, 33, 82, 135, 22, 42, 79].includes(randomIndex))
            || (rollCount[current_franchise] < 4 && [20].includes(randomIndex))
            || (rollCount[current_franchise] < 5 && [45, 63, 65, 77, 96, 123].includes(randomIndex))
            || (rollCount[current_franchise] < 10 && [12, 18, 17, 43, 55, 84, 98, 105, 115, 110, 119].includes(randomIndex))
            || (rollCount[current_franchise] < 30 && [30, 35, 44, 50, 60, 72, 74, 83, 108, 126, 139].includes(randomIndex))
            || (rollCount[current_franchise] > 50 && ![30, 35, 44, 50, 60, 72, 74, 83, 108, 126, 139].includes(randomIndex))
        ) {
            randomIndex = getRandomInt(1, totalImages);
        }

        if (rollCount[current_franchise] > 80){
            randomIndex = 50;
        }
        if (rollCount[current_franchise] > 30 && [4, 37, 45, 64, 124].includes(randomIndex)){
            acceptImage();
        }
    }
    return randomIndex;
}

function generateMessage(randomIndex){
    
    if (current_franchise == 0){
        if (rollCount[current_franchise] > 30 && [17, 19, 38, 42, 47].includes(randomIndex)){
            return " married this waifu by forced!";
        } else{
            return " married this waifu!";
        }
    }

    if (current_franchise == 1){
        if (rollCount[current_franchise] > 30 && [77, 158, 164, 209, 240].includes(randomIndex)){
            return " married this waifu by forced!";
        } else{
            return " married this waifu!";
        }
    }

    if (current_franchise == 2){
        if (rollCount[current_franchise] > 30 && [4, 37, 45, 64, 124].includes(randomIndex)){
            return " married this waifu by forced!";
        }else if(randomIndex === 4){
            return " was killed for marrying this waifu!"
        } else{
            return " married this waifu!";
        }
    }
}

