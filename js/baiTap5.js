let arr1 = [];
let addarr1 = prompt("nhập mảng 1:");
arr1 = addarr1.split("");
let arr2 = [];
let addarr2 = prompt("nhập mảng 2:");
arr2 = addarr2.split("");
let dem = 0;
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] == arr1[i]) {
            dem++;
            break;
        }
    }
}
if (dem != 0) {
    alert("Giống");
} else {
    alert("không giống")
}