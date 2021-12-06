<script>
import Accordion from '$lib/Accordion.md';
import Button from '$lib/Button.svelte';
let sideSize, diamond, messages = "";
let errormessage = "Woah! Side size must be an integer between 2 and 10 (inclusive).";
const getSize = () => {
    (Number.isNaN(sideSize) || sideSize < 2 || sideSize > 10 || sideSize - Math.floor(sideSize) != 0 ) 
        ? ( messages = errormessage, diamond = "" )
        : drawSquare(sideSize);
}

const drawSquare = () => {
    messages = "";
    for (let i = 1; i <= sideSize; i++) {
        ( i == 1 || i == sideSize)
            ? messages += `${"*".repeat(sideSize)}`
            : messages += `*${"&nbsp".repeat( sideSize - 2 )}*`;
         messages += "<br>"; 
    }
    diamond = "diamond";
}

const reset = () => {
    messages = diamond = "";
};
</script>

### Extra Credit: Generating ASCII Art

<Accordion>

Create a webpage that contains a script that reads in the size of the side of a square and displays a hollow square of that size constructed of asterisks. Your script should work for squares only for side sizes between 2 and 10 inclusive. Display an error message if the user enters any number that is not between 2 and 10 and, of course, **DO NOT PRESENT THE SQUARE**. Be sure that the output looks like a square. A common error is having the top and bottom row of asterisks appear to be smaller than the sides. [Hint: use nested while or for statements and use a monospaced CSS style for the output.]

</Accordion>

Enter a side size below to generate a square made out of asteriskesessses...<br>
<br>
<br>

<div class="row">
<div class="one-half column">
<div class="{diamond}">{@html messages}</div>
<br>
</div>
<div class="one-half column">
<label for="sideSize">Side Size:</label><br><input type="number" bind:value={sideSize} min="2" max="10" step="1" required><br>
<span class="button-row">
<Button type="submit" click={ getSize }/>
<Button type="reset" click={ reset }/>
</span>
<br>
</div>
</div>

<style lang="sass">
.diamond 
    font-family: 'Courier New', Courier, monospace !important
    font-size: xx-large !important
    font-weight: 600 !important
    line-height: 60% !important
    color: #33c3f0
    text-align: center

</style>
