public class Droid {
    // Instance fields:
    String name;
    int batteryLevel;

    // Constructor Method:
    public Droid(String droidName) {
        name = droidName;
        batteryLevel = 100;
    }

    // String Method:
    public String toString() {
        return "Hello, I'm the droid: " + name;
    }

    // Perform Task Method:
    public void performTask(String task) {
        batteryLevel = batteryLevel - 10;
        System.out.println(name + " is performing task: " + task);
    }

    // Main Method:
    public static void main(String[] args) {
        Droid codey = new Droid("Codey");
        System.out.println(codey);
        codey.performTask("dancing");
        codey.performTask("coding");
    }
}