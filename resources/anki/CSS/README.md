# Anki Learning Decks

## Description

## How To Use

### Setup

- [Download](https://apps.ankiweb.net/) the anki program for your computer.
- When you install and open ANKI, you will see a 'Default' deck, you can rename this deck, or create a new one if you'd like.
  - _Some people like grouping all of their cards into one deck, others separate them out._

### Add A Card

- Open one of the decks and click "Add" near the top of the window.
  - _There are different formats for cards you can use. I've listed the two helpful types below to get you started._
- Enter your card info and click save.

### Study

- To study your card, click the "Study Now" button and it will give you your first question.
- When you think you have the answer, click `Show Answer` (Or just press the space bar).
- Select from the bottom how difficult it was (or whether you just got it wrong).
  - **again** means you didn't know it and need to review it again in a few minutes.
  - **good** means you got it, though it took some effort.
  - **easy** means you know this info really well. It felt effortless.

## Add A Shared Deck

You can view your decks, create cards, or even test from [ankiweb.net](https://ankiweb.net/decks/). There are also shared decks created by other users that you can add to your own.

We've created some starter [decks](https://github.com/Banno/ux-intern-onboarding/blob/master/resources/anki) in your resources folder. To add them to your decks just click `file > import` in the anki desktop app and find the `NAME_OF_DECK.apkg` file that you want.

You can either leave this as its own deck, or merge the new cards with another deck.

### Shared Decks

**CSS For Noobs**

A deck of basic CSS selectors and properties to get you rolling if you have very little expereince with CSS

## Basic Card Type

#### Input Fields

- **Category** This could be CSS, Javascript, Computer Science, whatever is helpful in keeping your thoughts organized.
- **Question** Make sure to give yourself enough data in the question that you can answer it, but not so much that it gives the answer away.
- **Answer** Keep your answers as concise and memorable as possible. Avoid a lot of jargon.
- **Notes** This section includes further comments about the piece of info, or links to helpful resources.

## Cloze Card Type

Cloze cards are like fill in the blank, they display the question as:

```
    [...] is a function that adds code to your array.
```

The answer would look like

```
    array.push(item) is a function that adds code to your array.
```

To create a cloze card, when you are adding a new question, click the `type` button in the upper left of the Anki window and scroll down till you get to `cloze`.

To add a `cloze answer` add `{{c1:}}` to your input field, then enter the text you want hidden.

```
    {{c1:array.push()}} is a function that adds code to your array.
```

That entry will come out as:

```
    [...] is a function that adds code to your array.
```

If you do use cloze, make sure to switch the card type back to basic if you want to add a new question using the basic type.

#### Input Fields

- **Category** This could be CSS, Javascript, Computer Science, whatever is helpful in keeping your thoughts organized.
- **Question** You can enter more than one cloze in this field, it will actually create a card for every `{{c1:your text here}}` that you create as long as you change the number to be `{{c2:your text here}}` or `{{c3:your text here}}`
- **Notes** This section includes further comments about the piece of info, or links to helpful resources.
