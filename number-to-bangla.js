// Written by Tanzim Saqib. Web: http://tanzimsaqib.com
// Repo: https://github.com/tsaqib/number-to-bangla
// Description: A simple JavaScript utility to convert from numbers to words in Bangla.
// Because there was simply no other could be found on the internet, but someone needed it.

var NumToBangla = {
    numtow: {
        '0': 'শুন্য',
        '1': 'এক',
        '2': 'দুই',
        '3': 'তিন',
        '4': 'চার',
        '5': 'পাঁচ',
        '6': 'ছয়',
        '7': 'সাত',
        '8': 'আট',
        '9': 'নয়',
        '10': 'দশ',
        '11': 'এগারো',
        '12': 'বারো',
        '13': 'তেরো',
        '14': 'চৌদ্দ',
        '15': 'পনেরো',
        '16': 'ষোল',
        '17': 'সতেরো',
        '18': 'আঠারো',
        '19': 'ঊনিশ',
        '20': 'বিশ',
        '21': 'একুশ',
        '22': 'বাইশ',
        '23': 'তেইশ',
        '24': 'চব্বিশ',
        '25': 'পঁচিশ',
        '26': 'ছাব্বিশ',
        '27': 'সাতাশ',
        '28': 'আঠাশ',
        '29': 'ঊনত্রিশ',
        '30': 'ত্রিশ',
        '31': 'একত্রিশ',
        '32': 'বত্রিশ',
        '33': 'তেত্রিশ',
        '34': 'চৌত্রিশ',
        '35': 'পঁয়ত্রিশ',
        '36': 'ছত্রিশ',
        '37': 'সাইত্রিশ',
        '38': 'আটত্রিশ',
        '39': 'ঊনচল্লিশ',
        '40': 'চল্লিশ',
        '41': 'একচল্লিশ',
        '42': 'বিয়াল্লিশ',
        '43': 'তেতাল্লিশ',
        '44': 'চুয়াল্লিশ',
        '45': 'পঁয়তাল্লিশ',
        '46': 'ছেচল্লিশ',
        '47': 'সাতচল্লিশ',
        '48': 'আটচল্লিশ',
        '49': 'ঊনপঞ্চাশ',
        '50': 'পঞ্চাশ',
        '51': 'একান্ন',
        '52': 'বায়ান্ন',
        '53': 'তিপ্পান্ন',
        '54': 'চুয়ান্ন',
        '55': 'পঞ্চান্ন',
        '56': 'ছাপ্পান্ন',
        '57': 'সাতান্ন',
        '58': 'আটান্ন',
        '59': 'ঊনষাট',
        '60': 'ষাট',
        '61': 'একষট্টি',
        '62': 'বাষট্টি',
        '63': 'তেষট্টি',
        '64': 'চৌষট্টি',
        '65': 'পঁয়ষট্টি',
        '66': 'ছেষট্টি',
        '67': 'সাতষট্টি',
        '68': 'আটষট্টি',
        '69': 'ঊনসত্তর',
        '70': 'সত্তর',
        '71': 'একাত্তর',
        '72': 'বাহাত্তর',
        '73': 'তিয়াত্তর',
        '74': 'চুয়াত্তর',
        '75': 'পঁচাত্তর',
        '76': 'ছিয়াত্তর',
        '77': 'সাতাত্তর',
        '78': 'আটাত্তর',
        '79': 'ঊনআশি',
        '80': 'আশি',
        '81': 'একাশি',
        '82': 'বিরাশি',
        '83': 'তিরাশি',
        '84': 'চুরাশি',
        '85': 'পঁচাশি',
        '86': 'ছিয়াশি',
        '87': 'সাতাশি',
        '88': 'আটাশি',
        '89': 'ঊননব্বই',
        '90': 'নব্বই',
        '91': 'একানব্বই',
        '92': 'বিরানব্বই',
        '93': 'তিরানব্বই',
        '94': 'চুরানব্বই',
        '95': 'পঁচানব্বই',
        '96': 'ছিয়ানব্বই',
        '97': 'সাতানব্বই',
        '98': 'আটানব্বই',
        '99': 'নিরানব্বই',
        '100': 'একশো',
        '200': 'দুইশো',
        '300': 'তিনশো',
        '400': 'চারশো',
        '500': 'পাঁচশো',
        '600': 'ছয়শো',
        '700': 'সাতশো',
        '800': 'আটশো',
        '900': 'নয়শো'
    },

    places_words: {
        4: 'হাজার',
        6: 'লাখ',
        8: 'কোটি'
    },

    from_places_to_words: function(str_num, start, result) {
        var num_len = str_num.length;
        var word = this.places_words[start];

        if (num_len > start) {
            var tho_places = str_num
                .slice(-(start + 1))
                .substring(0, 2);
            if (parseInt(tho_places) != 0) {
                result = this.numtow[(tho_places[0] == 0) ?
                    tho_places[1] :
                    tho_places] + ' ' + word + ' ' + result;
            }
        } else if (num_len > (start - 1)) {
            var tho_place = str_num
                .slice(-start)
                .substring(0, 1);
            if (parseInt(tho_place) != 0) {
                result = this.numtow[tho_place] + ' ' + word + ' ' + result;
            }
        }

        return result;
    },

    convert: function(num) {
        var result = '';
        var paisa = '';
        str_num = num.toString();
        num_len = str_num.length;

        // Last digit
        if (parseInt(str_num) == 0) {
            // If you truly wanna be a zero, go be a zero and eject
            result = this.numtow[str_num];
        } else { // Non-zero

            // Just 1 digit
            if (num_len == 1) {
                result = this.numtow[str_num[num_len - 1]];
            }

            if (num_len > 1) {
                // Last 2 digits
                var last_two = str_num.slice(-2);

                // What if 2nd last is zero?
                if (parseInt(last_two[0]) == 0 && parseInt(last_two[1]) != 0) {
                    result = this.numtow[last_two[1].toString()];
                } else {
                    if (parseInt(last_two) != 0)
                        result = this.numtow[last_two];
                }

                // Hundredth place
                var hundred_places = str_num.slice(-3);
                if (num_len > 2 && hundred_places[0] != 0) {
                    result = this.numtow[parseInt(hundred_places) - parseInt(str_num.slice(-2))] + ' ' + result;
                }

                // Thousands, millions and more
                for (var i = 4; i < 9; i += 2) {
                    result = this.from_places_to_words(str_num, i, result);
                }
            }
        } // non-zero

        return result.trim();
    }
}

var test_data = [
    [0,         'শুন্য'],
    [8,         'আট'],
    [49,        'ঊনপঞ্চাশ'],
    [400,       'চারশো'],
    [704,       'সাতশো চার'],
    [939,       'নয়শো ঊনচল্লিশ'],
    [3204,      'তিন হাজার দুইশো চার'],
    [20001,     'বিশ হাজার এক'],
    [20308,     'বিশ হাজার তিনশো আট'],
    [50000,     'পঞ্চাশ হাজার'],
    [200007,    'দুই লাখ সাত'],
    [700000,    'সাত লাখ'],
    [2000603,   'বিশ লাখ ছয়শো তিন'],
    [5000000,   'পঞ্চাশ লাখ'],
    [1923908,   'ঊনিশ লাখ তেইশ হাজার নয়শো আট'],
    [83641705,  'আট কোটি ছত্রিশ লাখ একচল্লিশ হাজার সাতশো পাঁচ'],
    [80000000,  'আট কোটি'],
    [80000002,  'আট কোটি দুই'],
    [500000000, 'পঞ্চাশ কোটি'],
    [501619500, 'পঞ্চাশ কোটি ষোল লাখ ঊনিশ হাজার পাঁচশো'],
    [900000000, 'নব্বই কোটি'],
    [987654321, 'আটানব্বই কোটি ছিয়াত্তর লাখ চুয়ান্ন হাজার তিনশো একুশ'],
    [990000000, 'নিরানব্বই কোটি'],
    [990000001, 'নিরানব্বই কোটি এক'],
    [999999999, 'নিরানব্বই কোটি নিরানব্বই লাখ নিরানব্বই হাজার নয়শো নিরানব্বই']
];

QUnit.test("All tests from 0-99 crore", function (assert) {
    for (var i = 0; i < test_data.length; ++i) {
        assert.equal(NumToBangla.convert(test_data[i][0]), test_data[i][1], 
            test_data[i][0] + ' => ' + test_data[i][1]);
    }
});
