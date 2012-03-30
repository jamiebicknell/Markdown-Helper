# Markdown Helper

A Javascript based Markdown helper which when you hit the return key, it checks to see if the line is a bullet, numbered list or code block and automatically indents and adds the asterisk, number or spaces. If you hit return again on an empty line, it will remove that item and return to regular paragraph text.

**[View the working example](http://jamiebicknell.github.com/Markdown-Helper)**

## Example Usage

    <script type='text/javascript' src='./markdown-helper.js'></script>
    <textarea name='input' onkeypress='return MarkdownHelper(this,event);'></textarea>
   