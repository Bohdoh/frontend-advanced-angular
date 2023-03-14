# Level2

## For warmup
- 👨‍🏫 Delete the animal items and generate some animals but from an inline string array. Do this with a loop directive `*ngFor`. You don't need to introduce a state for this! Don't worry if they do not align in the grid for now.

- 👨‍🏫 Now we want every odd animal a) not to show and b) in a second step show a plant instead. You will need the `*ngIf` directive (and an else template), an `index` and the `%` operator.

## Let's continue 
- 👨‍🏫 Now we want to make this even more dynamic. We want to render our animals in the lake based on a animal array. Create such array of type String containing 12 different animals. Something like `["🐢", "🦚", "..."]`. Adapt the necessary files to show those in the lake. Do not worry about the positioning in the lake, we will come to that. What we just achieved: We based our view on pure data and have view and model separated. Delete on animal out of our array and see how the view changes!

- 👨‍🏫 Use `*ngIf` to show a "We need animals‼️" in the sidebar if the lake does not contain any animals.

- 👨‍🏫 Refactor so that your data model is not a `string` array but a array of object literals. Add a field to give each animal a descriptive name (in the same style as the lake of feelings). Array could look like this: [{"name": "Hungry Bear", "emoji": "🧸"}, ...]. Use the model to visualize the animals and a name tag below it.

  *CSS hint*: To not get lost in the layouting you can use the following snipped (CSS inline-style is ok in this case;)). Put the emoji/name in a parent container like this:
  ```html
  <!-- Just an example for a bear, do not hardcode this! -->
  <div *ngFor="...">
    <div>🧸</div>
    <div style="font-size: 0.5em; color: white">Hungry Bear</div>
  </div>
  ```
- 🏆 CSS-Bonus task: The name only appears as a tool tip element when hovering over the animal

- 👨‍🏫 Now let's explore the real power of reactive state management by adding and removing emojis through user interaction. Follow these steps:
  - Add two buttons inside your sidebar. One for adding an emoji and one for deleting an emoji
  - Clicking the buttons should do the following
    - Delete button clicked: Delete the last animal from your array
    - Add button clicked: Always add a statically defined animal/name to the lake). I will go with a `"Lame Duck|🦆"`. You can now start a duck invasion in your lake;)
  - If you did everything correctly you should now be able to dynamically add and delete emojis 🎉

- 👨‍🏫 Adding always the same animal to the lake doesn't really help with a diverse fauna. Let's bring in a bit randomness in here. Introduce a `LakeAnimalService` which holds an array with unique emojis/name objects and offers a `getRandomAnimal()` method. Inject that service into your lake component via Dependency Injection.

  *Note*: The actual lake should always start out empty, with no animal inside.

  *Hint*: A quick one-liner for getting a random element in JavaScript is `items[Math.floor(Math.random()*items.length)];`

- 👨‍🏫 Now we would like to position the animals across the lake (as it was in Level-1). Remember this was done with our grid layout and the `grid-template-areas` we defined by associating each animal container with a class `.x1` - `.x12`. To achieve this dynamically we need to apply what we've learned about class binding.

  *Hint*: We can bind whatever values to the class attribute we want. String concatenation and accessing the index might become useful. If you did everything correctly you should see that every animal you add to the lake is automatically positioning on a predefined place on the lake.

  *Hint*: You need to annotate the direct children of the .animal-grid with positioning classes, this is usually where you also define the `*ngFor` directive. Remember, all direct children of a grid container become grid-items.

- 👨‍🏫 Some of you might already have recognized, when adding more than 12 animals there is no explicit positioning on the grid defined and animals are auto-placed, filling the grid from the top-left. We only have space for 12 animals in the lake, keep the rest out!! Come up with a mechanism so that the user can't add more than 12 animals to the lake. Additionally, when no animals are in the lake it also does not make sense to delete an animal, don't allow this.

  *Hint*: Research how to disable a button. What type of binding do you need for this?

- 🏆 Bonus: We all know Nessie is pretty shy!! Place Nessie as an emoji into the middle of the lake if no other animal is present. Hint: If you cut of the 🦕 emoji at the right height and apply a filter you might have good chances to see Nessie ...

- 🏆 Bonus: First implement the supplementary CSS exercises - so that you have either animals which are in a boat, or which swim.  Instead of doing for odd/event count, model this as a Boolean attribute `can-swim` for each animal. Bind this with the help of classes to the view.
