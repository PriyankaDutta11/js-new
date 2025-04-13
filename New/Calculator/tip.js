const btnE1=document.getElementById("calculate");
const billInput=document.getElementById("Bill");
const tipInput=document.getElementById("Tip");
const totalSpan=document.getElementById("total");
const resultList= [];
let result= {
    billAmount: 0,
    tipPercent: 0,
    totalAmount: 0
}

function calculateTotal(){
    result = {
        billAmount: 0,
        tipPercent: 0,
        totalAmount: 0
    };

    //:::::: Priyanka's Code
    const billValue= +billInput.value;
    console.log(billValue);
    const tipValue= +tipInput.value;
    const totalValue=billValue * (1 + tipValue/100);
    console.log(totalValue);
    totalSpan.innerText=totalValue.toFixed(2);
    //:::::: Priyanka's Code end 

    result.billAmount = billValue;
    result.tipPercent = tipValue;
    result.totalAmount = totalValue

    resultList.push(result);
    generateTable();
    console.log("::::: Result Object :::: ", resultList)

}


function generateTable() {
    var tableElement = "";
    var divData = document.getElementById("dataDiv");

    for (var i = 0; i < resultList.length; i++) {
        tableElement = tableElement +  "<div class='container'><span>Bill Amount: " + resultList[i].billAmount + "</span> <br/><span>Tip Percentage: " + resultList[i].tipPercent + "</span> <br/><span>Total Amount: " + resultList[i].totalAmount + "</span> <br/></div>";
    }
    console.log("::::: HTML Elements :::: ", tableElement);
    divData.innerHTML = tableElement;
}



//btnE1.addEventListener("click",calculateTotal);