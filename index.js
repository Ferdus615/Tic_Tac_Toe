* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: crimson;
    min-height: 100vh;
    font-family: Helvetica;
  }
  
  .container {
    text-align: center;
  }
  
  h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    color: bisque;
  }
  
  .game-block {
    width: 150px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 7px;
    margin: 20px auto;
  
    padding-bottom: 20px;
  }
  
  .cell {
    width: 75px;
    height: 75px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: antiquewhite;
  }
  
  h2 {
    width: 150pxp;
    background-color: aliceblue;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    margin: 20px auto;
  }
  
  .btn {
    padding: 10px 20px;
    font-size: 1.1em;
    outline: none;
    background: transparent;
    border: 2px solid black;
    border-radius: 5px;
    background-color: bisque;
    transition: padding 0.25s;
  }
  .btn:hover {
    padding: 9px 19px;
  }
  .btn:active {
    padding: 11px 21px;
  }
  