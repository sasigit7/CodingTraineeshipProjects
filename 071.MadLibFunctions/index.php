<?php
// Create a function generateStory with three input parameters: $singular_noun, $verb, $color
function generateStory($singular_noun, $verb, $color, $distance_unit){
    /* Within the function, create a variable $story and assign it the last stanza of Robert Frost’s 
    “Stopping by Woods on a Snowy Evening”:
    The woods are lovely, dark, and deep.
    But I have promises to keep,
    And miles to go before I sleep,
    And miles to go before I sleep.
    Use newlines (\n) to ensure the lines break in the right location. 
    Also use one at the beginning and the end to help with formatting.
    */
    $story = "\nThe ${singular_noun}s are lovely, $color, and deep.
    \nBut I have promises to keep,
    \nAnd ${distance_unit} to go before I $verb,
    \nAnd ${distance_unit} to go before I $verb.\n";
    //For now, before adding in the “blanks”, let’s return the story from the function.
    return $story;
}
// After the function definition, echo three separate invocations of generateStory with unique inputs. 
//Use a singular noun, a verb, and a color, like the function parameters describe.
echo generateStory("dog", "eat", "purple", 25);
echo generateStory("car", "cook", "vermilion", 55);
echo generateStory("empty road", "speak", "beige", 79);
