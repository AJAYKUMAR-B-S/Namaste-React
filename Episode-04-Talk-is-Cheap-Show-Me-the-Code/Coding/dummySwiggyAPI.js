const RESTAURANT_MOCK_DATA = {
  card: {
    card: {
      "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
      header: {
        title: "Top restaurant chains in Bangalore",
        action: {},
        headerStyling: {
          padding: {
            left: 16,
            top: 28,
            bottom: 18,
          },
        },
      },
      layout: {
        rows: 1,
        columns: 20,
        horizontalScrollEnabled: true,
        itemSpacing: 32,
        widgetPadding: {},
        containerStyle: {
          containerPadding: {
            left: 16,
            right: 12,
            bottom: 12,
          },
        },
        scrollBar: {
          scrollThumbColor: "#E46D47",
          scrollTrackColor: "#02060C",
          width: 54,
          height: 4,
          scrollStyling: {
            padding: {
              top: 6,
              bottom: 24,
            },
          },
        },
        widgetTheme: {
          defaultMode: {
            backgroundColour: "#1B3028",
            theme: "THEME_TYPE_DARK",
          },
          darkMode: {
            backgroundColour: "#1B3028",
            theme: "THEME_TYPE_DARK",
          },
        },
      },
      id: "top_brands_for_you",
      gridElements: {
        infoWithStyle: {
          "@type":
            "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
          restaurants: [
            {
              info: {
                id: "10575",
                name: "Pizza Hut",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg",
                locality: "Richmond Town",
                areaName: "Shanti Nagar",
                costForTwo: "₹600 for two",
                cuisines: ["Pizzas"],
                avgRating: 4.3,
                parentId: "721",
                avgRatingString: "4.3",
                totalRatingsString: "10K+",
                sla: {
                  deliveryTime: 32,
                  lastMileTravel: 2.7,
                  serviceability: "SERVICEABLE",
                  slaString: "30-35 mins",
                  lastMileTravelString: "2.7 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-18 01:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "4.1",
                    ratingCount: "1.7K+",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/pizza-hut-richmond-town-shanti-nagar-rest10575",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "588619",
                name: "KFC",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/ab13ff98-4cb5-4062-bef6-1738d5d5ed45_588619.JPG",
                locality: "Brigade Road",
                areaName: "Central Bangalore",
                costForTwo: "₹400 for two",
                cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
                avgRating: 4.4,
                parentId: "547",
                avgRatingString: "4.4",
                totalRatingsString: "2.1K+",
                sla: {
                  deliveryTime: 23,
                  lastMileTravel: 2.4,
                  serviceability: "SERVICEABLE",
                  slaString: "20-25 mins",
                  lastMileTravelString: "2.4 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-18 01:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "40% OFF",
                  subHeader: "UPTO ₹80",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "4.0",
                    ratingCount: "342",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/kfc-brigade-road-central-bangalore-rest588619",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "23847",
                name: "Domino's Pizza",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/75c0269c-cb7a-420d-8218-150f7ed3d546_23847.JPG",
                locality: "MG Road",
                areaName: "Brigade Road",
                costForTwo: "₹400 for two",
                cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
                avgRating: 4.4,
                parentId: "2456",
                avgRatingString: "4.4",
                totalRatingsString: "5.9K+",
                sla: {
                  deliveryTime: 25,
                  lastMileTravel: 2.4,
                  serviceability: "SERVICEABLE",
                  slaString: "20-25 mins",
                  lastMileTravelString: "2.4 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-17 22:59:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "Rxawards/_CATEGORY-Pizza.png",
                      description: "Delivery!",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "Delivery!",
                            imageId: "Rxawards/_CATEGORY-Pizza.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "₹125 OFF",
                  subHeader: "ABOVE ₹1199",
                  discountTag: "FLAT DEAL",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "4.0",
                    ratingCount: "4.8K+",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/dominos-pizza-mg-road-brigade-road-rest23847",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "42577",
                name: "Cream Stone Ice Cream",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/9/88f0b679-8ab8-40e1-b742-65e3cf2e00c8_42577.jpg",
                locality: "Frazer Town",
                areaName: "Central Bangalore",
                costForTwo: "₹400 for two",
                cuisines: ["Ice Cream", "Desserts", "Beverages"],
                avgRating: 4.5,
                parentId: "289",
                avgRatingString: "4.5",
                totalRatingsString: "9.2K+",
                sla: {
                  deliveryTime: 32,
                  lastMileTravel: 5,
                  serviceability: "SERVICEABLE",
                  slaString: "30-35 mins",
                  lastMileTravelString: "5.0 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-17 23:59:00",
                  opened: true,
                },
                badges: {
                  textExtendedBadges: [
                    {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "",
                            fontColor: "#7E808C",
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                          },
                        },
                      ],
                    },
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "4.2",
                    ratingCount: "1.5K+",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/cream-stone-ice-cream-frazer-town-central-bangalore-rest42577",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "396747",
                name: "LunchBox - Meals and Thalis",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/2e69f87e-dff6-4bd1-a380-1b365b27bede_396747.jpg",
                locality: "Residency Road",
                areaName: "Shantinagar",
                costForTwo: "₹200 for two",
                cuisines: [
                  "Biryani",
                  "North Indian",
                  "Punjabi",
                  "Healthy Food",
                  "Desserts",
                  "Beverages",
                ],
                avgRating: 4.3,
                parentId: "4925",
                avgRatingString: "4.3",
                totalRatingsString: "1.9K+",
                sla: {
                  deliveryTime: 30,
                  lastMileTravel: 2.2,
                  serviceability: "SERVICEABLE",
                  slaString: "30-35 mins",
                  lastMileTravelString: "2.2 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-17 23:59:00",
                  opened: true,
                },
                badges: {
                  textExtendedBadges: [
                    {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "",
                            fontColor: "#7E808C",
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                          },
                        },
                      ],
                    },
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "ITEMS",
                  subHeader: "AT ₹159",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/lunchbox-meals-and-thalis-residency-road-shantinagar-rest396747",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "43836",
                name: "McDonald's",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
                locality: "MG Road",
                areaName: "Ashok Nagar",
                costForTwo: "₹400 for two",
                cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
                avgRating: 4.4,
                parentId: "630",
                avgRatingString: "4.4",
                totalRatingsString: "25K+",
                sla: {
                  deliveryTime: 18,
                  lastMileTravel: 1.3,
                  serviceability: "SERVICEABLE",
                  slaString: "15-20 mins",
                  lastMileTravelString: "1.3 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-18 02:45:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "Rxawards/_CATEGORY-Burger.png",
                      description: "Delivery!",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "Delivery!",
                            imageId: "Rxawards/_CATEGORY-Burger.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "ITEMS",
                  subHeader: "AT ₹179",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/mcdonalds-mg-road-ashok-nagar-rest43836",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "426730",
                name: "Theobroma",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/13/4de67475-37bd-4300-8cca-bee90fd2683b_426730.jpg",
                locality: "Lavelle Road",
                areaName: "Ashok Nagar",
                costForTwo: "₹400 for two",
                cuisines: ["Desserts", "Bakery", "Beverages"],
                avgRating: 4.7,
                parentId: "1040",
                avgRatingString: "4.7",
                totalRatingsString: "4.9K+",
                sla: {
                  deliveryTime: 14,
                  lastMileTravel: 0.4,
                  serviceability: "SERVICEABLE",
                  slaString: "10-15 mins",
                  lastMileTravelString: "0.4 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-17 23:00:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "Rxawards/_CATEGORY-Desserts.png",
                      description: "Delivery!",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "Delivery!",
                            imageId: "Rxawards/_CATEGORY-Desserts.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "20% OFF",
                  discountTag: "FLAT DEAL",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "4.1",
                    ratingCount: "420",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/theobroma-lavelle-road-ashok-nagar-rest426730",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "69876",
                name: "Subway",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/0f27fbff-1e49-4161-a0a5-848062423b76_69876.JPG",
                locality: "UB City",
                areaName: "Central Bangalore",
                costForTwo: "₹350 for two",
                cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
                avgRating: 4.4,
                parentId: "2",
                avgRatingString: "4.4",
                totalRatingsString: "3.6K+",
                sla: {
                  deliveryTime: 32,
                  lastMileTravel: 0.5,
                  serviceability: "SERVICEABLE",
                  slaString: "30-35 mins",
                  lastMileTravelString: "0.5 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-17 23:00:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "Rxawards/_CATEGORY-Sandwiches.png",
                      description: "Delivery!",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "Delivery!",
                            imageId: "Rxawards/_CATEGORY-Sandwiches.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "ITEMS",
                  subHeader: "AT ₹119",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "3.8",
                    ratingCount: "282",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/subway-ub-city-central-bangalore-rest69876",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "570511",
                name: "Bakingo",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/c795c5d6-96d4-409a-8106-3c3ba1f4253c_570511.JPG",
                locality: "Puhlong X-road",
                areaName: "Vasanth Nagar",
                costForTwo: "₹299 for two",
                cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
                avgRating: 4.6,
                parentId: "3818",
                avgRatingString: "4.6",
                totalRatingsString: "3.5K+",
                sla: {
                  deliveryTime: 25,
                  lastMileTravel: 4,
                  serviceability: "SERVICEABLE",
                  slaString: "20-25 mins",
                  lastMileTravelString: "4.0 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-18 01:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/bakingo-puhlong-x-road-vasanth-nagar-rest570511",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "396753",
                name: "Wendy's Burgers",
                cloudinaryImageId: "f1aa621021a2826088089b89842d4e7c",
                locality: "KMK Towers",
                areaName: "Residency Road",
                costForTwo: "₹200 for two",
                cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
                avgRating: 4.3,
                parentId: "972",
                avgRatingString: "4.3",
                totalRatingsString: "2.3K+",
                sla: {
                  deliveryTime: 27,
                  lastMileTravel: 2.2,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "2.2 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-17 23:59:00",
                  opened: true,
                },
                badges: {
                  textExtendedBadges: [
                    {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "",
                            fontColor: "#7E808C",
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                          },
                        },
                      ],
                    },
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/wendys-burgers-kmk-towers-residency-road-rest396753",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "312660",
                name: "Samosa Party",
                cloudinaryImageId: "ixgxvfu6ggvw1w1awgr1",
                locality: "Brigade Road",
                areaName: "Brigade Road",
                costForTwo: "₹150 for two",
                cuisines: [
                  "Fast Food",
                  "Snacks",
                  "Beverages",
                  "Chaat",
                  "North Indian",
                  "Street Food",
                  "Sweets",
                  "Desserts",
                  "Punjabi",
                  "Bakery",
                ],
                avgRating: 4.6,
                parentId: "6364",
                avgRatingString: "4.6",
                totalRatingsString: "4.3K+",
                sla: {
                  deliveryTime: 29,
                  lastMileTravel: 2.3,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "2.3 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-17 22:00:00",
                  opened: true,
                },
                badges: {
                  textExtendedBadges: [
                    {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "",
                            fontColor: "#7E808C",
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                          },
                        },
                      ],
                    },
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "60% OFF",
                  subHeader: "UPTO ₹120",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "4.0",
                    ratingCount: "25",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/samosa-party-brigade-road-rest312660",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "281469",
                name: "Lavonne",
                cloudinaryImageId: "emlehbuwgsmryxhwzhvq",
                locality: "St. Marks Road",
                areaName: "St. Marks Road",
                costForTwo: "₹750 for two",
                cuisines: ["Bakery", "Desserts"],
                avgRating: 4.6,
                parentId: "10530",
                avgRatingString: "4.6",
                totalRatingsString: "4.7K+",
                sla: {
                  deliveryTime: 27,
                  lastMileTravel: 2.2,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "2.2 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-18 00:00:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  ],
                },
                isOpen: true,
                aggregatedDiscountInfoV2: {},
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "Gourmet",
                            imageId: "newg.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "4.4",
                    ratingCount: "1.0K+",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/lavonne-st-marks-road-rest281469",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "435405",
                name: "Chaayos Chai+Snacks=Relax",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG",
                locality: "Cunningham Road",
                areaName: "RT Nagar",
                costForTwo: "₹250 for two",
                cuisines: [
                  "Bakery",
                  "Beverages",
                  "Chaat",
                  "Desserts",
                  "Home Food",
                  "Italian",
                  "Maharashtrian",
                  "Snacks",
                  "Street Food",
                  "Sweets",
                ],
                avgRating: 4.6,
                parentId: "281782",
                avgRatingString: "4.6",
                totalRatingsString: "1.7K+",
                sla: {
                  deliveryTime: 26,
                  lastMileTravel: 3,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "3.0 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-17 23:00:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                      description: "Delivery!",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "Delivery!",
                            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "4.1",
                    ratingCount: "371",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/chaayos-chai-snacks-relax-cunningham-road-rt-nagar-rest435405",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "600456",
                name: "Daily Sushi",
                cloudinaryImageId: "mpnblqqkh7xpi4h0fnju",
                locality: "Shanthala Nagar",
                areaName: "Ashok Nagar",
                costForTwo: "₹800 for two",
                cuisines: ["Japanese", "Asian", "Korean"],
                avgRating: 4.6,
                parentId: "7388",
                avgRatingString: "4.6",
                totalRatingsString: "1.5K+",
                sla: {
                  deliveryTime: 31,
                  lastMileTravel: 1.5,
                  serviceability: "SERVICEABLE",
                  slaString: "30-35 mins",
                  lastMileTravelString: "1.5 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-17 23:59:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "Rxawards/_CATEGORY-Pan-Asian.png",
                      description: "Delivery!",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "Delivery!",
                            imageId: "Rxawards/_CATEGORY-Pan-Asian.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "60% OFF",
                  subHeader: "UPTO ₹120",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/daily-sushi-shanthala-nagar-ashok-nagar-rest600456",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "427422",
                name: "Zed The Baker",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/3bb87897-6464-4c68-806e-6e805f7a54b6_427422.jpg",
                locality: "Museum Road",
                areaName: "Church Street",
                costForTwo: "₹500 for two",
                cuisines: [
                  "Bakery",
                  "Snacks",
                  "Desserts",
                  "Beverages",
                  "Cafe",
                  "Italian",
                  "Continental",
                  "American",
                ],
                avgRating: 4.3,
                parentId: "229773",
                avgRatingString: "4.3",
                totalRatingsString: "666",
                sla: {
                  deliveryTime: 27,
                  lastMileTravel: 1.4,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "1.4 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-18 00:00:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "Gourmet",
                            imageId: "newg.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "4.2",
                    ratingCount: "1.0K+",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/zed-the-baker-museum-road-church-street-rest427422",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "53503",
                name: "Brik Oven - Original Sourdough Pizzas",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/21/1999d787-3984-4db9-b817-55ffc0c3b0e8_53503.jpg",
                locality: "Church Street",
                areaName: "Church Street",
                costForTwo: "₹700 for two",
                cuisines: ["Italian", "Pizzas", "Desserts", "Beverages"],
                avgRating: 4.4,
                parentId: "488952",
                avgRatingString: "4.4",
                totalRatingsString: "11K+",
                sla: {
                  deliveryTime: 27,
                  lastMileTravel: 1.8,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "1.8 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-18 01:00:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "Rxawards/_CATEGORY-Pizza.png",
                      description: "Delivery!",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "Delivery!",
                            imageId: "Rxawards/_CATEGORY-Pizza.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "4.4",
                    ratingCount: "7.1K+",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/brik-oven-original-sourdough-pizzas-church-street-rest53503",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "51835",
                name: "Aubree",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/16/78b1862b-4c60-4c7c-a24a-8b626fc0f227_51835.jpg",
                locality: "Shivaji Nagar",
                areaName: "Shivaji Nagar",
                costForTwo: "₹700 for two",
                cuisines: ["Desserts", "Bakery"],
                avgRating: 4.7,
                parentId: "3807",
                avgRatingString: "4.7",
                totalRatingsString: "1.9K+",
                sla: {
                  deliveryTime: 25,
                  lastMileTravel: 2.5,
                  serviceability: "SERVICEABLE",
                  slaString: "20-25 mins",
                  lastMileTravelString: "2.5 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-17 21:00:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  ],
                },
                isOpen: true,
                type: "D",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "Gourmet",
                            imageId: "newg.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "60% OFF",
                  subHeader: "UPTO ₹120",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "4.7",
                    ratingCount: "775",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/aubree-shivaji-nagar-rest51835",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "19361",
                name: "Pasta Street",
                cloudinaryImageId: "aecff12704ebe42606524c852f9ab0e4",
                locality: "Cunningham Road",
                areaName: "Cunningham Road",
                costForTwo: "₹900 for two",
                cuisines: ["Italian", "Pastas", "Pizzas", "Desserts"],
                avgRating: 4.5,
                parentId: "2872",
                avgRatingString: "4.5",
                totalRatingsString: "7.4K+",
                sla: {
                  deliveryTime: 27,
                  lastMileTravel: 2.8,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "2.8 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-17 23:30:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "Gourmet",
                            imageId: "newg.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "60% OFF",
                  subHeader: "UPTO ₹120",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "4.4",
                    ratingCount: "4.2K+",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/pasta-street-cunningham-road-rest19361",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "3434",
                name: "Nandhini Deluxe",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/3/7f19aaac-7299-4b54-a22d-69fd67f8fb65_3434.jpg",
                locality: "St. Marks Road",
                areaName: "St Marks Road",
                costForTwo: "₹500 for two",
                cuisines: ["Andhra", "Biryani", "Chinese", "North Indian"],
                avgRating: 4.3,
                parentId: "2451",
                avgRatingString: "4.3",
                totalRatingsString: "18K+",
                sla: {
                  deliveryTime: 20,
                  lastMileTravel: 0.8,
                  serviceability: "SERVICEABLE",
                  slaString: "20-25 mins",
                  lastMileTravelString: "0.8 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-17 23:59:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "20% OFF",
                  subHeader: "ABOVE ₹2500",
                  discountTag: "FLAT DEAL",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "3.8",
                    ratingCount: "1.5K+",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/nandhini-deluxe-st-marks-road-rest3434",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "58568",
                name: "Sweet Chariot",
                cloudinaryImageId: "aun89df8igfy1zu0xf5v",
                locality: "Brigade Road",
                areaName: "Ashok Nagar",
                costForTwo: "₹200 for two",
                cuisines: ["Desserts"],
                avgRating: 4.6,
                parentId: "912",
                avgRatingString: "4.6",
                totalRatingsString: "510",
                sla: {
                  deliveryTime: 26,
                  lastMileTravel: 2.3,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "2.3 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-17 21:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                aggregatedDiscountInfoV2: {},
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-daf28cc9-5e45-4d2f-a665-a84fa4500019",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/sweet-chariot-brigade-road-ashok-nagar-rest58568",
                type: "WEBLINK",
              },
            },
          ],
          theme: "Restaurant_Group_WebView_SEO_PB_Theme",
          widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
          style: {
            width: {
              type: "TYPE_RELATIVE",
              value: 0.41111112,
              reference: "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH",
            },
            height: {
              type: "TYPE_RELATIVE",
              value: 0.7027027,
              reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
            },
            layoutAlignment: "LAYOUT_ALIGNMENT_LEFT",
          },
          collectionId: "84124",
        },
      },
    },
  },
};

export default RESTAURANT_MOCK_DATA;
