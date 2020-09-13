using System;

namespace DatingProfile
{
    class Profile
    {
        private string name;
        private int age;
        private string city;
        private string country;
        private string pronouns;
        private string[] hobbies;

        public Profile(string name, int age, string city, string country, string pronouns = "they/them")
        {
            this.name = name;
            this.age = age;
            this.city = city;
            this.country = country;
            this.pronouns = pronouns;
            this.hobbies = new string[0];
        }

        public string ViewProfile()
        {
            string bio = $"name: {name},\nage: {age}\ncity: {city}\ncountry: {country}\npronouns: {pronouns}";

            bio += "\nHobbies\n";
            foreach (string hobby in hobbies)
            {
                bio += $"- {hobby}\n";
            }
            return bio;
        }

        public void SetHobbies(string[] hobbies)
        {
            this.hobbies = hobbies;
        }
    }
}












