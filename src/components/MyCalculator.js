 import React,{useState} from "react";


const MyCalculator = ()=>{
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  //const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateInputs = () => {

    if (num1==="" && num2==="") {
      
      setError("Both fields are required");
      
      return false;
    }

    if(num1===""){
      setError("Num 1 can not be Empty");
      
      return false;
    }
   if(num2==="")
    {

      setError("Num 2 can not be Empty");
      
      return false;
    }
   
    if (!/^-?\d*\.?\d*$/.test(num1) || !/^-?\d*\.?\d*$/.test(num2)) {
   
      setError("Please enter valid numbers");
      return false;
    }

    setError("");
  
    return true;
  };

  const performOperation = (operator) => {
    //setOperation(operator);

    if (validateInputs()) {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);

      switch (operator) {
        case "+":
          setResult(number1 + number2);
          break;

        case "-":
          setResult(number1 - number2);
          break;

        case "*":
          setResult(number1 * number2);
          break;

        case "/":
          if (number2 === 0) {
            setError("Division by zero is not allowed");
            setResult("");
          } else {
            setResult(number1 / number2);
          }
          break;
        default:
          setResult("");
      }
      setSuccess("Success!");

    } else {
      setResult("");
    }
  };


  return(
    <div className="calculator">

      <h1>React Calculator</h1>

      <div className="input-fields">
        <input
          type="text"
          placeholder="Num 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Num 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      
      <div className="buttons">

        <button className="oper-buttons" onClick={() => performOperation("+")}>+</button>

        <button className="oper-buttons" onClick={() => performOperation("-")}>-</button>

        <button className="oper-buttons" onClick={() => performOperation("*")}>*</button>

        <button className="oper-buttons" onClick={() => performOperation("/")}>/</button>
      </div>
      {error && <div className="error">Error!</div>}
      {error && <div className="Result-field">{error}</div>}
      
      
      {result !== "" && (

        <div className="Result-field">

          {success && <div className="success">{success}</div>}
         
          Result: {result} 
        </div>
      )}
      
    </div> 
   );
  }
 export default MyCalculator;