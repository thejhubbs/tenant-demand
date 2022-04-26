let questions = [
    {
      question_id: 1,
      text: "First - which building would you like to acquire to expand your Class A Portfolio?",
      kind: "multiple",
      subtitle: "Let's get started!",
      display: false
    },
    {
      question_id: 2,
      text:
        "There's an opportunity to break up the vacant floor (20k rsf) into multiple spaces. How do you want to break up the floor? ",
      kind: "multiple",
      background: "./TDG_NYC-Q1.png",
      display: 1
    },
  
    {
      question_id: 3,
      text:
        "You've heard anecdotes about tenants touring in the market. What tenant industry profile do you want to target?",
      kind: "multiple",
      background: "./TDG_NYC-Q3.png",
      display: 2
    },
    {
      question_id: 4,
      text:
        "You've heard anecdotes about tenants touring in the market. What tenant industry profile do you want to target?",
      kind: "multiple",
      background: "./TDG_NYC-Q3.png",
      display: 2
    },
    {
      question_id: 5,
      text:
        "You've heard anecdotes about tenants touring in the market. What tenant industry profile do you want to target?",
      kind: "multiple",
      background: "./TDG_NYC-Q3.png",
      display: 2
    },
  
    {
      question_id: 6,
      text: "The floor is raw and unfurnished. Do you want to build it out?",
      kind: "multiple",
      background: "./TDG_NYC-Q2.png",
      display: 3
    },
    {
      question_id: 7,
      text: "The floor is raw and unfurnished. Do you want to build it out?",
      kind: "multiple",
      background: "./TDG_NYC-Q2.png",
      display: 3
    },
    {
      question_id: 8,
      text: "The floor is raw and unfurnished. Do you want to build it out?",
      kind: "multiple",
      background: "./TDG_NYC-Q2.png",
      display: 3
    },
  
    {
      question_id: 9,
      text: "Excellent! Perhaps the most critical decision yet - what asking rent do you want to set?",
      kind: "range",
      background: "./TDG_NYC-Q3.png",
      display: 4,
  
      correct: 82,
      under_text:
        "You'll should be quite competitive! The avg. gross starting rent for spaces Class A properties in Midtown is $82.00/sf. You could definitely ask for more, but it is a tenant's market, after all.",
      at_text:
        "Wow! You really know your stuff. The avg. gross starting rent for spaces Class A properties in Midtown is $82.00/sf. That's a very competitive price.",
      over_text:
        "We like the confidence! The avg. gross starting rent for spaces Class A properties in Midtown is $82.00/sf. It's aggressive, but someone is bound to bite.",
  
      to_question_id: 12
    },
    {
      question_id: 10,
      text: "Excellent! Perhaps the most critical decision yet - what asking rent do you want to set?",
      kind: "range",
      background: "./TDG_NYC-Q3.png",
      display: 4,
  
      correct: 82,
      under_text:
        "You'll should be quite competitive! The avg. gross starting rent for spaces Class A properties in Midtown is $82.00/sf. You could definitely ask for more, but it is a tenant's market, after all.",
      at_text:
        "Wow! You really know your stuff. The avg. gross starting rent for spaces Class A properties in Midtown is $82.00/sf. That's a very competitive price.",
      over_text:
        "We like the confidence! The avg. gross starting rent for spaces Class A properties in Midtown is $82.00/sf. It's aggressive, but someone is bound to bite.",
  
      to_question_id: 13
    },
    {
      question_id: 11,
      text: "Excellent! Perhaps the most critical decision yet - what asking rent do you want to set?",
      kind: "range",
      background: "./TDG_NYC-Q3.png",
      display: 4,
  
      correct: 82,
      under_text:
        "You'll should be quite competitive! The avg. gross starting rent for spaces Class A properties in Midtown is $82.00/sf. You could definitely ask for more, but it is a tenant's market, after all.",
      at_text:
        "Wow! You really know your stuff. The avg. gross starting rent for spaces Class A properties in Midtown is $82.00/sf. That's a very competitive price.",
      over_text:
        "We like the confidence! The avg. gross starting rent for spaces Class A properties in Midtown is $82.00/sf. It's aggressive, but someone is bound to bite.",
  
      to_question_id: 14
    },
  
    {
      question_id: 12,
      text:
        "Last question before going to market! How do you want tenants to experience your spaces online?",
      kind: "multiple",
      background: "./TDG_NYC-Q3.png",
      display: 5
    },
    {
      question_id: 13,
      text:
        "Last question before going to market! How do you want tenants to experience your spaces online?",
      kind: "multiple",
      background: "./TDG_NYC-Q3.png",
      display: 5
    },
    {
      question_id: 14,
      text:
        "Last question before going to market! How do you want tenants to experience your spaces online?",
      kind: "multiple",
      background: "./TDG_NYC-Q3.png",
      display: 5
    },
    {
      question_id: 15,
      text:
        "Which amenity would you like to build out in your newly acquired building?",
      kind: "multiple",
      background: "./TDG_NYC-Q3.png",
      display: 6
    },







    {
      question_id: 21,
      text: "First - which building would you like to acquire to expand your Class A Portfolio?",
      kind: "multiple",
      subtitle: "Let's get started!",
      display: false
    },
    {
      question_id: 22,
      text:
        "There's an opportunity to break up the vacant floor (20k rsf) into multiple spaces. How do you want to break up the floor? ",
      kind: "multiple",
      background: "./TDG_Chicago-Q1.png",
      display: 1
    },
  
    {
      question_id: 23,
      text:
        "You've heard anecdotes about tenants touring in the market. What tenant industry profile do you want to target?",
      kind: "multiple",
      background: "./TDG_Chicago-Q3.png",
      display: 2
    },
    {
      question_id: 24,
      text:
        "You've heard anecdotes about tenants touring in the market. What tenant industry profile do you want to target?",
      kind: "multiple",
      background: "./TDG_Chicago-Q3.png",
      display: 2
    },
    {
      question_id: 25,
      text:
        "You've heard anecdotes about tenants touring in the market. What tenant industry profile do you want to target?",
      kind: "multiple",
      background: "./TDG_Chicago-Q3.png",
      display: 2
    },
  
    {
      question_id: 26,
      text: "The floor is raw and unfurnished. Do you want to build it out?",
      kind: "multiple",
      background: "./TDG_Chicago-Q2.png",
      display: 3
    },
    {
      question_id: 27,
      text: "The floor is raw and unfurnished. Do you want to build it out?",
      kind: "multiple",
      background: "./TDG_Chicago-Q2.png",
      display: 3
    },
    {
      question_id: 28,
      text: "The floor is raw and unfurnished. Do you want to build it out?",
      kind: "multiple",
      background: "./TDG_Chicago-Q2.png",
      display: 3
    },
  
    {
      question_id: 29,
      text: "Excellent! Perhaps the most critical decision yet - what asking rent do you want to set?",
      kind: "range",
      background: "./TDG_Chicago-Q3.png",
      display: 4,
  
      correct: 48,
      under_text:
        "You should be quite competitive! The avg. gross starting rent for spaces in Fulton Market is $48.30/sf.. You could definitely ask for more, but it is a tenant's market, after all.",
      at_text:
        "Wow! You really know your stuff. The avg. gross starting rent for spaces Class A properties in Fulton Market is $48.30/sf. That's a very competitive price",
      over_text:
        "We like the confidence! The avg. gross starting rent for spaces Class A properties Fulton Market is $48.30/sf. It's aggressive, but someone is bound to bite.",
  
      to_question_id: 32
    },
    {
      question_id: 30,
      text: "Excellent! Perhaps the most critical decision yet - what asking rent do you want to set?",
      kind: "range",
      background: "./TDG_Chicago-Q3.png",
      display: 4,
      correct: 48,
      under_text:
        "You should be quite competitive! The avg. gross starting rent for spaces in Fulton Market is $48.30/sf.. You could definitely ask for more, but it is a tenant's market, after all.",
      at_text:
        "Wow! You really know your stuff. The avg. gross starting rent for spaces Class A properties in Fulton Market is $48.30/sf. That's a very competitive price",
      over_text:
        "We like the confidence! The avg. gross starting rent for spaces Class A properties Fulton Market is $48.30/sf. It's aggressive, but someone is bound to bite.",
  
      to_question_id: 33
    },
    {
      question_id: 31,
      text: "Excellent! Perhaps the most critical decision yet - what asking rent do you want to set?",
      kind: "range",
      background: "./TDG_Chicago-Q3.png",
      display: 4,
  
      correct: 48,
      under_text:
        "You should be quite competitive! The avg. gross starting rent for spaces in Fulton Market is $48.30/sf.. You could definitely ask for more, but it is a tenant's market, after all.",
      at_text:
        "Wow! You really know your stuff. The avg. gross starting rent for spaces Class A properties in Fulton Market is $48.30/sf. That's a very competitive price",
      over_text:
        "We like the confidence! The avg. gross starting rent for spaces Class A properties Fulton Market is $48.30/sf. It's aggressive, but someone is bound to bite.",
  
      to_question_id: 34
    },
  
    {
      question_id: 32,
      text:
        "Last question before going to market! How do you want tenants to experience your spaces online?",
      kind: "multiple",
      background: "./TDG_Chicago-Q3.png",
      display: 5
    },
    {
      question_id: 33,
      text:
        "Last question before going to market! How do you want tenants to experience your spaces online?",
      kind: "multiple",
      background: "./TDG_Chicago-Q3.png",
      display: 5
    },
    {
      question_id: 34,
      text:
        "Last question before going to market! How do you want tenants to experience your spaces online?",
      kind: "multiple",
      background: "./TDG_Chicago-Q3.png",
      display: 5
    },
    {
      question_id: 35,
      text:
        "Which amenity would you like to build out in your newly acquired building?",
      kind: "multiple",
      background: "./TDG_Chicago-Q3.png",
      display: 6
    },









    
    {
        question_id: 41,
        text: "First - which building would you like to acquire to expand your Class A Portfolio?",
        kind: "multiple",
        subtitle: "Let's get started!",
        display: false
      },
      {
        question_id: 42,
        text:
          "There's an opportunity to break up the vacant floor (20k rsf) into multiple spaces. How do you want to break up the floor? ",
        kind: "multiple",
        background: "./TDG_SanFran-Q1.png",
        display: 1
      },
    
      {
        question_id: 43,
        text:
          "You've heard anecdotes about tenants touring in the market. What tenant industry profile do you want to target?",
        kind: "multiple",
        background: "./TDG_SanFran-Q3.png",
        display: 2
      },
      {
        question_id: 44,
        text:
          "You've heard anecdotes about tenants touring in the market. What tenant industry profile do you want to target?",
        kind: "multiple",
        background: "./TDG_SanFran-Q3.png",
        display: 2
      },
      {
        question_id: 45,
        text:
          "You've heard anecdotes about tenants touring in the market. What tenant industry profile do you want to target?",
        kind: "multiple",
        background: "./TDG_SanFran-Q3.png",
        display: 2
      },
    
      {
        question_id: 46,
        text: "The floor is raw and unfurnished. Do you want to build it out?",
        kind: "multiple",
        background: "./TDG_SanFran-Q2.png",
        display: 3
      },
      {
        question_id: 47,
        text: "The floor is raw and unfurnished. Do you want to build it out?",
        kind: "multiple",
        background: "./TDG_SanFran-Q2.png",
        display: 3
      },
      {
        question_id: 48,
        text: "The floor is raw and unfurnished. Do you want to build it out?",
        kind: "multiple",
        background: "./TDG_SanFran-Q2.png",
        display: 3
      },
    
      {
        question_id: 49,
        text: "Excellent! Perhaps the most critical decision yet - what asking rent do you want to set?",
        kind: "range",
        background: "./TDG_SanFran-Q3.png",
        display: 4,
    
        correct: 93,
        under_text:
          "You should be quite competitive! The avg. gross starting rent for spaces Class A properties in South Financial District is $92.66 sf. You could definitely ask for more, but it is a tenant's market, after all.",
        at_text:
          "Wow! You really know your stuff. The avg. gross starting rent for spaces Class A properties in South Financial District is $92.66 sf. That's a very competitive price",
        over_text:
          "We like the confidence! The avg. gross starting rent for spaces Class A properties in South Financial District is $92.66 sf. It's aggressive, but someone is bound to bite.",
    
        to_question_id: 52
      },
      {
        question_id: 50,
        text: "Excellent! Perhaps the most critical decision yet - what asking rent do you want to set?",
        kind: "range",
        background: "./TDG_SanFran-Q3.png",
        display: 4,
    
        correct: 93,
        under_text:
          "You should be quite competitive! The avg. gross starting rent for spaces Class A properties in South Financial District is $92.66 sf. You could definitely ask for more, but it is a tenant's market, after all.",
        at_text:
          "Wow! You really know your stuff. The avg. gross starting rent for spaces Class A properties in South Financial District is $92.66 sf. That's a very competitive price",
        over_text:
          "We like the confidence! The avg. gross starting rent for spaces Class A properties in South Financial District is $92.66 sf. It's aggressive, but someone is bound to bite.",
    
        to_question_id: 53
      },
      {
        question_id: 51,
        text: "Excellent! Perhaps the most critical decision yet - what asking rent do you want to set?",
        kind: "range",
        background: "./TDG_SanFran-Q3.png",
        display: 4,
    
        correct: 93,
        under_text:
          "You should be quite competitive! The avg. gross starting rent for spaces Class A properties in South Financial District is $92.66 sf. You could definitely ask for more, but it is a tenant's market, after all.",
        at_text:
          "Wow! You really know your stuff. The avg. gross starting rent for spaces Class A properties in South Financial District is $92.66 sf. That's a very competitive price",
        over_text:
          "We like the confidence! The avg. gross starting rent for spaces Class A properties in South Financial District is $92.66 sf. It's aggressive, but someone is bound to bite.",
    
        to_question_id: 54
      },
    
      {
        question_id: 52,
        text:
          "Last question before going to market! How do you want tenants to experience your spaces online?",
        kind: "multiple",
        background: "./TDG_SanFran-Q3.png",
        display: 5
      },
      {
        question_id: 53,
        text:
          "Last question before going to market! How do you want tenants to experience your spaces online?",
        kind: "multiple",
        background: "./TDG_SanFran-Q3.png",
        display: 5
      },
      {
        question_id: 54,
        text:
          "Last question before going to market! How do you want tenants to experience your spaces online?",
        kind: "multiple",
        background: "./TDG_SanFran-Q3.png",
        display: 5
      },
      {
        question_id: 55,
        text:
          "Which amenity would you like to build out in your newly acquired building?",
        kind: "multiple",
        background: "./TDG_SanFran-Q3.png",
        display: 6
      },
  ];