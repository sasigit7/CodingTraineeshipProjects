using System;

namespace MagicalInheritance
{
    class Program
    {
        static void Main(string[] args)
        {
            // Store Sorm Objects in an array
            Storm[] storms = new Storm[10];
            int stormsIndex = 0;

            Storm s = new Storm("wind", false, "Zul'rajas");
            //Console.WriteLine(s.Announce());

            // Pupil  
            Pupil p = new Pupil("Mezil-kree", "Icecrown");

            storms[stormsIndex] = p.CastWindStorm();
            stormsIndex++;
            //Storm windStorm = p.CastWindStorm();
            //Console.WriteLine(windStorm.Announce());

            // Mage 
            Mage m = new Mage("Gul'dan", "Draenor");

            storms[stormsIndex] = m.CastRainStorm();
            stormsIndex++;

            //Storm rainStorm = m.CastRainStorm();
            //Console.WriteLine(rainStorm.Announce());

            //Archmage
            Archmage a = new Archmage("Nielas Aran", "Stormwind");

            storms[stormsIndex] = a.CastWindStorm();
            stormsIndex++;

            storms[stormsIndex] = a.CastRainStorm();
            stormsIndex++;

            storms[stormsIndex] = a.CastLightningStorm();
            stormsIndex++;
            //Storm archmageRainStorm = a.CastRainStorm();
            //Storm archmageLightningStorm = a.CastLightningStorm();

            //Console.WriteLine(archmageRainStorm.Announce());
            //Console.WriteLine(archmageLightningStorm.Announce());

            for (int i = 0; i < stormsIndex; i++)
            {
                // storms[0]
                Console.WriteLine(storms[i].Announce());
            }


        }
    }
}


















