using System;

namespace MoneyMaker
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Welcome to Money Maker!");
            Console.WriteLine("Enter an amount to convert to coins:");
            string totalAsString = Console.ReadLine();
            Console.WriteLine(totalAsString);
            double total = Convert.ToDouble(totalAsString);
            Console.WriteLine($"{total} cents is equal to ...");

            // Define Coin Values
            int goldValue = 10;
            int silverValue = 5;

            // Calculate the change
            double goldCoins = Math.Floor(total / goldValue);
            double remainder = total % goldValue;

            Console.WriteLine(goldCoins);
            Console.WriteLine(remainder);

            double silverCoins = Math.Floor(remainder / silverValue);
            remainder = remainder % silverValue;

            Console.WriteLine(silverCoins);
            Console.WriteLine(remainder);

            // Print the results:
            Console.WriteLine($"Gold Coins: {goldCoins}");
            Console.WriteLine($"Silver Coins: {silverCoins}");
            Console.WriteLine($"Bronze Coins: {remainder}");


        }
    }
}
