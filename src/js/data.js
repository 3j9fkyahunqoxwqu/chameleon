// useragent list
let uaList = {
	"windows": [{
		"ua": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",
		"name": "Chrome 70 (Win 7)",
		"value": "win1"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",
		"name": "Chrome 70 (Win 8)",
		"value": "win2"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",
		"name": "Chrome 70 (Win 8.1)",
		"value": "win3"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",
		"name": "Chrome 70 (Win 10)",
		"value": "win4"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.17763",
		"name": "Edge 18 (Win 10)",
		"value": "win5"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:63.0) Gecko/20100101 Firefox/63.0",
		"name": "Firefox 63 (Win 7)",
		"value": "win6"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:63.0) Gecko/20100101 Firefox/63.0",
		"name": "Firefox 63 (Win 8)",
		"value": "win7"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:63.0) Gecko/20100101 Firefox/63.0",
		"name": "Firefox 63 (Win 8.1)",
		"value": "win8"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:63.0) Gecko/20100101 Firefox/63.0",
		"name": "Firefox 63 (Win 10)",
		"value": "win9"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 6.1; rv:60.0) Gecko/20100101 Firefox/60.0",
		"name": "Firefox 60 ESR (Win 7)",
		"value": "win13"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 6.3; rv:60.0) Gecko/20100101 Firefox/60.0",
		"name": "Firefox 60 ESR (Win 8.1)",
		"value": "win14"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 10.0; rv:60.0) Gecko/20100101 Firefox/60.0",
		"name": "Firefox 60 ESR (Win 10)",
		"value": "win15"
	}, {
		"ua": "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)",
		"name": "Internet Explorer 10 (Win 8)",
		"value": "win10"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko",
		"name": "Internet Explorer 11 (Win 7)",
		"value": "win11"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko",
		"name": "Internet Explorer 11 (Win 8.1)",
		"value": "win12"
	}],
	"macos": [{
		"ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",
		"name": "Chrome 70 (macOS 10.12)",
		"value": "mac1"
	}, {
		"ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",
		"name": "Chrome 70 (macOS 10.13)",
		"value": "mac2"
	}, {
		"ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:63.0) Gecko/20100101 Firefox/63.0",
		"name": "Firefox 63 (macOS 10.12)",
		"value": "mac3"
	}, {
		"ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:63.0) Gecko/20100101 Firefox/63.0",
		"name": "Firefox 63 (macOS 10.13)",
		"value": "mac4"
	}, {
		"ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:60.0) Gecko/20100101 Firefox/60.0",
		"name": "Firefox 60 ESR (macOS 10.12)",
		"value": "mac8"
	}, {
		"ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.1.2 Safari/603.3.8",
		"name": "Safari 10.1.2 (macOS 10.12)",
		"value": "mac5"
	}, {
		"ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15",
		"name": "Safari 11.1.2 (macOS 10.12)",
		"value": "mac6"
	}, {
		"ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15",
		"name": "Safari 11.1.2 (macOS 10.13)",
		"value": "mac7"
	}],
	"linux": [{
		"ua": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",
		"name": "Chrome 70 (Linux 64)",
		"value": "linux1"
	}, {
		"ua": "Mozilla/5.0 (X11; Fedora; x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",
		"name": "Chrome 70 (Fedora 64)",
		"value": "linux2"
	}, {
		"ua": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chrome/70.0.3538.77 Safari/537.36",
		"name": "Chrome 70 (Ubuntu 64)",
		"value": "linux3"
	}, {
		"ua": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/70.0.3538.77 Chrome/70.0.3538.77 Safari/537.36",
		"name": "Chromium 70 (Linux 64)",
		"value": "linux4"
	}, {
		"ua": "Mozilla/5.0 (X11; Fedora; x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chromium/70.0.3538.77 Chrome/70.0.3538.77 Safari/537.36",
		"name": "Chromium 70 (Fedora 64)",
		"value": "linux5"
	}, {
		"ua": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/70.0.3538.77 Chrome/70.0.3538.77 Safari/537.36",
		"name": "Chromium 70 (Ubuntu 64)",
		"value": "linux6"
	}, {
		"ua": "Mozilla/5.0 (X11; Linux x86_64; rv 63.0) Gecko/20100101 Firefox 63.0",
		"name": "Firefox 63 (Linux 64)",
		"value": "linux7"
	}, {
		"ua": "Mozilla/5.0 (X11; Fedora; Linux x86_64; rv 63.0) Gecko/20100101 Firefox 63.0",
		"name": "Firefox 63 (Fedora 64)",
		"value": "linux8"
	}, {
		"ua": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv 63.0) Gecko/20100101 Firefox 63.0",
		"name": "Firefox 63 (Ubuntu 64)",
		"value": "linux9"
	}, {
		"ua": "Mozilla/5.0 (X11; Linux x86_64; rv 60.0) Gecko/20100101 Firefox 60.0",
		"name": "Firefox 60 ESR (Linux 64)",
		"value": "linux10"
	}, {
		"ua": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv 60.0) Gecko/20100101 Firefox 60.0",
		"name": "Firefox 60 ESR (Ubuntu 64)",
		"value": "linux11"
	}],
	"ios": [{
		"ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
		"name": "iOS 9.1 - iPhone - Safari 9",
		"value": "ios1"
	}, {
		"ua": "Mozilla/5.0 (iPad; CPU OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13F69 Safari/601.1",
		"name": "iOS 9.3.2 - iPad - Safari 9",
		"value": "ios2"
	}, {
		"ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/51.0.2704.104 Mobile/13F69 Safari/601.1.46",
		"name": "iOS 9.3.2 - iPhone - Chrome 51",
		"value": "ios3"
	}, {
		"ua": "Mozilla/5.0 (iPad; CPU OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Version/10.0 Mobile/14C92 Safari/602.1",
		"name": "iOS 10.2 - iPad - Safari 10",
		"value": "ios4",
	}, {
		"ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/70.0.3538.75 Mobile/14D27 Safari/602.1",
		"name": "iOS 10.2.1 - iPhone - Chrome 70",
		"value": "ios5"
	}, {
		"ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
		"name": "iOS 10.3.1 - iPhone - Safari 10",
		"value": "ios6"
	}, {
		"ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_5 like Mac OS X) AppleWebKit/604.5.6 (KHTML, like Gecko) Version/12.0 Mobile/15D60 Safari/604.1",
		"name": "iOS 11.2.5 - iPhone - Safari 12",
		"value": "ios7"
	}, {
		"ua": "Mozilla/5.0 (iPad; CPU OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
		"name": "iOS 11.3 - iPad - Safari 12",
		"value": "ios8"
	}, {
		"ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) CriOS/70.0.3538.75 Mobile/16A5288q Safari/604.1",
		"name": "iOS 12 - iPhone - Chrome 70",
		"value": "ios9"
	}],
	"android": [{
		"ua": "Mozilla/5.0 (Android; Mobile; rv:63.0) Gecko/63.0 Firefox/63.0",
		"name": "Android - Firefox 63",
		"value": "android1"
	}, {
		"ua": "Mozilla/5.0 (Linux; Android 4.4.2; SM-G800Y Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.64 Mobile Safari/537.36",
		"name": "Android 4.4.2 - Chrome 70",
		"value": "android2"
	}, {
		"ua": "Mozilla/5.0 (Linux; U; Android 4.4.4; Nexus 5 Build/KTU84P) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
		"name": "Android 4.4.4 - Android Browser",
		"value": "android3"
	}, {
		"ua": "Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG-SM-G530AZ Build/LMY48B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.64 Mobile Safari/537.36",
		"name": "Android 5.1.1 - Chrome 70",
		"value": "android4"
	}, {
		"ua": "Mozilla/5.0 (Linux; Android 6.0.1; N9136 Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.64 Mobile Safari/537.36",
		"name": "Android 6.0.1 - Chrome 70",
		"value": "android5"
	}, {
		"ua": "Mozilla/5.0 (Linux; U; Android 6.0.1; en-US; SM-J700F Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/40.0.2214.89 UCBrowser/11.5.1.944 Mobile Safari/537.36",
		"name": "Android 6.0.1 - UC Browser 11.5",
		"value": "android6"
	}, {
		"ua": "Mozilla/5.0 (Linux; Android 7.0; SM-G935F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.64 Mobile Safari/537.36",
		"name": "Android 7.0 - Chrome 70",
		"value": "android7"
	}, {
		"ua": "Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-N920C Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/7.4 Chrome/59.0.3071.125 Mobile Safari/537.36",
		"name": "Android 7.0 - Samsung Browser 7.4",
		"value": "android8"
	}]
}

let languages = [
	{ display: "Acholi", value: "ach,en-GB;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Afrikaans", value: "af,en-ZA;q=0.8,en-GB;q=0.6,en-US;q=0.4,en;q=0.2" },
	{ display: "Albanian", value: "sq,sq-AL;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Arabic", value: "ar,en-US;q=0.7,en;q=0.3" },
	{ display: "Aragonese", value: "an,es-ES;q=0.8,es;q=0.7,ca;q=0.5,en-US;q=0.3,en;q=0.2" },
	{ display: "Armenian", value: "hy-AM,hy;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Assamese", value: "as,en-US;q=0.7,en;q=0.3" },
	{ display: "Asturian", value: "ast,es-ES;q=0.8,es;q=0.6,en-US;q=0.4,en;q=0.2" },
	{ display: "Azerbaijani", value: "az-AZ,az;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Basque", value: "eu,en-US;q=0.7,en;q=0.3" },
	{ display: "Belarusian", value: "be,en-US;q=0.7,en;q=0.3" },
	{ display: "Bengali (Bangladesh)", value: "bn-BD,bn;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Bengali (India)", value: "bn-IN,bn;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Bosnian", value: "bs-BA,bs;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Breton", value: "br,fr-FR;q=0.8,fr;q=0.6,en-US;q=0.4,en;q=0.2" },
	{ display: "Bulgarian", value: "bg,en-US;q=0.7,en;q=0.3" },
	{ display: "Burmese", value: "my,en-GB;q=0.7,en;q=0.3" },
	{ display: "Catalan", value: "ca,en-US;q=0.7,en;q=0.3" },
	{ display: "Chinese (Simplified)", value: "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2" },
	{ display: "Chinese (Traditional)", value: "zh-TW,zh;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Croatian", value: "hr-HR,hr;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Czech", value: "cs,sk;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Danish", value: "da,en-US;q=0.7,en;q=0.3" },
	{ display: "Dutch", value: "nl,en-US;q=0.7,en;q=0.3" },
	{ display: "English (British)", value: "en-GB,en;q=0.5" },
	{ display: "English (Canadian)", value: "en-CA,en-US;q=0.7,en;q=0.3" },
	{ display: "English (South African)", value: "en-ZA,en-GB;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "English (US)", value: "en-US,en;q=0.5" },
	{ display: "Esperanto", value: "eo,en-US;q=0.7,en;q=0.3" },
	{ display: "Estonian", value: "et,et-EE;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Finnish", value: "fi-FI,fi;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "French", value: "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Frisian", value: "fy-NL,fy;q=0.8,nl;q=0.6,en-US;q=0.4,en;q=0.2" },
	{ display: "Fulah", value: "ff,fr-FR;q=0.8,fr;q=0.7,en-GB;q=0.5,en-US;q=0.3,en;q=0.2" },
	{ display: "Gaelic (Scotland)", value: "gd-GB,gd;q=0.8,en-GB;q=0.6,en-US;q=0.4,en;q=0.2" },
	{ display: "Galician", value: "gl-GL,gl;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Georgian", value: "ka,ka-GE;q=0.7,en;q=0.3" },
	{ display: "German", value: "de,en-US;q=0.7,en;q=0.3" },
	{ display: "Greek", value: "el-GR,el;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Guarani", value: "gn,es;q=0.8,en;q=0.5,en-US;q=0.3" },
	{ display: "Gujarati (India)", value: "gu-IN,gu;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Hebrew", value: "he,he-IL;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Hindi (India)", value: "hi-IN,hi;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Hungarian", value: "hu-HU,hu;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Icelandic", value: "is,en-US;q=0.7,en;q=0.3" },
	{ display: "Indonesian", value: "id,en-US;q=0.7,en;q=0.3" },
	{ display: "Interlingua", value: "ia,en-US;q=0.7,en;q=0.3" },
	{ display: "Irish", value: "ga-IE,ga;q=0.8,en-IE;q=0.7,en-GB;q=0.5,en-US;q=0.3,en;q=0.2" },
	{ display: "Italian", value: "it-IT,it;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Japanese", value: "ja,en-US;q=0.7,en;q=0.3" },
	{ display: "Kabyle", value: "kab-DZ,kab;q=0.8,fr-FR;q=0.7,fr;q=0.5,en-US;q=0.3,en;q=0.2" },
	{ display: "Kannada", value: "kn-IN,kn;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Kaqchikel", value: "cak,kaq;q=0.8,es;q=0.6,en-US;q=0.4,en;q=0.2" },
	{ display: "Kazakh", value: "kk,ru;q=0.8,ru-RU;q=0.6,en-US;q=0.4,en;q=0.2" },
	{ display: "Khmer", value: "km,en-US;q=0.7,en;q=0.3" },
	{ display: "Korean", value: "ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Latvian", value: "lv,en-US;q=0.7,en;q=0.3" },
	{ display: "Ligurian", value: "lij,it;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Lithuanian", value: "lt,en-US;q=0.8,en;q=0.6,ru;q=0.4,pl;q=0.2" },
	{ display: "Lower Sorbian", value: "dsb,hsb;q=0.8,de;q=0.6,en-US;q=0.4,en;q=0.2" },
	{ display: "Macedonian", value: "mk-MK,mk;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Maithili", value: "mai,hi-IN;q=0.7,en;q=0.3" },
	{ display: "Malay", value: "ms,en-US;q=0.7,en;q=0.3" },
	{ display: "Malayalam", value: "ml-IN,ml;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Marathi", value: "mr-IN,mr;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Nepali", value: "ne-NP,ne;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Norwegian (Bokmål)", value: "nb-NO,nb;q=0.9,no-NO;q=0.8,no;q=0.6,nn-NO;q=0.5,nn;q=0.4,en-US;q=0.3,en;q=0.1" },
	{ display: "Norwegian (Nynorsk)", value: "nn-NO,nn;q=0.9,no-NO;q=0.8,no;q=0.6,nb-NO;q=0.5,nb;q=0.4,en-US;q=0.3,en;q=0.1" },
	{ display: "Occitan (Lengadocian)", value: "oc-OC,oc;q=0.9,ca;q=0.8,fr;q=0.6,es;q=0.5,it;q=0.4,en-US;q=0.3,en;q=0.1" },
	{ display: "Odia", value: "or,en-US;q=0.7,en;q=0.3" },
	{ display: "Persian", value: "fa-IR,fa;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Polish", value: "pl,en-US;q=0.7,en;q=0.3" },
	{ display: "Portuguese (Brazilian)", value: "pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Portuguese (Portugal)", value: "pt-PT,pt;q=0.8,en;q=0.5,en-US;q=0.3" },
	{ display: "Punjabi (India)", value: "pa,pa-IN;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Romanian", value: "ro-RO,ro;q=0.8,en-US;q=0.6,en-GB;q=0.4,en;q=0.2" },
	{ display: "Romansh", value: "rm,rm-CH;q=0.8,de-CH;q=0.7,de;q=0.5,en-US;q=0.3,en;q=0.2" },
	{ display: "Russian", value: "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Serbian", value: "sr,sr-RS;q=0.8,sr-CS;q=0.6,en-US;q=0.4,en;q=0.2" },
	{ display: "Sinhala", value: "si,si-LK;q=0.8,en-GB;q=0.5,en;q=0.3" },
	{ display: "Slovak", value: "sk,cs;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Slovenian", value: "sl,en-GB;q=0.7,en;q=0.3" },
	{ display: "Songhai", value: "son,son-ML;q=0.8,fr;q=0.6,en-US;q=0.4,en;q=0.2" },
	{ display: "Spanish (Argentina)", value: "es-AR,es;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Spanish (Chile)", value: "es-CL,es;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Spanish (Mexico)", value: "es-MX,es;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Spanish (Spain)", value: "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Swedish", value: "sv-SE,sv;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Tamil", value: "ta-IN,ta;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Telugu", value: "te-IN,te;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Thai", value: "th,en-US;q=0.7,en;q=0.3" },
	{ display: "Turkish", value: "tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Ukranian", value: "uk,ru;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Upper Sorbian", value: "hsb,dsb;q=0.8,de;q=0.6,en-US;q=0.4,en;q=0.2" },
	{ display: "Urdu", value: "ur-PK,ur;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Uzbek", value: "uz,ru;q=0.8,en;q=0.5,en-US;q=0.3" },
	{ display: "Vietnamese", value: "vi-VN,vi;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Welsh", value: "cy-GB,cy;q=0.8,en-US;q=0.5,en;q=0.3" },
	{ display: "Xhosa", value: "xh-ZA,xh;q=0.8,en-US;q=0.5,en;q=0.3" }
];

// platform list
let platforms = Object.keys(uaList);
platforms.push("custom");

// menu headers
let menu = ["profile", "headers", "options", "whitelist", "about"];

// options
let options = ["scriptInjection", "standard", "cookies", "misc", "reporting"];

// whitelist
let whitelist = ["whitelistProfile", "whitelistRules"];

// Export ua list for testing
if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') ) {
    module.exports = {
    	uaList,
    	languages
    };
}