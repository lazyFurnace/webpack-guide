import {Text0} from './text-0.js';
import {Text1} from './text-1.js';
import {Text2} from './text-2.js';

const textFun = (...arg) => {
    document.write(arg.join(" "));
}
textFun(Text0,Text1,Text2);