var numList = []

if (localStorage.getItem('numList')) {
    numList = JSON.parse(localStorage.getItem('numList'))
}
document.getElementById('inputNum').focus()

document.getElementById('numberList').innerHTML = numList

function addNum() {
    numList.push(document.getElementById('inputNum').value * 1)
    document.getElementById('numberList').innerHTML = numList
    localStorage.setItem('numList', JSON.stringify(numList))
    document.getElementById('formInput').reset()
    document.getElementById('inputNum').focus()
}

function delNum() {
    numList.pop()
    document.getElementById('numberList').innerHTML = numList
    localStorage.setItem('numList', JSON.stringify(numList))
    document.getElementById('formInput').reset()
    document.getElementById('inputNum').focus()
}

function tongSoDuong() {
    var sum = 0
    for (var i = 0; i < numList.length; i++) {
        if (numList[i] % 2 == 0) {
            sum += numList[i]
        }
    }
    document.getElementById('result').innerHTML = `Tổng số dương là: ${sum}`
}

function demSoAm() {
    var count = 0
    for (var i = 0; i < numList.length; i++) {
        if (numList[i] < 0) {
            count += 1
        }
    }
    document.getElementById('result').innerHTML = `Có ${count} số âm`
}

function timSoNhoNhat() {
    var min = numList[0]
    for (var i = 0; i < numList.length; i++) {
        if (numList[i] < min) {
            min = numList[i]
        }
    }
    document.getElementById('result').innerHTML = `Số nhỏ nhất là: ${min}`
}

function timSoDuongNhoNhat() {
    var min = Infinity
    for (var i = 0; i < numList.length; i++) {
        if (numList[i] < min && numList[i] > 0) {
            min = numList[i]
        }
    }
    var result = ``
    if (min == Infinity) {
        result = `Không có số dương trong mảng`
    } else {
        result = `Số dương nhỏ nhất là: ${min}`
    }
    document.getElementById('result').innerHTML = result
}

function timSoChanCuoiCung() {
    var num = -1
    for (var i = 0; i < numList.length; i++) {
        if (numList[i] % 2 == 0) {
            num = numList[i]
        }
    }
    var result = `Số chẵn cuối cùng trong mảng là : ${num}`
    document.getElementById('result').innerHTML = result
}

function doiViTri() {
    var pos1 = document.getElementById('pos1').value * 1
    var pos2 = document.getElementById('pos2').value * 1
    var temp = numList[pos1]
    numList[pos1] = numList[pos2]
    numList[pos2] = temp
    document.getElementById('numberList').innerHTML = numList
    localStorage.setItem('numList', JSON.stringify(numList))
    var result = `Mảng sau khi đổi vị trí : ${numList}`
    document.getElementById('result').innerHTML = result
}

function sapXepTangDan() {
    var numList1 = [...numList]
    for (var i = 0; i < numList1.length; i++) {
        for (var j = i + 1; j < numList1.length; j++) {
            if (numList1[i] > numList1[j]) {
                var temp = numList1[i]
                numList1[i] = numList1[j]
                numList1[j] = temp
            }
        }
    }
    var result = `Mảng sau khi sắp xếp: ${numList1}`
    document.getElementById('result').innerHTML = result
}

function timSNTDauTien() {
    var num = -1
    for (var i = 0; i < numList.length; i++) {

        if(numList[i]==2){
            num=2
            break
        }

        var x = Math.sqrt(numList[i])+1

        if(!x){
            continue
        }

        var flag=1

        for (var j = 2; j < x; j++) {
            if( numList[i]%j==0){
                flag=0
                break
            }
        }

        if(flag==1){
            num=numList[i]
            break
        }
    }
    var result = `Số nguyên tố đầu tiên là: ${num}`
    document.getElementById('result').innerHTML = result
}

function demSoNguyen() {
    var count=0
    for (var i = 0; i < numList.length; i++) {
        if(numList[i]%1==0){
            count+=1
        }
    }
    var result = `Có ${count} số nguyên trong mảng`
    document.getElementById('result').innerHTML = result
}

function soSanh() {
    var countAm=0
    var countDuong=0
    for (var i = 0; i < numList.length; i++) {
        if(numList[i]>0){
            countDuong+=1
        }else if(numList[i]<0){
            countAm+=1
        }
    }
    if(countAm == countDuong){
        var soSanh = `bằng`
    } else if (countAm < countDuong){
        var soSanh = `ít hơn`
    }else{
        var soSanh = `nhiều hơn`
    }
    var result = `Có ${countAm} số Âm và ${countDuong} số Dương => số Âm ${soSanh} số Dương`
    document.getElementById('result').innerHTML = result
}