import React from 'react'
import "./passwordGenerator.css" 

export default function PasswordGenerator() {

    // const uppercaseEl = document.getElementById('uppercase')
    // const lowercaseEl = document.getElementById('lowercase')
    // const numbersEl = document.getElementById('numbers')
    // const symbolsEl = document.getElementById('symbols')
    // const resultEl = document.getElementById('result')
    // const lengthEl = document.getElementById('length')
    // const generateEl = document.getElementById('generate')
    // const clipboardEl = document.getElementById('clipboard')

    // const randomFunc = {
    //     lower: getRandomLower,
    //     upper: getRandomUpper,
    //     numbers: getRandomNumber,
    //     symbols: getRandomSymbol
    // }

    // clipboardEl.addEventListener('click', () => {
    //     const textarea = document.createElement('textarea')
    //     const password = resultEl.innerText

    //     if(!password) { return }

    //     textarea.value = password
    //     document.body.appendChild(textarea)
    //     textarea.select()
    //     document.execCommand('copy')
    //     textarea.remove()
    //     alert('Password copied to clipboard!')
    //     // copy is like click. Its an order that is already known.
    // })

    // generateEl.addEventListener('click', () => {
    //     const length = +lengthEl.value
    //     // value are open to interpret booleans, strings, arrays, numbers.
    //     const hasLower = lowercaseEl.checked
    //     const hasUpper = uppercaseEl.checked
    //     const hasNumber = numbersEl.checked
    //     const hasSymbol = symbolsEl.checked
        
    //     resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
    // })

    // function generatePassword(lower, upper, numbers, symbols, length) {
    //     let generatedPassword = ''
    //     const typesCount = lower + upper + numbers + symbols
    //     const typesArray = [{lower}, {upper}, {numbers}, {symbols}].filter(item => Object.values(item)[0])
    //     // filter(item => Object.values(item)[0] gets rid of information that presents a false value.)
        
    //     if(typesCount === 0) {
    //         return ''
    //     }

    //     for(let i = 0; i < length; i += typesCount) {
    //         // i += typesCounts. Increments until it equals the typesCount which is set to 20 currently.
    //         typesArray.forEach(type => {
    //             const funcName = Object.keys(type)[0]
    //             generatedPassword += randomFunc[funcName]()
    //         })

    //     }
    //     const finalPassword = generatedPassword.slice(0,length)

    //     return finalPassword
    // }

    // function getRandomLower() {
    //     return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    //     // fromCharCode - method returns a string created from the specified sequence of UTF-16 code unites.
    //     // refering to character sets from w3schools will be crucial.
    // }

    // function getRandomUpper() {
    //     return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    // }

    // function getRandomNumber() {
    //     return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    // }

    // function getRandomSymbol() {
    //     const symbols = '!@#$%^&*(){}[]=<>,.'
    //     return symbols[Math.floor(Math.random()*symbols.length)]
    // }



  return (
    <div className="passwordGeneratorContainer">
        <div className="passwordContainer">
            <h2>Password Generator</h2>
            <div className="result-container">
                <span id="result"></span>
                <button className="btn" id="clipboard">
                    <i className="far fa-clipboard"></i>
                </button>
            </div>
            <div className="settings">
                <div className="setting">
                    <label className="countStyle">Password Length</label>
                    <input className="countStyleInput" type="number" id="length" min="4" max="20" value="20" />
                </div>
                    <h2>Include</h2>

                <div className="checkboxRow">
                    <div className="setting flexItems">
                        <label>Uppercase</label>
                        <input className="checkboxStyle flexItems" type="checkbox" id="uppercase" checked />
                    </div>
                    <div className="setting flexItems">
                        <label>Lowercase</label>
                        <input className="checkboxStyle flexItems" type="checkbox" id="lowercase" checked />
                    </div>
                </div>

                <div className="checkboxRow flex">
                    <div className="setting flexItems">
                        <label>Numbers</label>
                        <input className="checkboxStyle" type="checkbox" id="numbers" checked />
                    </div>
                    <div className="setting flexItems">
                        <label>Symbols</label>
                        <input className="checkboxStyle" type="checkbox" id="symbols" checked />
                    </div>
                </div>
            </div>
            <button className="btn btn-large" id="generate">
                    Generate Password
            </button>
        </div>
     </div>
  )
}