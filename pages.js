let pages = {
    summary: () => {
        let elem = document.createElement("div");
        let topLogoElem = document.createElement("div");
        topLogoElem.classList.add("top-logo");

        let tleImg = document.createElement("img");
        tleImg.setAttribute("src", "./logo-simple.svg");

        topLogoElem.append(tleImg);

        let miniHeaderElem = document.createElement("h4");
        miniHeaderElem.classList.add('center-header')
        miniHeaderElem.textContent =
            "Thank you for playing The Tenant Demand Game!";

        let headerElem = document.createElement("h2");
        headerElem.classList.add('huge-serif-font')
        headerElem.textContent =
            "This may have been a little bit of fun, but in real life these are high-stakes, multi-million dollar decisions. And these decisions should be informed by data that reflects reality.";

        let hpeButton = document.createElement("div");
        hpeButton.classList.add("next-question-button");

        let hpebText = document.createElement("div");
        hpebText.classList.add("next-question-button-text");
        hpebText.textContent = "Tell me more...";

        let hpebArrow = document.createElement("div");
        hpebArrow.classList.add("next-question-button-arrow");

        let hpebArrowImg = document.createElement("img");
        hpebArrowImg.setAttribute(
            "src",
            "./down-arrow.svg"
        );

        hpebArrow.append(hpebArrowImg);

        hpeButton.append(hpebText, hpebArrow);

        hpeButton.addEventListener("click", () => {
            displayPage('final');
        });

        elem.append(topLogoElem, miniHeaderElem, headerElem, hpeButton);

        return elem;
    },
    final: () => {
        let main = document.getElementById("tdgame");
        main.style.backgroundImage = `url('./bg-border.png')`;

        let elem = document.createElement("div");
        let topLogoElem = document.createElement("div");
        topLogoElem.classList.add("top-logo");
        
        topLogoElem.classList.add("final-top-logo");

        let tleImg = document.createElement("img");
        tleImg.setAttribute("src", "./logo.svg");

        topLogoElem.append(tleImg);

        let headerElem = document.createElement("h3");
        headerElem.classList.add('final-big-header')
        headerElem.textContent =
            "The only platform that creates insights on market activity in real-time";



        let contentElem = document.createElement("div");
        contentElem.classList.add('final-content')

        let pointElem = document.createElement("div");

        let pointHeader1 = document.createElement("h5");
        pointHeader1.textContent = "Marketing Automation & Management";
        let pointText1 = document.createElement("p");
        pointText1.textContent = "Your one-stop-shop for content management, publishing of space, and performance analytics.";

        let pointHeader2 = document.createElement("h5");
        pointHeader2.textContent = "Investment & Asset Strategy";
        let pointText2 = document.createElement("p");
        pointText2.textContent = "Key insights into tenant demand and portfolio performance.";

        let pointHeader3 = document.createElement("h5");
        pointHeader3.textContent = "Leasing & Asset Management";
        let pointText3 = document.createElement("p");
        pointText3.textContent = "Own deal pipeline tracking & CRM, transaction modeling, and  portfolio risk analytics.";

        let pointHeader4 = document.createElement("h5");
        pointHeader4.textContent = "Tenant & Property Experience";
        let pointText4 = document.createElement("p");
        pointText4.textContent = "Tenant experience apps, mobile access control, and property management.";

        pointElem.append(
            pointHeader2,
            pointText2,
            pointHeader1,
            pointText1,
            pointHeader3,
            pointText3,
            pointHeader4,
            pointText4
        );

        let imgDivElem = document.createElement("div");
        imgDivElem.classList.add("final-img");

        let imgElem = document.createElement("img");
        imgElem.setAttribute("src", "./Devices.png");

        imgDivElem.append(imgElem);

        contentElem.append(pointElem, imgDivElem)

        let resetButtonElem = document.createElement("div");
        resetButtonElem.classList.add("reset-button");
        resetButtonElem.classList.add("final-content-button");

        let rbeIcon = document.createElement("img");
        rbeIcon.setAttribute("src", "./home.svg");

        resetButtonElem.append(rbeIcon);

        resetButtonElem.addEventListener("click", () => {
            displayHome();
        });

        elem.append(topLogoElem, headerElem, contentElem, resetButtonElem);

        return elem;
    },
    prequestions: () => {
        let elem = document.createElement("div");
        let topLogoElem = document.createElement("div");
        topLogoElem.classList.add("top-logo");

        let tleImg = document.createElement("img");
        tleImg.setAttribute("src", "./logo-simple.svg");

        topLogoElem.append(tleImg);

        let subtitleElem = document.createElement("h5");
        subtitleElem.classList.add('purple-subtitle');
        subtitleElem.textContent = "Oh, awesome!"


        let textElem = document.createElement('h3')
        textElem.classList.add('huge-serif-font')
        textElem.textContent = "Now that you've acquired your bulding, you're focused on leasing up to a 20k rsf floor that has sat vacant for nearly a year."


        console.log(history, questions[history[0].redirect_id])
        let nextButton = toQuestionButton("What happens next?", questions.filter(q => q.question_id === history[0].redirect_id)[0])

        elem.append(topLogoElem, subtitleElem, textElem, nextButton)

        return elem;
    },

    review: () => {
        let elem = document.createElement("div");
        let topLogoElem = document.createElement("div");
        topLogoElem.classList.add("top-logo");

        let tleImg = document.createElement("img");
        tleImg.setAttribute("src", "./logo-simple.svg");

        topLogoElem.append(tleImg);

        let subtitleElem = document.createElement("h5");
        subtitleElem.classList.add('purple-subtitle');
        subtitleElem.textContent = "You've done it!"

        let textElem = document.createElement('h3')
        textElem.classList.add('huge-serif-font')
        textElem.textContent = "Your vacant floor is now ready to be brought to market! Care to see how well-positioned the floor is to meet active tenant demand?"
        elem.append(textElem)

        let nextButton = toPageButton("See your results", 'answers0')

        elem.append(topLogoElem, subtitleElem, textElem, nextButton)

        return elem;
    },


    answers0: () => {
        let i = 0

        let elem = document.createElement("div");
        elem.append(logo())

        let answersElem = document.createElement('div')
        answersElem.setAttribute('id', 'answers-review')

        let answer = history[i]

        let singleEntry = displayResults(answer, i)

        answersElem.append(singleEntry)

        elem.append(answersElem)

        let nextButton = toPageButton("Next", `answers${i + 1}`)
        elem.append(nextButton)

        return elem;
    },
    answers1: () => {
        let i = 1

        let elem = document.createElement("div");
        elem.append(logo())

        let answersElem = document.createElement('div')
        answersElem.setAttribute('id', 'answers-review')

        let answer = history[i]

        let singleEntry = displayResults(answer, i)

        answersElem.append(singleEntry)

        elem.append(answersElem)

        let nextButton = toPageButton("Next", `answers${i + 1}`)
        elem.append(nextButton)

        return elem;
    },
    answers2: () => {
        let i = 2

        let elem = document.createElement("div");
        elem.append(logo())

        let answersElem = document.createElement('div')
        answersElem.setAttribute('id', 'answers-review')

        let answer = history[i]

        let singleEntry = displayResults(answer, i)

        answersElem.append(singleEntry)

        elem.append(answersElem)

        let nextButton = toPageButton("Next", `answers${i + 1}`)
        elem.append(nextButton)

        return elem;
    },
    answers3: () => {
        let i = 3

        let elem = document.createElement("div");
        elem.append(logo())

        let answersElem = document.createElement('div')
        answersElem.setAttribute('id', 'answers-review')

        let answer = history[i]

        let singleEntry = displayResults(answer, i)

        answersElem.append(singleEntry)

        elem.append(answersElem)

        let nextButton = toPageButton("Next", `answers${i + 1}`)
        elem.append(nextButton)

        return elem;
    },
    answers4: () => {
        let i = 4

        let elem = document.createElement("div");
        elem.append(logo())

        let answersElem = document.createElement('div')
        answersElem.setAttribute('id', 'answers-review')

        let answer = history[i]

        let singleEntry = displayResults(answer, i)

        answersElem.append(singleEntry)

        elem.append(answersElem)

        let nextButton = toPageButton("Next", `answers${i + 1}`)
        elem.append(nextButton)

        return elem;
    },
    answers5: () => {
        let i = 5

        let elem = document.createElement("div");
        elem.append(logo())

        let answersElem = document.createElement('div')
        answersElem.setAttribute('id', 'answers-review')

        let answer = history[i]

        let singleEntry = displayResults(answer, i)

        answersElem.append(singleEntry)

        elem.append(answersElem)

        let nextButton = toPageButton("Next", `secondHalf`)
        elem.append(nextButton)

        return elem;
    },


    secondHalf: () => {
        let elem = document.createElement("div");
        let topLogoElem = document.createElement("div");
        topLogoElem.classList.add("top-logo");

        let tleImg = document.createElement("img");
        tleImg.setAttribute("src", "./logo-simple.svg");

        topLogoElem.append(tleImg);

        let questionBreakElem = document.createElement("div");
        questionBreakElem.classList.add("break-block-center");

        let textElem = document.createElement('h3')
        textElem.classList.add('huge-serif-font')
        textElem.textContent = "Now that you're getting new tenants to tour your vacant floor, it's time to build out a new amenity that really gets your tenants excited to come to the office."


        
        let answer = history[5].redirect_id
        let nextButton = toQuestionButton("Build your amenity", questions.filter(q => q.question_id === answer)[0])

        elem.append(topLogoElem, questionBreakElem, textElem, nextButton)

        return elem;
    },

    answers6: () => {
        let i = 6

        let elem = document.createElement("div");
        elem.append(altLogo())


        let answer = history[i]
        let question = questions.filter(q => q.question_id === answer.parent_question_id)[0]
        
        let textElem = document.createElement('h3')
        textElem.textContent = answer.after_text
        textElem.classList.add('center-header')
        textElem.style.marginTop = '0';

        elem.append(textElem)

        let qAnswers = answers.filter(
            (a) => a.parent_question_id === question.question_id
        );

        let answersElem = document.createElement("div");
        answersElem.setAttribute("id", "answers-space");
        elem.append(answersElem);

        qAnswers.forEach((a) => answersElem.append(displayFinalAnswer(a, answer)));

        if (qAnswers[0].image) {
            answersElem.classList.add("image-answers");
        }

        let noteElem = document.createElement('p')
        noteElem.textContent = `Note: Percentages are based on total share of traffic across all bookable amenities in VTS Rise-powered buildings in ${history[0].text.split(' | ')[0]} (last 180 days)`
        noteElem.style.fontSize = '1rem';
        noteElem.style.textAlign = 'center';

        let nextButton = toPageButton("What comes next?", `summary`)
        elem.append(noteElem, nextButton)

        return elem;
    },

};


const toPageButton = (text, page) => {
    let hpeButton = button(text)
    hpeButton.addEventListener("click", () => {
        displayPage(page);
    });

    return hpeButton
}


const toQuestionButton = (text, question) => {
    let hpeButton = button(text)
    hpeButton.addEventListener("click", () => {
        displayQuestion(question);
    });

    return hpeButton
}

const button = (text) => {
    let hpeButton = document.createElement("div");
    hpeButton.classList.add("next-question-button");

    let hpebText = document.createElement("div");
    hpebText.classList.add("next-question-button-text");
    hpebText.textContent = text;

    let hpebArrow = document.createElement("div");
    hpebArrow.classList.add("next-question-button-arrow");

    let hpebArrowImg = document.createElement("img");
    hpebArrowImg.setAttribute(
        "src",
        "./down-arrow.svg"
    );

    hpebArrow.append(hpebArrowImg);

    hpeButton.append(hpebText, hpebArrow);

    return hpeButton
}


const logo = () => {
    let elem = document.createElement("div");

    let topLogoElem = document.createElement("div");
    topLogoElem.classList.add("top-logo");

    let tleImg = document.createElement("img");
    tleImg.setAttribute("src", "./logo-simple.svg");

    topLogoElem.append(tleImg);


    let subtitleElem = document.createElement("h5");
    subtitleElem.classList.add('purple-subtitle');
    subtitleElem.textContent = "Huzzah!"

    let textElem = document.createElement('h3')
    textElem.textContent = "The results are in!"
    textElem.classList.add('center-header')
    textElem.style.marginTop = '0';

    elem.append(topLogoElem, subtitleElem, textElem)

    return elem
}
const altLogo = () => {
    let elem = document.createElement("div");

    let topLogoElem = document.createElement("div");
    topLogoElem.classList.add("top-logo");

    let tleImg = document.createElement("img");
    tleImg.setAttribute("src", "./logo-simple.svg");

    topLogoElem.append(tleImg);


    let subtitleElem = document.createElement("h5");
    subtitleElem.classList.add('purple-subtitle');
    subtitleElem.textContent = "Nice Work!"


    elem.append(topLogoElem, subtitleElem)

    return elem
}

const displayResults = (answer, i) => {
    let singleEntry = document.createElement('div')
    singleEntry.setAttribute('class', 'answers-single')

    if (answer.question) { //it's an entry one
        let question = answer.question
        let questionElem = document.createElement('div')
        questionElem.innerHTML += `<h3>Question ${i + 1}</h3>`
        questionElem.innerHTML += `<p>${question.text}</p>`

        let answerElem = document.createElement('div')
        answerElem.innerHTML += `<h3>Your Answer</h3>`
        answerElem.innerHTML += `<p>${answer.value}</p>`

        let feebackElem = document.createElement('div')
        feebackElem.innerHTML += `<h3>What data tells us</h3>`

        let lowBound = question.correct * 0.95;
        let highBound = question.correct * 1.05;
        let val = answer.value

        let afterTextElem = document.createElement("p");

        if (val < lowBound) {
            afterTextElem.textContent = question.under_text;
        } else if (val > highBound) {
            afterTextElem.textContent = question.over_text;
        } else {
            afterTextElem.textContent = question.at_text;
        }

        feebackElem.append(afterTextElem)

        singleEntry.append(questionElem, answerElem, feebackElem)

    }
    else { //it's a MC one
        let question = questions.filter(q => q.question_id === answer.parent_question_id)[0]

        let questionElem = document.createElement('div')
        questionElem.innerHTML += `<h3>Question ${i + 1}</h3>`
        questionElem.innerHTML += `<p>${question.text}</p>`

        let answerElem = document.createElement('div')
        answerElem.innerHTML += `<h3>Your Answer</h3>`
        answerElem.innerHTML += `<p>${answer.text}</p>`

        let feebackElem = document.createElement('div')
        feebackElem.innerHTML += `<h3>What data tells us</h3>`
        feebackElem.innerHTML += `<p>${answer.after_text}</p>`

        singleEntry.append(questionElem, answerElem, feebackElem)
    }

    return singleEntry
}


const displayFinalAnswer = (answer, chosenAnswer) => {
    let newElem = document.createElement("div");
    newElem.classList.add("answer-option");

        let imageElem = document.createElement("img");
        imageElem.setAttribute("src", answer.image);
        newElem.append(imageElem);

        

    let statElem = document.createElement("div");
    statElem.classList.add('stat-element')
    statElem.textContent = answer.statistic + "%";
    newElem.append(statElem);

    let textElem = document.createElement("p");
    textElem.textContent = answer.text;

    if(answer.text === chosenAnswer.text){
        textElem.style.color = "green" 
        textElem.style.fontWeight = "bold" 
    }

    newElem.append(textElem);

    return newElem;
};