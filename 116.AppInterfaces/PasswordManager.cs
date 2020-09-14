using System;

namespace SavingInterface
{
    class PasswordManager : IDisplayable
    {
        private string Password
        { get; set; }

        public bool Hidden
        { get; private set; }

        public PasswordManager(string password, bool hidden)
        {
            Password = password;
            Hidden = hidden;
        }

        // Implementing the interface by defining Display() method:
        public void Display()
        {
            if (Hidden)
            {
                Console.WriteLine("iluvpie");
            }
            else
            {
                Console.WriteLine(Password);
            }

        }

        // Implementing the interface by defining Reset() method:
        public void Reset()
        {
            Password = "";
            Hidden = false;

        }

    }
}






