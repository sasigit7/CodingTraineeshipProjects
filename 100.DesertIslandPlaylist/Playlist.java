import java.util.ArrayList;

class Playlist {
  
  public static void main(String[] args) {
    // Declare and Initialize a new array list - desertIslandPlaylist
    ArrayList<String> desertIslandPlaylist = new ArrayList<String>();

    // Add favorite songs to the array list - desertIslandPlaylist
    desertIslandPlaylist.add("Kygo & Imagine Dragons - 'Born to Be Yours'");
    desertIslandPlaylist.add("Dean Lewis - 'Be Alright'");
    desertIslandPlaylist.add("Calvin Harris & Sam Smith - 'Promises");
    desertIslandPlaylist.add("Loud Luxury feat. Brando - 'Body'");
    desertIslandPlaylist.add("Dynoro & Gigi D'Agostino - 'In My Mind'");
    desertIslandPlaylist.add("LSD feat. Sia - 'Thunderclouds'");
    
    // Print the results of desertIslandPlaylist
    // System.out.println(desertIslandPlaylist);

    // Print the size of the desertIslandPlaylist
    // System.out.println(desertIslandPlaylist.size());
    
    // Remove any two songs from desertIslandPlaylist 
    desertIslandPlaylist.remove("Dean Lewis - 'Be Alright'", "Dynoro & Gigi D'Agostino - 'In My Mind'");

    // Print the results of desertIslandPlaylist
    // System.out.println(desertIslandPlaylist);

    // Swap any two songs from desertIslandPlaylist
    int indexA = desertIslandPlaylist.indexOf("Kygo & Imagine Dragons - 'Born to Be Yours'");
    System.out.println(indexA);
    int indexB = desertIslandPlaylist.indexOf("LSD feat. Sia - 'Thunderclouds'");
    System.out.println(indexB);

    String tempA = "Kygo & Imagine Dragons - 'Born to Be Yours'";

    desertIslandPlaylist.set(indexA, "LSD feat. Sia - 'Thunderclouds'");
    
    // Print the results of desertIslandPlaylist
    System.out.println(desertIslandPlaylist);

    desertIslandPlaylist.set(indexB, tempA);

    // Print the results of desertIslandPlaylist
    System.out.println(desertIslandPlaylist);

  }
  
}















