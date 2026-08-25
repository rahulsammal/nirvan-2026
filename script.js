const eventData = [
  {
    id: 'hackathon',
    number: '01',
    type: 'BUILD',
    name: 'Hackathon',
    short: 'Build what matters.',
    description: 'A high-energy innovation sprint for teams turning sharp ideas into useful, impactful products.',
    date: '12 OCT',
    time: '10:00 AM',
    team: '2-4',
    fee: '₹100',
    prize: '₹15,000',
    venue: 'Innovation Lab',
    eligibility: 'College students',
    rules: [
      'Build in the given time window',
      'Use original work and disclose APIs',
      'Present a working demo to the jury'
    ],
    image: 'assets/hackathon.png'
  },
  {
    id: 'ctf',
    number: '02',
    type: 'SECURITY',
    name: 'CTF',
    short: 'Break the pattern.',
    description: 'Find the flags through cryptography, web security, forensics and reverse engineering challenges.',
    date: '12 OCT',
    time: '11:00 AM',
    team: '1-3',
    fee: '₹100',
    prize: '₹10,000',
    venue: 'Cyber Arena',
    eligibility: 'Students and security enthusiasts',
    rules: [
      'No attacking infrastructure outside the arena',
      'Share flags only with your registered team',
      'Highest score wins; time breaks ties'
    ],
    image: 'assets/ctf.png'
  },
  {
    id: 'esports',
    number: '03',
    type: 'PLAY',
    name: 'E-Sports',
    short: 'Play to win.',
    description: 'Strategy, teamwork, reflexes and skill collide in the ultimate competitive gaming arena.',
    date: '12 OCT',
    time: '02:00 PM',
    team: '4-5',
    fee: '₹200',
    prize: '₹12,000',
    venue: 'Main Auditorium',
    eligibility: 'Registered college teams',
    rules: [
      'Bring a valid college ID',
      'Check in 30 minutes before the match',
      'The referee decision is final'
    ],
    image: 'assets/esport.png'
  },
  {
    id: 'treasure',
    number: '04',
    type: 'ADVENTURE',
    name: 'Treasure Hunt',
    short: 'Follow the signal.',
    description: 'Decode clues, overcome challenges and race across campus to uncover the final treasure.',
    date: '13 OCT',
    time: '10:00 AM',
    team: '3-5',
    fee: '₹100',
    prize: '₹8,000',
    venue: 'GEHU Campus',
    eligibility: 'All registered participants',
    rules: [
      'Stay with your team throughout',
      'Respect campus boundaries',
      'Solve clues without damaging campus property'
    ],
    image: 'assets/treasure-hunt.png'
  },
  {
    id: 'workshop',
    number: '05',
    type: 'LEARN',
    name: 'Workshop',
    short: 'Leave with a new skill.',
    description: 'Learn from practitioners, explore emerging technologies and turn theory into hands-on experience.',
    date: '13 OCT',
    time: '11:00 AM',
    team: 'Open',
    fee: 'Free',
    prize: 'Certificate',
    venue: 'Seminar Hall',
    eligibility: 'Students and faculty',
    rules: [
      'Seats are first come, first served',
      'Carry a laptop for the practical session',
      'Complete the feedback form for a certificate'
    ],
    image: 'assets/hackathon.png'
  }
];

const agenda = [
  { day: 'DAY 01', date: '12 OCT', time: '09:00', label: 'Doors open' },
  { day: 'DAY 01', date: '12 OCT', time: '10:00', label: 'Hackathon begins' },
  { day: 'DAY 01', date: '12 OCT', time: '11:00', label: 'CTF briefing' },
  { day: 'DAY 01', date: '12 OCT', time: '13:00', label: 'Lunch break' },
  { day: 'DAY 01', date: '12 OCT', time: '14:00', label: 'E-sports arena live' },
  { day: 'DAY 02', date: '13 OCT', time: '10:00', label: 'Treasure Hunt launch' },
  { day: 'DAY 02', date: '13 OCT', time: '11:00', label: 'Future skills workshop' },
  { day: 'DAY 02', date: '13 OCT', time: '18:00', label: 'HackSprint begins' }
];

const speakerData = [
  [
    'Dr. Meera Joshi',
    'Innovation Director',
    'GEHU',
    'Leads student innovation programs and helps early ideas become useful products.',
    'assets/merra.jpg'
  ],
  [
    'Arjun Mehta',
    'Security Researcher',
    'CyberLab India',
    'A security educator who makes complex systems easier to question, test and protect.',
    'assets/menspeaker.jpg'
  ],
  [
    'Riya Kapoor',
    'Product Designer',
    'Open Form Studio',
    'Designs digital experiences where technology feels clear, generous and human.',
    'assets/riya.jpg'
  ]
];

const galleryData = [
  {
    id: 'hackathon',
    number: '01',
    title: 'Hackathon',
    note: 'Build room',
    images: [
      '20260418_095451.jpg',
      '20260418_101029.jpg',
      '20260418_110744.jpg'
    ]
  },
  {
    id: 'ctf',
    number: '02',
    title: 'CTF',
    note: 'Cyber arena',
    images: [
      'DSC_9762.JPG',
      'DSC_9766.JPG',
      'DSC_9778.JPG'
    ]
  },
  {
    id: 'esport',
    number: '03',
    title: 'E-sports',
    note: 'Game on',
    images: [
      'DSC08158.JPG',
      'DSC08175.JPG',
      'DSC_9816.JPG'
    ]
  },
  {
    id: 'treasure-hunt',
    number: '04',
    title: 'Treasure Hunt',
    note: 'The hunt',
    images: [
      'DSC_0090.JPG',
      'DSC_0100.JPG',
      'DSC_0111.JPG'
    ]
  }
];

const eventGrid = document.querySelector('#eventGrid');
const scheduleList = document.querySelector('#scheduleList');
const speakerGrid = document.querySelector('#speakerGrid');
const galleryGroupsElement = document.querySelector('#galleryGroups');

const eventModal = document.querySelector('#eventModal');
const registrationModal = document.querySelector('#registrationModal');
const lightbox = document.querySelector('#lightbox');
const toast = document.querySelector('#toast');
const roleModal = document.querySelector('#roleModal');
const studentModal = document.querySelector('#studentModal');
const organiserLoginModal = document.querySelector('#organiserLoginModal');
const organiserModal = document.querySelector('#organiserModal');

let currentRole =
  localStorage.getItem('nirvanRole') === 'organiser' &&
  sessionStorage.getItem('nirvanOrganiserAuth') === 'true'
    ? 'organiser'
    : (localStorage.getItem('nirvanRole') || 'visitor');

let selectedEventId = eventData[0].id;

const participants = JSON.parse(
  localStorage.getItem('nirvanParticipants') || '[]'
);

const savedEvents = JSON.parse(
  localStorage.getItem('nirvanEvents') || 'null'
);

if (savedEvents) {
  savedEvents.forEach(savedEvent => {
    const targetEvent = eventData.find(
      event => event.id === savedEvent.id
    );

    if (targetEvent) {
      Object.assign(targetEvent, savedEvent);
    }
  });
}

const roleProfiles = {
  student: {
    lede: 'Find your next challenge, understand the rules, track the schedule and claim your place in the arena.',
    primary: ['Browse events', '#events'],
    secondary: ['Rules, prizes + schedule', '#schedule'],
    nav: {
      about: 'about',
      events: 'events',
      schedule: 'schedule',
      speakers: 'gallery',
      gallery: 'gallery',
      contact: 'contact'
    },
    register: 'Register'
  },

  visitor: {
    lede: 'Get a clear feel for Nirvan: the people, partners, programme and campus where ideas move into action.',
    primary: ['Explore the fest', '#about'],
    secondary: ['Find the venue', '#contact'],
    nav: {
      about: 'the fest',
      events: 'events',
      schedule: 'programme',
      speakers: 'speakers',
      gallery: 'field notes',
      contact: 'venue'
    },
    register: ''
  },

  organiser: {
    lede: 'Present Nirvan with confidence, keep every event current and give participants a programme they can trust.',
    primary: ['Open organiser console', '#events'],
    secondary: ['View the public fest', '#about'],
    nav: {
      about: 'the fest',
      events: 'events',
      schedule: 'programme',
      speakers: 'speakers',
      gallery: 'field notes',
      contact: 'venue'
    },
    register: 'Organiser console'
  }
};

function renderEventCards(filter = 'ALL') {
  const visibleEvents =
    filter === 'ALL'
      ? eventData
      : eventData.filter(event => event.type === filter);

  eventGrid.innerHTML = visibleEvents
    .map(event => `
      <article class="event-card">
        <div class="event-image">
          <img src="${event.image}" alt="${event.name} poster">
          <span>${event.number} / ${event.type}</span>
        </div>

        <div class="event-card-body">
          <div class="event-title">
            <h3>${event.name}</h3>
            <span>${event.short}</span>
          </div>

          <p>${event.description}</p>

          <div class="event-facts">
            <span><b>DATE</b>${event.date}</span>
            <span><b>TEAM</b>${event.team}</span>
            <span><b>FEE</b>${event.fee}</span>
            <span><b>PRIZE</b>${event.prize}</span>
          </div>

          <button class="details-link" data-event-id="${event.id}">
            View full details <span>↗</span>
          </button>
        </div>
      </article>
    `)
    .join('');
}

function renderScheduleList() {
  scheduleList.innerHTML = agenda
    .map(item => `
      <div class="schedule-item">
        <span class="schedule-day">${item.day}<small>${item.date}</small></span>
        <strong>${item.time}</strong>
        <span>${item.label}</span>
        <span class="schedule-marker" aria-hidden="true"></span>
      </div>
    `)
    .join('');
}

function renderSpeakerCards() {
  speakerGrid.innerHTML = speakerData
    .map(([name, role, organization, bio, image]) => `
      <article class="speaker-card">
        <img src="${image}" alt="${name}, ${role}">

        <div>
          <p class="section-kicker">
            ${role} / ${organization}
          </p>

          <h3>${name}</h3>
          <p>${bio}</p>
        </div>
      </article>
    `)
    .join('');
}

function renderGalleryGroups() {
  galleryGroupsElement.innerHTML = galleryData
    .map(group => `
      <section class="gallery-group">

        <div class="gallery-group-heading">
          <p class="section-kicker">
            ${group.number} / ${group.note}
          </p>

          <h3>${group.title}</h3>
        </div>

        <div class="gallery-grid">
          ${group.images
            .map((image, index) => `
              <figure
                data-image="assets/gallery/${group.id}/${image}"
                data-alt="${group.title} moment ${index + 1}"
              >
                <img
                  src="assets/gallery/${group.id}/${image}"
                  alt="${group.title} moment ${index + 1}"
                  loading="lazy"
                >

                <figcaption>
                  <span>0${index + 1}</span>
                  ${group.note}
                  <b>↗</b>
                </figcaption>
              </figure>
            `)
            .join('')}
        </div>

      </section>
    `)
    .join('');
}

function showEventDetails(event) {
  selectedEventId = event.id;

  document.querySelector('#eventType').textContent =
    `${event.number} / ${event.type}`;

  document.querySelector('#eventTitle').textContent =
    event.name;

  document.querySelector('#eventDescription').textContent =
    event.description;

  document.querySelector('#eventFacts').innerHTML = [
    ['DATE', `${event.date} 2026`],
    ['TIME', event.time],
    ['VENUE', event.venue],
    ['TEAM', `${event.team} people`],
    ['FEE', event.fee],
    ['ELIGIBILITY', event.eligibility]
  ]
    .map(([label, value]) => `
      <span>
        <b>${label}</b>
        ${value}
      </span>
    `)
    .join('');

  document.querySelector('#eventRules').innerHTML =
    event.rules
      .map(rule => `<li>${rule}</li>`)
      .join('');

  document.querySelector('#eventActions').innerHTML =
    currentRole === 'student'
      ? `<button class="button button-dark" data-open-registration>
           Reserve a spot <span>↗</span>
         </button>`
      : currentRole === 'organiser'
        ? `<button class="button button-dark" data-open-organiser>
             Edit event <span>↗</span>
           </button>`
        : `<p class="role-note">
             Visitor view · details are available to everyone.
           </p>`;

  eventModal.hidden = false;
}

function closeAllModals() {
  eventModal.hidden = true;
  registrationModal.hidden = true;
  roleModal.hidden = true;
  studentModal.hidden = true;
  organiserLoginModal.hidden = true;
  organiserModal.hidden = true;
  lightbox.hidden = true;
}

function openStudentMenu() {
  if (currentRole !== 'student') {
    roleModal.hidden = false;
    return;
  }

  closeAllModals();
  studentModal.hidden = false;
}

function changeRole(role) {
  if (
    role === 'organiser' &&
    sessionStorage.getItem('nirvanOrganiserAuth') !== 'true'
  ) {
    closeAllModals();
    organiserLoginModal.hidden = false;
    return;
  }

  currentRole = role;

  localStorage.setItem('nirvanRole', role);

  document.querySelector('.role-switcher').innerHTML =
    `${role[0].toUpperCase() + role.slice(1)} <span>⌄</span>`;

  updateRoleUI();

  roleModal.hidden = true;

  closeAllModals();

  const activeFilter =
    document.querySelector('.filter.active');

  renderEventCards(
    activeFilter ? activeFilter.dataset.filter : 'ALL'
  );

  showToast(
    `${role[0].toUpperCase() + role.slice(1)} view active.`
  );

  if (role === 'organiser') {
    openOrganiserConsole();
  }

  if (role === 'student') {
    openStudentMenu();
  }
}

function openRegistrationForm() {
  if (currentRole !== 'student') {
    roleModal.hidden = false;
    return;
  }

  closeAllModals();

  document.querySelector('#registrationEvent').innerHTML =
    eventData
      .map(event => `
        <option
          value="${event.id}"
          ${event.id === selectedEventId ? 'selected' : ''}
        >
          ${event.name}
        </option>
      `)
      .join('');

  setupTeamSize();

  registrationModal.hidden = false;
}

function getTeamSizes(event) {
  if (event.team === 'Open') {
    return [1];
  }

  const [minimum, maximum] =
    event.team.split('-').map(Number);

  return Array.from(
    { length: maximum - minimum + 1 },
    (_, index) => minimum + index
  );
}

function renderMemberInputs() {
  const selectedEvent =
    eventData.find(
      item =>
        item.id ===
        document.querySelector('#registrationEvent').value
    );

  const size =
    Number(document.querySelector('#teamSize').value);

  document.querySelector('#memberFields').innerHTML =
    Array.from({ length: size }, (_, index) => `
      <fieldset class="member-field">

        <legend>
          MEMBER ${String(index + 1).padStart(2, '0')}
          ${index === 0 ? ' / TEAM LEADER' : ''}
        </legend>

        <label>
          Name
          <input
            required
            minlength="2"
            pattern="[A-Za-z][-A-Za-z .']{1,}"
            title="Enter a valid name"
            name="memberName${index}"
            placeholder="Student full name"
          >
        </label>

        <div class="member-grid">

          <label>
            Student ID
            <input
              required
              minlength="2"
              pattern="[A-Za-z0-9/-]{2,}"
              title="Enter a valid student ID"
              name="memberId${index}"
              placeholder="GEHU ID"
            >
          </label>

          <label>
            Roll no
            <input
              required
              minlength="2"
              pattern="[A-Za-z0-9/-]{2,}"
              title="Enter a valid roll number"
              name="memberRoll${index}"
              placeholder="University roll no"
            >
          </label>

        </div>

        <label>
          Contact
          <input
            required
            inputmode="numeric"
            pattern="[6-9][0-9]{9}"
            title="Enter a valid 10-digit mobile number"
            name="memberContact${index}"
            type="tel"
            placeholder="10-digit mobile number"
          >
        </label>

      </fieldset>
    `)
    .join('');

  if (selectedEvent) {
    document
      .querySelector('#teamSize')
      .setAttribute(
        'aria-label',
        `${selectedEvent.name} team size`
      );
  }
}

function setupTeamSize() {
  const selectedEvent =
    eventData.find(
      item =>
        item.id ===
        document.querySelector('#registrationEvent').value
    );

  document.querySelector('#teamSize').innerHTML =
    getTeamSizes(selectedEvent)
      .map(
        size => `
          <option value="${size}">
            ${size} member${size > 1 ? 's' : ''}
          </option>
        `
      )
      .join('');

  renderMemberInputs();
}

function openOrganiserConsole() {
  if (currentRole !== 'organiser') {
    roleModal.hidden = false;
    return;
  }

  closeAllModals();

  const eventOptions =
    eventData
      .map(event => `
        <option value="${event.id}">
          ${event.name}
        </option>
      `)
      .join('');

  document.querySelector('#editorEvent').innerHTML =
    eventOptions;

  document.querySelector('#memberEvent').innerHTML =
    eventOptions;

  loadEditor(
    eventData.find(
      event => event.id === selectedEventId
    ) || eventData[0]
  );

  document.querySelector('#memberEvent').value =
    selectedEventId;

  document.querySelector('#organiserMenu').hidden = false;

  document
    .querySelectorAll('.organiser-view')
    .forEach(panel =>
      panel.classList.remove('active')
    );

  organiserModal.hidden = false;
}

function loadEditor(event) {
  document.querySelector('#editorEvent').value =
    event.id;

  document.querySelector('#editorName').value =
    event.name;

  document.querySelector('#editorDescription').value =
    event.description;

  document.querySelector('#editorDate').value =
    event.date;

  document.querySelector('#editorTime').value =
    event.time;

  document.querySelector('#editorVenue').value =
    event.venue;

  document.querySelector('#editorFee').value =
    event.fee;

  renderParticipants(event.id);
}

function renderParticipants(eventId) {
  const registered =
    participants.filter(
      participant =>
        participant.eventId === eventId
    );

  document.querySelector('#participantCount').textContent =
    registered.length;

  document.querySelector('#participantMenuCount').textContent =
    registered.length;

  document.querySelector('#participantList').innerHTML =
    registered.length
      ? registered
          .map(participant => `
            <li>

              <b>
                ${participant.leaderName || participant.name}
              </b>

              <span>
                Leader contact:
                ${participant.leaderContact || participant.email}
                ·
                ${participant.teamSize || 1}
                member${participant.teamSize > 1 ? 's' : ''}
              </span>

              ${
                participant.members
                  ? `
                    <div class="participant-members">
                      ${participant.members
                        .map(
                          (member, index) => `
                            <small>
                              ${index + 1}.
                              ${member.name}
                              · ID ${member.studentId}
                              · Roll ${member.rollNo}
                              · ${member.contact}
                            </small>
                          `
                        )
                        .join('')}
                    </div>
                  `
                  : ''
              }

            </li>
          `)
          .join('')
      : '<li class="empty-state">No student registrations yet.</li>';
}

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;

  setTimeout(() => {
    toast.hidden = true;
  }, 3500);
}

function validateForm(form) {
  const requiredFields = form.querySelectorAll('[required]');

  requiredFields.forEach(field => {
    field.setCustomValidity(
      field.value.trim() ? '' : 'This field is required.'
    );
  });

  if (!form.checkValidity()) {
    form.reportValidity();
    return false;
  }

  return true;
}

function updateRoleUI() {
  const profile = roleProfiles[currentRole];

  document.querySelector('#heroLede').textContent =
    profile.lede;

  document.querySelector('#heroPrimary').textContent =
    `${profile.primary[0]} ↘`;

  document.querySelector('#heroPrimary').href =
    profile.primary[1];

  document.querySelector('#heroSecondary').textContent =
    `${profile.secondary[0]} ›`;

  document.querySelector('#heroSecondary').href =
    profile.secondary[1];

  Object.entries(profile.nav).forEach(
    ([section, label]) => {
      const navigationItem =
        document.querySelector(
          `[data-nav="${section}"]`
        );

      if (navigationItem) {
        navigationItem.textContent = label;
      }
    }
  );

  const registerButton =
    document.querySelector('.nav-register');

  registerButton.hidden =
    currentRole === 'visitor';

  registerButton.textContent =
    `${currentRole === 'student'
      ? 'Student desk'
      : profile.register} ↗`;

  registerButton.removeAttribute(
    'data-open-registration'
  );

  registerButton.removeAttribute(
    'data-open-organiser'
  );

  registerButton.removeAttribute(
    'data-open-student'
  );

  registerButton.setAttribute(
    currentRole === 'organiser'
      ? 'data-open-organiser'
      : 'data-open-student',
    ''
  );
}

function updateCountdown() {
  const targetTime =
    new Date(
      '2026-10-12T09:00:00+05:30'
    ).getTime();

  const remaining =
    Math.max(0, targetTime - Date.now());

  const totalSeconds =
    Math.floor(remaining / 1000);

  const countdownValues = [
    [
      'days',
      Math.floor(totalSeconds / 86400)
    ],
    [
      'hours',
      Math.floor(
        (totalSeconds % 86400) / 3600
      )
    ],
    [
      'minutes',
      Math.floor(
        (totalSeconds % 3600) / 60
      )
    ],
    [
      'seconds',
      totalSeconds % 60
    ]
  ];

  countdownValues.forEach(
    ([id, value]) => {
      const element =
        document.querySelector(`#${id}`);

      if (element) {
        element.textContent =
          String(value).padStart(2, '0');
      }
    }
  );

  document.querySelector('.countdown')?.classList.toggle(
    'complete',
    remaining === 0
  );
}


/* Initial setup */

document.querySelector('.role-switcher').innerHTML =
  `${currentRole[0].toUpperCase() + currentRole.slice(1)}
   <span>⌄</span>`;

updateRoleUI();

renderEventCards();
renderScheduleList();
renderSpeakerCards();
renderGalleryGroups();

updateCountdown();

setInterval(updateCountdown, 1000);


/* Global click handling */

document.addEventListener('click', event => {

  const filterButton =
    event.target.closest('[data-filter]');

  if (filterButton) {

    document
      .querySelectorAll('[data-filter]')
      .forEach(button => {
        button.classList.toggle(
          'active',
          button === filterButton
        );
      });

    renderEventCards(
      filterButton.dataset.filter
    );
  }


  const eventButton =
    event.target.closest('[data-event-id]');

  if (eventButton) {

    const selectedEvent =
      eventData.find(
        item =>
          item.id ===
          eventButton.dataset.eventId
      );

    if (selectedEvent) {
      showEventDetails(selectedEvent);
    }
  }


  if (
    event.target.closest(
      '[data-open-registration]'
    )
  ) {
    openRegistrationForm();
  }


  if (
    event.target.closest('[data-open-role]')
  ) {
    roleModal.hidden = false;
  }


  if (
    event.target.closest(
      '[data-open-organiser]'
    )
  ) {
    openOrganiserConsole();
  }


  if (
    event.target.closest(
      '[data-open-student]'
    )
  ) {
    openStudentMenu();
  }


  const roleButton =
    event.target.closest('[data-role]');

  if (roleButton) {
    changeRole(
      roleButton.dataset.role
    );
  }


  const studentAction =
    event.target.closest(
      '[data-student-action]'
    );

  if (studentAction) {

    const action =
      studentAction.dataset.studentAction;

    closeAllModals();

    if (action === 'register') {
      openRegistrationForm();
    } else {
      document
        .querySelector(
          `#${action === 'events'
            ? 'events'
            : 'schedule'}`
        )
        .scrollIntoView({
          behavior: 'smooth'
        });
    }
  }


  if (
    event.target.closest(
      '[data-close-modal]'
    )
  ) {
    closeAllModals();
  }


  const galleryImage =
    event.target.closest('[data-image]');

  if (galleryImage) {

    document.querySelector(
      '#lightboxImage'
    ).src =
      galleryImage.dataset.image;

    document.querySelector(
      '#lightboxImage'
    ).alt =
      galleryImage.dataset.alt;

    lightbox.hidden = false;
  }


  if (
    event.target === eventModal ||
    event.target === registrationModal ||
    event.target === roleModal ||
    event.target === studentModal ||
    event.target === organiserModal ||
    event.target === lightbox
  ) {
    closeAllModals();
  }

});


/* Organiser login */

document
  .querySelector('#organiserLoginForm')
  .addEventListener(
    'submit',
    event => {

      event.preventDefault();

      if (!validateForm(event.currentTarget)) {
        return;
      }
      const formData =
        new FormData(
          event.currentTarget
        );

      const designation =
        formData
          .get('designation')
          .trim()
          .toLowerCase();

      const email =
        formData.get('email');

      const password =
        formData.get('password');

      const isValid =
        designation === 'organiser' &&
        email === 'admin@123' &&
        password === '123456';

      if (!isValid) {

        document.querySelector(
          '#loginError'
        ).hidden = false;

        return;
      }

      sessionStorage.setItem(
        'nirvanOrganiserAuth',
        'true'
      );

      document.querySelector(
        '#loginError'
      ).hidden = true;

      event.currentTarget.reset();

      changeRole('organiser');
    }
  );


/* Registration controls */

document
  .querySelector('#registrationEvent')
  .addEventListener(
    'change',
    setupTeamSize
  );

document
  .querySelector('#teamSize')
  .addEventListener(
    'change',
    renderMemberInputs
  );


/* Registration form */

document
  .querySelector('#registrationForm')
  .addEventListener(
    'submit',
    event => {

      event.preventDefault();

      if (!validateForm(event.currentTarget)) {
        return;
      }
      const formData =
        new FormData(
          event.currentTarget
        );

      const memberCount =
        Number(
          formData.get('teamSize')
        );

      const members =
        Array.from(
          { length: memberCount },
          (_, index) => ({
            name:
              formData.get(
                `memberName${index}`
              ),

            studentId:
              formData.get(
                `memberId${index}`
              ),

            rollNo:
              formData.get(
                `memberRoll${index}`
              ),

            contact:
              formData.get(
                `memberContact${index}`
              )
          })
        );

      participants.push({
        name:
          formData.get('leaderName'),

        email:
          formData.get('leaderContact'),

        eventId:
          formData.get('event'),

        leaderName:
          formData.get('leaderName'),

        leaderContact:
          formData.get('leaderContact'),

        teamSize:
          memberCount,

        members
      });

      localStorage.setItem(
        'nirvanParticipants',
        JSON.stringify(participants)
      );

      closeAllModals();

      showToast(
        `${memberCount}-member team registration saved for the organiser.`
      );

      event.currentTarget.reset();

      document.querySelector(
        '#memberFields'
      ).innerHTML = '';
    }
  );


/* Organiser event editor */

document
  .querySelector('#editorEvent')
  .addEventListener(
    'change',
    event => {

      const selected =
        eventData.find(
          item =>
            item.id ===
            event.target.value
        );

      if (selected) {
        loadEditor(selected);
      }
    }
  );


/* Participant event filter */

document
  .querySelector('#memberEvent')
  .addEventListener(
    'change',
    event => {

      selectedEventId =
        event.target.value;

      renderParticipants(
        event.target.value
      );
    }
  );


/* Organiser navigation */

document
  .querySelectorAll(
    '[data-organiser-view]'
  )
  .forEach(button => {

    button.addEventListener(
      'click',
      () => {

        const view =
          button.dataset.organiserView;

        document.querySelector(
          '#organiserMenu'
        ).hidden = true;

        document
          .querySelectorAll(
            '.organiser-view'
          )
          .forEach(panel => {

            panel.classList.toggle(
              'active',
              panel.id ===
              `${view}View`
            );
          });
      }
    );
  });


document
  .querySelectorAll(
    '[data-organiser-menu]'
  )
  .forEach(button => {

    button.addEventListener(
      'click',
      () => {

        document.querySelector(
          '#organiserMenu'
        ).hidden = false;

        document
          .querySelectorAll(
            '.organiser-view'
          )
          .forEach(panel =>
            panel.classList.remove(
              'active'
            )
          );
      }
    );
  });


/* Event editor form */

document
  .querySelector('#eventEditor')
  .addEventListener(
    'submit',
    event => {

      event.preventDefault();

      if (!validateForm(event.currentTarget)) {
        return;
      }
      const currentEvent =
        eventData.find(
          item =>
            item.id ===
            document.querySelector(
              '#editorEvent'
            ).value
        );

      if (!currentEvent) {
        return;
      }

      currentEvent.name =
        document.querySelector(
          '#editorName'
        ).value;

      currentEvent.description =
        document.querySelector(
          '#editorDescription'
        ).value;

      currentEvent.date =
        document.querySelector(
          '#editorDate'
        ).value;

      currentEvent.time =
        document.querySelector(
          '#editorTime'
        ).value;

      currentEvent.venue =
        document.querySelector(
          '#editorVenue'
        ).value;

      currentEvent.fee =
        document.querySelector(
          '#editorFee'
        ).value;

      localStorage.setItem(
        'nirvanEvents',
        JSON.stringify(eventData)
      );

      const activeFilter =
        document.querySelector(
          '.filter.active'
        );

      renderEventCards(
        activeFilter
          ? activeFilter.dataset.filter
          : 'ALL'
      );

      closeAllModals();

      showToast(
        'Event details updated.'
      );
    }
  );


/* Mobile menu */

document
  .querySelector('.menu-button')
  .addEventListener(
    'click',
    event => {

      const navigation =
        document.querySelector(
          '.nav-links'
        );

      const isOpen =
        navigation.classList.toggle(
          'open'
        );

      event.currentTarget.setAttribute(
        'aria-expanded',
        isOpen
      );
    }
  );


document
  .querySelectorAll(
    '.nav-links a'
  )
  .forEach(link => {

    link.addEventListener(
      'click',
      () => {

        document
          .querySelector(
            '.nav-links'
          )
          .classList.remove(
            'open'
          );
      }
    );
  });
