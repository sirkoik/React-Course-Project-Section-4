import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  minLength = 5;
  keyCounter = -1;

  state = {
    outputText: '',
    textLength: 0,
    outputChars: []
  }

  characterHandler = (event) => {
    const chars = event.target.value;
    const charsAsArray = event.target.value.split('');

    const outputChars = charsAsArray.map((character, index) => {
      this.keyCounter++;

      return {
        // key: "charKey" + new Date().getTime() + '' + Math.floor(Math.random() * 1e6),
        key: this.keyCounter,
        character: character
      };
    });

    this.setState({
      outputText: chars,
      outputChars: outputChars,
      textLength: chars.length
    });
  }

  characterClickHandler = (event, key) => {
    const index = this.state.outputChars.findIndex((character) => {
      return character.key === key;
    });

    const copiedOutputText = this.state.outputText.split('');
    copiedOutputText.splice(index, 1);

    const copiedChars = [...this.state.outputChars];
    copiedChars.splice(index, 1);

    this.setState({
      outputText: copiedOutputText.join(''),
      outputChars: copiedChars,
      textLength: copiedChars.length
    });
  }

  render() {
    let outputCharsHtml = null;
    console.log(this.state.outputChars);

    //if (this.state.textLength >= this.minLength) {
      outputCharsHtml = this.state.outputChars.map((character, index) => {
        return <CharComponent key={character.key} onClick={(event) => {this.characterClickHandler(event, character.key)}}>{character.character}</CharComponent>;
      });
      
      outputCharsHtml = <div>{outputCharsHtml}</div>;
    //}

    return (
      <div className="App">
        <input type="text" onChange={this.characterHandler} value={this.state.outputText}/>
        <p>Length of input string: {this.state.textLength}</p>

        <ValidationComponent textLength={this.state.textLength} minLength={this.minLength} />

        {outputCharsHtml}

        <div className="instructions">
          <p>Instructions</p>
          <ol>
            <li> Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
            <li> Create a new component (=&gt; ValidationComponent) which receives the text length as a prop</li>
            <li> Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            <li>Create another component (=&gt; CharComponent) and style it as an inline box (=&gt; display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
            <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
            <li>When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
          <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        </div>
      </div>
    );
  }
}

export default App;
