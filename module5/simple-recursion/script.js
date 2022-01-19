function countdown(num) {

    // countdown(num) //recursion
    if(num > 0) {
        console.log(num)

        countdown(num - 1)
    }
}

countdown(10000);