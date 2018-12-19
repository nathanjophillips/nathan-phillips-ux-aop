## Principle

One of the most efficient ways to memorize, is to space your review of new items until you almost forget them.

This technique is called **spaced repetition learning.**

[A Quick Overview: Spaced Repetition In Learning Theory](https://www.youtube.com/watch?v=cVf38y07cfk)(YouTube)

### Almost Forgetting

If you learn something new, you will forget it in about six days.

If you wait until day five and then review the information, then it will stick a little longer, lets say 15 days. If you then review that information again 14 days later it will stick for 30 days. You get the point: each review just before forgetting pushes the information deeper into your memory.

They key here is that the most effective time to review is when you've almost forgot.

### Why We Tend To Cram: The "Feeling" of Cramming vs Spaced Repetition

Cramming information, sometimes called "blocking" or "mass practice", is deceptive. It makes you "feel" like you are learning quickly. And if you need to know something 24 hours from now, it works pretty well. The problem is that without review of that information, most of it will be lost within a few days.

Whereas cramming "feels" like its working. Spaced repetition "feels" like forgetting since you are in fact waiting until you have nearly forgotten the material to review it. [Here is a video of researcher Dr. Robert Bjork talking about these pressures to feel competent rather than do the hard work of gaining competence.](https://www.youtube.com/watch?v=gtmMMR7SJKw) It is a fight to remember that in the long run, people who used the slow and seemingly unimpressive approach of spaced repetition greatly outperformed those who used cramming techniques.

So when using the approach, you really have to ignore what "feels" right and lean into the pain.

### Remembering to Remember: Spaced Repetition Programs

The challenge of spaced repetition review is that you need a system to remember when to review what. This can get complex. Fortunately there are programs out there that automate the process for you. All you have to do is create your own flash cards and review them on a somewhat frequent basis. These programs will prioritize only the information you need to study based on your previous answer.

## For The Project

### Use A Spaced Repetition Program

As you work on your code, you will learn new skills in javascript, HTML, and CSS (often because of some weird problem you'll run into). Without any review of this new learning, you will forget most of your hard earned knowledge within 6 days. It's tempting in the moment to think about what you need to know today, but the process of learning, forgetting, and then having to completely relearn small items is horribly inneficient.

[ANKI](https://ankiweb.net) (and other programs like it) quizzes you on flashcards you create. You then grade yourself on how well you knew the information. Depending on how well you know the info, it brings that card up again more or less frequently. So you only spend time reviewing items that you need to review.

Create an account on ankiweb or brainscape. Dedicate a few minutes each day to reviewing your cards. And when you do something new, take a minute to add a new card to represent that chunk of knowledge.

If you develop the [habit](https://github.com/Banno/ux-intern-onboarding/blob/master/resources/learning-practices/habits.md), of entering new information and reviewing due cards daily, you will greatly increase your learning in the long run.

### An Example

Lets say you were writing a for loop and someone reviewing your code introduced you to the .forEach() function. Put that function and how to use it into ANKI.

Then lets say you implement that function and learn through trial and error that a return statement in a .forEach() function doesn't exit the parent function its in, it just exits the the .forEach() loop.

```js
function petKitty(animals) {
  let pettedKitty = {};

  cats.forEach(animal => {
    if ((animal.type = "kitty")) {
      pettedKitty = animal;

      // This only exits the .forEach function and petKitty() resumes executing the rest of its code
      return;
    }
  });

  console.log(pettedKitty.name); // 'Fluffykins'
}
```

This tidbit of information might not come up very often, but when it does you may experience some pain trying to figure out why your code is buggy.

But if you put it into your ANKI deck of flash cards, you will automatically be reminded of this quirk and won't have to rediscover it when it happens again.

### Settle In To Slow Learning

**Impostor syndrome**, if you haven't already run into it, is the overwhelming feeling that everyone else obviously knows everything and you don't belong here. Pretty much everyone goes through this. Combine this bad feeling with the feeling of competence that cramming can give you (not to mention the off putting pain of spaced repetition learning) and you're just going to have to fight the urge to skip on spaced repetition learning in order to put out fires or make yourself appear more impressive.

## Resources

[Spaced Repetition In Learning Theory](https://www.youtube.com/watch?v=cVf38y07cfk)(YouTube)
[Peter Bjork - Spacing Improves Long Term Retention](https://www.youtube.com/watch?v=TTo35X2rqls)(YouTube)
[Peter Bjork - Interleaving](https://www.youtube.com/watch?v=TTo35X2rqls)(YouTube)
