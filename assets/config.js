/* =========================================================
   サイト設定ファイル
   ここだけを編集すれば、リンクやLabの内容を差し替えられます。
   ========================================================= */

/**
 * 法人問い合わせ先URL（株式会社Gugenka）
 *
 * URLが確定したら、この1箇所だけを書き換えてください。
 * 未確定の間は '#corporate-contact' のままにしておくと、
 * ページ内の法人向けセクションへスクロールする仮リンクとして動作します。
 */
const GUGENKA_CONTACT_URL = '#corporate-contact';

/**
 * Lab（XR Experiments）に並べるカード
 *
 * 画像・動画・外部URLは、公開できるものが用意できた時点で追加してください。
 * 追加しても他のファイルを触る必要はありません。
 *
 *   title    … カード見出し（必須）
 *   status   … 'preparing' で「Preparing」バッジを表示。'published' で非表示
 *   text     … 説明文（任意）
 *   url      … 外部リンク（任意）。指定するとカード全体がリンクになる
 *   image    … 画像パス（任意）。例 'assets/works/xxx.jpg'
 *   alt      … 画像の代替テキスト（image を指定したら必ず書く）
 *   video    … 動画パス（任意）。自動再生はしません
 *   tags     … タグの配列（任意）
 */
const LAB_ITEMS = [
  {
    title: 'AI Character Experience',
    status: 'preparing',
    text: 'AIで生成したキャラクターが、空間の中で振る舞う体験の試作。',
  },
  {
    title: 'Spatial Interactive Art',
    status: 'preparing',
    text: '空間そのものに触れて反応が返ってくる、インタラクティブな表現の実験。',
  },
  {
    title: 'WebXR Prototype',
    status: 'preparing',
    text: 'ブラウザだけで動くXR体験を、軽さを保ったまま成立させる試み。',
  },
];
