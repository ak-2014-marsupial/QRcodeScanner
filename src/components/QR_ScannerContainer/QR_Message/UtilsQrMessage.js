import goods from "../../../tovar.json";

const normalizeMess = (str) => {
    const result=str.match(/\d+/g)
    return result?result:"3";

}

const getItemById = (mess) => {
    const codeStr = normalizeMess(mess)[0]
    const index=codeStr[0];
    return goods && {
        name: goods[index[0]].name,
        src: goods[index[0]].src,
        code:codeStr,
    }
}

export {normalizeMess, getItemById};
