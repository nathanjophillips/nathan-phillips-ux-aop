## Principle

Your brain is wired to process images. Close your eyes and imagine your childhood room. With almost no effort, your brain has built a complex scene with all sorts of toys, furniture, colors. And this is without any specific review or memorization of your room when you were a kid. You can also probably remember faces even though you've forgotten the names. Yet are typically trained from a young age to memorize things by wrote, using our short term memory.

## Spatial Memory

Memorize these letters in order:

`CCDFCCATAALDED`

Good luck, it's pretty challenging (and pointless).

Now picture the following in your house, take the time to visualize each one in vivid detail.

- `Two cows` in dresses are at your front room dancing
- A `dog` and a red `frog` are playing cards in the living room
- A `chicken` with a top hat and a very fat `cat` are in a sports booth offering commentary on the card playing
- In your kitchen are a pile of `aardvarks`. they are `all dead`.

Now attach the letters to the images:

- `C`ow `C`ow
- `D`og `F`rog
- `C`hicken `CAT`
- `A`rdvarks `AL`l `DE`a`D`

Now without looking, walk through the images. Write down the letters that go with the images as you go.

It is surprisingly easy to remember these strange pictures (and surprise yourself later by recalling them again at a random time), because your visual centers are far more powerful than your short term wrote memory. When you attach meaning to the images, suddenly remember the list is significantly easier (though in this case still pointless). Even if you missed a couple of letters, you likely got most of them. A couple of quick reviews and it gets locked in.

And its not only good for memorizing a pointless list of letters.

- Albert Einstein discovered relativity by imagining himself riding on a beam of light.

- Cicero and other Roman orators used a technique called Palace Of The Mind to memorize three hour speeches.

- You just used it to memorize a list of letters. Walk through the images again and see how simple it is to recall them.

## Metaphors

Images also allow you to process far more complexity through metaphors. Imagine a car. Wheels, motor, seats, air conditioning, passengers, road trips. These are all symbols that you can attach meaning to. Say you need to explain to someone what sort of code you use. If it's front end design you might say that if a site were a car you'd have the frame (HTML), a paint job and body pieces and windows that roll down (CSS), and then a motor and transmittion and axles that drive the car forward (Javascript).

Metaphors are roughly right (which means they can quickly get precisely wrong), but the point is to move your thinking into the image loving hippocampus to help you move through parts of the complexity easily.

## Practice

Operating from spatial memory will take some practice if you've never done anything like it before, but most people can imagine a space and move through it. And the more you use your spatial reasoning, the easier it will get.

## For the Project

### Draw the Problem

If you run into a hard problem with the flow of data in your program, it's very difficult to hold all the code of two functions in your mind and how they are interacting.

Instead, draw out the problem on a piece of paper. Use boxes for elements or functions and arrows to show the flow of data.

![A drawing of code broken into boxes with arrows showing the flow of data.](https://docs.banno.com/ux/intern-onboarding-project/resources/images/drawing-code.jpeg)

At a glance that seems jumbled, not to mention the parts where my writing gets a little sloppy. But consider the following:

- That drawing represents 8 functions totalling 50+ lines of code in three separate files which otherwise have no visible connection between them.
- The act of drawing out the flow of data forces you to think through the problem using your hippocampus, which we already said has a supercharged memory.
- The drawing gives you a representation to work inside of. As you program inside one of these functions, you can do a quick visual check of where this data is, or should be going. In fact, because of the power of spatial memory you can often know where on the drawing you are without even needing to look at it.

Don't worry about what you're drawing 'should' look like. Most of the benefit will come from simply putting pen to paper.

### Use Visual Metaphor

The combination of metaphor and spatial reasoning is a simple but powerful tool for interacting with a large amount of complexity.

What if you are trying to remember how the pieces of your whole project are communicating?

Maybe you've created an app that allows a user to check weather. How are you going to organize that?

Picture a flower. It has leaves, it has pollen, the petals connect to a hub thingy (I'm neither a florist nor a botanist). The leaves set below the flower and are connected to the stem. Its effortless to imagine.

Now fill in meaning for each of the peices.

- A `hummingbird` (user) can make a request and get some information (nectar).

- When the `hummingbird` (user) tries to get `nectar` (this weeks weather forecast in eastern Iowa), `pollen` (dispatched event) gets knocked loose.
- `Pollen` lands on the `leaves` (event listeners) which sense and tell the `roots` (database) to bring up `nutrients` (raw data) via the `stem` (api) to be converted into `nectar` (data in the format the user requested).

If you are a botanits, or a programmer, you'll notice a lot of possible holes in my metaphor. Leaves—as far as I know—don't 'sense' pollen. Nor do they notify the roots.

This is perfectly fine with metaphor. It only has to be a loose representation that accounts for _most_ of the information. The point is not to fill in all the details properly, the point is to use picture and story (sometimes fiction) to tap into a part of your brain that is better at handling complexity.

Using metaphor hijacks complexity that you already understand and applies it to another situation.

As you code, you will think about the fact that you are working on the `roots` and it connects to the `stem`, but not directly to the `flower`, so that dispatch event in the `roots` about to be picked up by the `flower` is probably not a great idea.

Its not always apparent at first what metaphor will work well, so be open to changing your metaphors as needed. But if you can find a good one, it will help you solve harder problems, make for stronger code and a happier you as you think about flowers all day.

### Bonus

Build a [mind palace](https://www.youtube.com/watch?v=mI96Ph-yHcA) and store your memories there. This takes some weekly effort, but once it is constructed it will completely change the way you store information.

## Resources

- ["Moonwalking With Einstein" by Joshua Foer](https://www.ted.com/talks/joshua_foer_feats_of_memory_anyone_can_do) (Book)

- [Joshua Foer: Feats of Memory Anyone Can Do](https://www.ted.com/talks/joshua_foer_feats_of_memory_anyone_can_do) (Ted Talk)

- [Code Complete (Talks about metaphor on page 9)](https://drive.google.com/file/d/0B9eM5jmmjmPOZWJ1OUM3OGtMQzQ/view) (Book)
