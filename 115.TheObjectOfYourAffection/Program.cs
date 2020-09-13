using System;

namespace DatingProfile
{
    class Program
    {
        static void Main(string[] args)
        {
            Profile sam = new Profile("Sam Drakkila", 30, "New York", "USA", "he/him");
            //sam.name = "Sam Drakkila";
            sam.SetHobbies(new string[] {
        "Coding passionately",
        "Reading technical blogs",
        "Practising Interview questions"
      });
            Console.WriteLine(sam.ViewProfile());
        }
    }
}
