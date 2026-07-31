/* =========================================================
   ページ本文
   日本語と英語をここで並べて管理します。
   片方だけ直すとズレるので、必ず対で編集してください。
   ========================================================= */

export const meta = {
  home: {
    ja: {
      title: 'しばぱぱ｜AIで、現実に出会うXRをつくる。',
      description:
        'しばぱぱ（Masafumi Mikami）は、AIを使ってXRコンテンツをつくるクリエイターです。AI、3D、WebXR、AR/MRを横断し、キャラクターと空間の新しい体験を試作しています。',
      ogDescription: 'AI、3D、WebXR、AR/MRを使い、キャラクターと空間の新しい体験を試作しています。',
    },
    en: {
      title: 'Shibapapa | Making XR that meets reality, with AI.',
      description:
        'Shibapapa (Masafumi Mikami) is a creator making XR content with AI. Working across AI, 3D, WebXR, AR and MR to prototype new experiences of characters and space.',
      ogDescription:
        'Working across AI, 3D, WebXR and AR/MR to prototype new experiences of characters and space.',
    },
  },
  work: {
    ja: {
      title: '作品｜しばぱぱ',
      description:
        '金魚水槽 MRアート。PCに表示された水槽から金魚が飛び出し、Meta QuestのMR空間を泳ぐ体験作品です。',
      ogTitle: '金魚水槽 MRアート｜しばぱぱ',
      ogDescription: 'PCの画面から、現実へ。金魚が飛び出し、Meta QuestのMR空間を泳ぐ体験作品。',
    },
    en: {
      title: 'Work | Shibapapa',
      description:
        'Goldfish Tank MR Art. Goldfish leap out of a tank shown on a PC screen and swim through mixed reality on Meta Quest.',
      ogTitle: 'Goldfish Tank MR Art | Shibapapa',
      ogDescription: 'From the screen, into reality. Goldfish swim out into mixed reality on Meta Quest.',
    },
  },
  about: {
    ja: {
      title: 'プロフィール｜しばぱぱ',
      description:
        'しばぱぱは、AIを使ってXRコンテンツをつくるクリエイターです。AI、3D、WebXR、AR、MRを横断しながら、キャラクターや映像が現実空間に存在する感覚をつくっています。',
      ogDescription: 'AIを使ってXRコンテンツをつくるクリエイター。制作の進め方も紹介しています。',
    },
    en: {
      title: 'About | Shibapapa',
      description:
        'Shibapapa is a creator making XR content with AI, working across AI, 3D, WebXR, AR and MR to build the feeling that characters exist in physical space.',
      ogDescription: 'A creator making XR content with AI, and how the work gets made.',
    },
  },
  lab: {
    ja: {
      title: '試作｜しばぱぱ',
      description: '公開準備中のXR試作を置いている場所です。形になったものから順に公開していきます。',
      ogDescription: '公開準備中のXR試作。形になったものから順に公開していきます。',
    },
    en: {
      title: 'Lab | Shibapapa',
      description:
        'A place for XR prototypes being prepared for release. They go public one by one, as they take shape.',
      ogDescription: 'XR prototypes being prepared for release.',
    },
  },
  contact: {
    ja: {
      title: 'お問い合わせ｜しばぱぱ',
      description:
        '個人での制作相談、登壇、アドバイザーのご相談はXのDMから。法人の制作、IP活用、XRプロジェクトのご相談は株式会社Gugenkaへ。',
      ogDescription: '個人へのご相談と、法人のご相談の窓口です。',
    },
    en: {
      title: 'Contact | Shibapapa',
      description:
        'For personal project enquiries, speaking or advisory work, reach out via DM on X. For corporate production, IP collaboration and larger XR projects, contact Gugenka Inc.',
      ogDescription: 'Separate routes for individuals and businesses.',
    },
  },
};

export const home = {
  ja: {
    eyebrow: 'しばぱぱ / Masafumi Mikami',
    titleLines: ['AIで、', '現実に出会うXRをつくる。'],
    lead: 'AI、3D、WebXR、AR/MRを使い、キャラクターと空間の新しい体験を試作しています。',
    ctaPrimary: '作品を体験する',
    ctaGhost: 'お問い合わせ',
    role: 'AIを使ってXRコンテンツをつくるクリエイター',
    scrollAria: '作品へスクロール',
    exploreLabel: 'Explore',
    exploreTitle: 'もっと見る',
    cards: [
      { label: 'About', title: 'プロフィール', text: '何をつくっている人なのか、どうつくっているのか。', more: '見る →', path: '/about/' },
      { label: 'Lab', title: '試作', text: '公開準備中のXR実験を置いている場所です。', more: '見る →', path: '/lab/' },
      { label: 'Contact', title: 'お問い合わせ', text: '個人へのご相談と、法人のご相談の窓口です。', more: '見る →', path: '/contact/' },
    ],
  },
  en: {
    eyebrow: 'Shibapapa / Masafumi Mikami',
    titleLines: ['Making XR that', 'meets reality, with AI.'],
    lead: 'Working across AI, 3D, WebXR and AR/MR, I prototype new experiences where characters and space come together.',
    ctaPrimary: 'Try the work',
    ctaGhost: 'Get in touch',
    role: 'A creator making XR content with AI',
    scrollAria: 'Scroll to featured work',
    exploreLabel: 'Explore',
    exploreTitle: 'More',
    cards: [
      { label: 'About', title: 'Profile', text: 'What I make, and how I go about making it.', more: 'View →', path: '/about/' },
      { label: 'Lab', title: 'Experiments', text: 'Where XR prototypes wait to be released.', more: 'View →', path: '/lab/' },
      { label: 'Contact', title: 'Get in touch', text: 'Separate routes for individuals and businesses.', more: 'View →', path: '/contact/' },
    ],
  },
};

export const work = {
  ja: {
    label: 'Featured Work',
    title: '金魚水槽 MRアート',
    pageLead: '画面の中の表現が、現実の部屋へつながる瞬間をつくるために制作した体験作品です。',
    catch: 'PCの画面から、現実へ。',
    text: 'PCに表示された水槽から金魚が飛び出し、Meta QuestのMR空間を泳ぐ体験作品。イベントやデモで、画面の中の表現が現実へつながる瞬間をつくるために制作しました。',
    teaserText: 'PCに表示された水槽から金魚が飛び出し、Meta QuestのMR空間を泳ぐ体験作品です。',
    tagsLabel: '使用技術',
    tryCta: 'PCで体験する',
    howtoCta: '使い方を見る',
    seeCta: '作品を見る',
    visualAlt: '水槽の水面から金魚が飛び出していく様子を抽象化したイメージ',
    howtoSummary: '利用手順を見る',
    howtoSteps: [
      'PCまたはMacで作品URLを開く',
      '表示されたURLへMeta Questのブラウザでアクセス',
      'QuestでMRモードに入るとPCと自動接続',
      'PC側の「はじめる」ボタンから開始',
      '最初に水槽を人差し指で指す際は、誤判定を防ぐため少し長めに静止する',
    ],
    howtoNote: 'PCとMeta Questの両方を使う体験です。PC単体では水槽の表示までを確認できます。',
    nextText: '公開準備中の試作も置いています。',
    nextCta: '試作を見る',
  },
  en: {
    label: 'Featured Work',
    title: 'Goldfish Tank MR Art',
    pageLead: 'Built to create the moment where what lives inside a screen crosses over into the real room.',
    catch: 'From the screen, into reality.',
    text: "Goldfish leap out of a tank shown on a PC screen and swim through mixed reality on Meta Quest. I built it to create the moment where what lives inside a screen crosses over into the real room — at events and demos.",
    teaserText: 'Goldfish leap out of a tank shown on a PC screen and swim through mixed reality on Meta Quest.',
    tagsLabel: 'Technologies used',
    tryCta: 'Try it on PC',
    howtoCta: 'See how it works',
    seeCta: 'See the work',
    visualAlt: 'An abstract impression of goldfish leaping out from the surface of a tank',
    howtoSummary: 'How to try it',
    howtoSteps: [
      "Open the work's URL on a PC or Mac",
      'Visit the URL shown on screen using the Meta Quest browser',
      'Entering MR mode on Quest connects to the PC automatically',
      'Press the start button on the PC to begin',
      'The first time you point at the tank with your index finger, hold still a little longer to avoid misdetection',
    ],
    howtoNote: 'This experience uses both a PC and a Meta Quest. On a PC alone you can still see the tank itself.',
    nextText: 'There are prototypes in preparation too.',
    nextCta: 'See the Lab',
  },
};

export const TAGS = ['Mixed Reality', 'WebXR', 'Meta Quest', 'Interactive Art'];

export const SKILLS = [
  'AI Creative',
  'WebXR',
  'AR / MR',
  '3D Creation',
  'Interactive Experience',
  'XR Prototyping',
];

export const about = {
  ja: {
    label: 'About',
    title: 'About Shibapapa',
    lead: 'しばぱぱ / Masafumi Mikami — AIを使ってXRコンテンツをつくるクリエイター',
    body: [
      'しばぱぱは、AIを使ってXRコンテンツをつくるクリエイターです。',
      'AI、3D、WebXR、AR、MRを横断しながら、キャラクターや映像が現実空間に存在する感覚をつくっています。',
      '小さな試作を素早く形にし、イベント、デモ、遊びの中で人が思わず触れたくなる体験へ育てていきます。',
    ],
    processLabel: 'Process',
    processTitle: 'From Idea to Reality',
    processLead: '思いついたものを、人が触れる体験にするまでの流れです。',
    steps: [
      { title: 'Imagine', text: 'AIでアイデアと表現を探索' },
      { title: 'Build', text: '3D・映像・インタラクションを試作' },
      { title: 'Connect', text: 'WebXR / AR / MRで現実空間へ接続' },
      { title: 'Experience', text: 'イベントやデモで人に届ける' },
    ],
    nextText: '実際につくったものを見てください。',
    nextCta: '作品を見る',
  },
  en: {
    label: 'About',
    title: 'About Shibapapa',
    lead: 'Shibapapa / Masafumi Mikami — a creator making XR content with AI',
    body: [
      'Shibapapa is a creator making XR content with AI.',
      'Working across AI, 3D, WebXR, AR and MR, I build the feeling that characters and moving images genuinely exist in physical space.',
      "I turn small ideas into working prototypes quickly, then grow them — through events, demos and play — into experiences people can't help reaching out to touch.",
    ],
    processLabel: 'Process',
    processTitle: 'From Idea to Reality',
    processLead: 'How an idea becomes something people can reach out and touch.',
    steps: [
      { title: 'Imagine', text: 'Explore ideas and expression with AI' },
      { title: 'Build', text: 'Prototype the 3D, visuals and interaction' },
      { title: 'Connect', text: 'Bridge into physical space with WebXR / AR / MR' },
      { title: 'Experience', text: 'Bring it to people at events and demos' },
    ],
    nextText: 'See what that looks like in practice.',
    nextCta: 'See the work',
  },
};

export const lab = {
  ja: {
    label: 'Lab',
    title: 'XR Experiments',
    lead: '公開準備中の試作を置く場所です。形になったものから順に公開していきます。',
    nextText: '公開中の作品はこちらです。',
    nextCta: '作品を見る',
  },
  en: {
    label: 'Lab',
    title: 'XR Experiments',
    lead: 'A place for prototypes that are being prepared for release. They go public one by one, as they take shape.',
    nextText: "Here's what's already public.",
    nextCta: 'See the work',
  },
};

export const contact = {
  ja: {
    label: 'Contact',
    title: "Let's Create an Experience",
    lead: 'ご相談の内容によって窓口が分かれています。該当する方からご連絡ください。',
    personTitle: '個人へのご相談',
    personText: '個人での制作相談、登壇、アドバイザーのご相談は、XのDMからご連絡ください。',
    personCta: 'Xで連絡する',
    corpTitle: '法人のご相談',
    corpText: '法人の制作、IP活用、XRプロジェクトのご相談は、株式会社Gugenkaへ。',
    corpCta: 'Gugenkaへ相談する',
    nextText: 'まずは作品を体験してみてください。',
    nextCta: '作品を見る',
  },
  en: {
    label: 'Contact',
    title: "Let's Create an Experience",
    lead: 'There are two routes depending on what you need. Please use whichever fits.',
    personTitle: 'For individuals',
    personText: 'For personal project enquiries, speaking engagements or advisory work, please reach out via DM on X.',
    personCta: 'Message on X',
    corpTitle: 'For businesses',
    corpText: 'For corporate production, IP collaboration and larger XR projects, please contact Gugenka Inc.',
    corpCta: 'Contact Gugenka',
    nextText: 'Try the work first, if you like.',
    nextCta: 'See the work',
  },
};

export const notFound = {
  ja: { title: 'ページが見つかりませんでした。', lead: 'URL が変わったか、削除された可能性があります。', cta: 'トップへ戻る' },
  en: {
    title: 'Page not found.',
    lead: 'The page you were looking for could not be found. It may have moved or been removed.',
    cta: 'Back to top page',
  },
};
