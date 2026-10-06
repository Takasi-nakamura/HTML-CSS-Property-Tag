const htmlItems=[
['a','リンク','別のページや場所へのハイパーリンクを作成します。','<a href="https://example.com">リンク</a>'],
['abbr','略語','略語・頭字語を表します。','<abbr title="HyperText Markup Language">HTML</abbr>'],
['article','記事','独立して配布・再利用できるコンテンツを表します。','<article><h2>記事タイトル</h2><p>本文</p></article>'],
['aside','補足','本文と間接的に関連する補足コンテンツを表します。','<aside>関連情報</aside>'],
['audio','音声','音声コンテンツを埋め込みます。','<audio controls src="audio.mp3"></audio>'],
['button','ボタン','クリック可能な操作ボタンを作成します。','<button type="button">送信</button>'],
['code','コード','短いコンピューターコードを表します。','<code>console.log("Hello");</code>'],
['details','詳細','開閉できる補足情報を表示します。','<details><summary>詳細</summary>内容</details>'],
['dialog','ダイアログ','ダイアログやモーダルウィンドウを表します。','<dialog open>ダイアログ</dialog>'],
['div','汎用コンテナ','意味を持たない汎用ブロックコンテナです。','<div class="card">内容</div>'],
['em','強調','強い意味上の強調を表します。','<em>重要</em>'],
['figure','図・コード等','図表などの自己完結したコンテンツを表します。','<figure><img src="image.jpg" alt="説明"><figcaption>キャプション</figcaption></figure>'],
['form','フォーム','ユーザー入力を送信するためのフォームを表します。','<form action="/submit" method="post"><input name="email"><button>送信</button></form>'],
['h1','見出し1','ページの最上位見出しを表します。','<h1>ページタイトル</h1>'],
['header','ヘッダー','ページやセクションの導入部を表します。','<header><h1>サイト名</h1></header>'],
['img','画像','画像を埋め込みます。','<img src="image.jpg" alt="画像の説明">'],
['input','入力欄','さまざまな種類のユーザー入力欄を作ります。','<input type="text" name="name" placeholder="名前">'],
['label','ラベル','フォーム部品の説明・ラベルを表します。','<label for="email">メール</label>'],
['main','メイン','ページの主要なコンテンツを表します。','<main>主要コンテンツ</main>'],
['nav','ナビゲーション','主要なナビゲーションリンクを表します。','<nav><a href="/">Home</a></nav>'],
['ol','番号付きリスト','順序のある項目リストを表します。','<ol><li>項目1</li><li>項目2</li></ol>'],
['p','段落','文章の段落を表します。','<p>これは段落です。</p>'],
['section','セクション','文書の意味的な区分を表します。','<section><h2>セクション</h2></section>'],
['select','選択メニュー','複数の候補から選択するコントロールです。','<select><option>選択肢</option></select>'],
['span','汎用インライン','意味を持たない汎用インラインコンテナです。','<span class="label">テキスト</span>'],
['strong','重要性','内容の強い重要性を表します。','<strong>重要</strong>'],
['table','表','行と列からなる表形式データを表します。','<table><tr><th>名前</th><th>値</th></tr><tr><td>A</td><td>10</td></tr></table>'],
['textarea','複数行入力','複数行のテキスト入力欄を作ります。','<textarea rows="4" placeholder="入力"></textarea>'],
['ul','箇条書き','順序を持たない項目リストを表します。','<ul><li>項目1</li><li>項目2</li></ul>']
];
const cssItems=[
['display','表示方式','要素のレイアウト上の表示形式を指定します.','display: flex;'],
['position','配置方法','要素の配置方法を指定します。','position: relative;'],
['top','上位置','配置要素の上側からのオフセットを指定します。','top: 20px;'],
['right','右位置','配置要素の右側からのオフセットを指定します。','right: 0;'],
['bottom','下位置','配置要素の下側からのオフセットを指定します。','bottom: 0;'],
['left','左位置','配置要素の左側からのオフセットを指定します。','left: 0;'],
['inset','四辺オフセット','top/right/bottom/leftをまとめて指定します。','inset: 0;'],
['z-index','重なり順','重なり順序を指定します。','z-index: 10;'],
['width','幅','要素の幅を指定します。','width: 100%;'],
['min-width','最小幅','要素の最小幅を指定します。','min-width: 240px;'],
['max-width','最大幅','要素の最大幅を指定します。','max-width: 1200px;'],
['height','高さ','要素の高さを指定します。','height: 100px;'],
['padding','内側余白','境界線と内容の間の余白を指定します。','padding: 16px;'],
['margin','外側余白','要素の外側の余白を指定します。','margin: 0 auto;'],
['box-sizing','サイズ計算','width/heightの計算方法を指定します。','box-sizing: border-box;'],
['gap','間隔','Flex/Gridの子要素間の間隔を指定します。','gap: 16px;'],
['grid-template-columns','Grid列','Gridの列構造を指定します。','grid-template-columns: repeat(3, 1fr);'],
['grid-template-rows','Grid行','Gridの行構造を指定します。','grid-template-rows: auto 1fr;'],
['justify-content','主軸配置','Flex/Grid内のアイテムを主軸方向に配置します。','justify-content: space-between;'],
['align-items','交差軸配置','Flex/Grid内のアイテムを交差軸方向に配置します。','align-items: center;'],
['flex-direction','Flex方向','Flexアイテムの並ぶ方向を指定します。','flex-direction: column;'],
['flex-wrap','折り返し','Flexアイテムの折り返し方法を指定します。','flex-wrap: wrap;'],
['flex','Flex比率','Flexアイテムの伸縮をまとめて指定します。','flex: 1;'],
['color','文字色','テキストの色を指定します。','color: #111;'],
['background','背景','背景に関する値をまとめて指定します。','background: #fff;'],
['background-color','背景色','要素の背景色を指定します。','background-color: #f5f5f5;'],
['background-image','背景画像','背景に画像やグラデーションを指定します。','background-image: linear-gradient(#fff,#eee);'],
['border','境界線','境界線をまとめて指定します。','border: 1px solid #ddd;'],
['border-radius','角丸','要素の角を丸くします。','border-radius: 16px;'],
['box-shadow','影','要素に影を付けます。','box-shadow: 0 10px 30px #0002;'],
['opacity','不透明度','要素の不透明度を指定します。','opacity: .8;'],
['font-family','フォント','使用するフォントを指定します。','font-family: sans-serif;'],
['font-size','文字サイズ','文字のサイズを指定します。','font-size: 16px;'],
['font-weight','太さ','文字の太さを指定します。','font-weight: 700;'],
['line-height','行の高さ','行ボックスの高さを指定します。','line-height: 1.7;'],
['letter-spacing','字間','文字間隔を指定します。','letter-spacing: .04em;'],
['text-align','文字揃え','インライン内容の水平方向の揃え方を指定します。','text-align: center;'],
['text-decoration','文字装飾','下線などの文字装飾を指定します。','text-decoration: underline;'],
['text-transform','大文字小文字','テキストの大文字・小文字変換を指定します。','text-transform: uppercase;'],
['white-space','空白処理','空白文字や改行の扱いを指定します。','white-space: nowrap;'],
['overflow','はみ出し','内容が領域を超えたときの扱いを指定します。','overflow: hidden;'],
['object-fit','画像の収まり','置換要素を領域にどう収めるか指定します。','object-fit: cover;'],
['cursor','カーソル','マウスポインターの表示を指定します。','cursor: pointer;'],
['visibility','可視性','要素の表示・非表示を指定します。','visibility: hidden;'],
['filter','フィルター','画像などに視覚効果を適用します。','filter: blur(4px);'],
['transform','変形','要素を移動・回転・拡大縮小します。','transform: translateY(-4px);'],
['transition','遷移','プロパティ変化のアニメーションを指定します。','transition: transform .2s ease;'],
['animation','アニメーション','キーフレームアニメーションを指定します。','animation: fade .5s ease;'],
['content','生成内容','::before/::afterなどで生成する内容を指定します。','content: "→";'],
['aspect-ratio','アスペクト比','要素の幅と高さの比率を指定します。','aspect-ratio: 16 / 9;'],
['object-position','画像位置','置換要素の内容位置を指定します。','object-position: center;'],
['scroll-behavior','スクロール挙動','スクロールのアニメーション方法を指定します。','scroll-behavior: smooth;'],
['accent-color','アクセント色','フォームコントロールなどのアクセント色を指定します。','accent-color: #111;'],
['appearance','外観','標準UIの外観を変更します。','appearance: none;'],
['isolation','重ね合わせ分離','要素を独立したスタッキングコンテキストにします。','isolation: isolate;'],
['resize','サイズ変更','ユーザーによる要素サイズ変更を指定します。','resize: vertical;'],
['user-select','選択','ユーザーによるテキスト選択を制御します。','user-select: none;']
];
const data=[...htmlItems.map(x=>({type:'HTML',...({name:x[0],category:x[1],description:x[2],code:x[3]})})),...cssItems.map(x=>({type:'CSS',name:x[0],category:x[1],description:x[2],code:x[3]}))];
const grid=document.querySelector('#grid'), search=document.querySelector('#search'), resultCount=document.querySelector('#resultCount'), totalCount=document.querySelector('#totalCount'), dialog=document.querySelector('#detailDialog');
let current=data;
totalCount.textContent=data.length;
function render(){const q=search.value.trim().toLowerCase();current=data.filter(x=>(filter==='all'||x.type.toLowerCase()===filter)&&(!q||[x.name,x.category,x.description].join(' ').toLowerCase().includes(q)));resultCount.textContent=current.length+' results';grid.innerHTML=current.map((x,i)=>'<button class="card" data-i="'+i+'"><span class="type">'+x.type+' / '+x.category+'</span><h3>'+esc(x.name)+'</h3><p>'+esc(x.description)+'</p></button>').join('')||'<p style="grid-column:1/-1;color:#888">該当する項目がありません。</p>'}
let filter='all';
document.querySelectorAll('.segmented button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.segmented button').forEach(x=>x.classList.remove('active'));b.classList.add('active');filter=b.dataset.filter;document.querySelector('#sectionTitle').textContent=filter==='all'?'All references':filter.toUpperCase()+' references';render()}));
search.addEventListener('input',render);
grid.addEventListener('click',e=>{const c=e.target.closest('.card');if(!c)return;const x=current[+c.dataset.i];document.querySelector('#modalType').textContent=x.type;document.querySelector('#modalCategory').textContent=x.category;document.querySelector('#modalName').textContent=x.name;document.querySelector('#modalDescription').textContent=x.description;document.querySelector('#modalCode').textContent=x.code;dialog.showModal()});
document.querySelector('#closeBtn').onclick=()=>dialog.close();
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.querySelector('#copyBtn').onclick=async()=>{await navigator.clipboard.writeText(document.querySelector('#modalCode').textContent);const t=document.querySelector('#toast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1300)};
document.querySelector('#themeBtn').onclick=()=>document.body.classList.toggle('light-invert');
function esc(s){return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))} render();