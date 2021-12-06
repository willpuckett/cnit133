<script>
  	import Accordion from '$lib/Accordion.md'
import Button from '$lib/Button.svelte';
let dollaz, hkd, cand, euro, yen, peso, results = "", smoky = "";

const process= () => {
const dollars = parseFloat(dollaz);
if ( isNaN(dollars) ) {
      results = ("Woah!!!! <br>You have entered invalid input.");
      hkd = cand = euro = yen = peso = ""; 
  } else {
      results = (""); 
      hkd = (dollars * 7.8).toFixed(2) ; 
      cand = (dollars * 1.31).toFixed(2) ; 
      euro = (dollars * 0.89).toFixed(2) ; 
      yen = (dollars * 108.38).toFixed(2) ; 
      peso = (dollars * 19.11).toFixed(2) ; 
  }
}
  const myFocus = () => {
   smoky = `smoky`;
  }
  const myBlur = () => {
   smoky = ``;
  }
const reset = () => {
  dollaz = hkd = cand = euro = yen = peso = results = "";
};
</script>

### Extra Credit: Monetary Exchange Rates

<Accordion>
The exchange rates for 1 U.S. dollar in July 2019 were:

|                  |        |
| :--------------- | -----: |
| Euro             |   0.89 |
| Canadian Dollar  |   1.31 |
| Hong Kong Dollar |   7.80 |
| Japanese Yen     | 108.38 |
| Mexican Peso     |  19.11 |

Create a web page containing a script that the user will input an amount in U.S. dollars and display in a table its equivalent in each of the above foreign currencies, rounded to 2 decimal places. The amounts should be shown aligned to the right (right justified). For example: an input of 10 U.S. dollars yields:

|                  |         |
| :--------------- | ------: |
| Euro             |    8.90 |
| Canadian Dollar  |   13.10 |
| Hong Kong Dollar |   78.00 |
| Japanese Yen     | 1083.80 |
| Mexican Peso     |  191.10 |

**Use jQuery to display 'Click to Show/Hide Instructions' above the table and upon clicking this then display 'The foreign exchange rates in July 2019' and 'Enter a dollar amount in the table below to see the corresponding foreign exchange values'. See this jQuery example: [Show/Hide Panel example](http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_toggle).**

I suggest using the following display:

Click to Show/Hide Instructions

Monetary Exchange Rates

| Currency        | Rate | Value |
| :-------------- | :--: | ----: |
| British Pound   |      |       |
| Canadian Dollar |      |       |
| Euro            |      |
| Japanese Yen    |      |       |
| Mexican Peso    |      |       |

**Enter Amount of U.S. Dollars**

Use jQuery to color the input text box to the right of 'Enter Amount of U.S. Dollars' when the user clicks in that box. For an example, see source code in: [https://hills.ccsf.edu/~cdasilva/cnit133/jquery8.html](https://hills.ccsf.edu/~cdasilva/cnit133/jquery8.html)

Note: that the above values for rates can be displayed as faded text within a grey box, by using the attribute of disabled in the form input statements. An alternative is to use the attribute of readonly, which will display the rates as normal text within a grey box.
</Accordion>

<Accordion>The foreign exchange rates in July 2019.<br>Enter a U.S. dollar amount in the table below to see the corresponding foreign exchange values.</Accordion>

<div class="row">
<div class="one-half column">

| Currency         |  Rate  |                                                                                                                                              Value |
| :--------------- | :----: | -------------------------------------------------------------------------------------------------------------------------------------------------: |
| U.S. Dollar      |   1    | <span class="{smoky}"><input type="number" bind:value={dollaz} step="0.01" on:keyup={process} on:focus={myFocus} on:blur={myBlur} required></span> |
| Hong Kong Dollar |  7.80  |                                                                                                    <input type="number" bind:value={hkd} readonly> |
| Canadian Dollar  |  1.31  |                                                                                                   <input type="number" bind:value={cand} readonly> |
| Euro             |  0.89  |                                                                                                   <input type="number" bind:value={euro} readonly> |
| Japanese Yen     | 108.38 |                                                                                                    <input type="number" bind:value={yen} readonly> |
| Mexican Peso     | 19.11  |                                                                                                   <input type="number" bind:value={peso} readonly> |

</div>
<div class="one-half column">
<br>
<span class="button-row">
<Button type="submit" click={ process }></Button>
<Button type="reset" click={ reset }></Button>
</span>
{@html results}
</div>
</div>

<style lang="sass">
.smoky
  background-color: whitesmoke !important
  
</style>
