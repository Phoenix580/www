function myFunction(){
    //Phoenix Gong Yiyang
    //1.Modifying HTML documents 2.Communicating with the server 3.Store the data
    let x = document.getElementById("userInput1").value;
    let y = document.getElementById("userInput2").value;
    let z =parseInt(x)+parseInt(y);
    document.getElementById("demo").innerHTML = z;
}