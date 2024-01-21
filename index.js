var calculate = [];
var x=0;

$('.numbers').on('click', function() {
    calculate[x] = (calculate[x] || 0) * 10 + parseInt($(this).text());
    console.log(calculate);
});


$('.operators').on('click', function() {
    x++;
    calculate[x] = $(this).text();
    x++;
    console.log(calculate);
});

function answer(operand1, operator, operand2){
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);
    switch(operator){
        case '+': return operand1+operand2;
        case '-': return operand1-operand2;
        case 'x': return operand1*operand2;
        case '/': return operand1/operand2;
        default: return "Error";
    }
}


$('.ans').on('click', function() {
    var currindex=0;
    var currans=0;

    while(currindex<x){
        if(currindex==0){
            var operand1=calculate[currindex];
            currindex++;
            var operator=calculate[currindex];
            currindex++;
            var operand2=calculate[currindex];
            currindex++;
            currans=answer(operand1, operator, operand2);
        }
        else{
            var operator=calculate[currindex];
            currindex++;
            var operand2=calculate[currindex];
            currindex++;
            currans=answer(currans, operator, operand2);
        }
    }
    $('.output').text(currans);
});


$('.clear').on('click', function() {
    calculate = [];
    x = 0;
    $('.output').text('');
    console.log(calculate);
});