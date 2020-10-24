public class MadLibs {
    /*
     * Your description here This program generates a mad libbed story. Author:
     * Shashi Date: 01/09/2020
     */

    public static void main(String[] args) {
        // Declare and Initialize variables:
        String name1 = "Shashi";
        String adjective1 = "Strong";
        String adjective2 = "Kind";
        String adjective3 = "Cute";
        String verb1 = "Walking";
        String noun1 = "Ball";
        String noun2 = "Stick";
        String noun3 = "Mouse";
        String noun4 = "Mousepad";
        String noun5 = "Phone";
        String noun6 = "Keyboard";
        String name2 = "Joe";
        int number = 2020;
        String place1 = "U.K";

        // The template for the story
        String story = "This morning " + name1 + " woke up feeling " + adjective1 + ". 'It is going to be a "
                + adjective2 + " day!' Outside, a bunch of " + noun1 + "s were protesting to keep " + noun2
                + " in stores. They began to " + verb1 + " to the rhythm of the " + noun3 + ", which made all the "
                + noun4 + "s very " + adjective3 + ". Concerned, " + name1 + " texted " + name2 + ", who flew " + name1
                + " to " + place1 + " and dropped " + name1 + " in a puddle of frozen " + noun5 + ". " + name1
                + " woke up in the year " + number + ", in a world where " + noun6 + "s ruled the world.";

        System.out.println(story);
    }
}