const calculateTemp=()=>{
    let numberTemp=document.getElementById("temp").value;
    // console.log(numberTemp)

    let tempSelected=document.getElementById("temp-diff");
    let valueTemp=tempSelected.options[tempSelected.selectedIndex].value;
    //console.log(valuesTemp)


    let celToFah=(cel)=>{
        let fahrenheit=Math.round((cel*9/5)+32);
        return fahrenheit;
    }
    let fahToCel=(fah)=>{
       let celsius =Math.round((fah-32)*5/9);
       return celsius;
    }


    let result;
     if(valueTemp=="cel"){
        result= celToFah(numberTemp);
        document.getElementById("resultContainer").innerHTML=`= ${result} °Fahrenheit`;
     }
     else{
        result= fahToCel(numberTemp);
        document.getElementById("resultContainer").innerHTML=`= ${result} °Celsius`;
     }
}