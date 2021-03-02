var codelist = {
    8: ["BackSpase", "BackSpace"], 9: ["key", "key"], 13: ["Enter", "Enter"], 16: ["Shift", "Shift"], 17: ["control", ""], 18: ["option",""]
    , 20: ["", "caps"], 32: [" ", " "], 45: ["-", "="], 48: ["0", ")"], 49: ["1", "!"], 50: ["2", '@'], 51: ["3", "#"]
    , 52: ["4", "$"], 53: ["5", "%"], 54: ["6", "^"], 55: ["7", "&"], 56: ["8", "*"], 57: ["9", "("], 58: [":", "*"]
    , 59: [";", "+"], 61: [";", "+"], 64: ["@", "`"], 65: ["a", "A"], 66: ["b", "B"], 67: ["c", "C"], 68: ["d", "D"]
    , 69: ["e", "E"], 70: ["f", "F"], 71: ["g", "G"], 72: ["h", "H"], 73: ["i", "I"], 74: ["j", "J"], 75: ["k", "K"]
    , 76: ["l", "L"], 77: ["m", "M"], 78: ["n", "N"], 79: ["o", "O"], 80: ["p", "P"], 81: ["q", "Q"], 82: ["r", "R"]
    , 83: ["s", "S"], 84: ["t", "T"], 85: ["u", "U"], 86: ["v", "V"], 87: ["w", "W"], 88: ["x", "X"], 89: ["y", "Y"]
    , 90: ["z", "Z"], 91: ["command",""], 92: ["\\", "_"], 93: ["command",""], 96: ["0", ""], 97: ["1", ""], 98: ["2", ""], 99: ["3", ""], 100: ["4", ""], 101: ["5", ""]
    , 102: ["6", ""], 103: ["7", ""], 104: ["8", ""], 105: ["9", ""], 107: [";", "+"], 109: ["-", "="], 160: ["^", "~"]
    , 173: ["-", "="], 186: [";", ":"], 187: ["=", "+"], 188: [",", "<"], 189: ["-", "_"], 190: [".", ">"], 191: ["/", "?"]
    , 192: ["@", "`"], 219: ["[", "{"], 220: ["\\", "|"], 221: ["]", "}"], 222: ["^", "~"], 226: ["\\", "_"], 222: ["'", "\""]
    , 240: ["英数", ""], 244: ["半/全", ""]
};

var capslist = {
    8: ["BackSpase", "BackSpace"], 9: ["key", "key"], 13: ["Enter", "Enter"], 16: ["Shift", ""], 17: ["control", ""]
    , 20: ["", "caps"], 32: [" ", " "], 45: ["-", "="], 48: ["0", ""], 49: ["1", "!"], 50: ["2", '"'], 51: ["3", "#"]
    , 52: ["4", "$"], 53: ["5", "%"], 54: ["6", "&"], 55: ["7", "'"], 56: ["8", "("], 57: ["9", ")"], 58: [":", "*"]
    , 59: [";", "+"], 61: [";", "+"], 64: ["@", "`"], 65: ["A", "a"], 66: ["B", "b"], 67: ["C", "c"], 68: ["D", "d"]
    , 69: ["E", "e"], 70: ["F", "f"], 71: ["G", "g"], 72: ["H", "h"], 73: ["I", "i"], 74: ["J", "j"], 75: ["K", "k"]
    , 76: ["L", "l"], 77: ["M", "m"], 78: ["N", "n"], 79: ["O", "o"], 80: ["P", "p"], 81: ["Q", "q"], 82: ["R", "r"]
    , 83: ["S", "s"], 84: ["T", "t"], 85: ["U", "u"], 86: ["V", "v"], 87: ["W", "w"], 88: ["X", "x"], 89: ["Y", "y"]
    , 90: ["Z", "z"], 92: ["\\", "_"], 96: ["0", ""], 97: ["1", ""], 98: ["2", ""], 99: ["3", ""], 100: ["4", ""], 101: ["5", ""]
    , 102: ["6", ""], 103: ["7", ""], 104: ["8", ""], 105: ["9", ""], 107: [";", "+"], 109: ["-", "="], 160: ["^", "~"]
    , 173: ["-", "="], 186: [";", ":"], 187: ["=", "+"], 188: [",", "＜"], 189: ["-", "="], 190: [".", "＞"], 191: ["/", "?"]
    , 192: ["@", "`"], 219: ["[", "{"], 220: ["\\", "_"], 221: ["]", "}"], 222: ["^", "~"], 226: ["\\", "_"], 222: ["'", "~"]
    , 240: ["英数", ""], 244: ["半/全", ""]
};

var leftcode = {
    "!": "", '"': "", "#": "", "$": "", "%": "", "&": "", "Q": "", "W": "", "E": "", "R": "", "T": "", "A": "", "S": ""
    , "D": "", "F": "", "G": "", "Z": "", "X": "", "C": "", "V": "", "B": ""
};

var leftcaps = {
    "!": "", '"': "", "#": "", "$": "", "%": "", "&": "", "q": "", "w": "", "e": "", "r": "", "t": "", "a": "", "s": ""
    , "d": "", "f": "", "g": "", "z": "", "x": "", "c": "", "v": "", "b": ""
};

var eachactive = { "\\": "220", "|": "220", "_": "226", ";": "186", "+": "187", ":": "186", "*": "186" };

var boardHTML = 
    '<div id="keyboard">'
        + '<div class="key-row fs-key">'
            + '<div class="col1 key minifont"><div class="key-view" id="code027">Esc</div></div>'
            + '<div class="col1 key minifont"><div class="key-view" id="code112">F1</div></div>'
            + '<div class="col1 key minifont"><div class="key-view" id="code113">F2</div></div>'
            + '<div class="col1 key minifont"><div class="key-view" id="code114">F3</div></div>'
            + '<div class="col1 key minifont"><div class="key-view" id="code115">F4</div></div>'
            + '<div class="col1 key minifont"><div class="key-view" id="code116">F5</div></div>'
            + '<div class="col1 key minifont"><div class="key-view" id="code117">F6</div></div>'
            + '<div class="col1 key minifont"><div class="key-view" id="code118">F7</div></div>'
            + '<div class="col1 key minifont"><div class="key-view" id="code119">F8</div></div>'
            + '<div class="col1 key minifont"><div class="key-view" id="code120">F9</div></div>'
            + '<div class="col1 key minifont"><div class="key-view" id="code121">F10</div></div>'
            + '<div class="col1 key minifont"><div class="key-view" id="code121">F11</div></div>'
            + '<div class="col1 key minifont"><div class="key-view" id="code122">F12</div></div>'
            + '<div class="col2 key minifont"><div class="key-view power">🍎</div></div>'
        + '</div>'
        + '<div class="key-row">'
            + '<div class="col2 key"><div class="key-view" id="code049">1<span class="subkey">!</span></div></div>'
            + '<div class="col1 key"><div class="key-view" id="code050">2<span class="subkey">@</span></div></div>'
            + '<div class="col1 key"><div class="key-view" id="code051">3<span class="subkey">#</span></div></div>'
            + '<div class="col1 key"><div class="key-view" id="code052">4<span class="subkey">$</span></div></div>'
            + '<div class="col1 key"><div class="key-view" id="code053">5<span class="subkey">%</span></div></div>'
            + '<div class="col1 key"><div class="key-view" id="code054">6<span class="subkey">^</span></div></div>'
            + '<div class="col1 key"><div class="key-view" id="code055">7<span class="subkey">&</span></div></div>'
            + '<div class="col1 key"><div class="key-view" id="code056">8<span class="subkey">*</span></div></div>'
            + '<div class="col1 key"><div class="key-view" id="code057">9<span class="subkey">(</span></div></div>'
            + '<div class="col1 key"><div class="key-view" id="code048">0<span class="subkey">)</span></div></div>'
            + '<div class="col1 key"><div class="key-view" id="code189">-<span class="subkey">_</span></div></div>'
            + '<div class="col1 key"><div class="key-view" id="code187">=<span class="subkey">+</span></div></div>'
            + '<div class="col1 key minifont"><div class="key-view" id="code008">Del</div></div>'
        + '</div>'
        + '<div class="key-row">'
            + '<div class="col1 key minifont"><div class="key-view" id="code009">Tab</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code081">Q</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code087">W</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code069">E</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code082">R</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code084">T</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code089">Y</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code085">U</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code073">I</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code079">O</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code080">P</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code219">[<span class="subkey">{</span></div></div>'
            + '<div class="col1 key"><div class="key-view" id="code221">]<span class="suqubkey">}</span></div></div>'
            + '<div class="col1 key"><div class="key-view" id="code220">\\<span class="suqubkey">|</span></div></div>'
            
        + '</div>'
        + '<div class="key-row">'
            + '<div class="col2 key minifont"><div class="key-view" id="capslock">capsLock</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code065">A</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code083">S</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code068">D</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code070">F</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code071">G</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code072">H</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code074">J</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code075">K</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code076">L</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code186">;<span class="subkey">:</span></div></div>'
            + '<div class="col1 key"><div class="key-view" id="code222">\'<span class="subkey">\"</span></div></div>'
            + '<div class="col3 key"><div class="key-view" id="code013">↩</div></div>'
        + '</div>'
        + '<div class="key-row">'
            + '<div class="col4 key minifont"><div class="key-view" id="code016">Shift</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code090">Z</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code088">X</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code067">C</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code086">V</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code066">B</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code078">N</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code077">M</div></div>'
            + '<div class="col1 key"><div class="key-view" id="code188">,<span class="subkey"><</span></div></div>'
            + '<div class="col1 key"><div class="key-view" id="code190">.<span class="subkey">></span></div></div>'
            + '<div class="col1 key"><div class="key-view" id="code191">/<span class="subkey">?</span></div></div>'
            + '<div class="col4 key minifont"><div class="key-view" id="code016">Shift</div></div>'
        + '</div>'
        + '<div class="key-row">'
            + '<div class="col1 key minifont"><div class="key-view">fn</div></div>'
            + '<div class="col2 key minifont"><div class="key-view" id="code017">control</div></div>'
            + '<div class="col2 key minifont"><div class="key-view" id="code018">option</div></div>'
            + '<div class="col2 key minifont"><div class="key-view" id="code091">command</div></div>'
            + '<div class="col5 key"><div class="key-view" id="code032"></div></div>'
            + '<div class="col2 key minifont"><div class="key-view" id="code093">command</div></div>'
            + '<div class="col2 key minifont"><div class="key-view" id="code018">option</div></div>'
            + '<div class="col1 key minifont"><div class="key-view" id="code037">←</div></div>'
            + '<div class="col1 key minifont">'
                +   '<div class="key-view twin-struct" id="code038">↑</div>'
                +   '<div class="key-view twin-struct" id="code040">↓</div>'
            + '</div>'
            + '<div class="col1 key minifont"><div class="key-view" id="code039">→</div></div>'
        + '</div>'
    + '</div>';






class Typing {
    
    
    // breif : コンストラクタ
    consdivuctor() {
        this.capslock = "";
    }
    //mainのinitから呼び出す用
    getCodeList() {
        return codelist
    }
    // breif : キーボードのhtmlを挿入
    insertKeyboard(id) {
        document.getElementById(id).innerHTML =boardHTML;
    }
    
    // breif : キーコードとシフト押下状態から文字を取得 
    getchar(keycode, shiftcode) {
        var chara;
        if (keycode in codelist) {
            if (shiftcode) {
                chara =codelist[keycode][1];
            } else {
                chara =codelist[keycode][0];
            }
        } else {
            chara = "";
        }
        return chara;
    }
    getcapschar(keycode, shiftcode){
        var chara;

        if(keycode in capslist){
            if(shiftcode){
                   chara = capslist[keycode][1];
            }else{
                   chara = capslist[keycode][0];
            }
        }else{
            chara = "";
        }
        return chara;
    }
     
    // breif : キーボードの色状態を更新 
    active(statement, numOfStatement) {

        var pos = numOfStatement;       // 問題文の位置（何番目）
        var st = statement;             // 問題文
        var stlen = statement.length;   // 問題文の長さ

        var left, list;

        left = leftcode;
        list = codelist;

        if (pos != stlen) {
            
            //codelistを全捜査し，入力されたキーコード(codeXXX)からどの文字種が入力されていたのか判別する
            //全捜査してキーコードを探しあてるのが効率悪い,呼び出し元のフロントでevent.ketCodeを実行して，直接キーコードをもらってきたほうがいい
            for (var i in list) {
                if (list[i][0] == st.charAt(pos)) {//Shiftなし
                    if (st.charAt(pos) in eachactive) {
                        this.setactive("code" + ('00' + eachactive[st.charAt(pos)]).slice(-3));//-3はなに
                    } else {
                        this.setactive("code" + ('00' + i).slice(-3));
                    }

                } else if (list[i][1] == st.charAt(pos)) {//Shiftあり
                    if (st.charAt(pos) == "_") {
                        this.setactive("code226");
                    } else if (st.charAt(pos) == "|") {
                        this.setactive("code220");
                    } else {
                        this.setactive("code" + ('00' + i).slice(-3));
                    }
                    
                    if (list[i][1] in left) {
                        this.setactive("code016");//shift
                    } else {
                        this.setactive("code016");
                    }
                }
            }
        }

        
    }

    activeSarch(code){
        this.setactive(code)
    }

    // breif : 対象のキーを色付けする。 targetClass -> 色付けするクラス
    setactive(targetClass) {
        console.log(targetClass)
        //cssでblueクラスを追加し，色をつける．
        document.getElementById(targetClass).classList.add('blue')
    }

    /*
    // breif : キーの色付けを解除する。
    //document.all はIEを見分けるため？
    resetactive() {
        var allElements;
        var elementname;

        if (document.all) {
            allElements = document.all;
        } else {　} 
        allElements = document.getElementsByTagName("*");
        
        //var elementslen;
        var elementslen = allElements.length
        for (var i = 0; i < elementslen; i++) {
            elementname = allElements[i].className;
            if (elementname.indexOf("keyle", 0) > -1) {
                allElements[i].style.background = "#ffffff";
            }
        }
    }*/

    // breif : キーコードとシフト押下状態から文字を取得 CapsLock ON
    /*getcapschar(keycode, shiftcode){
    var ch;
    
    if(keycode in capslist){
    if(shiftcode){
       ch = capslist[keycode][1];
    }else{
       ch = capslist[keycode][0];
    }
    }else{
    ch = "";
    }
    return ch;
    }

    // breif : CapsLockを判定して取得 
    checkCapsLock(onKeyUpEvent) {
    
    if(onKeyUpEvent.getModifierState("CapsLock") == false) {
    console.log("CapsLock OFF");
    this.capslock = 0;
    }
    else {
    console.log("CapsLock ON");
    this.capslock = 1;
    }
    
    return this.capslock;
    }*/
}