let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentCategory = 'academic';

const events = {
    academic: {
        2024: {
            4: [ // May
                { date: new Date(2024, 4, 3), title: "Critiques and examinations begin, 9 a.m.", description:"Critiques and examinations begin, 9 AM." },
                { date: new Date(2024, 4, 8), title: "Critiques and examinations end, 5:30 p.m.; Summer recess begins", description:"Critiques and examinations end, 5:30 PM; Summer recess begins." },
                { date: new Date(2024, 4, 20), title: "2024 Yale University & School of Art Commencement", description:"<strong>Green Hall, Old Campus, & YUAG Sculpture Garden</strong><br>Yale's 323rd commencement will be held on Monday, May 20, 2024.<br><br><em>Monday, May 20, 2024 Commencement Schedule:</em><br><strong>9:15AM</strong>: 2024 Grads and Faculty group photo front steps of Green Hall<br><strong>9:25</strong>: Depart Green Hall<br><strong>9:35</strong>: Cross Campus Procession Formation<br><strong>10:00</strong>: Academic Procession<br><strong>10:30</strong>: University Ceremony<br><strong>11:50</strong>: Recession back to Green Hall<br><br>This is a ticketed event with a clear bag policy (guests are limited to one clear bag no larger than 12x12; same as at the Yale Bowl). Be sure to transfer your E-Tickets to your guests.<br><br><em>*If you will not be attending the morning University commencement, please let Taryn know so we can adjust headcount.</em>"},
            ],
            7: [ // August
                { date: new Date(2024, 7, 1), title: "Fall-term registration opens for new and continuing students", description:"Fall 2024 course registration for all School of Art students opens on Thursday, August 1." },
            ],
        }
    },
    public: {
        2024: {
            5: [
                { date: new Date(2024, 5, 11), title: "Climate Action Art Workshop", description:"<strong>4-6 PM<br>James Hillhouse HS<br>480 Sherman Pwky<br>Room Art C102</strong><br><br>Free & open to the public<br>Join us for an art workshop that explores the intersection of climate change and public art.<br>Your participation will help inform the final design of a large-scale mural that will be installed at the Goffe St. Armory.<br><br>What you will get from attending the workshop:<br>1. Learn about how cities are getting hotter and why it's important to cool cities down.<br>2. Learn about cooling paints and how it can be a powerful tool in the hands of artists.<br>3. Participate in an art activity that will help inform the design of the mural at the Armory.<br><br>We’re excited to host this event as part of the next iteration of the Climate Engagement Murals in New Haven, created by the Climate Engagement through Art in Cities Fellows—a collaboration between the Yale School of Art, Yale School of Architecture, Yale School of the Environment, and New Haven's Department of Cultural Affairs, made possible through Yale University’s Planetary Solutions Project. " },
                { date: new Date(2024, 5, 14), title: "Artists in Conversation | Jake Grewal", description: "Hosted by the Yale Center for British Art<br><strong><em>12–1 pm ET</em></strong><br><a href='https://yale.zoom.us/webinar/register/WN_C2WlhREHQ-e2KCoyZEO4pg#/registration' class= 'pagelink'>On Zoom, register here</a><br><br>Jake Grewal will talk to HRH Princess Eugenie of York, director, Hauser and Wirth, about his artistic practice, recent projects, and studio processes.<br><br><strong>About Jake Grewal</strong><br>Born in London in 1994, Jake Grewal received a BA with honors in painting from the University of Brighton and later attended the Royal Drawing School, London. Grewal’s paintings and drawings have a dreamlike quality, unmoored from time and space. Figures, often nude and based on the artist’s own image, are situated against dramatic sunsets or gazing into verdant green pools. Time and its transitions play a central role, with the same figure often repeated within a scene. Narratives are left open-ended, and the viewer is encouraged to project their own conclusions onto the dramatic tableaus.<br><br>Drawing is central to Grewal’s practice. Using predominantly charcoal, Grewal insistently repeats figures and scenes, often in different mediums and scales until his narratives are realized. Landscape and figure merge and become one. Figures and trees dissolve and reappear on a journey together, sometimes cohabitating, sometimes being consumed, but always investigating the artist’s fascination with the passing of time.<br>Selected exhibitions include Some days I feel more alive, Pallant House Gallery, Chichester (2023); Now I Know You I Am Older, Thomas Dane Gallery, London (2022); Interior, Michael Werner Gallery, London (2022); Shifting Waters, Jhaveri Contemporary, Mumbai (2022); Drawing Attention: Emerging British Artists, British Museum, London (2022); Deity, Arusha Gallery, Edinburgh (2020); and The Drawing Year End of Year Exhibition 2019, Royal Drawing School, London (2019), to name a few. Grewal lives and works in London.<br><br><strong>Artists in Conversation</strong><br>Join us for lively and inspiring conversations with some of today’s most notable artists. “Artists in Conversation” brings together curators and artist to discuss artistic practices and insights into their work.<br><br><a href='https://britishart.yale.edu/exhibitions-programs/artists-conversation-jake-grewal' class='pagelink'>Event Webpage</a>" },
            ],
            4: [
                { date: new Date(2024, 4, 31), title: "Artists in Conversation | Sekai Machache", description:"Hosted by the Yale Center for British Art<br><strong>12–1 pm ET</strong><br><br>Sekai Machache will talk to Carmen Hermo, associate curator, Elizabeth A. Sackler Center for Feminist Art, Brooklyn Museum, about her artistic practice, recent projects, and studio processes.<br><br><strong>About Sekai Machache</strong><br>Born in 1989 in Harare, Zimbabwe, Sekai Machache (she/they) is a Zimbabwean-Scottish visual artist and curator based in Glasgow, Scotland. She graduated from the Duncan of Jordanstone College of Art and Design, Dundee, Scotland, in 2012. Her work is a deep interrogation of the notion of self, in which photography plays a crucial role in supporting an exploration of the historical and cultural imaginary. Aspects of her photographic practice are formulated through digital studio-based compositions using body paint and muted lighting to create images that appear to emerge from darkness. Her more recent work incorporates other media and approaches which evoke a sense of the invisible and the undocumented. Machache is interested in the relationship between dreaming, spirituality, and the role of the artist in disseminating symbolic imagery to provide a space for healing against contexts of colonialism and loss.<br><br>In 2020, Machache was the recipient of the Royal Scottish Academy Morton Award for an artist working in lens-based media. From 2021 to 2023, she was an artist in residence with the Talbot Rice Residents Program, which supports emerging artists across the United Kingdom. Machache is a founder and member of the Yon Afro Collective which supports women of color in Scotland. She was chosen to represent Zimbabwe at the 60th Venice Biennale in April 2024 as part of a group show titled Undone with Zimbabwe’s pavilion. She has participated in both solo and group exhibitions worldwide. Machache lives and works in Scotland.<br><br><strong>Artists in Conversation</strong><br>Join us for lively and inspiring conversations with some of today’s most notable artists. “Artists in Conversation” brings together curators and artists to discuss artistic practices and insights into their work.<br><br><a href='https://britishart.yale.edu/exhibitions-programs/artists-conversation-sekai-machache' class = 'pagelink'>Event Webpage</a>" },
                { date: new Date(2024, 4, 18), title: "SPREAD — Graphic Design MFA Thesis Exhibition Reception", description:"<strong>6–8PM<br>Green Hall Gallery</strong><br><br>Spread: a technical term in graphic design, refers to two adjacent pages whose connection is revealed as one opens a book. A paired set, hinged at its shared edge, the spread functions much like a diptych––perpetually in relation. We open up spreads, and they open up for us. Like the spread, we have found ourselves and our practices momentarily fixed to one another, fastened into relation, our perspectives fused together, like the left eye and the right eye.<br><em>SPREAD</em> features work by the 2024 MFA candidates in Graphic Design presented in conversation with one another, reproducing and remixing the culmination of our time––our thesis books––in order to amplify our connections and expand the definition of graphic design as a way of relating. The polysemic title also functions as an invitation: as a verb, SPREAD further expresses our collective desire to share this work outside of the graphic design program through additional public programming during and after the exhibition.<br><br>Featuring work by Simon Charwey, Julio Correa Estrada, Davy Dai, Sara Duell, Kayla Hawkins, Darnell Henderson, Junyan Hu, Claire Hungerford, Kaming Lee, Siri Lee, Daedalus Guoning Li, Lobbin Liu, Xinyi Liu, Neeta Patel, Orlando Porras, June Lihua Yu, Qiang Wang, and Ken Wenrui Zhao.<br><br><em>Open to the Yale community and invited, accompanied guests: May 13–21, 2024</em><br><br><strong>VISITING<br></strong>Yale School of Art’s Spring 2024 receptions are open to the public. All visitors are encouraged to be fully vaccinated and boosted. Masks are also recommended.<br><br>During all other gallery hours, exhibitions are only open to the Yale community (current ID holders) and their invited, accompanied guests.<br>Spring 2024 gallery hours for the Yale community & guests: Monday-Friday: 11AM-6PM, Saturday + Sunday: Noon-4PM."},
                { date: new Date(2024, 4, 23), title: "Conversations about Conservation | Paul van Somer’s “An Unknown Young Girl”", description: "<strong>3:00 PM - 3:45 PM<br>Yale Center for British Art, Study Room</strong><br><br>Jessica David, Senior Conservator of Paintings, will present discoveries made during the technical examination and ways in which the painting’s history has influenced its present condition.<br><br><strong>About this program</strong><br>Paul van Somer’s painting An Unknown Young Girl (ca. 1615) is currently undergoing conservation treatment at the YCBA. Orphaned from a set of related portraits and overpainted by past restorers, the work lost both its historical context and the energetic signature paint handling of its maker. Join us to see this painting at a unique moment mid-treatment for an in-depth discussion.<br><br><strong>Conversations about Conservation</strong><br>Join us in the Study Room for a series of talks featuring works from the collection presented by members of the Yale Center for British Art (YCBA) Conservation department. Speakers will highlight objects in the collection, discuss how the artworks were made, and describe conservation treatments that have been performed. In addition, collections care, technical analysis, and the relationship of media to meaning will be explored.<br><br><a href='https://britishart.yale.edu/exhibitions-programs/conversations-about-conservation-paul-van-somers-unknown-young-girl' class='pagelink'>Event Webpage</a>"},
                { date: new Date(2024, 4, 4), title: "Soot Like Snow — Artist Talk & Reception", description:"<strong>6 - 8 PM<br>32 Edgewood Gallery</strong><br><br>Noel Odhiambo, a graduate student in the Yale School of Architecture will be hosting the opening of his inaugural exhibition at 32 Edgewood on Saturday, May 4th with an artist talk and reception from 6-8PM.<br><br>The reception is open to all, no RSVP needed. The work includes both sculpture and painting." },
                { date: new Date(2024, 4, 8), title: "Coins of the Continuum: Toward a Religious Interpretation of the Arab-Byzantine Coins", description:"<strong>12:30 pm – 1:30 pm<br>Yale University Art Gallery</strong><br><br>Featuring Arabic and Greek script as well as Islamic and Christian imagery, the so-called Arab-Byzantine coins of the Umayyad Caliphate (661–750) offer a unique opportunity to consider relations between Christians and Muslims in the 7th-century Near East. Join Lizzy Hane, M.A.R. candidate, Yale Divinity School, for a hands-on exploration of the texts, symbols, and iconographies on these coins. Together we explore how coinage represents a dialogue—and a flexible space—between communities of faith. Generously sponsored by the Martin A. Ryerson Lectureship Fund.<br><br>This is a hands-on experience in the Bela Lyon Pratt Study Room for Numismatics. All attendees are required to observe art-handling and security procedures, including handwashing, checking bags, and emptying pockets. Participants must remain in the study room for the duration of the talk.<br><br>Space is very limited; meet in the Gallery lobby."},
            ]
        }
    },
    community: {
        2024: {
            5: [
                { date: new Date(2024, 5, 1), title: "Edgewood Fabrication Shop closes for the summer", description:"The Edgewood Fabrication Shop will be closing for the Summer on June 1st at 7pm. Please collect your materials and projects and store them in your studio if you plan to use them in the upcoming academic year. Any remaining materials left after May 30th will transition to scrap.<br><br>Please also remember to return any borrowed tools by 12 Noon on May 31st.<br><br>Have a great summer!" },
                { date: new Date(2024, 5, 9), title: "Hlengiwe Dube: Pop-up Jewelry Sale", description:"<strong>6-7:30 pm ​<br>More Amour, 1130 Chapel Street</strong><br><br>Renowned South African beadwork artist Hlengiwe Dube is in New Haven leading a workshop on beadwork conservation with Yale University Art Gallery conservation staff.​<br>Join us on the evening of May 8th at More Amour for a pop-up event with the artist, including the sale of Hlengi’s extraordinary jewelry pieces.<br><br>Don't miss this chance to meet and support the artist!"},
            ],
            4: [ // May
                { date: new Date(2024, 4, 14), title: "All-School End of Year Dance Party 🪩", description:"<strong>9 PM<br>Partners Cafe, New Haven</strong><br><br>All members of the School of Art community are invited to celebrate at our all-school end of year dance party." },
                { date: new Date(2024, 4, 1), title: "Visiting Artist Lecture in Photography: Rodrigo Valenzuela", description:"<strong>3 PM- 4:30 PM EST<br>1156 Chapel St., the Pool (Room G-10)<br><br></strong>Rodrigo Valenzuela concludes the Spring 2024 Visiting Artist Lectures in Photography with a talk on Wednesday afternoon. Hosted by Pat Garcia, Photography MFA '24.<br><br>Spring 2024 Visiting Artist lectures in Photography are open to SoA community. " }
        ]
        }
    },
    SoA: {
        2024: {
            4: [ // May
                { date: new Date(2024, 4, 3), title: "Hourglass — Photography MFA Thesis Exhibition Reception", description:"<strong>6–8PM<br>Green Hall Gallery, 1156 Chapel St.</strong><br><br>Featuring Torry Brown, Andie Marie Osorio, Pat Garcia, Whitney Klare, Jarod Lew, Avion Pearce, Tanner Pendleton, Darby Routtenberg, Patricia Voulgaris, and Shelli Weiler.<br><br><em>Exhibition identity by Julio Correa Estrada and Ken Wenrui Zhao, Graphic Design MFAs '24.<br><br>Learn more on the 2024 thesis exhibition website at <a href='https://www.art.yale.edu/art.yale.edu/mfa-thesis' class='pagelink'>MFAThesis</a><br><br><strong>VISITNG</strong><br>Yale School of Art’s Spring 2024 receptions are open to the public. All visitors are encouraged to be fully vaccinated and boosted. Masks are also recommended.<br>During all other gallery hours, exhibitions are only open to the Yale community (current ID holders) and their invited, accompanied guests.<br>Spring 2024 gallery hours for the Yale community & guests: Monday-Friday: 11AM-6PM, Saturday + Sunday: Noon-4PM."},
                { date: new Date(2024, 4, 9), title: "All Art Schools Social", description: "<em>Hosted by the Graduate & Professional Student Senate at Yale (GPSS)</em><br><br><strong>5:30 - 7:30 PM<br>The Well, Lower Level at Schwarzman Center</strong><br><br>GPSS Music School senators Alec, Maren, and William would like to welcome you to the inaugural Artist Networking event sponsored by the GPSS Professional Development Committee. This event is intended to foster increased connection and collaboration (over drinks of course) across the various art schools at Yale and will welcome all students from the schools of Music, Art, Drama, and Architecture. It will take place in The Well (lower level of Schwarzman) on May 9 from 5-7pm.<br><br>Please don't forget your government and Yale ID's for entry and to receive one free drink ticket. We hope to see you there!" }
        ]
        }
    }
};

function renderCalendar(month, year, category) {
    const daysElement = document.getElementById("days");
    daysElement.innerHTML = "";
    const monthYearElement = document.getElementById("monthYear");
    monthYearElement.textContent = `${months[month]} ${year}`;

    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();

    for (let i = 0; i < firstDay; i++) {
        const dayElement = document.createElement("div");
        daysElement.appendChild(dayElement);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.textContent = day;
        const eventList = events[category][year] && events[category][year][month];
        if (eventList) {
            const event = eventList.find(event => event.date.getDate() === day);
            if (event) {
                dayElement.style.backgroundColor = "#ADD8E6"; 
                dayElement.title = event.title;
                dayElement.addEventListener("click", () => showEventDetails(event));
            }
        }
        daysElement.appendChild(dayElement);
    }
}

function changeMonth(direction) {
    currentMonth += direction;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear, currentCategory);
}

function changeCategory(category) {
    currentCategory = category;
    const calendarHeader = document.getElementById("calendar-header");
    calendarHeader.textContent = category.toUpperCase() + " CALENDAR";
    renderCalendar(currentMonth, currentYear, currentCategory);
}

function showEventDetails(event) {
    const calendar = document.getElementById("calendar");
    const eventDetails = document.getElementById("eventDetails");
    const eventTitle = document.getElementById("eventTitle");
    const eventDate = document.getElementById("eventDate");
    const eventDescription = document.getElementById("eventDescription");

    calendar.style.display = "none";
    eventDetails.style.display = "block";
    eventTitle.textContent = event.title;
    eventDate.textContent = event.date.toDateString();
    eventDescription.innerHTML = event.description; 
}

function closeEventDetails() {
    const calendar = document.getElementById("calendar");
    const eventDetails = document.getElementById("eventDetails");

    calendar.style.display = "block";
    eventDetails.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".category-buttons button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.className;
            changeCategory(category);
        });
    });
});

renderCalendar(currentMonth, currentYear, currentCategory);