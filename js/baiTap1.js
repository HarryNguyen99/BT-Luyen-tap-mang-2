let a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];
for (let i = 0; i < 5; i++) {
    document.write('hang ' + i+'<br>');
    for (let j = 0; j < 4; j++) {
        document.write(a[i][j]+'<br>');
    }
}