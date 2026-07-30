/* =========================================================
   サイト設定ファイル
   ここだけを編集すれば、リンクとLabの内容を差し替えられます。
   日本語ページ（/）と英語ページ（/en/）で共有します。
   ========================================================= */

/**
 * 法人問い合わせ先URL（株式会社Gugenka）
 *
 * URLが確定したら、この1箇所だけを書き換えてください。
 * 日本語ページ・英語ページの両方に反映されます。
 *
 * 未確定の間は '#corporate-contact' のままにしておくと、
 * ページ内の法人向けセクションへスクロールする仮リンクとして動作します。
 */
const GUGENKA_CONTACT_URL = 'https://gugenka.jp/contact';

/**
 * Lab（XR Experiments）に並べるカード
 *
 * 文字列を { ja: '…', en: '…' } の形で書くと、ページの言語に応じて
 * 自動で切り替わります。ふつうの文字列を書いた場合は両言語で共通になります。
 *
 *   title    … カード見出し（必須）
 *   status   … 'preparing' で「Preparing」バッジを表示。'published' で非表示
 *   text     … 説明文（任意）
 *   url      … 外部リンク（任意）。指定するとカード全体がリンクになる
 *   image    … 画像パス（任意）。例 '/assets/works/xxx.jpg'
 *   alt      … 画像の代替テキスト（image を指定したら必ず書く）
 *   video    … 動画パス（任意）。自動再生はしません
 *   poster   … 動画のサムネイル（任意）
 *   tags     … タグの配列（任意）
 */
const LAB_ITEMS = [
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

/**
 * UIラベルの翻訳（Labカード内で使うもの）
 */
const UI_TEXT = {
  preparing: { ja: 'Preparing', en: 'Preparing' },
};
