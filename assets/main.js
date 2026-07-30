/* =========================================================
   assets/config.js の設定をページに反映する
   （編集が必要なのは config.js だけです）
   ========================================================= */
(function () {
  'use strict';

  /* ---- 法人問い合わせ先リンク ---- */
  var url =
    typeof GUGENKA_CONTACT_URL === 'string' && GUGENKA_CONTACT_URL.trim()
      ? GUGENKA_CONTACT_URL.trim()
      : '#corporate-contact';

  var isExternal = /^https?:\/\//i.test(url);

  Array.prototype.forEach.call(
    document.querySelectorAll('[data-gugenka-link]'),
    function (a) {
      a.setAttribute('href', url);
      if (isExternal) {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
        if (!a.querySelector('.btn-external')) {
          var mark = document.createElement('span');
          mark.className = 'btn-external';
          mark.setAttribute('aria-hidden', 'true');
          mark.textContent = '↗';
          a.appendChild(mark);
        }
      }
    }
  );

  /* ---- Lab カードの生成 ---- */
  var list = document.getElementById('lab-cards');
  if (!list || typeof LAB_ITEMS === 'undefined' || !LAB_ITEMS.length) return;

  list.innerHTML = '';

  LAB_ITEMS.forEach(function (item) {
    var li = document.createElement('li');
    li.className = 'card';

    var external = item.url && /^https?:\/\//i.test(item.url);

    /* --- メディア領域（画像・動画・プレースホルダ） --- */
    var media = document.createElement('div');
    media.className = 'card-media';

    if (item.image) {
      var img = document.createElement('img');
      img.src = item.image;
      img.alt = item.alt || '';
      img.loading = 'lazy';
      img.decoding = 'async';
      media.appendChild(img);
    } else if (item.video) {
      // 自動再生はしない。コントロールを表示して利用者の操作に任せる
      var video = document.createElement('video');
      video.src = item.video;
      video.controls = true;
      video.preload = 'none';
      if (item.poster) video.poster = item.poster;
      media.appendChild(video);
    } else {
      media.classList.add('card-media-empty');
      media.setAttribute('aria-hidden', 'true');
    }

    /* --- 本文 --- */
    var body = document.createElement('div');
    body.className = 'card-body';

    var h3 = document.createElement('h3');
    h3.className = 'card-title';
    h3.textContent = item.title;
    body.appendChild(h3);

    if (item.status === 'preparing') {
      var status = document.createElement('p');
      status.className = 'card-status';
      status.textContent = 'Preparing';
      body.appendChild(status);
    }

    if (item.text) {
      var p = document.createElement('p');
      p.className = 'card-text';
      p.textContent = item.text;
      body.appendChild(p);
    }

    if (Array.isArray(item.tags) && item.tags.length) {
      var ul = document.createElement('ul');
      ul.className = 'tags tags-sm';
      item.tags.forEach(function (t) {
        var tag = document.createElement('li');
        tag.textContent = t;
        ul.appendChild(tag);
      });
      body.appendChild(ul);
    }

    /* --- リンクがあればカード全体をリンクにする --- */
    if (item.url) {
      var a = document.createElement('a');
      a.className = 'card-link';
      a.href = item.url;
      if (external) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
      a.appendChild(media);
      a.appendChild(body);
      li.appendChild(a);
      li.classList.add('card-clickable');
    } else {
      li.appendChild(media);
      li.appendChild(body);
    }

    list.appendChild(li);
  });
})();
