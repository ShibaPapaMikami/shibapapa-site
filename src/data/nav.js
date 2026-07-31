/* =========================================================
   ナビゲーションとフッターの文言・リンク
   ここを直せば日英の全ページに反映されます（旧構成では10ファイル必要でした）
   ========================================================= */

/** 言語ごとのパス接頭辞 */
export const prefix = { ja: '', en: '/en' };

/** メニュー項目。key はページ側で currentKey として渡す */
export const NAV_ITEMS = [
  { key: 'work', path: '/work/', label: { ja: '作品', en: 'Work' } },
  { key: 'about', path: '/about/', label: { ja: 'プロフィール', en: 'About' } },
  { key: 'lab', path: '/lab/', label: { ja: '試作', en: 'Lab' } },
  { key: 'contact', path: '/contact/', label: { ja: 'お問い合わせ', en: 'Contact' } },
];

/** 指定言語でのパスを組み立てる（'/' はトップ） */
export function localePath(path, lang) {
  if (path === '/') return lang === 'ja' ? '/' : '/en/';
  return `${prefix[lang]}${path}`;
}

/** UIラベル */
export const UI = {
  skip: { ja: '本文へスキップ', en: 'Skip to content' },
  navLabel: { ja: 'メインナビゲーション', en: 'Main navigation' },
  homeLabel: { ja: 'SHIBAPAPA ホーム', en: 'SHIBAPAPA home' },
  langToggle: { ja: 'EN', en: '日本語' },
  langToggleAria: { ja: 'Switch to English', en: '日本語に切り替える' },
  otherLangName: { ja: 'English', en: '日本語' },
  preparing: { ja: 'Preparing', en: 'Preparing' },
  scroll: { ja: 'Scroll', en: 'Scroll' },
  footerNote: 'Created as a Gugenka Creator Program case study.',
  gugenka: { ja: 'Gugenka', en: 'Gugenka' },
};

/** 言語を入れ替える（言語切替リンク用） */
export const otherLang = (lang) => (lang === 'ja' ? 'en' : 'ja');
