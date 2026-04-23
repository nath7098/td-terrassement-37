export interface Ville {
  slug: string
  nom: string
  displayName: string
  codePostal: string
  population: string
  departement: string
  coordinates: { lat: number; lng: number }
  quartiers: string[]
  villesProches: string[]
  description: string
  metaDescription: string
  contenuUnique: string
  typeSol: string
  pointFort: string
}

export const villes: Record<string, Ville> = {
  'tours': {
    slug: 'tours',
    nom: 'Tours',
    displayName: 'à Tours',
    codePostal: '37000',
    population: '136 000',
    departement: 'Indre-et-Loire',
    coordinates: { lat: 47.3941, lng: 0.6848 },
    quartiers: ['Centre-ville', 'Deux-Lions', 'Sanitas', 'Rabelais', 'Prébendes'],
    villesProches: ['fondettes', 'joue-les-tours', 'la-ville-aux-dames', 'notre-dame-doe', 'savonnieres'],
    description: 'Terrassement professionnel à Tours, préfecture d\'Indre-et-Loire. Excavation, nivellement et remblaiement.',
    metaDescription: 'Terrassement à Tours (37000) — TD Terrassement 37. Excavation, nivellement, remblaiement. Devis gratuit. Intervention rapide dans tout le 37.',
    typeSol: 'Tuffeau et argile',
    pointFort: 'Zone urbaine dense — maîtrise des chantiers en milieu contraint',
    contenuUnique: `Tours, préfecture d'Indre-et-Loire avec ses 136 000 habitants, est notre zone d'intervention principale pour toutes les prestations de terrassement. TD Terrassement 37 intervient sur l'ensemble de la ville de Tours, du centre historique aux quartiers périphériques comme Deux-Lions, Sanitas, Rabelais et Prébendes.

Nos équipes expérimentées réalisent des travaux de terrassement général, d'excavation et de nivellement sur tous types de chantiers tourangeaux. Que vous soyez un particulier souhaitant aménager votre terrain ou un professionnel du BTP sur un chantier de grande envergure, nous intervenons avec le matériel adapté.

Notre connaissance approfondie du territoire tourangeau nous permet d'optimiser nos interventions et de répondre rapidement à vos demandes. Nous maîtrisons les spécificités géologiques du sol en Indre-et-Loire, notamment les terrains argileux et les zones de tuffeau qui nécessitent une expertise particulière.

Pour vos projets de terrassement général, nous préparons les terrains en réalisant les mouvements de terres nécessaires. Nos travaux d'excavation permettent de créer des fondations solides pour vos constructions. Le nivellement et remblaiement assurent une surface plane et stable pour tous vos aménagements extérieurs.

En tant qu'entreprise de terrassement implantée en Indre-et-Loire, nous intervenons rapidement sur Tours et sa métropole. Contactez TD Terrassement 37 pour un devis gratuit et personnalisé pour votre projet de terrassement à Tours.`
  },
  'fondettes': {
    slug: 'fondettes',
    nom: 'Fondettes',
    displayName: 'à Fondettes',
    codePostal: '37230',
    population: '10 500',
    departement: 'Indre-et-Loire',
    coordinates: { lat: 47.4019, lng: 0.6031 },
    quartiers: ['Centre', 'Vallières', 'Lussault', 'La Guignière'],
    villesProches: ['tours', 'notre-dame-doe', 'savonnieres'],
    description: 'Terrassement à Fondettes. Excavation et nivellement professionnels au nord-ouest de Tours.',
    metaDescription: 'Terrassement à Fondettes (37230) — TD Terrassement 37. Excavation, nivellement, remblaiement. Devis gratuit. Entreprise sérieuse en Indre-et-Loire.',
    typeSol: 'Argile et calcaire',
    pointFort: 'Commune siège de l\'entreprise — intervention en 30 min maximum',
    contenuUnique: `Fondettes, commune de 10 500 habitants située au nord-ouest de Tours, bénéficie des services professionnels de TD Terrassement 37. Cette ville résidentielle dynamique connaît une activité importante de construction et de rénovation, et nos équipes accompagnent aussi bien les particuliers que les entreprises du bâtiment.

Nous intervenons dans tous les secteurs de Fondettes pour vos travaux de terrassement : le centre-ville historique, le quartier de Vallières, Lussault et La Guignière. Notre proximité avec Fondettes nous permet de garantir des délais d'intervention très courts et une grande réactivité face à vos besoins.

Le terrassement général à Fondettes comprend tous les travaux de préparation de terrain : déblaiement, remblaiement, nivellement de surface. Pour les projets de construction neuve, nos excavations permettent de créer les fondations nécessaires à vos bâtiments. Nous réalisons également des travaux de viabilisation de terrain et d'aménagement extérieur.

Les sols de la région de Fondettes présentent des caractéristiques particulières que nous maîtrisons parfaitement. Notre expérience locale nous permet d'adapter nos techniques de terrassement aux conditions géologiques spécifiques de chaque chantier en Indre-et-Loire.

Contactez TD Terrassement 37 pour obtenir un devis gratuit pour votre projet de terrassement, excavation ou nivellement à Fondettes. Nous vous accompagnons de la conception à la réalisation.`
  },
  'joue-les-tours': {
    slug: 'joue-les-tours',
    nom: 'Joué-lès-Tours',
    displayName: 'à Joué-lès-Tours',
    codePostal: '37300',
    population: '38 000',
    departement: 'Indre-et-Loire',
    coordinates: { lat: 47.3528, lng: 0.6658 },
    quartiers: ['Centre-ville', 'La Rabière', 'La Rabaterie', 'Les Atlantes', 'Beaulieu'],
    villesProches: ['tours', 'savonnieres', 'azay-le-rideau'],
    description: 'Terrassement à Joué-lès-Tours. Deuxième ville d\'Indre-et-Loire, service professionnel et réactif.',
    metaDescription: 'Terrassement à Joué-lès-Tours (37300) — TD Terrassement 37. Excavation & nivellement. Devis gratuit. Intervention rapide en Indre-et-Loire.',
    typeSol: 'Limon et argile',
    pointFort: 'Forte croissance résidentielle — expertise en viabilisation de lotissements',
    contenuUnique: `Joué-lès-Tours, deuxième ville la plus peuplée d'Indre-et-Loire avec 38 000 habitants, représente un secteur d'activité majeur pour TD Terrassement 37. Cette commune en plein développement connaît une forte dynamique de construction et de rénovation qui nécessite des travaux de terrassement réguliers.

Nous couvrons l'intégralité du territoire de Joué-lès-Tours pour vos projets de terrassement général, d'excavation et de nivellement. Des quartiers résidentiels de La Rabière et Beaulieu aux zones d'activités des Atlantes, nos équipes interviennent avec professionnalisme et efficacité.

Le terrassement à Joué-lès-Tours nécessite une expertise adaptée aux différents types de terrain que l'on rencontre dans cette ville étendue. Nous réalisons des diagnostics préalables pour adapter notre matériel et nos techniques à chaque situation. Notre parc de machines modernes nous permet d'intervenir sur tous types de chantiers, qu'il s'agisse de petits projets résidentiels ou de grands travaux professionnels.

L'excavation est l'une de nos spécialités à Joué-lès-Tours : création de tranchées pour réseaux, fouilles pour fondations, terrassement de sous-sols. Nous travaillons en étroite collaboration avec les maçons, architectes et maîtres d'œuvre pour garantir des résultats conformes aux plans.

Pour vos travaux de terrassement à Joué-lès-Tours en Indre-et-Loire, contactez TD Terrassement 37. Devis gratuit et intervention rapide garantis.`
  },
  'bourgueil': {
    slug: 'bourgueil',
    nom: 'Bourgueil',
    displayName: 'à Bourgueil',
    codePostal: '37140',
    population: '3 900',
    departement: 'Indre-et-Loire',
    coordinates: { lat: 47.2817, lng: 0.1667 },
    quartiers: ['Centre-bourg', 'La Garotterie', 'Les Chesnaies'],
    villesProches: ['chinon', 'langeais'],
    description: 'Terrassement à Bourgueil au cœur du vignoble. Travaux de qualité en Indre-et-Loire.',
    metaDescription: 'Terrassement à Bourgueil (37140) — TD Terrassement 37. Excavation, nivellement & remblaiement. Devis gratuit. Entreprise locale en Indre-et-Loire.',
    typeSol: 'Tuffeau et sable viticole',
    pointFort: 'Expertise en terrassement viticole sur parcelles AOC',
    contenuUnique: `Bourgueil, commune viticole de 3 900 habitants dans le nord-ouest de l'Indre-et-Loire, fait partie de notre zone d'intervention pour les travaux de terrassement. Cette petite ville au cœur de l'appellation Bourgueil AOC connaît une activité de construction et de rénovation soutenue.

TD Terrassement 37 intervient à Bourgueil avec le même niveau de professionnalisme que dans l'agglomération tourangelle. Nos équipes s'adaptent aux spécificités locales, notamment les accès parfois étroits dans les zones viticoles et les contraintes liées à la préservation du patrimoine.

Pour vos projets de terrassement général à Bourgueil, nous réalisons tous les mouvements de terres nécessaires à vos constructions et aménagements. L'excavation dans les sols viticoles requiert une expertise particulière que notre équipe maîtrise parfaitement. Le nivellement et remblaiement permettent de préparer vos terrains pour tous types d'usages, de l'agriculture à la construction.

Nous intervenons également dans les hameaux et communes environnantes de Bourgueil, offrant un service de proximité rare dans cette zone rurale de l'Indre-et-Loire. Notre connaissance des spécificités géologiques locales — tuffeau, argiles, sables — nous permet d'adapter nos techniques pour des résultats optimaux.

Contactez TD Terrassement 37 pour vos travaux de terrassement, excavation ou nivellement à Bourgueil et dans le secteur de l'appellation. Devis gratuit, intervention rapide.`
  },
  'la-ville-aux-dames': {
    slug: 'la-ville-aux-dames',
    nom: 'La Ville-aux-Dames',
    displayName: 'à La Ville-aux-Dames',
    codePostal: '37700',
    population: '5 200',
    departement: 'Indre-et-Loire',
    coordinates: { lat: 47.3956, lng: 0.7728 },
    quartiers: ['Centre', 'Les Vallées', 'La Borde'],
    villesProches: ['tours', 'montlouis-sur-loire'],
    description: 'Terrassement à La Ville-aux-Dames. Service professionnel à l\'est de Tours en Indre-et-Loire.',
    metaDescription: 'Terrassement à La Ville-aux-Dames (37700) — TD Terrassement 37. Excavation & nivellement. Devis gratuit. Intervention rapide en Indre-et-Loire.',
    typeSol: 'Alluvions ligériennes',
    pointFort: 'Terrains de vallée — maîtrise du drainage et des nappes superficielles',
    contenuUnique: `La Ville-aux-Dames, commune de 5 200 habitants à l'est de Tours, bénéficie des services de terrassement professionnel de TD Terrassement 37. Cette ville résidentielle en développement, proche de la vallée de la Loire, connaît une activité de construction et de rénovation régulière.

Nos équipes interviennent dans tous les secteurs de La Ville-aux-Dames pour vos projets de terrassement : du centre-ville aux quartiers résidentiels des Vallées et de La Borde. Notre positionnement géographique nous permet d'assurer des interventions rapides depuis Tours, garantissant réactivité et efficacité pour vos chantiers.

Le terrassement général à La Ville-aux-Dames comprend la préparation de terrain, l'évacuation des terres excédentaires et les remblais nécessaires. Pour les constructions neuves, nos travaux d'excavation créent les fondations solides indispensables. Le nivellement et remblaiement finalisent la mise en forme de vos terrains pour tous vos aménagements.

Les sols de La Ville-aux-Dames, typiques de la vallée de la Loire, présentent des caractéristiques alluviales que nos équipes maîtrisent. Cette expertise locale nous permet d'adapter nos techniques pour optimiser chaque chantier de terrassement en Indre-et-Loire.

Pour un devis gratuit concernant vos travaux de terrassement à La Ville-aux-Dames, contactez TD Terrassement 37. Professionnalisme et réactivité sont nos engagements en Indre-et-Loire.`
  },
  'chinon': {
    slug: 'chinon',
    nom: 'Chinon',
    displayName: 'à Chinon',
    codePostal: '37500',
    population: '8 000',
    departement: 'Indre-et-Loire',
    coordinates: { lat: 47.1667, lng: 0.2500 },
    quartiers: ['Centre historique', 'Saint-Jacques', 'Coteau Sainte-Radegonde'],
    villesProches: ['bourgueil', 'azay-le-rideau', 'langeais'],
    description: 'Terrassement à Chinon. Service de qualité dans la cité médiévale d\'Indre-et-Loire.',
    metaDescription: 'Terrassement à Chinon (37500) — TD Terrassement 37. Excavation, nivellement & remblaiement. Devis gratuit. Entreprise locale 37.',
    typeSol: 'Tuffeau et schiste',
    pointFort: 'Spécialiste des sous-sols en zone patrimoniale classée',
    contenuUnique: `Chinon, ville historique de 8 000 habitants dominée par sa forteresse médiévale, fait partie de notre zone d'intervention dans le sud-ouest de l'Indre-et-Loire. Cette cité classée Ville d'Art et d'Histoire connaît une importante activité de rénovation patrimoniale et de construction neuve qui nécessite des travaux de terrassement spécialisés.

TD Terrassement 37 intervient à Chinon avec expertise et respect des contraintes patrimoniales. Nous réalisons des travaux de terrassement général adaptés aux spécificités de chaque secteur : du centre historique avec ses ruelles aux zones résidentielles plus modernes de Saint-Jacques et du Coteau Sainte-Radegonde.

L'excavation à Chinon requiert une attention particulière, notamment dans les zones proches de la forteresse et du cœur historique. Notre équipe maîtrise les techniques d'excavation douce nécessaires dans les zones patrimoniales, préservant l'intégrité du sous-sol tout en réalisant des fondations solides et durables.

Le terrassement des coteaux de Chinon, avec leur géologie particulière (tuffeau, argiles), est une de nos spécialités. Nous adaptons systématiquement nos méthodes aux conditions du terrain pour garantir la stabilité et la sécurité de vos constructions en Indre-et-Loire.

Contactez TD Terrassement 37 pour vos projets de terrassement, excavation ou nivellement à Chinon. Devis gratuit et intervention rapide dans tout le sud-ouest du département 37.`
  },
  'langeais': {
    slug: 'langeais',
    nom: 'Langeais',
    displayName: 'à Langeais',
    codePostal: '37130',
    population: '4 200',
    departement: 'Indre-et-Loire',
    coordinates: { lat: 47.3258, lng: 0.4056 },
    quartiers: ['Centre-ville', 'Saint-Jean', 'Saint-Laurent'],
    villesProches: ['tours', 'chinon', 'bourgueil'],
    description: 'Terrassement à Langeais. Service professionnel en Indre-et-Loire près du château.',
    metaDescription: 'Terrassement à Langeais (37130) — TD Terrassement 37. Excavation, nivellement, remblaiement. Devis gratuit. Intervention rapide en Indre-et-Loire.',
    typeSol: 'Tuffeau et alluvions',
    pointFort: 'Maîtrise des terrains de coteau et de plaine alluviale',
    contenuUnique: `Langeais, petite ville de 4 200 habitants entre Tours et Chinon, célèbre pour son château du XVe siècle, bénéficie du service de terrassement professionnel de TD Terrassement 37. Cette commune en bord de Loire connaît une activité de construction et de rénovation régulière.

Nos équipes interviennent à Langeais pour tous vos travaux de terrassement général, d'excavation et de nivellement. Du centre historique aux quartiers résidentiels de Saint-Jean et Saint-Laurent, nous adaptons nos méthodes aux spécificités de chaque secteur de la commune.

Le terrassement à Langeais bénéficie de notre connaissance approfondie des sols ligériens. Les terrains de la vallée de la Loire, avec leurs caractéristiques alluviales et leurs zones de tuffeau, nécessitent une expertise spécifique que nous avons développée au fil de nos interventions en Indre-et-Loire.

Pour les projets de construction à Langeais, nos travaux d'excavation garantissent des fondations solides et conformes aux règles de l'art. Le nivellement et remblaiement permettent de préparer vos terrains pour toutes les utilisations prévues, de la maison individuelle au projet d'aménagement paysager.

Pour vos travaux de terrassement à Langeais, faites confiance à TD Terrassement 37. Contactez-nous pour un devis gratuit et personnalisé. Intervention rapide dans toute l'Indre-et-Loire.`
  },
  'chateaurenault': {
    slug: 'chateaurenault',
    nom: 'Châteaurenault',
    displayName: 'à Châteaurenault',
    codePostal: '37110',
    population: '5 500',
    departement: 'Indre-et-Loire',
    coordinates: { lat: 47.5919, lng: 0.9108 },
    quartiers: ['Centre-ville', 'La Gaudellerie', 'Les Hâtifs'],
    villesProches: ['tours', 'notre-dame-doe'],
    description: 'Terrassement à Châteaurenault. Service professionnel dans le nord de la Touraine.',
    metaDescription: 'Terrassement à Châteaurenault (37110) — TD Terrassement 37. Excavation & nivellement. Devis gratuit. Entreprise de terrassement 37.',
    typeSol: 'Argile et limon',
    pointFort: 'Expérience sur grandes emprises et terrains industriels',
    contenuUnique: `Châteaurenault, commune de 5 500 habitants dans le nord de l'Indre-et-Loire, représente un secteur important pour TD Terrassement 37. Cette ville industrielle et résidentielle en bordure de la Brenne connaît une activité de construction et de rénovation soutenue qui génère des besoins réguliers en terrassement.

Nous desservons l'ensemble du territoire de Châteaurenault pour vos travaux de terrassement général : du centre historique avec son château aux quartiers résidentiels de La Gaudellerie et des Hâtifs. Notre équipe intervient avec l'outillage adapté à chaque type de chantier en Indre-et-Loire.

L'excavation à Châteaurenault est l'une de nos prestations principales dans ce secteur. Que ce soit pour la création de fondations, de sous-sols, de tranchées pour réseaux ou de bassins de rétention, nous réalisons des fouilles précises et sécurisées dans le respect des normes en vigueur.

Le nivellement de terrain à Châteaurenault permet de créer des surfaces planes et stables pour vos projets d'aménagement. Nos techniques de remblaiement garantissent la stabilité à long terme des terrains traités, préservant ainsi la pérennité de vos constructions en Indre-et-Loire.

Contactez TD Terrassement 37 pour vos projets de terrassement à Châteaurenault. Devis gratuit, intervention rapide dans tout le nord de la Touraine.`
  },
  'montlouis-sur-loire': {
    slug: 'montlouis-sur-loire',
    nom: 'Montlouis-sur-Loire',
    displayName: 'à Montlouis-sur-Loire',
    codePostal: '37270',
    population: '10 700',
    departement: 'Indre-et-Loire',
    coordinates: { lat: 47.3892, lng: 0.8261 },
    quartiers: ['Centre-ville', 'La Bourdaisière', 'Les Bateliers'],
    villesProches: ['tours', 'la-ville-aux-dames'],
    description: 'Terrassement à Montlouis-sur-Loire. Service de qualité en vallée de Loire.',
    metaDescription: 'Terrassement à Montlouis-sur-Loire (37270) — TD Terrassement 37. Excavation & nivellement. Devis gratuit. Intervention rapide en Indre-et-Loire.',
    typeSol: 'Tuffeau et sables ligériens',
    pointFort: 'Référence en excavation de caves viticoles et troglodytiques',
    contenuUnique: `Montlouis-sur-Loire, ville de 10 700 habitants entre Tours et Amboise, célèbre pour son appellation viticole AOC, fait partie de notre zone d'intervention pour les travaux de terrassement. Cette commune dynamique en bord de Loire connaît un développement régulier avec de nombreux projets de construction et d'aménagement.

TD Terrassement 37 intervient à Montlouis-sur-Loire pour tous vos travaux de terrassement général, d'excavation et de nivellement. Nos équipes connaissent parfaitement les spécificités géologiques de ce secteur de la vallée de la Loire, notamment les terrains viticoles et les coteaux de tuffeau caractéristiques de la région.

Le terrassement des coteaux de Montlouis-sur-Loire nécessite une expertise spécifique que nos équipes ont développée au fil des années. Nous adaptons nos techniques aux contraintes topographiques et géologiques locales pour garantir des travaux sûrs et durables en Indre-et-Loire.

Pour vos projets de construction à Montlouis-sur-Loire, nos travaux d'excavation créent les fondations solides indispensables. Nous réalisons également des terrassements pour caves troglodytiques, piscines, garages enterrés et tous types d'aménagements souterrains dans cette région réputée pour son patrimoine troglodytique.

Contactez TD Terrassement 37 pour un devis gratuit concernant vos travaux de terrassement à Montlouis-sur-Loire. Professionnalisme et réactivité sont nos engagements en Indre-et-Loire.`
  },
  'chateau-la-valliere': {
    slug: 'chateau-la-valliere',
    nom: 'Château-la-Vallière',
    displayName: 'à Château-la-Vallière',
    codePostal: '37330',
    population: '1 600',
    departement: 'Indre-et-Loire',
    coordinates: { lat: 47.5444, lng: 0.3192 },
    quartiers: ['Centre-bourg', 'La Trigallière'],
    villesProches: ['tours', 'langeais'],
    description: 'Terrassement à Château-la-Vallière. Service rural professionnel en Indre-et-Loire.',
    metaDescription: 'Terrassement à Château-la-Vallière (37330) — TD Terrassement 37. Excavation & nivellement. Devis gratuit. Entreprise locale 37.',
    typeSol: 'Sable et argile forestière',
    pointFort: 'Intervention en milieu rural et grandes propriétés',
    contenuUnique: `Château-la-Vallière, petite commune de 1 600 habitants dans le nord-ouest de l'Indre-et-Loire, bénéficie du service de terrassement professionnel de TD Terrassement 37, même en zone rurale. Cette commune paisible, connue pour sa base de loisirs et son cadre naturel préservé, connaît une activité de terrassement principalement liée aux projets résidentiels.

TD Terrassement 37 s'engage à desservir Château-la-Vallière avec le même professionnalisme que dans les grandes communes du département. Nous comprenons les spécificités des zones rurales de l'Indre-et-Loire : chemins d'accès parfois étroits, propriétés dispersées, et besoins souvent liés à la rénovation de bâti ancien ou à l'aménagement de grandes propriétés.

Le terrassement général à Château-la-Vallière inclut tous les travaux de préparation et de modelage de terrain. Pour les projets de construction dans ce secteur rural, nos excavations garantissent des fondations adaptées aux conditions du sol local. Le nivellement et remblaiement permettent de créer les surfaces nécessaires à vos projets d'aménagement.

Nos équipes maîtrisent les particularités géologiques de cette zone de l'Indre-et-Loire, avec ses sols forestiers et ses terrains parfois humides. Cette expertise locale nous permet de proposer des solutions de terrassement adaptées, durables et économiques pour chaque projet dans la région.

Pour vos travaux de terrassement à Château-la-Vallière, contactez TD Terrassement 37. Devis gratuit et intervention professionnelle garantis dans tout le département 37.`
  },
  'azay-le-rideau': {
    slug: 'azay-le-rideau',
    nom: 'Azay-le-Rideau',
    displayName: 'à Azay-le-Rideau',
    codePostal: '37190',
    population: '3 500',
    departement: 'Indre-et-Loire',
    coordinates: { lat: 47.2614, lng: 0.4656 },
    quartiers: ['Centre-bourg', 'Lionnière', 'Les Gués'],
    villesProches: ['tours', 'chinon', 'joue-les-tours'],
    description: 'Terrassement à Azay-le-Rideau. Service de qualité près du château de la Renaissance.',
    metaDescription: 'Terrassement à Azay-le-Rideau (37190) — TD Terrassement 37. Excavation & nivellement. Devis gratuit. Entreprise sérieuse en Indre-et-Loire.',
    typeSol: 'Tuffeau et zones humides',
    pointFort: 'Expertise en proximité de cours d\'eau et zones Natura 2000',
    contenuUnique: `Azay-le-Rideau, commune de 3 500 habitants célèbre pour son château Renaissance au bord de l'Indre, fait partie de notre zone d'intervention pour les travaux de terrassement. Cette petite ville touristique et résidentielle connaît une activité de construction et de rénovation régulière dans un cadre patrimonial exceptionnel.

TD Terrassement 37 intervient à Azay-le-Rideau avec une attention particulière aux contraintes patrimoniales et environnementales. Nos travaux de terrassement général respectent scrupuleusement les réglementations locales de protection du patrimoine et de préservation de l'environnement naturel de la vallée de l'Indre.

Pour les projets de construction à Azay-le-Rideau, nos travaux d'excavation créent les fondations adaptées aux spécificités géologiques locales. La présence de l'Indre et des zones humides environnantes nécessite une expertise particulière que nos équipes ont acquise dans ce secteur de l'Indre-et-Loire.

Le nivellement et remblaiement à Azay-le-Rideau permettent de préparer vos terrains tout en préservant le caractère naturel du paysage. Nous utilisons des techniques adaptées pour minimiser l'impact environnemental de nos interventions dans cette zone d'intérêt patrimonial et écologique.

Contactez TD Terrassement 37 pour vos travaux de terrassement à Azay-le-Rideau. Expertise locale, respect de l'environnement et professionnalisme sont nos engagements dans tout le département 37.`
  },
  'notre-dame-doe': {
    slug: 'notre-dame-doe',
    nom: 'Notre-Dame-d\'Oé',
    displayName: 'à Notre-Dame-d\'Oé',
    codePostal: '37390',
    population: '4 000',
    departement: 'Indre-et-Loire',
    coordinates: { lat: 47.4400, lng: 0.6911 },
    quartiers: ['Centre', 'Les Hauts d\'Oé', 'La Martinière'],
    villesProches: ['tours', 'fondettes', 'chateaurenault'],
    description: 'Terrassement à Notre-Dame-d\'Oé. Service rapide au nord de Tours en Indre-et-Loire.',
    metaDescription: 'Terrassement à Notre-Dame-d\'Oé (37390) — TD Terrassement 37. Excavation, nivellement & remblaiement. Devis gratuit. Intervention rapide 37.',
    typeSol: 'Calcaire et argile',
    pointFort: 'Secteur en forte expansion résidentielle — terrains à bâtir',
    contenuUnique: `Notre-Dame-d'Oé, commune de 4 000 habitants au nord de l'agglomération tourangelle, bénéficie d'un service de terrassement de proximité avec TD Terrassement 37. Cette ville résidentielle en plein développement connaît une forte activité de construction de maisons individuelles qui génère des besoins importants en terrassement.

Nous intervenons dans tous les secteurs de Notre-Dame-d'Oé pour vos travaux de terrassement : du centre-bourg aux nouveaux quartiers des Hauts d'Oé et de La Martinière. Notre proximité avec cette commune du nord tourangeau nous permet de garantir des délais d'intervention très courts.

Le terrassement à Notre-Dame-d'Oé se distingue par la diversité des projets que nous accompagnons : viabilisation de terrains à bâtir, excavation pour fondations de maisons individuelles, nivellement de jardins et aménagements paysagers, création de voiries privées. Chaque projet bénéficie de notre expertise en terrassement en Indre-et-Loire.

Les sols de Notre-Dame-d'Oé, caractéristiques du plateau tourangeau, offrent généralement de bonnes conditions pour les travaux de terrassement. Notre connaissance géologique locale nous permet d'anticiper les éventuelles difficultés et d'adapter nos méthodes pour des résultats optimaux.

Pour vos projets de terrassement, excavation ou nivellement à Notre-Dame-d'Oé, contactez TD Terrassement 37. Devis gratuit, intervention rapide dans tout le nord de la Touraine.`
  },
  'savonnieres': {
    slug: 'savonnieres',
    nom: 'Savonnières',
    displayName: 'à Savonnières',
    codePostal: '37510',
    population: '3 200',
    departement: 'Indre-et-Loire',
    coordinates: { lat: 47.3472, lng: 0.5497 },
    quartiers: ['Centre-bourg', 'Les Grottes', 'La Perraudière'],
    villesProches: ['tours', 'joue-les-tours', 'fondettes', 'azay-le-rideau'],
    description: 'Terrassement à Savonnières. Service professionnel près de Villandry en Indre-et-Loire.',
    metaDescription: 'Terrassement à Savonnières (37510) — TD Terrassement 37. Excavation & nivellement. Devis gratuit. Entreprise de terrassement locale 37.',
    typeSol: 'Tuffeau et calcaire karstique',
    pointFort: 'Connaissance des formations karstiques et des risques de cavités',
    contenuUnique: `Savonnières, commune de 3 200 habitants à l'ouest de Tours, célèbre pour ses grottes pétrifiantes, fait partie de notre zone d'intervention prioritaire pour les travaux de terrassement. Cette ville résidentielle proche du prestigieux château de Villandry connaît une activité de rénovation régulière.

TD Terrassement 37 intervient à Savonnières pour tous vos projets de terrassement général, d'excavation et de nivellement. Notre connaissance de cette commune et de ses spécificités géologiques — notamment les zones de tuffeau et de calcaire caractéristiques de la vallée du Cher — nous permet d'adapter parfaitement nos interventions.

Le terrassement à Savonnières nécessite parfois des précautions particulières, notamment dans les zones proches des grottes et des formations karstiques. Notre expertise géologique locale garantit des interventions sécurisées qui préservent l'intégrité du sous-sol et la stabilité de vos constructions en Indre-et-Loire.

Pour les projets de construction neuve à Savonnières, nos excavations créent des fondations solides adaptées aux conditions du terrain. Le nivellement et remblaiement de qualité préparent vos terrains pour toutes les utilisations : jardins, voiries, espaces verts ou construction.

Faites confiance à TD Terrassement 37 pour vos travaux de terrassement à Savonnières. Contactez-nous pour un devis gratuit et personnalisé. Intervention rapide dans toute l'Indre-et-Loire.`
  },
  'saumur': {
    slug: 'saumur',
    nom: 'Saumur',
    displayName: 'à Saumur',
    codePostal: '49400',
    population: '26 500',
    departement: 'Maine-et-Loire',
    coordinates: { lat: 47.2603, lng: -0.0770 },
    quartiers: ['Centre-ville', 'Nantilly', 'Chemin-Vert', 'Saint-Lambert'],
    villesProches: ['chinon', 'bourgueil', 'langeais'],
    description: 'Terrassement à Saumur. Service professionnel dans le Saumurois.',
    metaDescription: 'Terrassement à Saumur (49400) — TD Terrassement 37. Excavation, nivellement, remblaiement. Devis gratuit. Entreprise locale de terrassement.',
    typeSol: 'Tuffeau saumurois',
    pointFort: 'Référence en excavation de caves troglodytiques et sous-sols en tuffeau',
    contenuUnique: `Saumur, ville de 26 500 habitants surnommée la "Perle de l'Anjou", bénéficie du service de terrassement professionnel de TD Terrassement 37. Cette cité historique célèbre pour son château, son École de Cavalerie et ses vignobles, connaît une activité importante de construction et de rénovation.

Nos équipes interviennent à Saumur pour tous types de travaux de terrassement général. Du centre historique avec ses maisons de tuffeau aux quartiers résidentiels de Nantilly et du Chemin-Vert, nous adaptons nos méthodes aux spécificités de chaque secteur.

Le terrassement à Saumur se distingue par la particularité géologique de la région : le tuffeau, roche calcaire tendre caractéristique du Val de Loire, nécessite des techniques d'excavation spécifiques. Notre expertise dans ce type de sous-sol garantit des interventions sûres et efficaces pour toutes vos constructions.

L'excavation à Saumur, notamment pour la création de caves troglodytiques ou de sous-sols, est une de nos spécialités. Nous réalisons ces travaux avec tout le soin nécessaire pour préserver l'intégrité du sous-sol et respecter les contraintes géologiques locales.

Contactez TD Terrassement 37 pour vos projets de terrassement, excavation ou nivellement à Saumur. Devis gratuit, expertise locale reconnue et intervention professionnelle dans toute la région.`
  },
  'chatellerault': {
    slug: 'chatellerault',
    nom: 'Châtellerault',
    displayName: 'à Châtellerault',
    codePostal: '86100',
    population: '31 500',
    departement: 'Vienne',
    coordinates: { lat: 46.8180, lng: 0.5461 },
    quartiers: ['Centre-ville', 'Châteauneuf', 'Targé', 'Antoigné', 'La Manufacture'],
    villesProches: ['tours', 'descartes', 'loches'],
    description: 'Terrassement à Châtellerault. Service professionnel dans la Vienne limitrophe.',
    metaDescription: 'Terrassement à Châtellerault (86100) — TD Terrassement 37. Excavation & nivellement. Devis gratuit. Entreprise de terrassement Indre-et-Loire.',
    typeSol: 'Calcaire et alluvions de Vienne',
    pointFort: 'Expertise en terrains de grande vallée alluviale',
    contenuUnique: `Châtellerault, ville de 31 500 habitants dans la Vienne, proche de l'Indre-et-Loire, bénéficie du service de terrassement professionnel de TD Terrassement 37. Cette cité industrielle et universitaire en bord de Vienne connaît une dynamique importante de rénovation urbaine et de développement immobilier.

Nos équipes étendent leurs interventions jusqu'à Châtellerault pour répondre aux besoins en terrassement de cette zone frontalière entre Touraine et Poitou. Du centre historique avec son pont Henri IV aux quartiers de Châteauneuf, Targé et de la Manufacture, nous intervenons avec le même professionnalisme que dans l'Indre-et-Loire.

Le terrassement général à Châtellerault comprend tous les travaux de préparation de terrain : défrichage, déblaiement, compactage et mise en forme. Pour les projets de rénovation d'immeubles anciens du centre-ville ou de construction de logements neufs, nos services d'excavation créent les fondations nécessaires.

La géologie de Châtellerault, avec ses terrains alluviaux de la Vienne et ses zones calcaires, nécessite une expertise adaptée. Notre expérience dans les sols de la région Centre-Val de Loire et des départements limitrophes nous permet d'intervenir efficacement sur tous types de chantiers.

Contactez TD Terrassement 37 pour vos travaux de terrassement à Châtellerault. Devis gratuit et intervention professionnelle garantis dans toute la région.`
  },
  'blois': {
    slug: 'blois',
    nom: 'Blois',
    displayName: 'à Blois',
    codePostal: '41000',
    population: '45 900',
    departement: 'Loir-et-Cher',
    coordinates: { lat: 47.5933, lng: 1.3294 },
    quartiers: ['Centre-ville', 'Vienne', 'Kennedy', 'Quinière', 'Cabochon'],
    villesProches: ['tours', 'montlouis-sur-loire', 'chateaurenault'],
    description: 'Terrassement à Blois. Service professionnel dans le Loir-et-Cher limitrophe.',
    metaDescription: 'Terrassement à Blois (41000) — TD Terrassement 37. Excavation, nivellement & remblaiement. Devis gratuit. Entreprise locale de terrassement.',
    typeSol: 'Calcaire et tuffeau ligérien',
    pointFort: 'Maîtrise des chantiers sur coteaux en pente et terrains pentus',
    contenuUnique: `Blois, préfecture du Loir-et-Cher avec 45 900 habitants, fait partie de notre zone d'intervention étendue dans le Val de Loire. Cette ville royale célèbre pour son château Renaissance connaît une activité soutenue de rénovation patrimoniale et de développement urbain qui génère des besoins importants en terrassement.

TD Terrassement 37 intervient à Blois pour accompagner les particuliers et professionnels dans leurs projets de terrassement. Nous couvrons l'ensemble des quartiers blésois : du centre historique classé aux quartiers résidentiels de Vienne, Kennedy et de la Quinière.

Le terrassement à Blois présente des défis spécifiques liés à la topographie de la ville, construite sur des coteaux surplombant la Loire. Nos équipes maîtrisent les techniques adaptées aux terrains en pente et aux sous-sols calcaires caractéristiques de cette zone du Val de Loire classé au patrimoine mondial de l'UNESCO.

L'excavation à Blois nécessite parfois des précautions particulières dans les zones historiques. Notre expertise nous permet de réaliser des fouilles précises et sécurisées, respectant les contraintes archéologiques et patrimoniales. Pour les chantiers de construction neuve en périphérie, nos interventions sont plus directes tout en maintenant le même niveau de qualité.

Faites confiance à TD Terrassement 37 pour vos projets de terrassement, excavation ou nivellement à Blois. Devis gratuit, intervention professionnelle et réactivité garantis.`
  },
  'descartes': {
    slug: 'descartes',
    nom: 'Descartes',
    displayName: 'à Descartes',
    codePostal: '37160',
    population: '3 800',
    departement: 'Indre-et-Loire',
    coordinates: { lat: 46.9708, lng: 0.6981 },
    quartiers: ['Centre-ville', 'Balesmes', 'Le Mail', 'Courtille'],
    villesProches: ['loches', 'chatellerault'],
    description: 'Terrassement à Descartes. Service professionnel dans le sud de la Touraine.',
    metaDescription: 'Terrassement à Descartes (37160) — TD Terrassement 37. Excavation & nivellement. Devis gratuit. Entreprise de terrassement en Indre-et-Loire.',
    typeSol: 'Alluvions de Creuse et calcaire',
    pointFort: 'Sud Touraine — intervention sur chantiers ruraux et agricoles',
    contenuUnique: `Descartes, petite ville de 3 800 habitants dans le sud de l'Indre-et-Loire, patrie du philosophe René Descartes, bénéficie du service de terrassement professionnel de TD Terrassement 37. Cette cité en bord de Creuse connaît une activité régulière de rénovation de son patrimoine bâti ancien.

Nos équipes desservent Descartes et sa région avec le même engagement de qualité que dans l'ensemble du département 37. Nous intervenons dans tous les secteurs de la ville pour vos travaux de terrassement général : du centre historique aux quartiers plus récents de Balesmes et de la Courtille.

Le terrassement à Descartes bénéficie de notre connaissance approfondie du sud Touraine et de ses spécificités géologiques. Les terrains de la vallée de la Creuse, avec leurs sols alluviaux et leurs zones calcaires, nécessitent une expertise adaptée que nous avons développée au fil de nos interventions dans cette région de l'Indre-et-Loire.

Pour les projets de construction à Descartes, nos travaux d'excavation créent des fondations solides adaptées aux conditions locales. Le nivellement et remblaiement de qualité permettent de préparer vos terrains pour toutes les utilisations : jardins, parkings, voiries ou espaces verts.

Contactez TD Terrassement 37 pour vos projets de terrassement à Descartes. Devis gratuit et intervention professionnelle garantis dans tout le sud de la Touraine.`
  },
  'loches': {
    slug: 'loches',
    nom: 'Loches',
    displayName: 'à Loches',
    codePostal: '37600',
    population: '6 500',
    departement: 'Indre-et-Loire',
    coordinates: { lat: 47.1289, lng: 0.9978 },
    quartiers: ['Cité royale', 'Centre-ville', 'Beaulieu', 'Moulins', 'Vignemont'],
    villesProches: ['tours', 'montlouis-sur-loire', 'descartes'],
    description: 'Terrassement à Loches. Service professionnel dans la cité royale médiévale.',
    metaDescription: 'Terrassement à Loches (37600) — TD Terrassement 37. Excavation, nivellement & remblaiement. Devis gratuit. Entreprise locale 37.',
    typeSol: 'Tuffeau et calcaire ligérien',
    pointFort: 'Terrassement en zone Ville d\'Art et d\'Histoire — respect des contraintes archéologiques',
    contenuUnique: `Loches, ville de 6 500 habitants dans le sud de l'Indre-et-Loire, est une cité royale médiévale classée Ville d'Art et d'Histoire. Son donjon du XIe siècle et son château royal font de Loches un joyau patrimonial de la Touraine dont TD Terrassement 37 s'attache à respecter le caractère exceptionnel dans ses interventions.

Nous réalisons des travaux de terrassement à Loches avec une attention particulière portée à la préservation de ce patrimoine. Nos équipes interviennent dans tous les quartiers de la ville : de la Cité royale fortifiée au centre-ville moderne et aux secteurs résidentiels de Beaulieu et Vignemont.

Le terrassement à Loches présente des défis spécifiques, notamment dans la vieille ville avec ses sols historiques et ses contraintes archéologiques potentielles. Notre expertise nous permet de gérer ces situations avec professionnalisme et dans le respect des réglementations en vigueur en Indre-et-Loire.

L'excavation dans les zones plus récentes de Loches est une prestation courante que nous réalisons pour tous types de projets : fondations de maisons individuelles, garages enterrés, piscines, aménagements de terrain. Le nivellement permet de créer des surfaces utilisables pour vos projets d'aménagement paysager ou de construction.

Faites confiance à TD Terrassement 37 pour vos travaux de terrassement à Loches. Devis gratuit, intervention professionnelle et réactivité garantis dans tout le sud de l'Indre-et-Loire.`
  },
  'loudun': {
    slug: 'loudun',
    nom: 'Loudun',
    displayName: 'à Loudun',
    codePostal: '86200',
    population: '6 700',
    departement: 'Vienne',
    coordinates: { lat: 47.0139, lng: 0.0819 },
    quartiers: ['Centre-ville', 'Martray', 'Faubourg Saint-Lazare', 'Les Roches'],
    villesProches: ['chinon', 'bourgueil', 'chatellerault'],
    description: 'Terrassement à Loudun. Service professionnel dans la Vienne limitrophe du 37.',
    metaDescription: 'Terrassement à Loudun (86200) — TD Terrassement 37. Excavation & nivellement. Devis gratuit. Intervention professionnelle depuis l\'Indre-et-Loire.',
    typeSol: 'Calcaire et argile poitevine',
    pointFort: 'Expertise transfrontalière Touraine/Poitou',
    contenuUnique: `Loudun, ville de 6 700 habitants dans le nord de la Vienne, proche de l'Indre-et-Loire, bénéficie du service de terrassement professionnel de TD Terrassement 37. Cette cité de caractère avec son histoire et son patrimoine Renaissance connaît une activité régulière de rénovation et de construction.

Nos équipes étendent leurs interventions jusqu'à Loudun pour répondre aux besoins en terrassement de cette zone frontalière entre Touraine et Poitou. Du centre historique avec ses hôtels particuliers et sa Tour Carrée aux quartiers résidentiels modernes, nous intervenons avec efficacité et professionnalisme.

Le terrassement général à Loudun comprend tous les travaux de préparation et de modelage de terrain. Pour les projets de rénovation urbaine, nos excavations permettent de créer les espaces nécessaires tout en préservant les structures existantes. Le nivellement et remblaiement de qualité garantissent la stabilité et la durabilité de vos aménagements.

La géologie de Loudun, avec ses calcaires et ses argiles caractéristiques du Poitou septentrional, nécessite une expertise adaptée. Notre connaissance des sols de cette zone frontalière nous permet d'intervenir efficacement et en toute sécurité pour tous vos projets de terrassement.

Contactez TD Terrassement 37 pour vos travaux de terrassement à Loudun. Devis gratuit et intervention professionnelle garantis dans toute la région limitrophe.`
  },
  'vendome': {
    slug: 'vendome',
    nom: 'Vendôme',
    displayName: 'à Vendôme',
    codePostal: '41100',
    population: '15 800',
    departement: 'Loir-et-Cher',
    coordinates: { lat: 47.7935, lng: 1.0658 },
    quartiers: ['Centre-ville', 'Rochambeau', 'Capucins', 'Vendôme-Est', 'Champ-Rouillé'],
    villesProches: ['tours', 'blois', 'chateaurenault'],
    description: 'Terrassement à Vendôme. Service professionnel dans le Loir-et-Cher.',
    metaDescription: 'Terrassement à Vendôme (41100) — TD Terrassement 37. Excavation, nivellement & remblaiement. Devis gratuit. Entreprise de terrassement locale.',
    typeSol: 'Alluvions du Loir et calcaire',
    pointFort: 'Maîtrise des chantiers en zones alluviales et inondables',
    contenuUnique: `Vendôme, sous-préfecture du Loir-et-Cher avec 15 800 habitants, fait partie de notre zone d'intervention étendue dans le Val de Loire. Cette ville d'art et d'histoire traversée par le Loir, célèbre pour son abbaye de la Trinité, connaît une activité importante de rénovation patrimoniale et de développement urbain.

TD Terrassement 37 étend son service à Vendôme pour accompagner les particuliers et professionnels dans leurs projets de terrassement. Nos équipes interviennent dans tous les quartiers de la ville : du centre historique aux quartiers résidentiels de Rochambeau, des Capucins et de Champ-Rouillé.

Le terrassement à Vendôme présente des spécificités liées à la présence des multiples bras du Loir qui traversent la ville. Les terrains alluviaux et les zones potentiellement humides nécessitent une expertise géotechnique que notre équipe a développée. Nous adaptons nos techniques pour garantir des fondations stables et durables en toutes circonstances.

L'excavation dans les zones historiques de Vendôme requiert des précautions particulières en raison de la richesse archéologique du sous-sol. Notre savoir-faire nous permet de gérer ces contraintes professionnellement tout en respectant les réglementations de protection du patrimoine.

Contactez TD Terrassement 37 pour vos projets de terrassement, excavation ou nivellement à Vendôme. Devis gratuit, expertise locale reconnue et intervention rapide garantis.`
  }
}

export const villeList = Object.values(villes).sort((a, b) => a.nom.localeCompare(b.nom))

export const getVilleBySlug = (slug: string): Ville | undefined => villes[slug]
