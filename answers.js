
  let answers = [
    {
      text: "New York | Midtown South",
      parent_question_id: 1,
      //to_question_id: 2,
      to_question_id: 'prequestions',
      redirect_id: 2,
      after_text:
        "Good choice! Tenant requirements have grown 136% year-over-year in Midtown NYC, so the market is recovering...just not as fast as South Financial District in San Francisco (196% year-over-year growth in tenant requirements).",
      order: 1,
      image: "https://thejhubbs.github.io/assets/ny.png"
    },
    {
      text: "Chicago | Fulton Market",
      parent_question_id: 1,
      //to_question_id: 6,
      to_question_id: 'prequestions',
      redirect_id: 6,
      after_text:
        "Good choice! Tenant requirements have grown 105% year-over-year in Fulton Market, so the market is recovering...just not as fast as South Financial District in San Francisco (196% year-over-year growth in tenant requirements) or Midtown NYC (105% year-over-year growth in tenant requirements).",
      order: 2,
      image: "https://thejhubbs.github.io/assets/ch.png"
    },
    {
      text: "San Francisco | South Financial",
      parent_question_id: 1,
      //to_question_id: 'summary',
      to_question_id: 'prequestions',
      redirect_id: 15,
      after_text:
        "Great choice! In fact - it's the best choice on the board with 196% year-over-year growth in tenant requirements...not that Fulton Market or Midtown NYC would've been bad choices (105% year-over-year growth and 136% year-over-year growth in tenant requirements, respectively).",
      order: 3,
      image: "https://thejhubbs.github.io/assets/sf.png"
    },
  
    {
      text: "2 Spaces (10k sf each)",
      parent_question_id: 2,
      to_question_id: 3,
      after_text:
        "There are 98 active tenant requirements per available 10k rsf space in Midtown. You've got a great chance to get tenant tours! Your odds would be even better if you kept the floor as-is (there are 140 active tenant requirements per available 20k sf space in Midtown).",
      order: 1
    },
    {
      text: "4 Spaces (5k sf each)",
      parent_question_id: 2,
      to_question_id: 4,
      after_text:
        "There are 49 active tenant requirements per available 5k rsf space in Midtown. You've got a decent chance to get tenant tours! Your odds would be even better if you chose to break up the floor into two spaces or keep the floor as-is (there are 98 active tenant requirements per available 10k rsf space, and 140 active tenant requirements per available 20k sf space in Midtown).",
      order: 2
    },
    {
      text: "I want to keep the floor as-is",
      parent_question_id: 2,
      to_question_id: 5,
      after_text:
        "There are 140 active tenant requirements per available 20k rsf space in Midtown. You have amazing odds to get tenant tours! Had you chosen to break up the floor into 2 or 4 spaces, your chances would be lower (there are 98 active tenant requirements per available 10k rsf space, and 49 active tenant requirements per available 5k rsf space in Midtown).",
      order: 3
    },
  
    //2 SPACES
    {
      text: "FIRE",
      tooltip: "Finance, Insurance, Real Estate & Flex Providers",
      parent_question_id: 3,
      to_question_id: 6,
      after_text:
        "There are 99 unique FIRE tenants actively touring 10k sf spaces in Midtown. GREAT choice! This is the most active tenant profile in the market for 10k sf spaces.",
      order: 1
    },
    {
      text: "TAMI",
      tooltip: "Tech, Media, Advertising & Internet",
      parent_question_id: 3,
      to_question_id: 6,
      after_text:
        "There are 22 unique TAMI tenants actively touring 10k sf spaces in Midtown. Not bad, but your best bet would have been to target FIRE tenants (there are 99 FIRE tenants actively touring 10k sf spaces in Midtown).",
      order: 2
    },
    {
      text: "Pro. Services",
      tooltip:
        "Legal, Accounting, Architecture, Executive Staffing, Construction & Engineering",
      parent_question_id: 3,
      to_question_id: 6,
      after_text:
        "There are 17 unique Pro. Services tenants actively touring 10k sf spaces in Midtown. Not bad, but your best bet would have been to target FIRE tenants (there are 99 FIRE tenants actively touring 10k sf spaces in Midtown).",
      order: 3
    },
    {
      text: "Other",
      tooltip:
        "Government, Healthcare, Assoc. / Non Profit, Energy, Hospitality, Transportation, Consumer",
      parent_question_id: 3,
      to_question_id: 6,
      after_text:
        "There are 58 unique 'Other' tenants actively touring 10k sf spaces in Midtown. Pretty good! Your best bet would have been to target FIRE tenants (there are 99 FIRE tenants actively touring 10k sf spaces in Midtown).",
      order: 4
    },
  
    //4 SPACES
    {
      text: "FIRE",
      tooltip: "Finance, Insurance, Real Estate & Flex Providers",
      parent_question_id: 4,
      to_question_id: 7,
      after_text:
        "There are 74 unique FIRE tenants actively touring 5k sf spaces in Midtown. GREAT choice! This is the second most active tenant profile in the market for 10k sf spaces (just behind our 'Other' profile, which includes Healthcare and Government organizations).",
      order: 1
    },
    {
      text: "TAMI",
      tooltip: "Tech, Media, Advertising & Internet",
      parent_question_id: 4,
      to_question_id: 7,
      after_text:
        "There are 22 unique TAMI tenants actively touring 10k sf spaces in Midtown. Not bad, but your best bet would have been to target FIRE tenants (there are 99 FIRE tenants actively touring 10k sf spaces in Midtown).",
      order: 2
    },
    {
      text: "Pro. Services",
      tooltip:
        "Legal, Accounting, Architecture, Executive Staffing, Construction & Engineering",
      parent_question_id: 4,
      to_question_id: 7,
      after_text:
        "There are 27 unique Pro. Services tenants actively touring 5k sf spaces in Midtown. Not bad, but your best bet would have been to target the 'Other' tenant profile, which includes Healthcare and Government organizations (there are 76 'Other' tenants actively touring 5k sf spaces in Midtown).",
      order: 3
    },
    {
      text: "Other",
      tooltip:
        "Government, Healthcare, Assoc. / Non Profit, Energy, Hospitality, Transportation, Consumer",
      parent_question_id: 4,
      to_question_id: 7,
      after_text:
        "There are 76 unique 'Other' tenants actively touring 5k sf spaces in Midtown. GREAT choice! This is the most active tenant profile for 5k sf spaces in the market. ",
      order: 4
    },
  
    //1 SPACE
    {
      text: "FIRE",
      tooltip: "Finance, Insurance, Real Estate & Flex Providers",
      parent_question_id: 5,
      to_question_id: 8,
      after_text:
        "There are 79 unique FIRE tenants actively touring 20k sf spaces in Midtown. GREAT choice! This is the most active tenant profile in the market for 20k sf spaces.",
      order: 1
    },
    {
      text: "TAMI",
      tooltip: "Tech, Media, Advertising & Internet",
      parent_question_id: 5,
      to_question_id: 8,
      after_text:
        "There are 22 unique TAMI tenants actively touring 20k sf spaces in Midtown. Not bad, but your best bet would have been to target FIRE tenants (there are 79 FIRE tenants actively touring 20k sf spaces in Midtown).",
      order: 2
    },
    {
      text: "Pro. Services",
      tooltip:
        "Legal, Accounting, Architecture, Executive Staffing, Construction & Engineering",
      parent_question_id: 5,
      to_question_id: 8,
      after_text:
        "There are 16 unique Pro. Services tenants actively touring 20k sf spaces in Midtown. Not bad, but your best bet would have been to target FIRE tenants (there are 79 FIRE tenants actively touring 20k sf spaces in Midtown).",
      order: 3
    },
    {
      text: "Other",
      tooltip:
        "Government, Healthcare, Assoc. / Non Profit, Energy, Hospitality, Transportation, Consumer",
      parent_question_id: 5,
      to_question_id: 8,
      after_text:
        "There are 23 unique 'Other' tenants actively touring 20k sf spaces in Midtown. Not bad, but your best bet would have been to target FIRE tenants (there are 79 FIRE tenants actively touring 20k sf spaces in Midtown).",
      order: 4
    },
  
    {
      text: "Keep it raw and unfinished",
      parent_question_id: 6,
      to_question_id: 9,
      after_text:
        "An understandable choice! You're bound to attract some eyeballs online as you bring your listing to market, but whiteboxing or pre-building the space would have been more attractive. According to VTS Market, 10k sf whitebox listings are averaging over 40% more online engagement, and pre-built listings are averaging over 2x more online engagement than raw listings of the same size.",
      order: 1
    },
    {
      text: "White box the floor",
      parent_question_id: 6,
      to_question_id: 10,
      after_text:
        "Solid choice! According to VTS Market, 10k sf whitebox listings are averaging 40% more online engagement than raw listings of the same size. However, pre-built listings of the same size average about 40% more online engagement than whitebox listings.",
      order: 2
    },
    {
      text: "Pre-build and finish the floor",
      parent_question_id: 6,
      to_question_id: 11,
      after_text:
        "Great choice! According to VTS Market, 10k sf pre-built listings are averaging 40% more online engagement than whitebox listings and over 2x more online engagement than raw listings of the same size.",
      order: 3
    },
  
    {
      text: "Keep it raw and unfinished",
      parent_question_id: 7,
      to_question_id: 9,
      after_text:
        "An understandable choice! You're bound to attract some eyeballs online as you bring your listing to market, but whiteboxing or pre-building the space would have been more attractive. According to VTS Market, 10k sf whitebox listings are averaging over 40% more online engagement, and pre-built listings are averaging over 2x more online engagement than raw listings of the same size.",
      order: 1
    },
    {
      text: "White box the floor",
      parent_question_id: 7,
      to_question_id: 10,
      after_text:
        "Solid choice! According to VTS Market, 10k sf whitebox listings are averaging 40% more online engagement than raw listings of the same size. However, pre-built listings of the same size average about 40% more online engagement than whitebox listings.",
      order: 2
    },
    {
      text: "Pre-build and finish the floor",
      parent_question_id: 7,
      to_question_id: 11,
      after_text:
        "Great choice! According to VTS Market, 10k sf pre-built listings are averaging 40% more online engagement than whitebox listings and over 2x more online engagement than raw listings of the same size.",
      order: 3
    },
  
    {
      text: "Keep it raw and unfinished",
      parent_question_id: 8,
      to_question_id: 9,
      after_text:
        "An understandable choice! You're bound to attract some eyeballs online as you bring your listing to market, but whiteboxing or pre-building the space would have been more attractive. According to VTS Market, 10k sf whitebox listings are averaging over 40% more online engagement, and pre-built listings are averaging over 2x more online engagement than raw listings of the same size.",
      order: 1
    },
    {
      text: "White box the floor",
      parent_question_id: 8,
      to_question_id: 10,
      after_text:
        "Solid choice! According to VTS Market, 10k sf whitebox listings are averaging 40% more online engagement than raw listings of the same size. However, pre-built listings of the same size average about 40% more online engagement than whitebox listings.",
      order: 2
    },
    {
      text: "Pre-build and finish the floor",
      parent_question_id: 8,
      to_question_id: 11,
      after_text:
        "Great choice! According to VTS Market, 10k sf pre-built listings are averaging 40% more online engagement than whitebox listings and over 2x more online engagement than raw listings of the same size.",
      order: 3
    },
  
    {
      text: "Video",
      parent_question_id: 12,
      to_question_id: 'review',
      redirect_id: 15,
      after_text:
        "Solid choice! According to VTS market, videos of raw listings in Midtown are more likely to get viewed than a Matterport of the space. However, your best bet would have been to get a 3D rendering created which is 10% more likely to get viewed.",
      order: 1,
      image: "https://thejhubbs.github.io/assets/ny.png"
    },
    {
      text: "3D Rendering",
      parent_question_id: 12,
      to_question_id: 'review',
      redirect_id: 15,
      after_text:
        "Great choice! According to VTS Market, over the last 90 days, 3D renderings of raw listings are 10% more likely to get viewed than a video, while Matterports are uncommonly used for raw spaces (just two published in the last 90 days).",
      order: 2,
      image: "https://thejhubbs.github.io/assets/ny.png"
    },
    {
      text: "Matterport",
      parent_question_id: 12,
      to_question_id: 'review',
      redirect_id: 15,
      after_text:
        "An interesting choice! It's quite uncommon to see Matterports for raw listings (just two published in the last 90 days from VTS Market). Your best bet would have been to get a 3D rendering created, which is at least 10% more likely to be viewed than any other virtual tour type. ",
      order: 3,
      image: "https://thejhubbs.github.io/assets/ny.png"
    },
  
    {
      text: "Video",
      parent_question_id: 13,
      to_question_id: 'review',
      redirect_id: 15,
      after_text:
        "Solid choice! According to VTS Market, videos of whitebox listings are more likely to get viewed than a video of the space. However, your best bet would have been to get a Matterport created, which is 3X more likely to get viewed.",
      order: 1,
      image: "https://thejhubbs.github.io/assets/ny.png"
    },
    {
      text: "3D Rendering",
      parent_question_id: 13,
      to_question_id:  'review',
      redirect_id:15,
      after_text:
        "An understandable choice! 3D renderings can be highly engaging, but there were better options for your whitebox listing. According to VTS Market, videos of whitebox listings are over 2X more likely to be viewed), and Matterports are over 3X more likely to be viewed.",
      order: 2,
      image: "https://thejhubbs.github.io/assets/ny.png"
    },
    {
      text: "Matterport",
      parent_question_id: 13,
      to_question_id: 'review',
      redirect_id: 15,
      after_text:
        "Great choice! According to VTS Market, Matterports are the most engaged-with virtual tour type for whitebox listings, as they are 36% more likely to be viewed than videos and 3X more likely to be viewed than a 3D rendering.. ",
      order: 3,
      image: "https://thejhubbs.github.io/assets/ny.png"
    },
  
    {
      text: "Video",
      parent_question_id: 14,
      to_question_id: 'review',
      redirect_id: 15,
      after_text:
        "Great choice! According to VTS Market, over the last 90 days videos of pre-built listings are 3X more likely to get viewed than a 3D rendering or Matterport.",
      order: 1,
      image: "https://thejhubbs.github.io/assets/ny.png"
    },
    {
      text: "3D Rendering",
      parent_question_id: 14,
      to_question_id: 'review',
      redirect_id: 15,
      after_text:
        "An interesting choice! 3D renderings can be highly engaging (we've seen as many as 31 rendering views for a single pre-built listing), but videos are 3X more likely to get viewed according to VTS Market.",
      order: 2,
      image: "https://thejhubbs.github.io/assets/ny.png"
    },
    {
      text: "Matterport",
      parent_question_id: 14,
      to_question_id: 'review',
      redirect_id: 15,
      after_text:
        "An understandable choice! According to VTS Market, Matterports are a commonly-used virtual tour type for pre-built listings. However, your best bet would have been to get a video created for your pre-built listing, which is 3X more likely to get viewed.",
      order: 3,
      image: "https://thejhubbs.github.io/assets/ny.png"
    },
  
    {
      text: "Onsite Cafe",
      parent_question_id: 15,
      to_question_id: "answers6",
      after_text: "Solid! If you build it, they will (probably) come.",
      statistic: "12",
      order: 1,
      image: "https://thejhubbs.github.io/assets/ny.png"
    },
    {
      text: "Fitness Center",
      parent_question_id: 15,
      to_question_id: "answers6",
      after_text:
        "Boo-yah! Excellent choice, that amenity will really get the tenants going.",
        statistic: "76",
      order: 2,
      image: "https://thejhubbs.github.io/assets/ny.png"
    },
    {
      text: "Tenant Lounge",
      parent_question_id: 15,
      to_question_id: "answers6",
      after_text:
        "Ok! There are more popular options, but you didn't become a success by doing what everyone else is doing - right?",
        statistic: "2",
      order: 3,
      image: "https://thejhubbs.github.io/assets/ny.png"
    },
    {
      text: "Outdoor Space",
      parent_question_id: 15,
      to_question_id: "answers6",
      after_text:
        "Ok! There are more popular options, but you didn't become a success by doing what everyone else is doing - right?",
        statistic: "10",
      order: 4,
      image: "https://thejhubbs.github.io/assets/ny.png"
    }
  ];