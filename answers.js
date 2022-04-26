
  let answers = [
    {
      text: "New York | Midtown South",
      parent_question_id: 1,
      //to_question_id: 2,
      to_question_id: 'prequestions',
      redirect_id: 2,
      after_text:
        "Good choice! Tenant requirements have grown 121% year-over-year in Midtown NYC, so the market is recovering...just not as fast as South Financial District in San Francisco (152% year-over-year growth in tenant requirements).",
      order: 1,
      image: "./Main-NYC.png"
    },
    {
      text: "Chicago | Fulton Market",
      parent_question_id: 1,
      //to_question_id: 6,
      to_question_id: 'prequestions',
      redirect_id: 22,
      after_text:
        "Good choice! Tenant requirements have grown 105% year-over-year in Fulton Market, so the market is recovering...just not as fast as South Financial District in San Francisco (152% year-over-year growth in tenant requirements) or Midtown NYC (121% year-over-year growth in tenant requirements).",
      order: 2,
      image: "./Main-Chicago.png"
    },
    {
      text: "San Francisco | South Financial",
      parent_question_id: 1,
      //to_question_id: 'summary',
      to_question_id: 'prequestions',
      redirect_id: 42,
      after_text:
        "Great choice! In fact - it's the best choice on the board with 152% year-over-year growth in tenant requirements...not that Fulton Market or Midtown NYC would've been bad choices (105% year-over-year growth and 121% year-over-year growth in tenant requirements, respectively).",
      order: 3,
      image: "./Main-SanFran.png"
    },
  
    {
      text: "2 Spaces (10k sf each)",
      parent_question_id: 2,
      to_question_id: 3,
      after_text:
        "There are 104 active tenant requirements per available 10k rsf space in Midtown. You've got a great chance to get tenant tours! Your odds would be even better if you kept the floor as-is (there are 164 active tenant requirements per available 20k sf space in Midtown). ",
      order: 1
    },
    {
      text: "4 Spaces (5k sf each)",
      parent_question_id: 2,
      to_question_id: 4,
      after_text:
        "There are 49 active tenant requirements per available 5k rsf space in Midtown. You've got a decent chance to get tenant tours! Your odds would be even better if you chose to break up the floor into two spaces or keep the floor as-is (there are 104 active tenant requirements per available 10k rsf space, and 164 active tenant requirements per available 20k sf space in Midtown).",
      order: 2
    },
    {
      text: "I want to keep the floor as-is",
      parent_question_id: 2,
      to_question_id: 5,
      after_text:
        "There are 164 active tenant requirements per available 20k rsf space in Midtown. You have amazing odds to get tenant tours! Had you chosen to break up the floor into 2 or 4 spaces, your chances would be lower (there are 104 active tenant requirements per available 10k rsf space, and 49 active tenant requirements per available 5k rsf space in Midtown).",
      order: 3
    },
  
    //2 SPACES
    {
      text: "FIRE",
      tooltip: "Finance, Insurance, Real Estate & Flex Providers",
      parent_question_id: 3,
      to_question_id: 6,
      after_text:
        "There are 98 unique FIRE tenants actively touring 10k sf spaces in Midtown. GREAT choice! This is the most active tenant profile in the market for 10k sf spaces.",
      order: 1
    },
    {
      text: "TAMI",
      tooltip: "Tech, Media, Advertising & Internet",
      parent_question_id: 3,
      to_question_id: 6,
      after_text:
        "There are 25 unique TAMI tenants actively touring 10k sf spaces in Midtown. Not bad, but your best bet would have been to target FIRE tenants (there are 98 FIRE tenants actively touring 10k sf spaces in Midtown). ",
      order: 2
    },
    {
      text: "Pro. Services",
      tooltip:
        "Legal, Accounting, Architecture, Executive Staffing, Construction & Engineering",
      parent_question_id: 3,
      to_question_id: 6,
      after_text:
        "There are 23 unique Pro. Services tenants actively touring 10k sf spaces in Midtown. Not bad, but your best bet would have been to target FIRE tenants (there are 98 FIRE tenants actively touring 10k sf spaces in Midtown). ",
      order: 3
    },
    {
      text: 'Other',
      tooltip:
        "Government, Healthcare, Assoc. / Non Profit, Energy, Hospitality, Transportation, Consumer",
      parent_question_id: 3,
      to_question_id: 6,
      after_text:
        "There are 61 unique 'Other' tenants actively touring 10k sf spaces in Midtown. Pretty good! Your best bet would have been to target FIRE tenants (there are 98 FIRE tenants actively touring 10k sf spaces in Midtown). ",
      order: 4
    },
  
    //4 SPACES
    {
      text: "FIRE",
      tooltip: "Finance, Insurance, Real Estate & Flex Providers",
      parent_question_id: 4,
      to_question_id: 7,
      after_text:
        "There are 75 unique FIRE tenants actively touring 5k sf spaces in Midtown. GREAT choice! This is the second most active tenant profile in the market for 10k sf spaces (just behind our 'Other' profile, which includes Healthcare and Government organizations). ",
      order: 1
    },
    {
      text: "TAMI",
      tooltip: "Tech, Media, Advertising & Internet",
      parent_question_id: 4,
      to_question_id: 7,
      after_text:
        "There are 21 unique TAMI tenants actively touring 5k sf spaces in Midtown. Not bad, but your best bet would have been to target the 'Other' tenant profile, which includes Healthcare and Government organizations (there are 78 'Other' tenants actively touring 5k sf spaces in Midtown).",
      order: 2
    },
    {
      text: "Pro. Services",
      tooltip:
        "Legal, Accounting, Architecture, Executive Staffing, Construction & Engineering",
      parent_question_id: 4,
      to_question_id: 7,
      after_text:
        "There are 23 unique Pro. Services tenants actively touring 5k sf spaces in Midtown. Not bad, but your best bet would have been to target the 'Other' tenant profile, which includes Healthcare and Government organizations (there are 78 'Other' tenants actively touring 5k sf spaces in Midtown).",
      order: 3
    },
    {
      text: 'Other',
      tooltip:
        "Government, Healthcare, Assoc. / Non Profit, Energy, Hospitality, Transportation, Consumer",
      parent_question_id: 4,
      to_question_id: 7,
      after_text:
        "There are 78 unique 'Other' tenants actively touring 5k sf spaces in Midtown. GREAT choice! This is the most active tenant profile for 5k sf spaces in the market. ",
      order: 4
    },
  
    //1 SPACE
    {
      text: "FIRE",
      tooltip: "Finance, Insurance, Real Estate & Flex Providers",
      parent_question_id: 5,
      to_question_id: 8,
      after_text:
        "There are 91 unique FIRE tenants actively touring 20k sf spaces in Midtown. GREAT choice! This is the most active tenant profile in the market for 20k sf spaces.",
      order: 1
    },
    {
      text: "TAMI",
      tooltip: "Tech, Media, Advertising & Internet",
      parent_question_id: 5,
      to_question_id: 8,
      after_text:
        "There are 21 unique TAMI tenants actively touring 20k sf spaces in Midtown. Not bad, but your best bet would have been to target FIRE tenants (there are 91 FIRE tenants actively touring 20k sf spaces in Midtown).",
      order: 2
    },
    {
      text: "Pro. Services",
      tooltip:
        "Legal, Accounting, Architecture, Executive Staffing, Construction & Engineering",
      parent_question_id: 5,
      to_question_id: 8,
      after_text:
        "There are 15 unique Pro. Services tenants actively touring 20k sf spaces in Midtown. Not bad, but your best bet would have been to target FIRE tenants (there are 91 FIRE tenants actively touring 20k sf spaces in Midtown).",
      order: 3
    },
    {
      text: 'Other',
      tooltip:
        "Government, Healthcare, Assoc. / Non Profit, Energy, Hospitality, Transportation, Consumer",
      parent_question_id: 5,
      to_question_id: 8,
      after_text:
        "There are 37 unique 'Other' tenants actively touring 20k sf spaces in Midtown. Not bad, but your best bet would have been to target FIRE tenants (there are 91 FIRE tenants actively touring 20k sf spaces in Midtown).",
      order: 4
    },
  
    {
      text: "Keep it raw and unfurnished",
      parent_question_id: 6,
      to_question_id: 9,
      after_text:
        "An understandable choice! You're bound to attract some eyeballs online, but white boxing or pre-building the space would have been more attractive. According to VTS Market, 10k sf white box listings are averaging over 83% more online engagement, and pre-built listings are averaging nearly 2x more online engagement than raw listings of the same size in Midtown.",
      order: 1
    },
    {
      text: "White box the floor",
      parent_question_id: 6,
      to_question_id: 10,
      after_text:
        "Solid choice! According to VTS Market, 10k sf white box listings are averaging 83% more online engagement than raw listings of the same size in Midtown. However, pre-built listings of the same size average about 12% more online engagement than white box listings. ",
      order: 2
    },
    {
      text: "Pre-build and finish the floor",
      parent_question_id: 6,
      to_question_id: 11,
      after_text:
        "Great choice! According to VTS Market, 10k sf pre-built listings are averaging nearly 2x more online engagement than raw listings and 12% more online engagement than white box listings of the same size in Midtown.",
      order: 3
    },
  
    {
      text: "Keep it raw and unfurnished",
      parent_question_id: 7,
      to_question_id: 9,
      after_text:
        "An understandable choice! You're bound to attract some eyeballs online, but white boxing or pre-building the space would have been more attractive. According to VTS Market, 5k sf white box listings are averaging over 2x more online engagement, and prebuilt listings are averaging nearly 4x more online engagement than raw listings of the same size in Midtown.",
      order: 1
    },
    {
      text: "White box the floor",
      parent_question_id: 7,
      to_question_id: 10,
      after_text:
        "Solid choice! According to VTS Market, 5k sf white box listings are averaging over 2x more online engagement than raw listings of the same size in Midtown. However, pre-built listings of the same size average about 86% more online engagement than white box listings.",
      order: 2
    },
    {
      text: "Pre-build and finish the floor",
      parent_question_id: 7,
      to_question_id: 11,
      after_text:
        "Great choice! According to VTS Market, 5k sf pre-built listings are averaging 86% more online engagement than white box listings and nearly 4x more online engagement than raw listings of the same size in Midtown.",
      order: 3
    },
  
    {
      text: "Keep it raw and unfurnished",
      parent_question_id: 8,
      to_question_id: 9,
      after_text:
        "Solid choice! According to VTS Market, 20k sf raw listings are averaging almost 3x more online engagement than pre-built listings of the same size in Midtown. However, white box listings of the same size average about 20% more online engagement than raw listings.",
      order: 1
    },
    {
      text: "White box the floor",
      parent_question_id: 8,
      to_question_id: 10,
      after_text:
        "Great choice! According to VTS Market, 20k sf white box listings are averaging over 3x more online engagement than pre-built listings and 20% more online engagement than raw listings of the same size in Midtown.",
      order: 2
    },
    {
      text: "Pre-build and finish the floor",
      parent_question_id: 8,
      to_question_id: 11,
      after_text:
        "An understandable choice! You're bound to attract some eyeballs online, but white boxing or keeping the space as-is would have been more attractive. According to VTS Market, 20k sf white box listings are averaging over 3x more online engagement, and raw listings are averaging nearly 3x more online engagement than pre-built listings of the same size in Midtown.",
      order: 3
    },
  
    {
      text: "Video",
      parent_question_id: 12,
      to_question_id: 'review',
      redirect_id: 15,
      after_text:
        "Great choice! According to VTS Market, a video of a raw listing in Midtown is 2x more likely to be viewed than a 3D rendering, while Matterports are uncommonly used (just two published for raw Midtown listings in 2022). ",
      order: 1,
      image: "./100 Causeway.gif"
    },
    {
      text: "3D Rendering",
      parent_question_id: 12,
      to_question_id: 'review',
      redirect_id: 15,
      after_text:
        "Solid choice! According to VTS Market, Matterports are uncommonly used for raw listings (just two published for raw Midtown listings in 2022). However, a video of a raw listing in Midtown is 2x more likely to be viewed than a 3D rendering.",
      order: 2,
      image: "./Brookfield1.gif"
    },
    {
      text: "Matterport",
      parent_question_id: 12,
      to_question_id: 'review',
      redirect_id: 15,
      after_text:
        "An interesting choice! It's quite uncommon to see Matterports for raw listings. According to VTS Market, just two Matterports have been published for raw Midtown listings in 2022. Your best bet would have been to get a video created, which is 2x more likely to be viewed than any virtual tour type for a raw Midtown listing.",
      order: 3,
      image: "./Matterport.gif"
    },
  
    {
      text: "Video",
      parent_question_id: 13,
      to_question_id: 'review',
      redirect_id: 15,
      after_text:
        "Great choice! According to VTS Market, a video of a white box listing in Midtown is about 6x more likely to get viewed than a 3D rendering and about 10% more likely to get viewed than a Matterport.",
      order: 1,
      image: "./100 Causeway.gif"
    },
    {
      text: "3D Rendering",
      parent_question_id: 13,
      to_question_id:  'review',
      redirect_id:15,
      after_text:
        "An understandable choice! 3D renderings can be highly engaging, but there were better options. According to VTS Market, a video of a white box listing in Midtown is about 6x more likely to get viewed, and a Matterport is about 5x more likely to be viewed than a 3D rendering.",
      order: 2,
      image: "./Brookfield1.gif"
    },
    {
      text: "Matterport",
      parent_question_id: 13,
      to_question_id: 'review',
      redirect_id: 15,
      after_text:
        "Solid choice! According to VTS Market, a Matterport of a white box listing in Midtown is about 5x more likely to get viewed than a 3D rendering. However, a video of a white box listing in Midtown is about 10% more likely to be viewed than a Matterport.",
      order: 3,
      image: "./Matterport.gif"
    },
  
    {
      text: "Video",
      parent_question_id: 14,
      to_question_id: 'review',
      redirect_id: 15,
      after_text:
        "Great choice! According to VTS Market, a video of a pre-built listing in Midtown is about 9x more likely to get viewed than a 3D rendering and about 3x more likely to get viewed than a Matterport.",
      order: 1,
      image: "./100 Causeway.gif"
    },
    {
      text: "3D Rendering",
      parent_question_id: 14,
      to_question_id: 'review',
      redirect_id: 15,
      after_text:
        "An understandable choice! 3D renderings can be highly engaging, but there were better options. According to VTS Market, a video of a pre-built listing in Midtown is about 9x more likely to get viewed, and a Matterport is about 3x more likely to be viewed than a 3D rendering.",
      order: 2,
      image: "./Brookfield1.gif"
    },
    {
      text: "Matterport",
      parent_question_id: 14,
      to_question_id: 'review',
      redirect_id: 15,
      after_text:
        "Solid choice! According to VTS Market, a Matterport of a pre-built listing in Midtown is about 3x more likely to get viewed than a 3D rendering. However, a video of a pre-built listing in Midtown is over 3x more likely to be viewed than a Matterport.",
      order: 3,
      image: "./Matterport.gif"
    },
  
    {
      text: "Flex Office Floor",
      parent_question_id: 15,
      to_question_id: "answers6",
      after_text: "Boo-yah! Excellent choice, that amenity will really get the tenants going.",
      statistic: "93",
      order: 1,
      image: "./flexspace.jpeg"
    },
    {
      text: "Fitness Center",
      parent_question_id: 15,
      to_question_id: "answers6",
      after_text:
        "Solid! If you build it, they will (probably) come.",
        statistic: "5",
      order: 2,
      image: "./3.png"
    },
    {
      text: "Tenant Lounge",
      parent_question_id: 15,
      to_question_id: "answers6",
      after_text:
        "Ok! There are more popular options, but you didn't become a success by doing what everyone else is doing - right?",
        statistic: "1",
      order: 3,
      image: "./Tenant Lounge.png"
    },
    {
      text: "Outdoor Space",
      parent_question_id: 15,
      to_question_id: "answers6",
      after_text:
        "Ok! There are more popular options, but you didn't become a success by doing what everyone else is doing - right?",
        statistic: "1",
      order: 4,
      image: "./2.png"
    },









































    
      {
        text: "2 Spaces (10k sf each)",
        parent_question_id: 22,
        to_question_id: 23,
        after_text:
          "There are 6 active tenant requirements per available 10k rsf space in Fulton Market. It's competitive out there! Your odds to get tenant tours would be better if you kept the floor as-is (there are 21 active tenant requirements per available 20k sf space in Fulton Market). ",
        order: 1
      },
      {
        text: "4 Spaces (5k sf each)",
        parent_question_id: 22,
        to_question_id: 24,
        after_text:
          "There are 7 active tenant requirements per available 5k rsf space in Fulton Market. It's a competitive market to get tenant tours! Your odds would be better if you chose to break up the floor into two spaces of keep the floor as-is (there are 6 active tenant requirements per available 10k rsf space and 21 active tenant requirements per available 20k sf space in Fulton Market). ",
        order: 2
      },
      {
        text: "I want to keep the floor as-is",
        parent_question_id: 22,
        to_question_id: 25,
        after_text:
          "There are 21 active tenant requirements per available 20k rsf space in Fulton Market. You have good odds to get tenant tours! Had you chosen to break up the floor into 2 or 4 spaces, your chances would be lower (there are 6 active tenant requirements per available 10k rsf space, and 7 active tenant requirements per available 5k rsf space in Fulton Market).",
        order: 3
      },
    
      //2 SPACES
      {
        text: "FIRE",
        tooltip: "Finance, Insurance, Real Estate & Flex Providers",
        parent_question_id: 23,
        to_question_id: 26,
        after_text:
          "There are 3 unique FIRE tenants actively touring 10k sf spaces in Fulton Market. It's very competitive out there, but hey - it's competitive to attract any specific tenant segment in this submarket (your best bet would have been to target the 'Other' tenant profile, which includes Healthcare and Government organizations).",
        order: 1
      },
      {
        text: "TAMI",
        tooltip: "Tech, Media, Advertising & Internet",
        parent_question_id: 23,
        to_question_id: 26,
        after_text:
          "There are 2 unique TAMI tenants actively touring 10k sf spaces in Fulton Market. It's very competitive out there, but hey - it's competitive to attract any specific tenant segment in this submarket (your best bet would have been to target the 'Other' tenant profile, which includes Healthcare and Government organizations).",
        order: 2
      },
      {
        text: "Pro. Services",
        tooltip:
          "Legal, Accounting, Architecture, Executive Staffing, Construction & Engineering",
        parent_question_id: 23,
        to_question_id: 26,
        after_text:
          "Ooof, a Sammy Sosa-sized swing and miss. As of April 2022 there are zero Pro. Services tenants actively touring 10k sf spaces in Fulton Market. Your best bet would have been to target the 'Other' tenant profile, which includes Healthcare and Government organizations (also very competitive, but there are 6 'Other' tenants actively touring 10k sf spaces in Fulton Market).",
        order: 3
      },
      {
        text: 'Other',
        tooltip:
          "Government, Healthcare, Assoc. / Non Profit, Energy, Hospitality, Transportation, Consumer",
        parent_question_id: 23,
        to_question_id: 26,
        after_text:
          "There are 6 unique 'Other' tenants actively touring 10k sf spaces in Fulton Market. Not a ton of activity, but! This is most active tenant profile for 10k sf spaces in the market, so good job!",
        order: 4
      },
    
      //4 SPACES
      {
        text: "FIRE",
        tooltip: "Finance, Insurance, Real Estate & Flex Providers",
        parent_question_id: 24,
        to_question_id: 27,
        after_text:
          "There are 4 FIRE tenants actively touring 5k sf spaces in Fulton Market. Super competitive! Your best bet would have been to target the 'Other' tenant profile, which includes Healthcare and Government organizations (there are 13 'Other' tenants actively touring 5k sf spaces in Fulton Market).",
        order: 1
      },
      {
        text: "TAMI",
        tooltip: "Tech, Media, Advertising & Internet",
        parent_question_id: 24,
        to_question_id: 27,
        after_text:
          "There are 5 unique TAMI tenants actively touring 5k sf spaces in Fulton Market. Super competitive! Your best bet would have been to target the 'Other' tenant profile, which includes Healthcare and Government organizations (there are 13 'Other' tenants actively touring 5k sf spaces in Fulton Market).",
        order: 2
      },
      {
        text: "Pro. Services",
        tooltip:
          "Legal, Accounting, Architecture, Executive Staffing, Construction & Engineering",
        parent_question_id: 24,
        to_question_id: 27,
        after_text:
          "There are 4 unique Pro. Services tenants actively touring 5k sf spaces in Fulton Market. Not a bad choice! Your best bet would have been to target the 'Other' tenant profile, which includes Healthcare and Government organizations (there are 13 'Other' tenants actively touring 5k sf spaces in Fulton Market).",
        order: 3
      },
      {
        text: 'Other',
        tooltip:
          "Government, Healthcare, Assoc. / Non Profit, Energy, Hospitality, Transportation, Consumer",
        parent_question_id: 24,
        to_question_id: 27,
        after_text:
          "There are 13 unique 'Other' tenants actively touring 5k sf spaces in Fulton Market. Nice work! This is most active tenant profile in the market for 5k sf spaces.",
        order: 4
      },
    
      //1 SPACE
      {
        text: "FIRE",
        tooltip: "Finance, Insurance, Real Estate & Flex Providers",
        parent_question_id: 25,
        to_question_id: 28,
        after_text:
          "There are 3 unique FIRE tenants actively touring 20k sf spaces in Fulton Market. Super competitive! Your best bet would have been to target the 'Other' tenant profile, which includes Healthcare and Government organizations (also very competitive, but there are 8 'Other' tenants actively touring 20k sf spaces in Fulton Market). ",
        order: 1
      },
      {
        text: "TAMI",
        tooltip: "Tech, Media, Advertising & Internet",
        parent_question_id: 25,
        to_question_id: 28,
        after_text:
          "There are 3 unique TAMI tenants actively touring 20k sf spaces in Fulton Market. It's very competitive out there! Your best bet would have been to target the 'Other' tenant profile, which includes Healthcare and Government organizations (also very competitive, but there are 8 'Other' tenants actively touring 20k sf spaces in Fulton Market).",
        order: 2
      },
      {
        text: "Pro. Services",
        tooltip:
          "Legal, Accounting, Architecture, Executive Staffing, Construction & Engineering",
        parent_question_id: 25,
        to_question_id: 28,
        after_text:
          "There are 7 unique Pro. Services tenants actively touring 20k sf spaces in Fulton Market. Not a bad choice! A (slightly) better choice would have been to target the 'Other' tenant profile, which includes Healthcare and Government organizations (there are 8 'Other' tenants actively touring 20k sf spaces in Fulton Market).",
        order: 3
      },
      {
        text: 'Other',
        tooltip:
          "Government, Healthcare, Assoc. / Non Profit, Energy, Hospitality, Transportation, Consumer",
        parent_question_id: 25,
        to_question_id: 28,
        after_text:
          "There are 8 unique 'Other' tenants actively touring 20k sf spaces in Fulton Market. Not a ton of activity, but! This is the most active tenant profile for 20k sf space in the market, so good job!",
        order: 4
      },
    
      {
        text: "Keep it raw and unfurnished",
        parent_question_id: 26,
        to_question_id: 29,
        after_text:
          "Solid choice! According to VTS Market, 10k sf raw listings are averaging 2x more online engagement than white box listings of the same size in Chicago. However, pre-built listings of the same size average over 10x more online engagement than raw listings. ",
        order: 1
      },
      {
        text: "Keep it raw and unfurnished",
        parent_question_id: 27,
        to_question_id: 29,
        after_text:
          "Solid choice! According to VTS Market, 5k sf raw listings are averaging over 3x more online engagement than white box listings of the same size in Chicago. However, pre-built listings of the same size average over 5x more online engagement than raw listings. ",
        order: 1
      },
      {
        text: "Keep it raw and unfurnished",
        parent_question_id: 28,
        to_question_id: 29,
        after_text:
          "An understandable choice! You're bound to attract some eyeballs online, but white boxing or pre-building the space would have been more attractive. According to VTS Market, 20k sf pre-built listings are averaging over 3x more online engagement, and white box listings are averaging nearly over 10x more online engagement than raw listings of the same size in Chicago.",
        order: 1
      },
      {
        text: "White box the floor",
        parent_question_id: 26,
        to_question_id: 30,
        after_text:
          "An understandable choice! You're bound to attract some eyeballs online, but pre-building the space or keeping it raw would have been more attractive. According to VTS Market, 10k sf raw listings are averaging over 2x more online engagement, and pre-built listings are averaging nearly over 10x more online engagement than white box listings of the same size in Chicago.",
        order: 2
      },
      {
        text: "White box the floor",
        parent_question_id: 27,
        to_question_id: 30,
        after_text:
          "An understandable choice! You're bound to attract some eyeballs online, but pre-building the space or keeping it raw would have been more attractive. According to VTS Market, 10k sf raw listings are averaging over 3x more online engagement, and pre-built listings are averaging nearly over 10x more online engagement than white box listings of the same size in Chicago.",
        order: 2
      },
      {
        text: "White box the floor",
        parent_question_id: 28,
        to_question_id: 30,
        after_text:
          "Great choice! According to VTS Market, 20k sf white box listings are averaging over 4x more online engagement than pre-built listings and over 10x more online engagement than raw listings of the same size in Chicago.",
        order: 2
      },
      {
        text: "Pre-build and finish the floor",
        parent_question_id: 26,
        to_question_id: 31,
        after_text:
          "Great choice! According to VTS Market, 10k sf pre-built listings are averaging over 10x more online engagement than raw listings and white box listings of the same size in Chicago.",
        order: 3
      },
    
      {
        text: "Pre-build and finish the floor",
        parent_question_id: 27,
        to_question_id: 31,
        after_text:
          "Great choice! According to VTS Market, 5k sf pre-built listings are averaging over 5x more online engagement than raw listings and over 10x more online engagement than white box listings of the same size in Chicago.",
        order: 3
      },
    
      {
        text: "Pre-build and finish the floor",
        parent_question_id: 28,
        to_question_id: 31,
        after_text:
          "Solid choice! According to VTS Market, 20k sf pre-built listings are averaging 3x more online engagement than raw listings of the same size in Chicago. However, white box listings of the same size average nearly 4x more online engagement than pre-built listings. ",
        order: 3
      },
    


      {
        text: "Video",
        parent_question_id: 32,
        to_question_id: 'review',
        redirect_id: 35,
        after_text:
          "An understandable choice! Videos can be highly engaging, but there's a better option. According to VTS Market, 3D renderings are the most-viewed virtual tour type for raw listings in Chicago.",
        order: 1,
      image: "./100 Causeway.gif"
      },
      {
        text: "Video",
        parent_question_id: 33,
        to_question_id: 'review',
        redirect_id: 35,
        after_text:
          "Great choice! According to VTS Market, a video of a white box listing in Chicago is at least 9x more likely to get viewed than a 3D rendering or Matterport.",
        order: 1,
      image: "./100 Causeway.gif"
      },
    
      {
        text: "Video",
        parent_question_id: 34,
        to_question_id: 'review',
        redirect_id: 35,
        after_text:
          "Great choice! According to VTS Market, a video of a pre-built listing in Chicago is at least 4x more likely to get viewed than a 3D rendering or Matterport.",
        order: 1,
      image: "./100 Causeway.gif"
      },
      {
        text: "3D Rendering",
        parent_question_id: 32,
        to_question_id: 'review',
        redirect_id: 35,
        after_text:
          "Great choice! According to VTS Market, 3D renderings are the most-viewed virtual tour type for raw listings in Chicago.",
        order: 2,
      image: "./Brookfield1.gif"
      },
      {
        text: "3D Rendering",
        parent_question_id: 33,
        to_question_id:  'review',
        redirect_id: 35,
        after_text:
          "Solid choice! According to VTS Market, 3D renderings of white box listings in Chicago get more online engagement than Matterports. However, a video of a white box listing in Chicago is 9x more likely to be viewed than a 3D rendering. ",
        order: 2,
      image: "./Brookfield1.gif"
      },
      {
        text: "3D Rendering",
        parent_question_id: 34,
        to_question_id: 'review',
        redirect_id: 35,
        after_text:
          "Solid choice! According to VTS Market, 3D renderings of pre-built listings in Chicago get more online engagement than Matterports. However, a video of a pre-built listing in Chicago is about 4x more likely to be viewed than a 3D rendering. ",
        order: 2,
      image: "./Brookfield1.gif"
      },
      {
        text: "Matterport",
        parent_question_id: 32,
        to_question_id: 'review',
        redirect_id: 35,
        after_text:
          "An interesting choice! It's quite uncommon to see Matterports for raw listings. According to VTS Market, just one Matterport has been published for raw Chicago listings in 2022. 3D renderings are the most-viewed virtual tour type for raw listings in Chicago.",
        order: 3,
      image: "./Matterport.gif"
      },
    
      {
        text: "Matterport",
        parent_question_id: 33,
        to_question_id: 'review',
        redirect_id: 35,
        after_text:
          "An understandable choice! Matterports can be highly engaging, but there's a better option. According to VTS Market, videos are the most-viewed virtual tour type for white box listings in Chicago.",
        order: 3,
      image: "./Matterport.gif"
      },
      {
        text: "Matterport",
        parent_question_id: 34,
        to_question_id: 'review',
        redirect_id: 35,
        after_text:
          "An understandable choice! Matterports can be highly engaging, but there's a better option. According to VTS Market, a video of a pre-built listing in Chicago is at least 4x more likely to be viewed than any other virtual tour type.",
        order: 3,
      image: "./Matterport.gif"
      },
    
      {
        text: "Onsite Cafe",
        parent_question_id: 35,
        to_question_id: "answers6",
        after_text: "Boo-yah! Excellent choice, that amenity will really get the tenants going.",
        statistic: "89",
        order: 1,
        image: "./flexspace.jpeg"
      },
      {
        text: "Fitness Center",
        parent_question_id: 35,
        to_question_id: "answers6",
        after_text:
          "Solid! If you build it, they will (probably) come.",
          statistic: "7",
        order: 2,
        image: "./3.png"
      },
      {
        text: "Tenant Lounge",
        parent_question_id: 35,
        to_question_id: "answers6",
        after_text:
          "Ok! There are more popular options, but you didn't become a success by doing what everyone else is doing - right?",
          statistic: "3",
        order: 3,
        image: "./Tenant Lounge.png"
      },
      {
        text: "Outdoor Space",
        parent_question_id: 35,
        to_question_id: "answers6",
        after_text:
          "Ok! There are more popular options, but you didn't become a success by doing what everyone else is doing - right?",
          statistic: "1",
        order: 4,
        image: "./ny.png"
      },
      









































      

      {
        text: "2 Spaces (10k sf each)",
        parent_question_id: 42,
        to_question_id: 43,
        after_text:
          "There are 21 active tenant requirements per available 10k rsf space in South Financial District. You have a good chance to get tenant tours! Your odds would be even better if you kept the floor as-is (there are 32 active tenant requirements per available 20k sf space in South Financial District). ",
        order: 1
      },
      {
        text: "4 Spaces (5k sf each)",
        parent_question_id: 42,
        to_question_id: 44,
        after_text:
          "There are 8 active tenant requirements per available 5k rsf space in South Financial District. It's a competitive market to get tenant tours! Your odds would be better if you chose to break up the floor into two spaces or keep the floor as-is (there are 21 active tenant requirements per available 10k rsf space and 32 active tenant requirements per available 20k sf space in South Financial District). ",
        order: 2
      },
      {
        text: "I want to keep the floor as-is",
        parent_question_id: 42,
        to_question_id: 45,
        after_text:
          "There are 32 active tenant requirements per available 20k rsf space in South Financial District. You have great odds to get tenant tours! Had you chosen to break up the floor into 2 or 4 spaces, your chances would be lower (there are 21 active tenant requirements per available 10k rsf space, and 8 active tenant requirements per available 5k rsf space in South Financial District).",
        order: 3
      },
    
      //2 SPACES
      {
        text: "FIRE",
        tooltip: "Finance, Insurance, Real Estate & Flex Providers",
        parent_question_id: 43,
        to_question_id: 46,
        after_text:
          "There are 19 unique FIRE tenants actively touring 10k sf spaces in South Financial District. Well done! This is the most active tenant profile in the market for 10k sf spaces.",
        order: 1
      },
      {
        text: "FIRE",
        tooltip: "Finance, Insurance, Real Estate & Flex Providers",
        parent_question_id: 44,
        to_question_id: 47,
        after_text:
          "There are 11 unique FIRE tenants actively touring 5k sf spaces in South Financial District. Nice choice! This is tied for the most active tenant profile in the market for 5k sf spaces alongside Pro. Services.",
        order: 1
      },
      {
        text: "FIRE",
        tooltip: "Finance, Insurance, Real Estate & Flex Providers",
        parent_question_id: 45,
        to_question_id: 48,
        after_text:
          "There are 10 unique FIRE tenants actively touring 20k sf spaces in South Financial District. Nice choice! This is the most active tenant profile in the market for 20k sf spaces.",
        order: 1
      },
      {
        text: "TAMI",
        tooltip: "Tech, Media, Advertising & Internet",
        parent_question_id: 43,
        to_question_id: 46,
        after_text:
          "There are 11 unique TAMI tenants actively touring 10k sf spaces in South Financial District. A solid choice, albeit competitive! Your best bet would have been to target FIRE tenants (there are 19 FIRE tenants actively touring 10k sf spaces in South Financial District).",
        order: 2
      },
      {
        text: "TAMI",
        tooltip: "Tech, Media, Advertising & Internet",
        parent_question_id: 44,
        to_question_id: 47,
        after_text:
          "There are 6 unique TAMI tenants actively touring 5k sf spaces in South Financial District. It's very competitive out there! Your best bet would have been to target either FIRE or Pro. Services tenants (there are 11 FIRE and 11 Pro. Services tenants actively touring 5k sf spaces in South Financial District).",
        order: 2
      },
      {
        text: "TAMI",
        tooltip: "Tech, Media, Advertising & Internet",
        parent_question_id: 45,
        to_question_id: 48,
        after_text:
          "There are 7 unique TAMI tenants actively touring 20k sf spaces in South Financial District. A solid choice, albeit competitive! Your best bet would have been to target FIRE tenants (there are 10 FIRE tenants actively touring 20k sf spaces in South Financial District).",
        order: 2
      },
      {
        text: "Pro. Services",
        tooltip:
          "Legal, Accounting, Architecture, Executive Staffing, Construction & Engineering",
        parent_question_id: 43,
        to_question_id: 46,
        after_text:
          "There are 8 unique Pro. Services tenants actively touring 10k sf spaces in South Financial District. It's very competitive out there! Your best bet would have been to target FIRE tenants (there are 19 FIRE tenants actively touring 10k sf spaces in South Financial District).",
        order: 3
      },
      {
        text: "Pro. Services",
        tooltip:
          "Legal, Accounting, Architecture, Executive Staffing, Construction & Engineering",
        parent_question_id: 44,
        to_question_id: 47,
        after_text:
          "There are 11 unique Pro. Services tenants actively touring 5k sf spaces in South Financial District. Nice choice! This is tied for the most active tenant profile in the market for 5k sf spaces alongside FIRE organizations.",
        order: 3
      },
      {
        text: "Pro. Services",
        tooltip:
          "Legal, Accounting, Architecture, Executive Staffing, Construction & Engineering",
        parent_question_id: 45,
        to_question_id: 48,
        after_text:
          "There are 7 unique Pro. Services tenants actively touring 5k sf spaces in South Financial District. A solid choice, albeit competitive! Your best bet would have been to target FIRE tenants (there are 10 FIRE tenants actively touring 20k sf spaces in South Financial District).",
        order: 3
      },
      {
        text: 'Other',
        tooltip:
          "Government, Healthcare, Assoc. / Non Profit, Energy, Hospitality, Transportation, Consumer",
        parent_question_id: 43,
        to_question_id: 46,
        after_text:
          "There are 3 unique 'Other' tenants actively touring 10k sf spaces in South Financial District. It's very competitive out there! Your best bet would have been to target FIRE tenants (there are 19 FIRE tenants actively touring 10k sf spaces in South Financial District). ",
        order: 4
      },
    
      {
        text: 'Other',
        tooltip:
          "Government, Healthcare, Assoc. / Non Profit, Energy, Hospitality, Transportation, Consumer",
        parent_question_id: 44,
        to_question_id: 47,
        after_text:
          "There are 4 unique 'Other' tenants actively touring 5k sf spaces in South Financial District. It's very competitive out there! Your best bet would have been to target either FIRE or Pro. Services tenants (there are 11 FIRE and 11 Pro. Services tenants actively touring 5k sf spaces in South Financial District). ",
        order: 4
      },
      {
        text: 'Other',
        tooltip:
          "Government, Healthcare, Assoc. / Non Profit, Energy, Hospitality, Transportation, Consumer",
        parent_question_id: 45,
        to_question_id: 48,
        after_text:
          "There are 8 unique 'Other' tenants actively touring 5k sf spaces in South Financial District. A solid choice, albeit competitive! Your best bet would have been to target FIRE tenants (there are 10 FIRE tenants actively touring 20k sf spaces in South Financial District).",
        order: 4
      },
    

    
      {
        text: "Keep it raw and unfurnished",
        parent_question_id: 46,
        to_question_id: 49,
        after_text:
          "An understandable choice! You're bound to attract some eyeballs online, but pre-building the space would have been more attractive. According to VTS Market,10k sf pre-built listings are averaging at least 3x more online engagement than raw and white box listings of the same size in San Francisco.",
        order: 1
      },
      {
        text: "Keep it raw and unfurnished",
        parent_question_id: 47,
        to_question_id: 49,
        after_text:
          "An understandable choice! You're bound to attract some eyeballs online, but pre-building the space would have been more attractive. According to VTS Market, 5k sf pre-built listings are averaging over 10x more online engagement than raw and white box listings of the same size in San Francisco.",
        order: 1
      },
      {
        text: "Keep it raw and unfurnished",
        parent_question_id: 48,
        to_question_id: 49,
        after_text:
          "An understandable choice! You're bound to attract some eyeballs online, but pre-building the space would have been more attractive. According to VTS Market, 20k sf pre-built listings are averaging over 10x more online engagement than raw and white box listings of the same size in San Francisco.",
        order: 1
      },
      {
        text: "White box the floor",
        parent_question_id: 46,
        to_question_id: 50,
        after_text:
          "Solid choice! According to VTS Market, 10k sf white box listings are averaging more online engagement than raw listings of the same size in San Francisco. However, pre-built listings of the same size average nearly 3x more online engagement than white box listings. ",
        order: 2
      },
      {
        text: "White box the floor",
        parent_question_id: 47,
        to_question_id: 50,
        after_text:
          "Solid choice! According to VTS Market, 5k sf white box listings are averaging more online engagement than raw listings of the same size in San Francisco. However, pre-built listings of the same size average over 10x more online engagement than white box listings. ",
        order: 2
      },
      {
        text: "White box the floor",
        parent_question_id: 48,
        to_question_id: 50,
        after_text:
          "Solid choice! According to VTS Market, 20k sf white box listings are averaging more online engagement than raw listings of the same size in San Francisco. However, pre-built listings of the same size average over 10x more online engagement than white box listings. ",
        order: 2
      },
      {
        text: "Pre-build and finish the floor",
        parent_question_id: 46,
        to_question_id: 51,
        after_text:
          "Great choice! According to VTS Market,10k sf pre-built listings are averaging at least 3x more online engagement than raw and white box listings of the same size in San Francisco.",
        order: 3
      },
    
      {
        text: "Pre-build and finish the floor",
        parent_question_id: 47,
        to_question_id: 51,
        after_text:
          "Great choice! According to VTS Market, 5k sf pre-built listings are averaging over 10x more online engagement than raw and white box listings of the same size in San Francisco.",
        order: 3
      },
    
      {
        text: "Pre-build and finish the floor",
        parent_question_id: 48,
        to_question_id: 51,
        after_text:
          "Great choice! According to VTS Market, 20k sf pre-built listings are averaging over 10x more online engagement than raw and white box listings of the same size in San Francisco.",
        order: 3
      },
    
      {
        text: "Video",
        parent_question_id: 52,
        to_question_id: 'review',
        redirect_id: 55,
        after_text:
          "Great choice! According to VTS Market, videos are the most-viewed virtual tour type for raw listings.",
        order: 1,
      image: "./100 Causeway.gif"
      },
      {
        text: "Video",
        parent_question_id: 53,
        to_question_id: 'review',
        redirect_id: 55,
        after_text:
          "Solid choice! According to VTS Market, videos are commonly used for white box listings. However, a 3D rendering of a white box listing in San Francisco is about 45% more likely to ve viewed than a video.",
        order: 1,
      image: "./100 Causeway.gif"
      },
      {
        text: "Video",
        parent_question_id: 54,
        to_question_id: 'review',
        redirect_id: 55,
        after_text:
          "Great choice! According to VTS Market, a video of a pre-built listing in San Francisco is about 50% more likely to get viewed than a Matterport and over 10x more likely to get viewed than a 3D rendering.",
        order: 1,
      image: "./100 Causeway.gif"
      },
      {
        text: "3D Rendering",
        parent_question_id: 52,
        to_question_id: 'review',
        redirect_id: 55,
        after_text:
          "Solid choice! According to VTS Market, 3D renderings are commonly used for raw listings, but videos are the most-viewed virtual tour type for raw listings.",
        order: 2,
      image: "./Brookfield1.gif"
      },
      {
        text: "3D Rendering",
        parent_question_id: 53,
        to_question_id:  'review',
        redirect_id: 55,
        after_text:
          "Great choice! According to VTS Market, 3D renderings are the most-viewed virtual tour type for white box listings in San Francisco.",
        order: 2,
      image: "./Brookfield1.gif"
      },
      {
        text: "3D Rendering",
        parent_question_id: 54,
        to_question_id: 'review',
        redirect_id: 55,
        after_text:
          "An understandable choice! 3D renderings can be highly engaging, but there were better options. According to VTS Market, both a video or a Matterport of a pre-built listing in San Francisco is over 10x more likely to get viewed than a 3D rendering.",
        order: 2,
      image: "./Brookfield1.gif"
      },
      {
        text: "Matterport",
        parent_question_id: 52,
        to_question_id: 'review',
        redirect_id: 55,
        after_text:
          "An interesting choice! It's quite uncommon to see Matterports for raw listings. According to VTS Market, we've yet to see one be published for a raw listing in San Francisco in 2022. Videos are the most-viewed virtual tour type for raw listings.",
        order: 3,
      image: "./Matterport.gif"
      },
    
      {
        text: "Matterport",
        parent_question_id: 53,
        to_question_id: 'review',
        redirect_id: 55,
        after_text:
          "An understandable choice! Matterports can be highly engaging, but there's a better option. According to VTS Market, 3D renderings are the most-viewed virtual tour type for white box listings in San Francisco.",
        order: 3,
      image: "./Matterport.gif"
      },
    
      {
        text: "Matterport",
        parent_question_id: 54,
        to_question_id: 'review',
        redirect_id: 55,
        after_text:
          "Solid choice! According to VTS Market, a Matterport of a pre-built listing in San Francisco is over 10x more likely to get viewed than a 3D rendering. However, a video of a pre-built listing in San Francisco is about 50% more likely to be viewed than a Matterport.",
        order: 3,
      image: "./Matterport.gif"
      },
    
      {
        text: "Flex Office Floor",
        parent_question_id: 55,
        to_question_id: "answers6",
        after_text: "Solid! If you build it, they will (probably) come.",
        statistic: "24",
        order: 1,
        image: "./flexspace.jpeg"
      },
      {
        text: "Fitness Center",
        parent_question_id: 55,
        to_question_id: "answers6",
        after_text:
          "Boo-yah! Excellent choice, that amenity will really get the tenants going.",
          statistic: "59",
        order: 2,
        image: "./3.png"
      },
      {
        text: "Tenant Lounge",
        parent_question_id: 55,
        to_question_id: "answers6",
        after_text:
          "Ok! There are more popular options, but you didn't become a success by doing what everyone else is doing - right?",
          statistic: "17",
        order: 3,
        image: "./Tenant Lounge.png"
      },
      {
        text: "Outdoor Space",
        parent_question_id: 55,
        to_question_id: "answers6",
        after_text:
          "Ok! There are more popular options, but you didn't become a success by doing what everyone else is doing - right?",
          statistic: "1",
        order: 4,
        image: "./ny.png"
      }
  ];