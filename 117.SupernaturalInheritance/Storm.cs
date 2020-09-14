// Storm.cs
using System;

namespace MagicalInheritance
{
    class Storm : Spell
    {
        // public string Essence { get; private set; }
        // public bool IsStrong { get; private set; }
        // public string Caster { get; private set; }

        // Constructor
        public Storm(string essence, bool isStrong, string caster)
        {
            Essence = essence;
            IsStrong = isStrong;
            Caster = caster;
        }

        public override string Announce()
        {
            if (IsStrong)
            {
                return $"{Caster} cast a strong {Essence} storm!";
            }
            else
            {
                return $"{Caster} cast a weak {Essence} storm!";
            }
        }
    }
}
