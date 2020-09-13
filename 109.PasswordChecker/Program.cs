using System;

namespace PasswordChecker
{
    class Program
    {
        public static void Main(string[] args)
        {
            int minLength = 8;
            string uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            string lowercase = "abcdefghijklmnopqrstuvwxyz";
            string digits = "0123456789";
            string specialChars = "#@!~$%^*&-+";

            Console.Write("Enter a Password: ");
            string password = Console.ReadLine();
            //Console.WriteLine(password);

            int score = 0;
            if (password.Length >= minLength)
            {
                score++;
            }
            //Console.WriteLine(score);
            if (Tools.Contains(password, uppercase))
            {
                score++;
            }
            //Console.WriteLine(score);
            if (Tools.Contains(password, lowercase))
            {
                score++;
            }
            //Console.WriteLine(score);
            if (Tools.Contains(password, digits))
            {
                score++;
            }
            //Console.WriteLine(score);
            if (Tools.Contains(password, specialChars))
            {
                score++;
            }
            //Console.WriteLine(score);


            switch (score)
            {
                case 5:
                case 4:
                    Console.WriteLine("Password is extremely strong!");
                    break;
                case 3:
                    Console.WriteLine("Password is strong!");
                    break;
                case 2:
                    Console.WriteLine("Password is medium!");
                    break;
                case 1:
                    Console.WriteLine("Password is weak!");
                    break;
                default:
                    Console.WriteLine("Password doesn't match any of the standards!");
                    break;
            }
        }
    }
}




















