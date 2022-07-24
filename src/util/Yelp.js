// Client ID
// ao-kc5Nn2PP9hiSlL0luoA
// API Key
// 5Txb_MjjhgqYkeHcYYrKm-AZKyTyrOOX6qoolubvYmCXZtaQL2J3GMY9jlhezw6KoBru7bVypRZ7Y5Yvkg5W7JRwNDJI-RC2Hsmo8cQYHuPN6aE84mEQCt7bgHfaYnYx

const apiKey = "5Txb_MjjhgqYkeHcYYrKm-AZKyTyrOOX6qoolubvYmCXZtaQL2J3GMY9jlhezw6KoBru7bVypRZ7Y5Yvkg5W7JRwNDJI-RC2Hsmo8cQYHuPN6aE84mEQCt7bgHfaYnYx"

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp
