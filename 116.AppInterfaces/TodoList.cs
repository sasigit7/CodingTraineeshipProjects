using System;

namespace SavingInterface
{
    class TodoList : IDisplayable, IResetable
    {

        public string[] Todos
        { get; private set; }

        private int nextOpenIndex;

        public TodoList()
        {
            Todos = new string[5];
            nextOpenIndex = 0;
        }

        public void Add(string todo)
        {
            Todos[nextOpenIndex] = todo;
            nextOpenIndex++;
        }

        // Implementing the interface by defining Display() method:
        public void Display()
        {
            foreach (string s in Todos)
            {
                Console.WriteLine(s);
            }
        }

        // Implementing the interface by defining Reset() method:
        public void Reset()
        {
            Todos = new string[5];
            nextOpenIndex = 0;
        }
    }
}


















