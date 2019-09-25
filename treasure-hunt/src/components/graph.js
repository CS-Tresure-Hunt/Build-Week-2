let map = {
  "0": { n: 10, s: 2, e: 4, w: 1 },
  "1": { e: 0 }, // shop, dead end
  "2": { n: 0, s: 6, e: 3 },
  "3": { s: 9, e: 5, w: 2 }, //mountain
  "4": { n: 23, e: 13, w: 0 },
  "5": { w: 3 }, //dead end
  "6": { n: 2, w: 7 },
  "7": { n: 8, e: 6, w: 56 },
  "8": { s: 7, w: 16 },
  "9": { n: 3, s: 12, e: 11 }, //mountain
  "10": { n: 19, s: 0, w: 43 },
  "11": { e: 17, w: 9 }, //mountain
  "12": { n: 9, s: 18, e: 14, w: 21 }, //mountain
  "13": { e: 15, w: 4 },
  "14": { s: 34, e: 37, w: 12 }, //mountain
  "15": { w: 13 }, //dead end
  "16": { n: 58, e: 8, w: 67 },
  "17": { n: 24, e: 42, w: 11 },
  "18": { n: 12, s: 22, w: 25 }, //mountain
  "19": { n: 20, s: 10, w: 77 },
  "20": { n: 63, s: 19, e: 27, w: 46 },
  "21": { e: 12, w: 21 }, //mountain
  "22": { n: 18, s: 78, w: 36 }, // mountain
  "23": { s: 4, e: 26 },
  "24": { s: 17 }, //dead end
  "25": { e: 18 }, //mountain - dead end
  "26": { e: 55, w: 23 },
  "27": { n: null, s: null, e: null, w: 20 },
  "28": {},
  "29": { s: 45, e: 49, w: 21 },
  "30": {},
  "31": {},
  "32": {},
  "33": {},
  "34": { n: 14, s: 50, e: 35 }, //mountain
  "35": { s: 52, w: 34 },
  "36": { s: 48, e: 22, w: 60 },
  "37": { w: 14 }, // mountain - dead end
  "38": {},
  "39": {},
  "40": {},
  "41": {},
  "42": { n: 44, s: 80, e: 118, w: 17 },
  "43": { e: 10, w: 47 },
  "44": { s: 42 }, //dead end
  "45": { n: 29, s: 60 }, //mountain
  "46": { e: 20, w: 62 },
  "47": { n: 71, e: 43 },
  "48": { n: 36, s: 105, w: 149 }, //mountain
  "49": { s: null, e: null, w: 29 },
  "50": { n: 34, s: 89 },
  "51": {},
  "52": { n: 35, s: 68, e: null },
  "53": {},
  "54": {},
  "55": { w: 26 }, //dead end
  "56": { e: 7, w: 61 },
  "57": {},
  "58": { s: 16, w: 65 },
  "59": {},
  "60": { n: 45, e: 36, w: 70 }, // mountain
  "61": { e: 56, w: 171 },
  "62": { n: null, e: 46, w: 84 },
  "63": { n: 72, s: 20, w: 73 },
  "64": {},
  "65": { n: 74, e: 58, w: 139 },
  "66": {},
  "67": { e: 16, w: 162 },
  "68": { n: 52, e: 100 },
  "69": {},
  "70": { s: null, e: 60, w: 98 },
  "71": { s: 47 }, //dead end
  "72": { s: 63, w: 76 },
  "73": { e: 63 },
  "74": { n: 87, s: 65, w: 161 },
  "75": {},
  "76": { n: 83, e: 72, w: 110 },
  "77": { e: 19 },
  "78": { n: 22, s: 108 },
  "79": {},
  "80": { n: 42, s: 81, e: 86 },
  "81": { n: 80 }, //dead end
  "82": {},
  "83": { s: 76, e: 130, w: 125 },
  "84": { e: 62, w: 91 },
  "85": {},
  "86": { s: 96, e: 90, w: 80 },
  "87": { s: 74 }, //dead end
  "88": {},
  "89": { n: 50, s: 93 }, //mountain
  "90": { e: 178, w: 86 },
  "91": { n: null, s: null, e: 84, w: 99 },
  "92": {},
  "93": { n: 89, w: 108 }, //mountain
  "94": {},
  "95": {},
  "96": { n: 86, e: 97 },
  "97": { e: 181, w: 96 },
  "98": { n: null, s: 126, e: 70, w: 109 },
  "99": { n: null, e: 91, w: 146 },
  "100": { s: 106, e: null, w: 68 },
  "101": {},
  "102": {},
  "103": {},
  "104": {},
  "105": { n: 48, w: 202 },
  "106": { n: 100, s: 111, w: 135 },
  "107": {},
  "108": { n: 78, s: null, e: 93 },
  "109": { s: 185, e: 98, w: 175 },
  "110": { e: 76 },
  "111": { n: 106, s: 367, e: 158 },
  "112": {},
  "113": {},
  "114": {},
  "115": {},
  "116": {},
  "117": { n: null, s: null, e: 166, w: 133 },
  "118": { e: 137, w: 42 },
  "119": {},
  "120": {},
  "121": {},
  "122": {},
  "123": {},
  "124": {},
  "125": { n: 165, e: 83, w: 237 },
  "126": { n: 98, s: 129 },
  "127": {},
  "128": {},
  "129": { n: 126, e: 194, w: null },
  "130": { w: 83 },
  "131": {},
  "132": {},
  "133": { e: 117, w: 173 },
  "134": {},
  "135": { s: 150, e: 106 },
  "136": {},
  "137": { w: 118 }, //dead end
  "138": {},
  "139": { e: 65, w: 188 },
  "140": {},
  "141": {},
  "142": {},
  "143": {},
  "144": {},
  "145": {},
  "146": { n: null, s: null, e: 99, w: 257 },
  "147": {},
  "148": {},
  "149": { e: 48 }, // mountain - dead end
  "150": { n: 135, w: 166 },
  "151": {},
  "152": {},
  "153": {},
  "154": {},
  "155": {},
  "156": {},
  "157": {},
  "158": { s: 167, w: 111 },
  "159": {},
  "160": {},
  "161": { e: 74 }, //dead end
  "162": { e: 67 }, //dead end
  "163": {},
  "164": {},
  "165": { n: 203, s: 125, w: 204 },
  "166": { s: null, e: 150, w: 117 },
  "167": { n: 158, s: 262, e: 260 },
  "168": {},
  "169": {},
  "170": {},
  "171": { e: 61 }, //dead end
  "172": {},
  "173": { e: 133, w: 214 },
  "174": {},
  "175": { s: 183, e: 109, w: 179 },
  "176": {},
  "177": {},
  "178": { n: 209, e: 243, w: 90 },
  "179": { s: 233, e: 175, w: 213 },
  "180": {},
  "181": { w: 97 }, //dead end
  "182": {},
  "183": { n: 175, s: 229 },
  "184": {},
  "185": { n: 109 }, //dead end
  "186": {},
  "187": {},
  "188": { e: 139, w: 335 },
  "189": {},
  "190": {},
  "191": {},
  "192": {},
  "193": {},
  "194": { s: 214, w: 129 },
  "195": {},
  "196": {},
  "197": {},
  "198": {},
  "199": {},
  "200": {},
  "201": {},
  "202": { e: 105 }, //dead end
  "203": { n: 268, s: 165, e: 299 },
  "204": { n: 219, e: 165, w: 216 },
  "205": {},
  "206": {},
  "207": {},
  "208": {},
  "209": { s: 178 }, //dead end
  "210": {},
  "211": {},
  "212": {},
  "213": { e: 179, w: 420 },
  "214": { n: 194, e: 173, w: null },
  "215": {},
  "216": { n: 234, e: 204, w: 218 },
  "217": {},
  "218": { s: 263, e: 216, w: 242 },
  "219": { s: 204 },
  "220": {},
  "221": {},
  "222": {},
  "223": {},
  "224": {},
  "225": {},
  "226": {},
  "227": {},
  "228": {},
  "229": { n: 183, s: 250, w: 236 },
  "230": {},
  "231": {},
  "232": {},
  "233": { n: 179, w: 238 },
  "234": { n: 368, s: 216, w: 252 },
  "235": {},
  "236": { s: 264, e: 229 },
  "237": { e: 125, w: 245 },
  "238": { e: 233 }, //dead end
  "239": {},
  "240": {},
  "241": {},
  "242": { n: 287, s: 259, e: 218, w: 275 },
  "243": { s: 293, e: 256, w: 178 },
  "244": {},
  "245": { s: 254, e: 237 },
  "246": {},
  "247": {},
  "248": {},
  "249": {},
  "250": { n: 229, s: 294, e: 289 },
  "251": {},
  "252": { n: 284, e: 234 },
  "253": {},
  "254": { n: 245, w: 314 },
  "255": {},
  "256": { s: 360, e: 327, w: 243 },
  "257": { n: null, e: 146, w: null },
  "258": {},
  "259": { n: 242, w: 310 },
  "260": { w: 167 }, //dead end
  "261": {},
  "262": { n: 167, s: 370, e: 358 },
  "263": { n: 218 },
  "264": { n: 236, s: 274, w: 273 },
  "265": {},
  "266": {},
  "267": {},
  "268": { s: 203, e: 411, w: 312 },
  "269": {},
  "270": {},
  "271": {},
  "272": {},
  "273": { n: 343, e: 264 },
  "274": { n: 264, w: 308 },
  "275": { e: 242, w: 456 },
  "276": {},
  "277": {},
  "278": {},
  "279": {},
  "280": {},
  "281": {},
  "282": {},
  "283": {},
  "284": { n: 302, s: 252, w: 303 },
  "285": {},
  "286": {},
  "287": { s: 242, w: 339 },
  "288": {},
  "289": { w: 250 }, //dead end
  "290": {},
  "291": {},
  "292": {},
  "293": { n: 243 }, //dead end
  "294": { n: 250, s: 334 },
  "295": {},
  "296": {},
  "297": {},
  "298": {},
  "299": { e: 311, w: 203 },
  "300": {},
  "301": {},
  "302": { n: 422, s: 284 },
  "303": { n: 361, e: 284, w: 405 },
  "304": {},
  "305": {},
  "306": {},
  "307": {},
  "308": { e: 274 }, //dead end
  "309": {},
  "310": { e: 259, w: 412 },
  "311": { w: 299 },
  "312": { e: 268, n: 328 },
  "313": {},
  "314": { e: 254 }, //dead end
  "315": {},
  "316": {},
  "317": {},
  "318": {},
  "319": {},
  "320": {},
  "321": {},
  "322": {},
  "323": {},
  "324": {},
  "325": {},
  "326": {},
  "327": { e: 427, w: 256 },
  "328": { n: 332, s: 312, e: 357, w: 363 },
  "329": {},
  "330": {},
  "331": {},
  "332": { n: 350, s: 328 },
  "333": {},
  "334": { n: 294, s: 393, e: 341, w: 391 },
  "335": { e: 188, w: 366 },
  "336": {},
  "337": {},
  "338": {},
  "339": { e: 287, w: 445 },
  "340": {},
  "341": { s: 449, w: 334 },
  "342": {},
  "343": { s: 273, w: 351 },
  "344": {},
  "345": {},
  "346": {},
  "347": {},
  "348": {},
  "349": {},
  "350": { n: 436, s: 332, e: 404 },
  "351": { s: 491, e: 343, w: 478 },
  "352": {},
  "353": {},
  "354": {},
  "355": {},
  "356": {},
  "357": { w: 328 },
  "358": { e: 401, w: 262 },
  "359": {},
  "360": { n: 256, e: 398 },
  "361": { n: 408, s: 303 },
  "362": {},
  "363": { n: 372, e: 328 },
  "364": {},
  "365": {},
  "366": { e: 335 }, //dead end
  "367": { n: 111 }, //dead end
  "368": { s: 234 },
  "369": {},
  "370": { n: 262, s: 434, e: 407 },
  "371": {},
  "372": { n: 441, s: 363 },
  "373": {},
  "374": {},
  "375": {},
  "376": {},
  "377": {},
  "378": {},
  "379": {},
  "380": {},
  "381": {},
  "382": {},
  "383": {},
  "384": {},
  "385": {},
  "386": {},
  "387": {},
  "388": {},
  "389": {},
  "390": {},
  "391": { s: 396, e: 334, w: 428 },
  "392": {},
  "393": { n: 334, s: 482 },
  "394": {},
  "395": {},
  "396": { n: 391 }, //dead end
  "397": {},
  "398": { e: 438, w: 360 },
  "399": {},
  "400": {},
  "401": { w: 358 }, //dead end
  "402": {},
  "403": {},
  "404": { n: 481, w: 350 },
  "405": { n: 406, e: 303 },
  "406": { s: 405, w: 415 },
  "407": { s: 496, w: 370 },
  "408": { n: 458, s: 361, w: 423 },
  "409": {},
  "410": {},
  "411": { w: 268 },
  "412": { s: 488, e: 310 },
  "413": {},
  "414": {},
  "415": { e: 406, w: 418 },
  "416": {},
  "417": {},
  "418": { n: 425, s: 474, e: 415 },
  "419": {},
  "420": { s: 444, e: 213, w: 437 },
  "421": {},
  "422": { n: 426, s: 302 },
  "423": { e: 408, w: 454 },
  "424": {},
  "425": { s: 418, w: 469 },
  "426": { n: 457, s: 422 },
  "427": { e: 430, w: 327 },
  "428": { e: 391 }, //dead end
  "429": {},
  "430": { n: 443, e: 439, w: 427 },
  "431": {},
  "432": {},
  "433": {},
  "434": { n: 370 }, //dead end
  "435": {},
  "436": { s: 350 },
  "437": { e: 420, w: 497 },
  "438": { e: 465, w: 398 },
  "439": { w: 430 }, //dead end
  "440": {},
  "441": { s: 372 },
  "442": {},
  "443": { s: 430, e: 471 },
  "444": { n: 420, w: 490 },
  "445": { n: 447, e: 339, w: 450 },
  "446": {},
  "447": { s: 445 },
  "448": {},
  "449": { n: 341 }, //dead end
  "450": { e: 445 },
  "451": {},
  "452": {},
  "453": {},
  "454": { n: 470, e: 423 },
  "455": {},
  "456": { e: 275, w: 499 },
  "457": { n: 461, s: 426 },
  "458": { s: 408, w: 459 },
  "459": { e: 458 },
  "460": {},
  "461": { s: 457 },
  "462": {},
  "463": {},
  "464": {},
  "465": { e: 498, w: 438 },
  "466": {},
  "467": {},
  "468": {},
  "469": { e: 425 },
  "470": { s: 454 },
  "471": { w: 443 }, // dead end
  "472": {},
  "473": {},
  "474": { n: 418 },
  "475": {},
  "476": {},
  "477": {},
  "478": { e: 351 }, //dead end
  "479": {},
  "480": {},
  "481": { s: 404 },
  "482": { n: 393 }, //dead end
  "483": {},
  "484": {},
  "485": {},
  "486": {},
  "487": {},
  "488": { n: 412 },
  "489": {},
  "490": { e: 444, w: 493 },
  "491": { n: 351 }, //dead end
  "492": {},
  "493": { e: 490 }, //dead end
  "494": {},
  "495": {},
  "496": { n: 407 }, //dead end
  "497": { e: 437 }, //dead end
  "498": { w: 465 }, //dead end
  "499": { e: 456 } //dead end
};
