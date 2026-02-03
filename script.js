// === Função para embaralhar ===
function shuffle(array){
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
 
// === Perguntas (60 no total, 20 por nível) ===
const QUESTIONS = [
 
{ q:'A lixeira destinada ao descarte de resíduos plásticos possui qual cor padrão?', a:['Azul','Vermelha','Verde','Marrom'], correct:1 },
{ q:'Qual dessas atitudes representa uma ação cotidiana que realmente contribui para preservar o meio ambiente?', a:['Apagar luzes','Desperdiçar água','Jogar lixo no chão','Queimar folhas'], correct:0 },
{ q:'Qual destes animais faz parte da fauna típica de florestas brasileiras?', a:['Leão-marinho','Onça','Tubarão','Pinguim'], correct:1 },
{ q:'Entre as opções, qual prática é mais eficiente para reduzir o consumo de água?', a:['Banho rápido','Banho de 40 minutos','Torneira aberta','Mangueira vazando'], correct:0 },
{ q:'Durante a fotossíntese, as plantas são responsáveis por produzir principalmente:', a:['Água','Oxigênio','Ouro','Gás carbônico'], correct:1 },
{ q:'O local correto para descartar resíduos comuns do dia a dia é:', a:['No chão','No rio','Na lixeira','Na rua'], correct:2 },
{ q:'A lixeira utilizada para o descarte de papel é identificada pela cor:', a:['Azul','Vermelha','Verde','Amarela'], correct:0 },
{ q:'Qual das ações abaixo contribui diretamente para a conservação ambiental?', a:['Plantar árvores','Jogar lixo no mar','Desmatar','Queimar lixo'], correct:0 },
{ q:'Qual dos animais apresentados é adaptado à vida aquática?', a:['Cavalo','Golfinho','Gato','Macaco'], correct:1 },
{ q:'A reciclagem tem como principal função:', a:['Destruir materiais','Transformar materiais em novos produtos','Poluir','Derreter lixo no mar'], correct:1 },
{ q:'A energia solar é considerada uma fonte de energia:', a:['Elétrica','Natural','Química','Radioativa'], correct:1 },
{ q:'O descarte de lixo no ambiente marinho causa principalmente:', a:['Nada','Poluição e morte de animais','A água melhora','Fica colorido'], correct:1 },
{ q:'Qual desses elementos naturais contribui significativamente para purificar o ar?', a:['Árvores','Plástico','Petróleo','Fumaça'], correct:0 },
{ q:'A destinação correta para garrafas PET é:', a:['Jogar no chão','Reciclar','Quebrar','Enterrar'], correct:1 },
{ q:'Entre as alternativas, qual fonte é reconhecida como agente poluidor do ar?', a:['Carros','Árvores','Chuva','Flores'], correct:0 },
{ q:'Qual animal frequentemente sofre impactos graves devido ao descarte de canudos no mar?', a:['Tartaruga','Galo','Cavalo','Gato'], correct:0 },
{ q:'Entre as funções essenciais da água, qual é fundamental para todos os seres vivos?', a:['Beber','Poluir rios','Jogar fora','Desperdiçar'], correct:0 },
{ q:'Qual atitude contribui para economizar energia elétrica dentro de casa?', a:['Deixar TV ligada','Apagar luzes quando sair','Abrir geladeira toda hora','Usar tudo ao mesmo tempo'], correct:1 },
{ q:'A cor padrão utilizada para identificar a lixeira destinada ao vidro é:', a:['Verde','Preta','Rosa','Laranja'], correct:0 },
{ q:'Qual das opções representa uma ação prejudicial ao meio ambiente?', a:['Cuidar','Preservar','Poluir','Proteger'], correct:2 },
 
 
 
  { q:"O que significa 'sustentabilidade'?", a:["Consumo ilimitado com reposição rápida","Uso responsável dos recursos naturais para não faltar no futuro","Redução total do uso de qualquer recurso ambiental","Prática de reciclagem apenas"], correct:1 },
  { q:"Por que é importante economizar água?", a:["Porque mesmo sendo renovável, pode faltar em algumas regiões","Porque a água do planeta está desaparecendo completamente","Porque manter torneiras abertas aumenta a umidade","Porque a água usada sempre volta limpa para os rios"], correct:0 },
  { q:"Qual é a principal causa do aquecimento global?", a:["Ondas de calor naturais da Terra","Emissão excessiva de gases de efeito estufa produzidos por atividades humanas","Aumento da radiação solar nos últimos anos","Resfriamento dos oceanos"], correct:1 },
  { q:"O que é o efeito estufa?", a:["Fenômeno natural que mantém a Terra aquecida, mas que aumenta com gases poluentes","Entrada de ar quente na atmosfera por causa de furacões","Produção de calor pelas plantas à noite","Acúmulo de vapor d’água causado por queimadas"], correct:0 },
  { q:"Qual atitude ajuda a reduzir o lixo produzido?", a:["Comprar produtos com muitas embalagens","Optar por itens reutilizáveis em vez de descartáveis","Jogar lixo orgânico e reciclável juntos","Usar sacolas plásticas sempre que possível"], correct:1 },
  { q:"Por que devemos separar lixo para reciclagem?", a:["Porque o lixo reciclado desaparece completamente","Para reduzir o uso de aterros e facilitar o reaproveitamento de materiais","Porque a lei exige em todas as cidades","Para deixar o lixo mais cheiroso"], correct:1 },
  { q:"O que são energias renováveis?", a:["Energias que só funcionam durante o dia","Energias que se esgotam rapidamente","Energias obtidas de fontes que se renovam naturalmente","Energias sempre mais baratas que as demais"], correct:2 },
  { q:"Como o desmatamento afeta os animais?", a:["Aumenta a disponibilidade de água","Remove o habitat natural, diminuindo alimento e abrigo","Melhora a circulação de ar","Facilita o deslocamento das espécies"], correct:1 },
  { q:"Por que plantar árvores é importante?", a:["Porque elas consomem grande parte do oxigênio do ar","Porque reduzem a biodiversidade urbana","Porque diminuem o CO₂ e ajudam no equilíbrio climático","Porque aceleram o aquecimento global"], correct:2 },
  { q:"O que é poluição sonora?", a:["Excesso de ruídos que prejudicam saúde e bem-estar","Acúmulo de lixo gerando mau cheiro","Emissão de gases tóxicos no ar","Luzes intensas de carros e prédios"], correct:0 },
  { q:"O que acontece quando lixo é jogado em rios e mares?", a:["A água limpa o lixo naturalmente","Os materiais se decompõem muito rápido","Afeta animais e polui a água, prejudicando o ecossistema","A correnteza leva o lixo para locais seguros"], correct:2 },
  { q:"O que é coleta seletiva?", a:["Divisão de resíduos por cor ou tipo para facilitar reciclagem","Processo de incinerar lixo urbano","Método de enterrar lixo orgânico","Separação de lixo apenas quando há muito volume"], correct:0 },
  { q:"Por que o plástico é tão problemático?", a:["Porque derrete facilmente e polui o ar","Porque se decompõe em poucos meses","Porque demora séculos para se decompor e gera microplásticos","Porque não pode ser reciclado nunca"], correct:2 },
  { q:"Como o transporte público ajuda o meio ambiente?", a:["Aumenta a emissão de gases por transportar muitas pessoas","Reduz o número de carros, diminuindo poluição e congestionamento","É sempre movido a energia limpa","Aumenta o gasto de combustível na cidade"], correct:1 },
  { q:"Por que evitar desperdício de energia?", a:["Porque a produção de energia pode gerar impactos ambientais","Porque energia economizada vira água potável","Porque usar menos energia aumenta a temperatura do planeta","Porque energia não tem custo de produção"], correct:0 },
  { q:"O que é uma espécie em extinção?", a:["Uma espécie que está em crescimento acelerado","Uma espécie que só vive em desertos","Uma espécie com risco real de desaparecer da natureza","Uma espécie considerada perigosa ao ser humano"], correct:2 },
  { q:"O que significa reciclar?", a:["Destruir qualquer tipo de material industrial","Transformar materiais usados em novos produtos","Lavar embalagens e jogá-las fora","Converter lixo orgânico em plástico"], correct:1 },
  { q:"A queima de combustíveis fósseis provoca:", a:["Redução do CO₂ na atmosfera","Aumento de poluentes e intensificação do efeito estufa","Diminuição da temperatura global","Purificação do ar urbano"], correct:1 },
  { q:"Para que serve a camada de ozônio?", a:["Para resfriar a atmosfera","Para proteger a Terra de radiação ultravioleta nociva","Para produzir oxigênio no topo da atmosfera","Para impedir a entrada de ventos solares"], correct:1 },
  { q:"Qual hábito ajuda a preservar o planeta?", a:["Comprar itens descartáveis sempre que possível","Deixar luzes e aparelhos ligados sem uso","Reduzir o consumo, reutilizar objetos e reciclar materiais","Jogar lixo orgânico na rua"], correct:2 },
 
 
{ q:'Qual gás apresenta maior potencial de aquecimento global considerando força radiativa e tempo de residência atmosférica?', a:['Metano (CH₄)','Dióxido de Carbono (CO₂)','Ozônio troposférico (O₃)','Óxido Nitroso (N₂O)'], correct:3 },
{ q:'Qual bioma brasileiro apresenta maior susceptibilidade aos processos avançados de desertificação devido ao déficit hídrico crônico?', a:['Floresta Amazônica','Caatinga','Cerrado','Pampas'], correct:1 },
{ q:'A maior fração de produção de oxigênio do planeta é derivada principalmente de:', a:['Florestas tropicais úmidas','Fitoplâncton marinho','Vegetação arbustiva terrestre','Manguezais'], correct:1 },
{ q:'Qual fator antrópico é o principal responsável pela aceleração global da perda de biodiversidade?', a:['Poluição atmosférica urbana','Desmatamento e fragmentação de habitat','Sobrepesca em ambientes costeiros','Introdução de espécies exóticas invasoras'], correct:1 },
{ q:'A eutrofização em corpos d’água ocorre primordialmente devido ao excesso de:', a:['Íons metálicos pesados','Nitrogênio e fósforo provenientes de escoamento agrícola','Derivados de petróleo dispersos','Sedimentos argilosos'], correct:1 },
{ q:'Entre os solos abaixo, qual apresenta menor fertilidade natural devido à intensa lixiviação e baixa saturação por bases?', a:['Terra roxa','Solos aluviais','Latossolos profundos amazônicos','Solos calcários'], correct:2 },
{ q:'Qual região do planeta demonstra a maior taxa atual de amplificação térmica causada pelas mudanças climáticas?', a:['Antártica Oriental','América do Norte','África Subsaariana','Ártico'], correct:3 },
{ q:'A principal substância responsável pela degradação da camada de ozônio estratosférico foi:', a:['Clorofluorcarbonos (CFCs)','Dióxido de Carbono','Metano','Dióxido de Enxofre'], correct:0 },
{ q:'Qual poluente atmosférico apresenta permanência suficiente para alterar o balanço radiativo por séculos?', a:['O₃ troposférico','CH₄','CO₂','Pb particulado'], correct:2 },
{ q:'Qual desses organismos é frequentemente considerado espécie-chave por sua influência desproporcional no equilíbrio de ecossistemas?', a:['Formigas generalistas','Jacarés','Morcegos frugívoros','Leopardos'], correct:2 },
{ q:'As ilhas de calor urbanas surgem principalmente devido ao:', a:['Baixo regime de ventos','Elevado índice de superfícies impermeáveis como asfalto e concreto','Poluição luminosa intensa','Sombreamento causado por edifícios'], correct:1 },
{ q:'O setor que mais consome água doce globalmente, considerando uso direto e indireto, é:', a:['Indústrias de base','Agricultura irrigada','Uso doméstico urbano','Termoelétricas'], correct:1 },
{ q:'Qual fonte renovável apresenta maior emissão de CO₂ ao longo de sua cadeia de construção e instalação?', a:['Painéis solares fotovoltaicos','Turbinas eólicas','Biomassa sólida','Usinas hidrelétricas de grande porte'], correct:3 },
{ q:'Manguezais são ecossistemas essenciais porque:', a:['Atuam como barreira contra ressacas e erosão costeira','Aumentam a salinidade dos estuários','Reduzem a produtividade pesqueira','Elevam a turbidez permanente'], correct:0 },
{ q:'O impacto ambiental direto mais evidente decorrente da atividade mineradora é:', a:['Ruído excessivo','Supressão da vegetação e remoção do solo','Alteração da velocidade dos ventos','Elevação da salinidade'], correct:1 },
{ q:'Corredores ecológicos são implementados com o objetivo de:', a:['Aumentar a temperatura de ecossistemas fragmentados','Reconectar habitats isolados para permitir fluxo gênico','Neutralizar acidez do solo','Aumentar processos erosivos'], correct:1 },
{ q:'A principal causa atual da mortalidade em aves marinhas é a ingestão de:', a:['Petróleo cru','Fragmentos de plástico e microplásticos','Radiação solar intensificada','Ruído industrial'], correct:1 },
{ q:'Onde ocorre o maior acúmulo de toxinas persistentes devido à biomagnificação na cadeia alimentar?', a:['Produtores primários','Herbívoros','Carnívoros de topo','Decompositores'], correct:2 },
{ q:'A principal fonte de entrada de microplásticos nos oceanos provém de:', a:['Canudos descartáveis','Fibras sintéticas liberadas por roupas durante lavagem','Garrafas PET descartadas corretamente','Sacolas biodegradáveis'], correct:1 },
{ q:'O maior reservatório de água doce líquida acessível do planeta encontra-se em:', a:['Lençóis freáticos e aquíferos subterrâneos','Grandes lagos continentais','Sistemas fluviais','Geleiras e calotas polares'], correct:0 }
 
];
 
// === EMBARALHAR 20 PERGUNTAS DE CADA NÍVEL ===
shuffle(QUESTIONS.slice(0, 20));   // nível 1
shuffle(QUESTIONS.slice(20, 40));  // nível 2
shuffle(QUESTIONS.slice(40, 60));  // nível 3
 
/* ================= EMBARALHAMENTO + SELEÇÃO DE 15 PERGUNTAS ================= */
 
// Função para embaralhar (Fisher–Yates)
function shuffle(array){
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
 
// Separar níveis
const nivel1 = QUESTIONS.slice(0, 20);
const nivel2 = QUESTIONS.slice(20, 40);
const nivel3 = QUESTIONS.slice(40, 60);
 
// Embaralhar cada nível
shuffle(nivel1);
shuffle(nivel2);
shuffle(nivel3);
 
// Pegar só 5 por nível → total 15 perguntas
const FINAL_QUESTIONS = [
  ...nivel1.slice(0, 5),
  ...nivel2.slice(0, 5),
  ...nivel3.slice(0, 5)
];
 
// Substituir QUESTIONS pela lista final
QUESTIONS.length = 0;
QUESTIONS.push(...FINAL_QUESTIONS);
 
/* ================== FIM DO SISTEMA DE SORTEIO ================== */
 
 
 
// === Itens de reciclagem ===
const RECYCLE_ITEMS = [
  {name:'Papel',type:'papel',emoji:'📄'},
   {name:'Maçã',type:'organico',emoji:'🍎'},
  {name:'Caderno',type:'papel',emoji:'📘'},
  {name:'Sacola',type:'papel',emoji:'🛍️'},
  {name:'Canudo',type:'plastico',emoji:'🧃'},
  {name:'Garrafa de vidro',type:'vidro',emoji:'🍾'},
  {name:'Folhas',type:'organico',emoji:'🥬'},
  {name:'Envelope',type:'papel',emoji:'✉️'},
  {name:'Copo de vidro',type:'vidro',emoji:'🥃'},
  {name:'Garrafa PET',type:'plastico',emoji:'🥤'},
  {name:'Banana',type:'organico',emoji:'🍌'},
  {name:'garrafa plástica',type:'plastico',emoji:'🧴'},
  {name:'Jornal',type:'papel',emoji:'📰'},
  {name:'prato',type:'vidro',emoji:'🍽️'}
];
 
let index = 0;
let score = 0;
 
// Níveis
function currentLevelAndPoints(idx){
  if(idx < 5) return {level:1, points:5};
  if(idx < 10) return {level:2, points:10};
  return {level:3, points:20};
}
 
// Cabeçalho
function ensureHeaderElements(){
  const top = document.querySelector(".quiz-top");
  if(!top) return;
 
  let lvl = document.getElementById("levelLabel");
  let prog = document.getElementById("progressLabel");
 
  if(!lvl || !prog){
    top.innerHTML = "";
 
    lvl = document.createElement("span");
    lvl.id = "levelLabel";
    lvl.style.fontWeight = "bold";
 
    prog = document.createElement("span");
    prog.id = "progressLabel";
    prog.style.fontWeight = "bold";
 
    const scoreContainer = document.createElement("span");
    scoreContainer.innerHTML = 'Pontos: <span id="score">0</span>';
    scoreContainer.style.fontWeight = "bold";
 
    top.appendChild(lvl);
    top.appendChild(prog);
    top.appendChild(scoreContainer);
  }
}
 
// Trocar tela
/* ---------- show(screen) ---------- */
function show(screen){
  document.querySelectorAll(".screen").forEach(s =>
    s.classList.remove("active")
  );
 
  document.getElementById(screen).classList.add("active");
 
  if(screen === "quiz"){
    document.body.style.backgroundImage = 'url("Arquivos/fundodois.png")';
  } else {
    document.body.style.backgroundImage = 'url("Arquivos/fundodois.png")';
  }
}
 
 
 
// Início
document.addEventListener("DOMContentLoaded", ()=>{
  ensureHeaderElements();
  const startBtn = document.getElementById("startBtn");
 
  if(startBtn){
    startBtn.onclick = ()=>{
      index = 0;
      score = 0;
      updateQuiz();
      show("quiz");
    };
  }
 
  attachBins();
});
 
 
// Atualizar quiz
function updateQuiz(){
  ensureHeaderElements();
 
  if(index >= QUESTIONS.length){
    startRecycle();
    return;
  }
 
  const q = QUESTIONS[index];
  const lvl = currentLevelAndPoints(index);
 
  document.getElementById("levelLabel").textContent = `Nível ${lvl.level}`;
  document.getElementById("progressLabel").textContent = `Pergunta ${index+1}/${QUESTIONS.length}`;
  document.getElementById("score").textContent = score;
 
  document.getElementById("qtext").textContent = q.q;
  document.getElementById("sprite").textContent = q.sprite || "";
 
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
 
  q.a.forEach((text,i)=>{
    const btn = document.createElement("button");
    btn.className = "answerBtn";
    btn.innerText = text;
    btn.onclick = ()=> checkAnswer(i, btn);
    answersDiv.appendChild(btn);
  });
}
 
 
 
// Verificar resposta
function checkAnswer(choice, btn){
  const q = QUESTIONS[index];
  const lvl = currentLevelAndPoints(index);
 
  const buttons = document.querySelectorAll(".answerBtn");
  buttons.forEach(b=>b.disabled=true);
 
  if(choice === q.correct){
    score += lvl.points;
    btn.classList.add("correct");
    document.getElementById("feedback").textContent = `✔ Acertou! +${lvl.points} pontos`;
  } else {
    btn.classList.add("wrong");
    buttons[q.correct].classList.add("correct");
    document.getElementById("feedback").textContent = `❌ Errado!`;
  }
 
  document.getElementById("score").textContent = score;
 
  index++;
  setTimeout(updateQuiz, 900);
}
 
// ===================== RECICLAGEM ======================
 
function startRecycle(){
  show("recycle");
 
  const div = document.getElementById("itemsArea");
  div.innerHTML = "";
 
  RECYCLE_ITEMS.forEach((item, i)=>{
    const el = document.createElement("div");
    el.className = "trash-item";
    el.draggable = true;
 
    el.dataset.type = item.type;
    el.dataset.id = "trash_" + i; // ID único real
    el.innerText = item.emoji;
 
    el.ondragstart = (ev)=>{
      ev.dataTransfer.setData("id", el.dataset.id);
      ev.dataTransfer.setData("type", el.dataset.type);
    };
 
    div.appendChild(el);
  });
 
  document.getElementById("recycleFeedback").innerText = "";
}
 
// Lixeiras
function attachBins(){
  const bins = document.querySelectorAll(".bin-card");
 
  bins.forEach(bin=>{
    bin.ondragover = e => e.preventDefault();
 
    bin.ondrop = e => {
      e.preventDefault();
 
      const id = e.dataTransfer.getData("id");
      const type = e.dataTransfer.getData("type");
 
      const el = document.querySelector(`[data-id="${id}"]`);
      const fb = document.getElementById("recycleFeedback");
 
      if(!el) return;
 
      if(type === bin.dataset.type){
        el.remove();
        fb.innerText = "✔ Muito bem!";
 
        if(document.getElementById("itemsArea").children.length === 0){
          setTimeout(finalizarRanking, 600);
        }
      } else {
        score = Math.max(0, score - 5);
        document.getElementById("score").textContent = score;
        fb.innerText = "❌ Lixeira errada! -5 pontos";
      }
    };
  });
}
  document.getElementById('feedbackButton').addEventListener('click', () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSc0Z0Sngt2931_fiKWwQnlU9geqVs8TOHREWIV5ot9NIG4M5w/viewform?usp=publish-editor%27, '_blank');
});
// ===================== FINAL DO JOGO ======================
 
// Classes por pontuação
function classificar(score) {
 
  if (score <= 50) {
    return "🥉 Classe BRONZE — Você está começando!";
  }
 
  if (score <= 120) {
    return "🥈 Classe PRATA — Mandou muito bem!";
  }
 
  if (score <= 200) {
    return "🥇 Classe OURO — Excelente!";
  }
 
  return "🏆 Classe DIAMANTE — Você é sensacional!";
}
 
// Mostra o alerta final
function fimDoJogo() {
  const classe = classificar(score);
 
  alert(
    "🎉 FIM DO JOGO!\n\n" +
    "Pontuação final: " + score + " pontos.\n\n" +
    classe
  );
 
  show("menu");
}
 
// Chamado quando terminar a reciclagem
function finalizarRanking() {
  fimDoJogo();
}
 
Safe Climate - Eco Quiz
 
Safe Climate - Eco Quiz
 
