/*
Title: Markdown Helper
URL: http://github.com/jamiebicknell/Markdown-Helper
*/

function MarkdownHelper(block,event) {
    if(event.keyCode=='13') {
        check = false;
        input = block.value.replace(/\r\n/g,'\n');
        if(block.selectionStart) {
            start = block.selectionStart;
        }
        else {
            block.focus();
            range = document.selection.createRange();
            range.moveStart('character',-input.length);
            start = range.text.replace(/\r\n/g,'\n').length;
        }
        lines = input.split('\n');
        state = input.substr(0,start).split('\n').length;
        value = lines[state-1].replace(/^\s+/,'');
        if(new RegExp('^[0-9]+. (.*)$').test(value)) {
            prior = value.substr(0,value.indexOf('. '));
            begin = prior + '. ';
            label = String(eval(prior)+1) + '. ';
            check = true;
        }
        if(value&&value.substr(0,2)=='* ') {
            begin = label = '* ';
            check = true;
        }
        if(value&&!check&&lines[state-1].substr(0,4)=='    ') {
            begin = label = '    ';
            check = true;
        }
        if(check) {
            width = lines[state-1].indexOf(begin);
            if(value.replace(/^\s+/,'')==begin) {
                block.value = input.substr(0,start-1-width-label.length) + '\n\n' + input.substr(start,input.length);
                caret = start+1-label.length-width;
            }
            else {
                block.value = input.substr(0,start) + '\n' + (new Array(width+1).join(' ')) + label + input.substr(start,input.length);
                caret = start+1+label.length+width;
            }
            if(block.selectionStart) {
                block.setSelectionRange(caret,caret);
            }
            else {
                var range = block.createTextRange();
                range.move('character',caret);
                range.select();
            }
            return false;
        }
    }
}