<style>
    .header {
        text-align: center;
        position: relative;
    }

    .header h1 {
        border-bottom: none;
        padding: 0;
        font-size: 2.5em;
        text-shadow: 0px 0px 5px  #72eadc;
        transition: text-shadow 2000ms linear;
        animation: shadow-puls 2s infinite alternate;
    }

    .header h4 {
        position: absolute;
        top: -20px;
    }

    @keyframes shadow-puls {
        0% {
            text-shadow: 0px 0px 5px #72eadc;
            transform: scale(.99);
        }
        100% {
            text-shadow: 0px 0px 30px #72eadc;
            transform: scale(1);
        }
    }
</style>


<!----------------------------------------------->

<div class='header'>

# Uppgift 2 - Dynamisk sida

#### **Skapad av:** _Jerry Olsson_

</div>



Besök den publicerade sidan [här](https://jerrychas.github.io/Uppgift-2---Dynamisk-sida/).

## Innehåll

1. **Presentation**
   <br/>En kort presentation om mig själv.

2. **CV**
   <br/>En sammanfattning av min professionella erfarenhet och utbildning.

3. **Portfolio**
   <br/>En samling av projekt jag har skapat.

## Interaktiva Script

### Modal Popup (Baserat på ett CodePen-projekt)

Jag har implementerat en interaktiv modal popup baserad på [detta CodePen-exempel](https://codepen.io/codejockie/pen/NBwjyd). Popupen används i portfolion för att visa mer information om projekten, samt länka till dess repository på GitHub.

### Dark Mode Switch (Eget script)

Jag har även skapat ett interaktivt script som möjliggör Dark Mode. Detta script ändrar färgschemat på hela sidan, vilket ger användarna möjlighet att anpassa upplevelsen efter sina preferenser.

## Workshop JS Code Jam

I [portfolion](portfolio.html) kan du hitta projekt som **gissa talet** eller **sten, sax, påse**, från Workshop JS code Jam som vi hade under en vecka i kursen Webbutveckling och Webbteknik

## Bidrag

Jag välkomnar bidrag och feedback från andra utvecklare. Om du vill bidra, vänligen skapa en pull request.
