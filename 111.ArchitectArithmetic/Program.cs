using System;

namespace ArchitectArithmetic
{
    class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("What monument would you like to work with?");
            Console.Write("Choose Teotihuacan(1), Taj Mahal(2), or Great Mosque Of Mecca(3): ");
            string monument = Console.ReadLine();


            //Console.WriteLine(Rectangle(4, 5));
            //Console.WriteLine(Circle(4));
            //Console.WriteLine(Triangle(10, 9));

            // Teotihuacan
            // double totalArea = Rectangle(2500, 1500) + (0.5 * Circle(375)) + Triangle(750, 500);
            // double totalCost = totalArea * 180;
            // Console.WriteLine($"My plan costs: {Math.Round(totalCost, 2)} pesos");

            // Taj Mahal 
            // double totalAreaTM = Rectangle(90.5, 90.5) - 2 * Rectangle(24, 24);
            // double totalCostTM = totalAreaTM * 180;
            // Console.WriteLine($"My plan costs for Taj Mahal is: {Math.Round(totalCostTM, 2)} pesos");

            // Great Mosque Of Mecca
            // double totalAreaGMM = Rectangle(180, 106) + Rectangle(200, 264) + Triangle(264, 84);
            // double totalCostGMM = totalAreaGMM * 180;
            // Console.WriteLine($"My plan costs for Great Mosque Of Mecca is: {Math.Round(totalCostGMM, 2)} pesos");


            double totalArea;
            switch (monument)
            {
                case "1": // Teotihuacan
                    totalArea = Rectangle(2500, 1500) + (0.5 * Circle(375)) + Triangle(750, 500);
                    break;

                case "2": // Taj Mahal
                    totalArea = Rectangle(90.5, 90.5) - 2 * Rectangle(24, 24);
                    break;

                case "3": // Great Mosque Of Mecca
                    totalArea = Rectangle(180, 106) + Rectangle(200, 264) + Triangle(264, 84);
                    break;

                default:
                    totalArea = 0;
                    break;
            }


            double totalCost = totalArea * 180;
            Console.WriteLine($"My plan costs: {Math.Round(totalCost, 2)} pesos.");

        }


        // Rectangle Method: 
        static double Rectangle(double length, double width)
        {
            return length * width;
        }

        // Circle method: 
        static double Circle(double radius)
        {
            return Math.PI * Math.Pow(radius, 2);
        }

        // Triangle Method: 
        static double Triangle(double bottom, double height)
        {
            return 0.5 * bottom * height;
        }
    }
}
