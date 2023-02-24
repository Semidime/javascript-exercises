const getTheTitles = function(array) {
    const titles = [];

    for (i = 0; i < array.length; i++) {
        titles.push(array[i].title);
        console.log(titles);
    }
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
