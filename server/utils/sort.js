function genericSort(a, b) {
    if (a < b)
        return -1;
    else if (a > b)
        return 1;
    else
        return 0;
}

module.exports = {
    sortByTitle: function (a, b) {
        const titleA = a.Title.toLowerCase();
        const titleB = b.Title.toLowerCase();
        return genericSort(titleA, titleB);
    },
    sortByGross: function(a, b) {
        const grossA = parseFloat(a.Gross.replace("¥", ""));
        const grossB = parseFloat(b.Gross.replace("¥", ""));
        return genericSort(grossA, grossB);
    },
    sortByType: function(a, b) {
        if (isNaN(a)) {
            const strA = a.toLowerCase();
            const strB = b.toLowerCase();
            return genericSort(strA, strB);
        } else {
            const numA = parseFloat(a);
            const numB = parseFloat(b);
            return genericSort(numA, numB);
        }
    }
};