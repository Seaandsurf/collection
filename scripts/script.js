document.addEventListener('DOMContentLoaded', function () {
  const collection = [
    {
      name: "Virgil Abloh",
      nationality: "American",
      picture: '',
      spe: ["Founder of Off-White™", "Artistic Director of Louis Vuitton"],
      discipline: ["Fashion", "retail", "footwear", "design"],
      details: "En 2020, le designer Virgil Abloh a étendu son influence omniprésente dans la mode streetwear et le luxe, marquant des collaborations majeures avec des marques mondiales telles que Mercedes-Benz, la NBA, et NIGO, tout en continuant ses partenariats notables avec Nike et Jordan Brand.",
      links: ["https://www.off---white.com/en-us/", "https://www.louisvuitton.com/", "@virgilabloh"],
    },
    {
      name: "Kim Jones",
      nationality: "Anglais",
      picture: "",
      spe: ["Artistic Director at Dior Menswear", "Artistic Director at FENDI Women"],
      discipline: "Fashion",
      details: "Kim Jones, directeur artistique de Dior Men, a marqué l'année 2020 en intégrant l'influence streetwear, orchestrant des collaborations notables avec KAWS et Hajime Sorayama, et créant la très convoitée Dior x Air Jordan 1, alimentant un engouement mondial.",
      links: ["https://www.dior.com/en_us", "https://www.givenchy.com/fr/fr/femme/", "@mrkimjones"],
    },
    {
      name: "Jerry Lorenzo",
      nationality: "American",
      picture: "link/to/a/picture",
      spe: ["Founder and Designer of Fear of God"],
      discipline: ["Fashion", "retail", "footwear"],
      details: "Jerry Lorenzo, fondateur de Fear of God, maintient son élan novateur avec des créations de vêtements raffinées et des collaborations notables, dont un partenariat sophistiqué avec le designer de costumes italien Ermenegildo Zegna, tandis que sa collaboration continue avec Nike a abouti à la sortie très prisée de l'Air Fear of God 1 en 2020.",
      links: [" https://fearofgod.com/", "@jerrylorenzo"],
    },
    {
      name: "Matthew M. Williams",
      nationality: "American",
      picture: "link/to/a/picture",
      spe: ["Co-Founder of 1017 ALYX 9SM", "Creative Director at Givenchy"],
      discipline: ["Fashion", "retail"],
      details: "Matthew Williams, co-fondateur d'ALYX devenu directeur artistique de Givenchy, navigue stratégiquement dans le monde de la mode avec une esthétique rebelle et technique, obtenant des soutiens de célébrités et assumant avec succès la direction créative de Givenchy avec une impressionnante collaboration d'A-listers.",
      links: ["https://www.alyxstudio.com/", "@matthewmwilliams", "@alyxstudio"],
    },
    {
      name: "Hiroshi Fujiwara",
      nationality: "Japanese",
      picture: "link/to/a/picture",
      spe: ["Founder of Fragment design", "Musician"],
      discipline: ["Fashion", "music", "design"],
      details: "Hiroshi Fujiwara, fondateur de fragment design, a marqué l'année 2020 avec des collaborations notables, notamment une collection de chaussures avec Jordan Brand, tout en continuant son travail avec Moncler Genius et publiant un nouveau livre rétrospectif avec Rizzoli.",
      links: ["https://ringofcolour.com/en/", "@fujiwarahiroshi"],
    },
    {
      name: "KAWS (Brian Donnelly)",
      nationality: "American",
      picture: "link/to/a/picture",
      spe: "Artist",
      discipline: ["Fashion", "design", "art"],
      details: "KAWS, the renowned artist, demonstrated his impact beyond the art world in 2020 by actively contributing to social causes, releasing figures in support of Black Lives Matter, participating in a fundraiser for Joe Biden's campaign, and advocating for the USPS, while also showcasing his largest statue in the exhibition KAWS: COMPANIONSHIP IN THE AGE OF LONELINESS and engaging in collaborations with musicians Kid Cudi and Travis Scott, as well as releasing children's sunglasses with Sons + Daughters.",
      links: ["https://kawsone.com/", "@kaws"],
    },
    {
      name: "Ronnie Fieg",
      nationality: "American",
      picture: "link/to/a/picture",
      spe: ["Founder of KITH", "Creative director at N-Y Knicks"],
      discipline: ["Fashion", "retail"],
      details: "Ronnie Fieg, fondateur de Kith, s'affirme comme le roi des collaborations en 2020, allant de partenariats avec des icônes de la culture pop, tels que The Godfather, Bugs Bunny, et Coca-Cola, à la création d'une édition limitée de la BMW M4 competition coupe, soulignant son talent à générer l'engouement pour sa marque par des collaborations diversifiées.",
      links: ["https://kith.com/", "@kith"],
    },
    {
      name: "Daniel Arsham",
      nationality: "American",
      picture: "link/to/a/picture",
      spe: ["Artist", "Creative director at Cleveland Cavaliers"],
      discipline: ["Fashion", "art"],
      details: "Daniel Arsham, travailleur acharné de l'art, a marqué 2020 en révélant régulièrement de nouveaux projets sur les réseaux sociaux, touchant divers secteurs tels que la mode, le sport, le divertissement et la musique, avec des expositions notables comme -Paris, 3020- et -Relics of Kanto Through Time- sur l'univers Pokémon, des collaborations avec Kim Jones et Dior, des créations inspirées par Porsche, et l'annonce de sa nomination en tant que directeur créatif des Cleveland Cavaliers.",
      links: ["https://www.danielarsham.com/", " @danielarsham"],
    },
    {
      name: "NIGO (Tomohisa Yamashita)",
      nationality: "Japanese",
      picture: "link/to/a/picture",
      spe: "Founder of Human Made",
      discipline: ["Fashion", "retail", "design"],
      details: "NIGO, un des pionniers originaux du streetwear, maintient son influence dans la mode, la chaussure et la musique en 2020, marquant des collaborations notables avec Girls Don't Cry, Virgil Abloh pour Louis Vuitton, et lançant des chaussures vibrantes et des capsules HUMAN MADE.",
      links: ["https://humanmade.jp/", "@nigo"],
    },
    {
      name: "Simon Porte Jacquemus",
      nationality: "French",
      picture: "link/to/a/picture",
      spe: ["Founder and Designer of Jacquemus"],
      discipline: "Fashion",
      details: "Simon Porte Jacquemus, connu pour sa mode naïve caractérisée par des créations spontanées et sans effort, a marqué l'année 2020 en continuant à façonner l'esthétique de sa marque malgré les défis de la COVID-19, notamment avec des défilés innovants comme la présentation SS21 au milieu d'un champ d'orge près de Paris, soulignant l'importance de l'expérience dans sa vision créative.",
      links: ["https://www.jacquemus.com/", "@jacquemus"],
    },
  ];


  // Ajouter les cartes
  const designersCard = document.createElement('section');
  designersCard.className = 'designers-container';
  document.body.appendChild(designersCard);

  // Parcourir la collection et créer les cartes HTML
  collection.forEach(designer => {
    // Créer une <section> pour chaque designer
    const designerCard = document.createElement('section');
    designerCard.classList.add('designer-card'); // Ajouter des classes si nécessaire

    // Créer un  <h2> pour NAME
    const nameElement = document.createElement('h2');
    nameElement.classList.add('name');
    nameElement.textContent = designer.name;
    designerCard.appendChild(nameElement);

    // Créer un <h4> pour la NATIONALITE
    const nationalityElement = document.createElement('h4');
    nationalityElement.classList.add('country');
    nationalityElement.textContent = `Nationality: ${designer.nationality}`;
    designerCard.appendChild(nationalityElement);


    // Créer une <img> pour l'IMAGE 
    const imageElement = document.createElement('img');
    imageElement.classList.add('img');
    // imageElement.url();
    designerCard.appendChild(imageElement);


    // Créer un <article> pour les SPE 
    const speElement = document.createElement('article');
    speElement.classList.add('skills');
    speElement.textContent = `Specialties: ${designer.spe.join(', ')}`;
    designerCard.appendChild(speElement);


    // Créer une <ul> <li> pour LINKS
    const linksList = document.createElement('ul');
    linksList.classList.add('allLinks');
    if (Array.isArray(designer.links)) {
      designer.links.forEach(link => {
        const linkItem = document.createElement('li');
        linkItem.classList.add('link');
        const linkAnchor = document.createElement('a');
        linkAnchor.href = link;
        linkAnchor.target = '_blank';
        linkAnchor.textContent = link;
        linkItem.appendChild(linkAnchor);
        linksList.appendChild(linkItem);
      });
    } else if (typeof designer.links === 'string') {
      const linkItem = document.createElement('li');
      const linkAnchor = document.createElement('a');
      linkAnchor.href = designer.links;
      linkAnchor.target = '_blank';
      linkAnchor.textContent = designer.links;
      linkItem.appendChild(linkAnchor);
      linksList.appendChild(linkItem);
    }
    designerCard.appendChild(linksList);

    // Créer un <p> pour DETAILS
    const detailsElement = document.createElement('p');
    detailsElement.classList.add('about');
    detailsElement.textContent = designer.details;
    designerCard.appendChild(detailsElement);

    // Ajouter la carte (designerCard) au conteneur principal (designersCard)
    designersCard.appendChild(designerCard);
  });
});



