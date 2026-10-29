// Compra: todo botão com a classe "comprar" leva ao checkout da Nuvemshop (os pacotes ficam lá).
// Enquanto CHECKOUT estiver vazio, o toque mostra o aviso de integração pendente.
const CHECKOUT = ''; // [LINK-CHECKOUT-NUVEMSHOP]

document.addEventListener('click', e => {
  const a = e.target.closest('a.comprar');
  if (!a) return;
  if (CHECKOUT) { a.href = CHECKOUT; return; }
  e.preventDefault();
  e.stopPropagation();
  aviso().showModal();
}, true);

function aviso(){
  let d = document.getElementById('aviso-compra');
  if (d) return d;
  const css = document.createElement('style');
  css.textContent = `
#aviso-compra{max-width:340px;width:calc(100vw - 48px);box-sizing:border-box;border:0;border-radius:16px;padding:22px 20px 18px;background:#FFFFFF;color:#22242B;font-family:'Source Serif 4',Georgia,serif;box-shadow:0 30px 80px -20px rgba(0,0,0,.7);border-top:4px solid #C9973A}
#aviso-compra::backdrop{background:rgba(10,18,36,.7)}
#aviso-compra .t{display:block;font-family:'Outfit',sans-serif;font-weight:600;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#7A5A2E;margin-bottom:8px}
#aviso-compra h2{margin:0 0 10px;font-family:'Playfair Display',serif;font-weight:600;font-size:22px;line-height:1.15;color:#1E3A63}
#aviso-compra p{margin:0 0 10px;font-size:15px;line-height:1.45}
#aviso-compra button{display:block;width:100%;min-height:44px;margin-top:6px;border:0;border-radius:999px;background:#1E3A63;color:#FFFFFF;font-family:'Outfit',sans-serif;font-weight:600;font-size:15px;letter-spacing:.06em;cursor:pointer}`;
  document.head.appendChild(css);
  d = document.createElement('dialog');
  d.id = 'aviso-compra';
  d.innerHTML = `<span class="t">Em breve</span>
<h2>O pagamento vai ser pela Nuvemshop</h2>
<p>A integração com a loja está em andamento. Quando estiver pronta, este botão leva direto para finalizar a compra, com as opções de pacotes.</p>
<p>Ao finalizar, você informa o nome para a dedicatória do Pr. Nei e, se for presente, quem dá, quem recebe e a mensagem da página De/Para.</p>
<button type="button">Entendi</button>`;
  d.querySelector('button').addEventListener('click', () => d.close());
  d.addEventListener('click', e => { if (e.target === d) d.close(); });
  document.body.appendChild(d);
  return d;
}
