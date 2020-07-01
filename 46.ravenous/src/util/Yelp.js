const apiKey = "INSERT_YOUR_API_KEY";
const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          // This browser header is passed as a second argument in fetch function to let Yelp API know that we had authorization to use it.
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        // convert the returned response to JSON
        return response.json();
      })
      .then((jsonResponse) => {
        // To retrieve the list of businesses from the converted JSON response.
        if (jsonResponse.businesses) {
          // this would represent a valid response returned by the Yelp API
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zipCode,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  },
};
export default Yelp;
