let history = []

const displayPage = (name) => {
    screenElem.innerHTML = "";
    screenElem.append(pages[name]());
};

const displayQuestion = (question) => {
    
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    
    let main = document.getElementById("tdgame");
    if (question.background) {
        main.style.backgroundImage = `url('${question.background}')`;
    } else {
        main.style.backgroundImage = `url('./mainbg.png')`;
    }

    let elem = document.createElement("div");
    elem.setAttribute("id", "question-space");
    screenElem.innerHTML = "";
    screenElem.append(elem);

    if(question.kind === 'range') { 
        elem.classList.add('range-question')
    }

    let topLogoElem = document.createElement("div");
    topLogoElem.classList.add("top-logo");

    let tleImg = document.createElement("img");
    tleImg.setAttribute("src", "./logo-simple.svg");

    topLogoElem.append(tleImg);

    

    let questionNumElem = document.createElement("h4");
    if(question.display === 6) {
        questionNumElem.textContent = `FINAL QUESTION`;
    } else {
        questionNumElem.textContent = `QUESTION ` + question.display + "- " + history[0]?.text.toUpperCase();
    }

    let questionTextElem = document.createElement("h2");
    questionTextElem.textContent = question.text;

    let questionBreakElem = document.createElement("div");
    questionBreakElem.classList.add("break-block");

    if (question.display) {
        elem.append(questionNumElem);
    } else {
        elem.append(topLogoElem);
    }

    if(question.subtitle) {
        let subtitleElem = document.createElement("h5");
        subtitleElem.classList.add('purple-subtitle');
        subtitleElem.textContent = question.subtitle
        elem.append(subtitleElem)

        questionTextElem.classList.add('center-header')
    }

    elem.append(questionTextElem);

    if (question.display) {
        elem.append(questionBreakElem);
    } 

    if (question.kind === "multiple") {
        let qAnswers = answers.filter(
            (a) => a.parent_question_id === question.question_id
        );
        let answersElem = document.createElement("div");
        answersElem.setAttribute("id", "answers-space");
        elem.append(answersElem);

        qAnswers.forEach((answer) => answersElem.append(displayAnswer(answer)));

        if (qAnswers[0].image) {
            answersElem.classList.add("image-answers");
        }
    } else {
        let entryElem = document.createElement("div");
        entryElem.classList.add("input-question");

        let entryInputElem = document.createElement("input");
        entryInputElem.setAttribute("id", "tdgame-input");


        entryInputElem.addEventListener('keypress', (e) => {         
            if(`${Number.parseInt(e.key)}` !== e.key) {
                e.preventDefault();
            }
        })


        entryInputElem.addEventListener('blur', () => {
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
          })



        let entryTextElem = document.createElement("span");
        entryTextElem.textContent = " per sf/yr";
        entryTextElem.classList.add('huge-serif-font')

        
        let entryTextElem2 = document.createElement("span");
        entryTextElem2.textContent = "$";
        entryTextElem2.classList.add('huge-serif-font')

        entryElem.append(entryTextElem2, entryInputElem, entryTextElem);

        elem.append(entryElem);

        let hpeButton = document.createElement("div");
        hpeButton.classList.add("next-question-button");

        let hpebText = document.createElement("div");
        hpebText.classList.add("next-question-button-text");
        hpebText.textContent = "Submit your answer";

        let hpebArrow = document.createElement("div");
        hpebArrow.classList.add("next-question-button-arrow");

        let hpebArrowImg = document.createElement("img");
        hpebArrowImg.setAttribute(
            "src",
            "./down-arrow.svg"
        );

        hpebArrow.append(hpebArrowImg);

        hpeButton.append(hpebText, hpebArrow);

        hpeButton.addEventListener("click", (e) => {
            history.push({ value: entryInputElem.value, question })
            let newQuestion = questions.filter(
                (q) => q.question_id === question.to_question_id
            )[0];
            displayQuestion(newQuestion);
        });

        elem.append(hpeButton);
    }

    let resetButtonElem = document.createElement("div");
    resetButtonElem.classList.add("reset-button");

    let rbeIcon = document.createElement("img");
    rbeIcon.setAttribute("src", "./home.svg");

    resetButtonElem.append(rbeIcon);

    resetButtonElem.addEventListener("click", () => {
        displayHome();
    });

    elem.append(resetButtonElem);
};

const displayAnswer = (answer) => {
    let newElem = document.createElement("div");
    newElem.classList.add("answer-option");

    if (answer.image) {
        let imageElem = document.createElement("img");
        imageElem.setAttribute("src", answer.image);
        newElem.append(imageElem);
    }

    let textElem = document.createElement("p");
    textElem.textContent = answer.text;

    if (answer.tooltip) {
        let tooltipElem = document.createElement("p");
        tooltipElem.classList.add("tooltip");
        tooltipElem.textContent = answer.tooltip;
        newElem.append(tooltipElem);
    }
    newElem.append(textElem);

    newElem.addEventListener("click", () => {
        history.push(answer)

        if (answer.to_question_id === Number.parseInt(answer.to_question_id)) {
            let newQuestion = questions.filter(
                (q) => q.question_id === answer.to_question_id
            )[0];
            displayQuestion(newQuestion);
        } else {
            displayPage(answer.to_question_id);
        }
    });

    return newElem;
};

const displayHome = () => {
    delete history
    history = []

    let main = document.getElementById("tdgame");
    main.style.backgroundImage = `url('./bg-border.png')`;

    let homePageElem = document.createElement("div");

    let hpeLogo = document.createElement("img");
    hpeLogo.classList.add("main-logo");
    hpeLogo.setAttribute("src", "./logo.svg");

    let hpeHeader = document.createElement("h1");
    hpeHeader.setAttribute("id", "home-explain-header");
    hpeHeader.textContent = "The tenant demand game";

    let hpeText = document.createElement("p");
    hpeText.setAttribute("id", "home-explain-text");
    
    hpeText.textContent =
        "You are the Head of Asset Management for a 5M rsf portfolio of Class A office properties. Recently you and the Investments team have been looking to expand your footprint to one of three major metros in the U.S.";

    let hpeSubheader = document.createElement("h3");
    hpeSubheader.setAttribute("id", "home-explain-list-header");
    hpeSubheader.textContent = "Your job is to:";

    let hpeLi1 = document.createElement("li");
    hpeLi1.textContent = "Select a building to acquire";
    let hpeLi2 = document.createElement("li");
    hpeLi2.textContent =
        "Create a positioning strategy to lease up a vacant floor";
    let hpeLi3 = document.createElement("li");
    hpeLi3.textContent = "Market the vacant floor";
    let hpeLi4 = document.createElement("li");
    hpeLi4.textContent =
        "Build a new amenity in the building to attract tenants back to the office";

    let hpeList = document.createElement("ul");
    hpeList.setAttribute("id", "home-explain-list");
    hpeList.append(hpeLi1, hpeLi2, hpeLi3, hpeLi4);

    let hpeButton = document.createElement("div");
    hpeButton.classList.add("next-question-button");

    let hpebText = document.createElement("div");
    hpebText.classList.add("next-question-button-text");
    hpebText.textContent = "Are you up for the challenge?";

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
        displayQuestion(questions[0]);
    });

    homePageElem.append(
        hpeLogo,
        hpeHeader,
        hpeText,
        hpeSubheader,
        hpeList,
        hpeButton
    );

    screenElem.innerHTML = "";
    screenElem.append(homePageElem);
};

let mainElem = document.getElementById("tdgame");

let screenElem = document.createElement("div");
screenElem.setAttribute("id", "tdgame-screen");

mainElem.append(screenElem);

displayHome();









// let elem = document.getElementById("question-space");
//         elem.innerHTML = "";

//         let afterTextElem = document.createElement("h2");
//         afterTextElem.textContent = answer.after_text;
//         elem.append(afterTextElem);

//         let hpeButton = document.createElement("div");
//         hpeButton.classList.add("next-question-button");

//         let hpebText = document.createElement("div");
//         hpebText.classList.add("next-question-button-text");
//         hpebText.textContent = "What happens next?";

//         let hpebArrow = document.createElement("div");
//         hpebArrow.classList.add("next-question-button-arrow");

//         let hpebArrowImg = document.createElement("img");
//         hpebArrowImg.setAttribute(
//             "src",
//             "./down-arrow.svg"
//         );

//         hpebArrow.append(hpebArrowImg);

//         hpeButton.append(hpebText, hpebArrow);

//         hpeButton.addEventListener("click", () => {









//    let inputElem = document.getElementById("tdgame-input");
    // let val = Number.parseInt(inputElem.value);

    // let answer = question.correct;
    // let lowBound = answer * 0.95;
    // let highBound = answer * 1.05;

    // let afterTextElem = document.createElement("h2");

    // if (val < lowBound) {
    //     afterTextElem.textContent = question.under_text;
    // } else if (val > highBound) {
    //     afterTextElem.textContent = question.over_text;
    // } else {
    //     console.log("at", question.at_text);
    //     afterTextElem.textContent = question.at_text;
    // }

    // elem.innerHTML = "";
    // elem.append(afterTextElem);

    // let hpeButton = document.createElement("div");
    // hpeButton.classList.add("next-question-button");

    // let hpebText = document.createElement("div");
    // hpebText.classList.add("next-question-button-text");
    // hpebText.textContent = "What happens next?";

    // let hpebArrow = document.createElement("div");
    // hpebArrow.classList.add("next-question-button-arrow");

    // let hpebArrowImg = document.createElement("img");
    // hpebArrowImg.setAttribute(
    //     "src",
    //     "./down-arrow.svg"
    // );

    // hpebArrow.append(hpebArrowImg);

    // hpeButton.append(hpebText, hpebArrow);
