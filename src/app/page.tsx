"use client"
import { useState } from 'react'
import Test from './components/Test'
import styles from './page.module.css'

export default function Home() {
  const [num1, setNum1] = useState("")
  const [op, setOp] = useState("")
  const [num2, setNum2] = useState("")
  const [result, setResult] = useState("")

  function setNumber(num: string) {
    if (op == "") {
      setNum1(num1 + num)
    }else {
      setNum2(num2 + num)
    }
  }

  function setOperation(operation: string) {
    if (num1 == "") return
    if (num1 && num2) return

    setOp(operation)
    
  }

  function clear() {
    setNum1("")
    setOp("")
    setNum2("")
    setResult("")
  }

  function getResult() {
    if(num1 == "") return
    setResult(eval(`${num1} ${op} ${num2}`))

  }




  return (
    <main className={styles.main}>
      <div className={styles.visor}>
        {num1} {op} {num2} {result==""? "" : ` = ${result}`}
      </div>

      <div className={styles.buttonRow}>
        <button onClick={() => setNumber('1')} className={styles.numericButton}>1</button>
        <button onClick={() => setNumber('2')} className={styles.numericButton}>2</button>
        <button onClick={() => setNumber('3')} className={styles.numericButton}>3</button>
        <button onClick={() => setNumber('4')} className={styles.numericButton}>4</button>
        <button onClick={() => setNumber('5')} className={styles.numericButton}>5</button>
      </div>
      <div className={styles.buttonRow}>
        <button onClick={() => setNumber('6')} className={styles.numericButton}>6</button>
        <button onClick={() => setNumber('7')} className={styles.numericButton}>7</button>
        <button onClick={() => setNumber('8')} className={styles.numericButton}>8</button>
        <button onClick={() => setNumber('9')} className={styles.numericButton}>9</button>
        <button onClick={() => setNumber('0')} className={styles.numericButton}>0</button>
      </div>
      <div className={styles.buttonRow}>
        <button onClick={() => setOperation('+')} className={styles.operationButton}>+</button>
        <button onClick={() => setOperation('-')} className={styles.operationButton}>-</button>
        <button onClick={() => setOperation('/')} className={styles.operationButton}>÷</button>
        <button onClick={() => setOperation('*')} className={styles.operationButton}>x</button>
        <button onClick={() => getResult()} className={styles.operationButton}>=</button>
        <button onClick={() => clear()} className={styles.operationButton}>C</button>
      </div>
    
    
    
    
    
    
    
    
    </main>
  )
}
