function write(id, text) {
    document.getElementById(id).textContent = text;
  }
  
  // 1) Variáveis
  document.getElementById('btn1').addEventListener('click', () => {
    let a, b = null, c = "", d = 42;
    let out = [
      `a (undefined): ${a}`,
      `b (null):      ${b}`,
      `c (empty):     "${c}"`,
      `d (valor):     ${d}`
    ].join('\n');
    console.log(out);      
    write('out1', out);
  });
  
  // 2) Operadores
  document.getElementById('btn2').addEventListener('click', () => {
    let precoA = 120, precoB = 100;
    let out = [
      `A != B → ${precoA != precoB}`,
      `A == B → ${precoA == precoB}`,
      `A >= B → ${precoA >= precoB}`
    ].join('\n');
    console.log(out);      
    write('out2', out);
  });
  
  // 3) IMC
  document.getElementById('btn3').addEventListener('click', () => {
    let peso = 70, altura = 1.75;
    let imc = peso / altura**2, msg;
    switch (true) {
      case imc < 18.5:  msg = 'Abaixo do peso'; break;
      case imc <= 24.9: msg = 'Peso ideal';    break;
      default:          msg = 'Acima do peso';
    }
    let out = `IMC: ${imc.toFixed(2)} → ${msg}`;
    console.log(out);      
    write('out3', out);
  });
  
  // 4) Loop 1–50
  document.getElementById('btn4').addEventListener('click', () => {
    let arr = [];
    for (let i = 1; i <= 50; i++) arr.push(`O valor é: ${i}`);
    let out = arr.join('\n');
    console.log(out);      
    write('out4', out);
  });
  
  // 5) Login
  document.getElementById('btn5').addEventListener('click', () => {
    const u = 'admin', p = '1234';
    let res = (u === 'admin' && p === '1234')
      ? 'Login realizado com sucesso!'
      : 'Falha de autenticação!';
    console.log(res);      
    write('out5', res);
  });
  
  // 6) Média de 7 notas
  document.getElementById('btn6').addEventListener('click', () => {
    let notas = [7,5,9,6,8,4,10];
    let soma = notas.reduce((x,y) => x + y, 0);
    let m = soma / notas.length;
    let out = `Média: ${m.toFixed(2)} → ${m >= 6 ? 'Aprovado' : 'Reprovado'}`;
    console.log(out);      
    write('out6', out);
  });

  // 7) Dados pessoais
  document.getElementById('btn7').addEventListener('click', () => {
    let nome = 'Vinicius Belotti', idade = 19;
    let curso = 'Engenharia de Software', ano = 2025;
    let out = Nome: ${nome}\nIdade: ${idade}\nCurso: ${curso}\nAno: ${ano};
    console.log(out);      
    write('out7', out);
  });

  // 8) Busca de strings
  document.getElementById('btn8').addEventListener('click', () => {
    let txt = 'Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.';
    let out = [
      `primeiro “em”:     ${txt.indexOf('em')}`,
      `último “ia”:       ${txt.lastIndexOf('ia')}`,
      `posição “ciência”: ${txt.indexOf('ciência')}`,
      `posição “métodos”: ${txt.indexOf('métodos')}`
    ].join('\n');
    console.log(out);
    write('out8', out);
  });
  
    // 9) String → float
    document.getElementById('btn9').addEventListener('click', () => {
      let s = '123.45', f = parseFloat(s);
      let out = antes: ${typeof s}\ndepois: ${typeof f};
      console.log(out);
      write('out9', out);
    });