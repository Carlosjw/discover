# margin

Espaços entre os elementos
- margin-top | margin-right | margin-bottom | margin-left
- values: `<length>` | `<percentage>` | `auto`

```css
div {
    /* shorthand */
    margin: 12px 16px 10px 4px; /* top | right | bottom | left */
    margin: 12px 16px 0; /* top | right e left | bottom */
    margin: 8px 16px; /* top e bottom | right e left */
    margin: 8px; /* Para todas as laterais */
}
```

    * Cuidado com margin collapsing (top se junto ao bottom)

==> Quando um elemento está do lado do outro, eles fazem a soma do margin e não ocorre a junção das margens (margin collapsing)
==> No margin collapsing o css pega o margin com maior valor.