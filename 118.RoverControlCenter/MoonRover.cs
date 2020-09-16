namespace RoverControlCenter
{
    class MoonRover : Rover
    {

        public MoonRover(string alias, int yearLanded) : base(alias, yearLanded)
        {
        }

        public override string Explore()
        {
            return "Moon rover is exploring the surface!";
        }

        public override string Collect()
        {
            return "Moon rover is collecting rocks!";
        }
    }
}