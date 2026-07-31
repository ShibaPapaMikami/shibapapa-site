/* =========================================================
   サイト設定
   リンクとLabの内容はここだけを編集すれば全ページに反映されます。
   ビルド時に埋め込まれるので、クライアント側のJavaScriptは不要です。
   ========================================================= */

/**
 * 法人問い合わせ先URL（株式会社Gugenka）
 * 変更する場合はこの1行だけを書き換えてください。日英の全ページに反映されます。
 */
export const GUGENKA_CONTACT_URL = 'https://gugenka.jp/contact';

/** X（旧Twitter） */
export const X_URL = 'https://x.com/Mikami_Gugenka';

/** 金魚水槽MRアートの公開URL */
export const KINGYO_URL = 'https://kingyo-kappa.vercel.app/tank-pc.html';

/**
 * 金魚水槽MRアートのメインビジュアル
 *
 * ★ 素材が用意できたら、ここにパスを入れるだけで
 *   トップと作品ページの両方が自動で切り替わります。
 *   ファイルは public/assets/works/ に置いてください。
 *
 * 優先順位: video → poster（画像のみ）→ CSSの抽象表現（現状）
 *
 *   poster … 静止画。トップではこれだけを使います（軽さのため）
 *   video  … 作品ページで使う動画。MP4（H.264）推奨、10〜20秒、5MB以内が目安
 *   loop   … true にすると音声なしで自動ループ再生（環境映像向け）
 *            false（既定）は再生ボタン付き。まずは false を推奨
 */
export const KINGYO_MEDIA = {
  poster: null, // 例: '/assets/works/kingyo-poster.jpg'
  video: null,  // 例: '/assets/works/kingyo.mp4'
  loop: false,
};

/** サイトの正規URL */
export const SITE_URL = 'https://shibapapa.com';

/**
 * Lab（XR Experiments）に並べるカード
 *
 * 文字列を { ja, en } の形で書くと言語に応じて切り替わります。
 * 素の文字列は両言語で共通になります。
 *
 *   title   … 見出し（必須）
 *   status  … 'preparing' で Preparing バッジを表示
 *   text    … 説明文
 *   url     … 外部リンク。指定するとカード全体がリンクになる
 *   image   … 画像パス（例 '/assets/works/xxx.jpg'）
 *   alt     … image を指定したら必ず書く
 *   video   … 動画パス（自動再生はしない）
 *   poster  … 動画のサムネイル
 *   tags    … タグの配列
 */
export const LAB_ITEMS = [
  {
    title: 'AI Character Experience',
    status: 'preparing',
    text: {
      ja: 'AIで生成したキャラクターが、空間の中で振る舞う体験の試作。',
      en: 'A prototype where an AI-generated character behaves within a space.',
    },
  },
  {
    title: 'Spatial Interactive Art',
    status: 'preparing',
    text: {
      ja: '空間そのものに触れて反応が返ってくる、インタラクティブな表現の実験。',
      en: 'An experiment in interactive expression where the space itself responds to touch.',
    },
  },
  {
    title: 'WebXR Prototype',
    status: 'preparing',
    text: {
      ja: 'ブラウザだけで動くXR体験を、軽さを保ったまま成立させる試み。',
      en: 'An attempt to make a browser-only XR experience work while staying lightweight.',
    },
  },
];

/** { ja, en } でも素の文字列でも受け取れるようにする */
export function pick(value, lang) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  return value[lang] ?? value.ja ?? value.en ?? '';
}
