const dialog =[
'当前新罗形势危急，联合国军来势汹汹，这已严重威胁到我国东北的和平。国辉，你是否愿意担起大任，领兵出征，保卫我国边疆？',
'主席，这几个月我之前遗留下来的伤更加严重了，希望能留在后方养精蓄锐，我国将星辈出，必有他人堪当此大任。',
];

let i=0;

const textjump = () =>{
    var text=dialog[i];
    i+=1;
    document.getElementById('dialog').innerText=text;
}

window.addEventListener('click',textjump);