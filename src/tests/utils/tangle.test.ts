import { tangleWholeWord } from "../../utils/tangle";

describe('Tangle tests', () => {
    test('Single symbol test', () => {
        const str = "М";
        expect(tangleWholeWord(str)).not.toEqual(str);
    });

    test('Single symbol repeated test', () => {
        const str = "ММММММММ";
        expect(tangleWholeWord(str)).not.toEqual(str);
    });

    test('Simple string test', () => { 
        const str = "Москва";
        expect(tangleWholeWord(str)).not.toEqual(str);
    });

    test('Whole russian alphabet test', () => { 
        const str = "абвгдеёжзийклмнопрстуфхцчшщъьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЭЮЯ";
        expect(tangleWholeWord(str)).not.toEqual(str);
    });

});