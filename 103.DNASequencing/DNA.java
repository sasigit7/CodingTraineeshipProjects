public class DNA {
    public static void main(String[] args) {
        // DNA Sequencing
        String dna1 = "ATGCGATACGCTTGA";
        String dna2 = "ATGCGATACGTGA";
        String dna3 = "ATTAATATGTACTGA";

        // Length of dna's
        String dnaOne = dna1;
        System.out.println("Length of dna1 string is: " + dnaOne.length());

        String dnaTwo = dna2;
        System.out.println("Length of dna2 string is: " + dnaTwo.length());

        String dnaThree = dna3;
        System.out.println("Length of dna3 string is: " + dnaThree.length());

        // Find start codon:
        int start = dnaOne.indexOf("ATG");
        System.out.println("Start: " + start);

        // Find stop codon:
        int stop = dnaOne.indexOf("TGA");
        System.out.println("Stop: " + stop);

        // Find the protein:
        if (start != -1 && stop != -1) {
            System.out.println("Condition 1 and 2 are satisfied.");

            if (start != -1 && stop != -1 && (stop - start) % 3 == 0) {
                System.out.println("Condition 1 and 2 and 3 are satisfied.");

                if (start != -1 && stop != -1 && (stop - start) % 3 == 0) {
                    String protein = dnaOne.substring(start, stop + 3);
                    System.out.println("Protein: " + protein);
                } else {
                    System.out.println("No protein.");
                }
            }
        }
        System.out.println(dna1);
        System.out.println(dna2);
        System.out.println(dna3);
    }

}
    
