const js = import("./node_modules/@ecpplus/rustwasm-markdown-parser/rustwasm_markdown_parser.js");

document.addEventListener('DOMContentLoaded', async () => {
  await js.then(js => {
    const button = document.querySelector('#js-convert-button')
    button.addEventListener('click', (e) => {
      e.preventDefault()
      const markdown = document.querySelector('#js-markdown-textarea').value
      const htmlString = js.to_html(markdown)
      document.querySelector('#js-rendered-html').innerHTML = htmlString
    })
  })
})

