# Distâncias absolutas <length>

São fixas e não alteram seu valor.

Unidade     Nome                    Equivalência
cm          Centímetros             1cm = 96px/2.54
in          Inches (polegadas)      1in = 2.54cm = 96px
px          Pixels                  1px = 1/96th of 1in

* o mais comum e mais utilizado é o **px**
* não recomendado usar cm
  
# Distâncias relativas

São relativas a algum outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.

* Benefício: Maior adaptação aos diferentes tipos de tela

Unidade         Relativo a...
em              Tamanho da font do pai.
Ex:
```html
<div>
    <p>Parágrafo</p>
</div>
```
```css
div {
    font-size: 18px;
}
p {
    font-size: 2em; /* 2 x 18px da fonte do pai, nesse caso, a div. Caso não haja um elemento pai ele vai buscar do elemento root, que é o prórpio arquivo html, no caso, com valor padrão de 16px, fazendo assim os cálculos necessários.  */
}

```
rem             Tamanho da font do elemento raiz (root/html).
Ex:
```html
<div>
    <p>Parágrafo</p>
</div>
```
```css

/* Alterando elemento root */

/* Forma 01: */
:root {
    font-size: 14px;
}

/* Forma 02 */
html {
    font-size: 12px;
}

div {
    font-size: 18px;
}
p {
    font-size: 2rem; /* pega direto do elemento root/html => 2 * 16px*/
}

```
vw              1% da viewport width (largura).
vh              1% da viewport height (altura).