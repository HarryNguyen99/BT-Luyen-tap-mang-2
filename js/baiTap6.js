let arr1 = [];
let addarr1 = prompt("nhập mảng:");
arr1 = addarr1.split("");
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == "-") {
        arr1[i] = "_";
    }
}
let a = arr1.join("");
alert(a);