# Markdown Helper

A JavaScript based Markdown helper which when you hit the return key, it checks to see if the line is a bullet, numbered list, code block or blockquote and automatically indents and adds the Markdown syntax. If you hit return again on an empty line, it will remove that item and return to regular paragraph text.

**[View the working example](http://jamiebicknell.github.io/Markdown-Helper)**

## Example Usage

```html
<script type='text/javascript' src='./markdown-helper.js'></script>
<textarea name='input' onkeypress='return MarkdownHelper(this,event);'></textarea>
```

## License

Markdown Helper is licensed under the [MIT license](http://opensource.org/licenses/MIT), see [LICENSE.md](https://github.com/jamiebicknell/Markdown-Helper/blob/master/LICENSE.md) for details.