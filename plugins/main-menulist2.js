/*
Buy No Enc?
Chat Nomor Ini : 089654811616
*/
const _0x4e4ee7=_0x23e5;(function(_0x58f605,_0x14c1f9){const _0x45e90e=_0x23e5,_0x131245=_0x58f605();while(!![]){try{const _0x995fe8=parseInt(_0x45e90e(0x1d0))/0x1+parseInt(_0x45e90e(0x214))/0x2+parseInt(_0x45e90e(0x23a))/0x3+-parseInt(_0x45e90e(0x191))/0x4+parseInt(_0x45e90e(0x173))/0x5*(parseInt(_0x45e90e(0x160))/0x6)+-parseInt(_0x45e90e(0x144))/0x7*(-parseInt(_0x45e90e(0x20a))/0x8)+parseInt(_0x45e90e(0x17b))/0x9*(-parseInt(_0x45e90e(0x1d7))/0xa);if(_0x995fe8===_0x14c1f9)break;else _0x131245['push'](_0x131245['shift']());}catch(_0x528977){_0x131245['push'](_0x131245['shift']());}}}(_0xda32,0x60b7d));import{promises}from'fs';import{join}from'path';import{xpRange}from'../lib/levelling.js';import _0x237757 from'moment-timezone';import _0x20cc43 from'os';import _0x34eb94 from'fs';import _0x5e1007 from'node-fetch';import _0x238535 from'jimp';import _0x5802ca from'awesome-phonenumber';const defaultMenu={'before':_0x4e4ee7(0x211)['trimStart'](),'header':_0x4e4ee7(0x208),'body':_0x4e4ee7(0x17d),'footer':'❏–––––––––––––––༓','after':'\x20'};let handler=async(_0x46a206,{conn:_0x2934f6,usedPrefix:_0x294399,__dirname:_0x2f25d5,args:_0x26cdde})=>{const _0xce1a56=_0x4e4ee7;let _0x5e4076,_0x3bb180=''+pickRandom(['⎔','◈▻','✦','⭑','ᯬ','⭔','◉','⬟','᭻','»','〆','々','⛥','✗','⛊','⚜','⚝','⚚','♪']),_0x12c426=''+pickRandom([_0xce1a56(0x1b5),_0xce1a56(0x22a)]),_0x9871c6=(''+_0x26cdde[0x0])[_0xce1a56(0x182)](),_0x3361aa=[_0xce1a56(0x234),'ai','asupan',_0xce1a56(0x202),_0xce1a56(0x221),_0xce1a56(0x17a),_0xce1a56(0x15d),_0xce1a56(0x18a),_0xce1a56(0x13e),_0xce1a56(0x25e),_0xce1a56(0x261),_0xce1a56(0x264),_0xce1a56(0x155),_0xce1a56(0x1ec),'xp',_0xce1a56(0x164),_0xce1a56(0x1fa),_0xce1a56(0x259),_0xce1a56(0x24a),_0xce1a56(0x25f),_0xce1a56(0x146),_0xce1a56(0x22c),_0xce1a56(0x16c),'premium',_0xce1a56(0x186),_0xce1a56(0x176),_0xce1a56(0x1e4),_0xce1a56(0x17c),_0xce1a56(0x187),_0xce1a56(0x219),_0xce1a56(0x246),'vote',_0xce1a56(0x1bb),_0xce1a56(0x1df),_0xce1a56(0x1dc),'info',_0xce1a56(0x17f),_0xce1a56(0x1a5)];if(!_0x3361aa['includes'](_0x9871c6))_0x9871c6=_0xce1a56(0x1ca);if(_0x9871c6==_0xce1a56(0x234))_0x5e4076={'main':_0xce1a56(0x1eb),'ai':'Ai','asupan':_0xce1a56(0x1a7),'stress':_0xce1a56(0x207),'menfess':_0xce1a56(0x1e0),'game':_0xce1a56(0x1a6),'rpg':_0xce1a56(0x24d),'textpro':_0xce1a56(0x1ac),'xp':'Exp\x20&\x20Limit','sticker':_0xce1a56(0x159),'kerang':_0xce1a56(0x18c),'quotes':_0xce1a56(0x19d),'fun':'Fun','anime':'Anime','admin':'Admin','group':_0xce1a56(0x1d5),'vote':_0xce1a56(0x250),'absen':'Absen','premium':_0xce1a56(0x1cb),'anonymous':_0xce1a56(0x1b7),'internet':_0xce1a56(0x1c3),'downloader':_0xce1a56(0x23f),'tools':'Tools','nulis':_0xce1a56(0x1fd),'audio':_0xce1a56(0x213),'maker':_0xce1a56(0x1a9),'berita':_0xce1a56(0x17e),'database':_0xce1a56(0x209),'quran':_0xce1a56(0x24c),'owner':'Owner','stalker':_0xce1a56(0x1c4),'info':_0xce1a56(0x1ba),'y':_0xce1a56(0x258)};if(_0x9871c6==_0xce1a56(0x17a))_0x5e4076={'stress':_0xce1a56(0x207)};if(_0x9871c6=='ai')_0x5e4076={'ai':'Ai'};if(_0x9871c6==_0xce1a56(0x236))_0x5e4076={'asupan':'Asupan'};if(_0x9871c6==_0xce1a56(0x18a))_0x5e4076={'menfess':_0xce1a56(0x1e0)};if(_0x9871c6==_0xce1a56(0x1ec))_0x5e4076={'game':_0xce1a56(0x1a6)};if(_0x9871c6==_0xce1a56(0x202))_0x5e4076={'anime':_0xce1a56(0x23e)};if(_0x9871c6==_0xce1a56(0x1bb))_0x5e4076={'nsfw':'Nsfw'};if(_0x9871c6=='rpg')_0x5e4076={'rpg':_0xce1a56(0x1c1)};if(_0x9871c6==_0xce1a56(0x261))_0x5e4076={'edukasi':_0xce1a56(0x254)};if(_0x9871c6==_0xce1a56(0x264))_0x5e4076={'news':_0xce1a56(0x168)};if(_0x9871c6==_0xce1a56(0x155))_0x5e4076={'random':'Random'};if(_0x9871c6=='xp')_0x5e4076={'xp':'Exp\x20&\x20Limit'};if(_0x9871c6==_0xce1a56(0x1fa))_0x5e4076={'sticker':_0xce1a56(0x23d)};if(_0x9871c6==_0xce1a56(0x24a))_0x5e4076={'textpro':'Textpro'};if(_0x9871c6==_0xce1a56(0x25f))_0x5e4076={'kerang':'Kerang\x20Ajaib'};if(_0x9871c6==_0xce1a56(0x146))_0x5e4076={'quotes':'Quotes'};if(_0x9871c6==_0xce1a56(0x25e))_0x5e4076={'berita':_0xce1a56(0x17e)};if(_0x9871c6=='admin')_0x5e4076={'admin':_0xce1a56(0x224)+(global[_0xce1a56(0x1a0)][_0xce1a56(0x163)]?'':_0xce1a56(0x1d4)),'group':_0xce1a56(0x22d)};if(_0x9871c6==_0xce1a56(0x16c))_0x5e4076={'group':'Group'};if(_0x9871c6==_0xce1a56(0x21f))_0x5e4076={'premium':'Premium'};if(_0x9871c6=='internet')_0x5e4076={'internet':'Internet'};if(_0x9871c6==_0xce1a56(0x176))_0x5e4076={'anonymous':_0xce1a56(0x1b7)};if(_0x9871c6==_0xce1a56(0x1e4))_0x5e4076={'nulis':'Nulis'};if(_0x9871c6=='maker')_0x5e4076={'maker':'Maker'};if(_0x9871c6==_0xce1a56(0x17c))_0x5e4076={'downloader':_0xce1a56(0x23f)};if(_0x9871c6=='tools')_0x5e4076={'tools':'Tools'};if(_0x9871c6==_0xce1a56(0x219))_0x5e4076={'fun':'Fun'};if(_0x9871c6==_0xce1a56(0x1e3))_0x5e4076={'database':'Database'};if(_0x9871c6==_0xce1a56(0x1af))_0x5e4076={'vote':_0xce1a56(0x250)};if(_0x9871c6=='absen')_0x5e4076={'absen':_0xce1a56(0x22e)};if(_0x9871c6=='quran')_0x5e4076={'quran':'Al-Qur\x27an','islamic':_0xce1a56(0x223)};if(_0x9871c6==_0xce1a56(0x1df))_0x5e4076={'audio':'Audio'};if(_0x9871c6==_0xce1a56(0x1dc))_0x5e4076={'jadibot':_0xce1a56(0x262)};if(_0x9871c6==_0xce1a56(0x20f))_0x5e4076={'info':'Info'};if(_0x9871c6==_0xce1a56(0x17f))_0x5e4076={'owner':'Owner'};if(_0x9871c6==_0xce1a56(0x1bb))_0x5e4076={'nsfw':_0xce1a56(0x235)};if(_0x9871c6==_0xce1a56(0x15d))_0x5e4076={'stalker':_0xce1a56(0x1c4)};if(_0x9871c6==_0xce1a56(0x1a5))_0x5e4076={'y':'No\x20Category'};try{let _0x5d0d8f=global[_0xce1a56(0x230)],_0x490e6b=global[_0xce1a56(0x227)],_0x393875=global[_0xce1a56(0x212)],_0x5e1fc0=global[_0xce1a56(0x1e1)],_0x1b4b6b=global[_0xce1a56(0x237)],_0x5e539a=global[_0xce1a56(0x15e)],_0x49b793=global[_0xce1a56(0x18e)],_0x4cf97f=global[_0xce1a56(0x174)],_0x5c5870=global[_0xce1a56(0x23c)],_0x517624=global['cmenua'],_0x599e1d=global[_0xce1a56(0x179)],_0x251587=global[_0xce1a56(0x1ab)],_0xe30d3d='@'+_0x46a206[_0xce1a56(0x247)][_0xce1a56(0x1fe)]('@')[0x0],_0x87fa0;process[_0xce1a56(0x21b)]&&(process['send'](_0xce1a56(0x1ff)),_0x87fa0=await new Promise(_0xce51e3=>{const _0x610a13=_0xce1a56;process['once'](_0x610a13(0x1d1),_0xce51e3),setTimeout(_0xce51e3,0x3e8);})*0x3e8);let _0x3a6ec0=clockString(_0x87fa0);const _0xa5a585=[{'title':htki+_0xce1a56(0x167)+htka,'rows':[{'title':_0xce1a56(0x1da),'rowId':_0xce1a56(0x1c5),'description':_0xce1a56(0x1b0)},{'title':_0xce1a56(0x1aa),'rowId':_0xce1a56(0x16e),'description':_0xce1a56(0x16d)},{'title':_0xce1a56(0x15f),'rowId':'.!\x20admin','description':_0xce1a56(0x20c)},{'title':_0xce1a56(0x141),'rowId':_0xce1a56(0x25a),'description':_0xce1a56(0x145)},{'title':'「ღ」|\x20Anime','rowId':'.!\x20anime','description':'Apakah\x20Kamu\x20Anime\x20Kak?'},{'title':_0xce1a56(0x14b),'rowId':_0xce1a56(0x161),'description':_0xce1a56(0x170)},{'title':_0xce1a56(0x232),'rowId':_0xce1a56(0x238),'description':_0xce1a56(0x1bf)},{'title':'「ღ」|\x20Audio','rowId':_0xce1a56(0x192),'description':_0xce1a56(0x205)},{'title':_0xce1a56(0x172),'rowId':_0xce1a56(0x1a3),'description':_0xce1a56(0x1f1)},{'title':_0xce1a56(0x151),'rowId':_0xce1a56(0x1ed),'description':_0xce1a56(0x1d6)},{'title':_0xce1a56(0x1f8),'rowId':_0xce1a56(0x171),'description':_0xce1a56(0x1f9)},{'title':_0xce1a56(0x189),'rowId':_0xce1a56(0x20d),'description':'Ayo\x20Kumpulkan\x20Exp\x20Dan\x20Naikan\x20Pangkat\x20Mu!'},{'title':_0xce1a56(0x1c8),'rowId':'.!\x20fun','description':_0xce1a56(0x1cc)},{'title':_0xce1a56(0x241),'rowId':_0xce1a56(0x231),'description':'Gamenya\x20Seru\x20Lho\x20Apalagi\x20Main\x20Sama\x20Temen\x20>,<'},{'title':_0xce1a56(0x175),'rowId':_0xce1a56(0x14c),'description':'Fitur\x20Yang\x20Cocok\x20Untuk\x20Menjaga\x20Grup'},{'title':_0xce1a56(0x218),'rowId':_0xce1a56(0x19c),'description':_0xce1a56(0x178)},{'title':'「ღ」|\x20Internet','rowId':'.!\x20internet','description':_0xce1a56(0x14d)},{'title':_0xce1a56(0x1e5),'rowId':_0xce1a56(0x206),'description':_0xce1a56(0x222)},{'title':'「ღ」|\x20Maker','rowId':_0xce1a56(0x15c),'description':'Buatlah\x20Suatu\x20Karya\x20Di\x20Fitur\x20Ini'},{'title':_0xce1a56(0x1e2),'rowId':_0xce1a56(0x1ef),'description':_0xce1a56(0x14a)},{'title':'「ღ」|\x20Nsfw','rowId':_0xce1a56(0x190),'description':_0xce1a56(0x203)},{'title':'「ღ」|\x20Nulis','rowId':_0xce1a56(0x229),'description':_0xce1a56(0x166)},{'title':'「ღ」|\x20Owner','rowId':'.!\x20owner','description':_0xce1a56(0x228)},{'title':_0xce1a56(0x251),'rowId':_0xce1a56(0x16a),'description':'Ini\x20Khusus\x20User\x20Premium\x20!!'},{'title':_0xce1a56(0x1c2),'rowId':'.!\x20quotes','description':_0xce1a56(0x268)},{'title':_0xce1a56(0x265),'rowId':_0xce1a56(0x1b3),'description':'Mari\x20Berpetualang\x20Bersama\x20Bot!!!'},{'title':_0xce1a56(0x245),'rowId':_0xce1a56(0x1cf),'description':_0xce1a56(0x1a4)},{'title':_0xce1a56(0x13c),'rowId':_0xce1a56(0x255),'description':_0xce1a56(0x263)},{'title':_0xce1a56(0x201),'rowId':_0xce1a56(0x22b),'description':'Buat\x20Sticker\x20Di\x20Bot'},{'title':_0xce1a56(0x1fc),'rowId':'.!\x20textpro','description':'Buat\x20Logo\x20Kamu\x20Disini\x20Dengan\x20Text\x20Custom'},{'title':_0xce1a56(0x1ae),'rowId':_0xce1a56(0x210),'description':'Mungkin\x20Fitur\x20Ini\x20Bisa\x20Membantumu'},{'title':_0xce1a56(0x22f),'rowId':_0xce1a56(0x19e),'description':_0xce1a56(0x1a8)}]}];let _0x4cc766='_Note:\x20Jangan\x20Spam\x20Jika\x20Ingin\x20Bot\x20Tetap\x20Aktif_',_0x3f0635=db[_0xce1a56(0x177)][_0xce1a56(0x1b9)][_0x46a206['sender']],_0x283be6={'key':{'fromMe':![],'participant':_0xce1a56(0x153),..._0x46a206[_0xce1a56(0x18b)]?{'remoteJid':_0xce1a56(0x266)}:{}},'message':{'contactMessage':{'displayName':wm,'vcard':_0xce1a56(0x185)+wm+_0xce1a56(0x157)+wm+',\x0aitem1.TEL;waid='+_0x46a206[_0xce1a56(0x247)][_0xce1a56(0x1fe)]('@')[0x0]+':'+_0x46a206[_0xce1a56(0x247)][_0xce1a56(0x1fe)]('@')[0x0]+_0xce1a56(0x244),'jpegThumbnail':_0x34eb94['readFileSync']('./thumbnail.jpg'),'thumbnail':_0x34eb94[_0xce1a56(0x1d8)](_0xce1a56(0x1ad)),'sendEphemeral':!![]}}},_0x38882d=_0xce1a56(0x24b)+(_0x3f0635[_0xce1a56(0x1c6)]?_0x3f0635[_0xce1a56(0x14f)]:_0x2934f6[_0xce1a56(0x148)](_0x46a206[_0xce1a56(0x247)]))+'\x0a┊•\x20*Tags:*\x20@'+_0x46a206[_0xce1a56(0x247)]['split']`@`[0x0]+_0xce1a56(0x252)+(_0x46a206['sender'][_0xce1a56(0x1fe)]`@`[0x0]==nomorown?_0xce1a56(0x195):_0x3f0635[_0xce1a56(0x1e6)]>=0x1?_0xce1a56(0x24f):'Free\x20User')+_0xce1a56(0x1c9)+(_0x3f0635[_0xce1a56(0x1e6)]>0x1?_0xce1a56(0x16b):'No')+_0xce1a56(0x19f)+_0x3f0635[_0xce1a56(0x1c0)]+_0xce1a56(0x25c)+_0x3f0635[_0xce1a56(0x225)]+_0xce1a56(0x1ea)+_0x3f0635[_0xce1a56(0x19b)]+'\x0a┊•\x20*Money:*\x20'+_0x3f0635[_0xce1a56(0x220)]+'\x0a┊•\x20*Pasangan:*\x20\x20'+(_0x3f0635[_0xce1a56(0x1f4)]?'@'+pasangan[_0xce1a56(0x1fe)]('@')[0x0]:_0xce1a56(0x1b2))+'\x0a┊•\x20*Uptime:*\x20'+_0x3a6ec0+_0xce1a56(0x154)+_0x237757['tz'](_0xce1a56(0x1f5))['format']('HH')+':'+_0x237757['tz'](_0xce1a56(0x1f5))[_0xce1a56(0x25b)]('mm')+_0xce1a56(0x194)+Object[_0xce1a56(0x15b)](global['db']['data']['users'])[_0xce1a56(0x249)]+_0xce1a56(0x13d);const _0x13f389={'text':_0x38882d,'footer':wm,'mentions':await _0x2934f6[_0xce1a56(0x226)](_0x38882d),'title':'','buttonText':'Touch\x20Here','sections':_0xa5a585};if(_0x9871c6==_0xce1a56(0x1ca))return _0x2934f6[_0xce1a56(0x152)](_0x46a206[_0xce1a56(0x18b)],_0x13f389,{'quoted':_0x283be6,'mentions':await _0x2934f6[_0xce1a56(0x226)](_0x38882d),'contextInfo':{'forwardingScore':0x1869f,'isForwarded':!![]}});let _0x3d7094=_0x237757['tz'](_0xce1a56(0x1f5))[_0xce1a56(0x25b)](_0xce1a56(0x1a1)),_0x56901b=_0x237757['tz']('Asia/Jakarta')[_0xce1a56(0x25b)]('HH'),_0x4c8ba7=_0x237757['tz']('Asia/Jakarta')[_0xce1a56(0x25b)]('mm'),_0x1d6287=_0x237757['tz'](_0xce1a56(0x1f5))[_0xce1a56(0x25b)]('ss'),_0x28de35=_0x237757['tz']('Asia/Jayapura')[_0xce1a56(0x25b)](_0xce1a56(0x1a1)),_0x310589=_0x237757['tz'](_0xce1a56(0x20e))[_0xce1a56(0x25b)](_0xce1a56(0x1a1)),_0x33311b=_0x56901b+_0xce1a56(0x1b4)+_0x4c8ba7+_0xce1a56(0x25d)+_0x1d6287+'\x20S',_0x5edd6c=global[_0xce1a56(0x1a0)][_0xce1a56(0x1b6)]?'Private':_0xce1a56(0x149),_0x1c4ce4=JSON[_0xce1a56(0x260)](await promises[_0xce1a56(0x21a)](join(_0x2f25d5,_0xce1a56(0x1dd)))[_0xce1a56(0x1db)](_0x17cb2c=>({})))||{},{age:_0x2b6821,exp:_0x588197,limit:_0x9c523c,level:_0x25e0d1,role:_0x14cb4a,registered:_0x4ea328,money:_0x89193c}=global['db'][_0xce1a56(0x177)]['users'][_0x46a206[_0xce1a56(0x247)]],{min:_0x2a53bc,xp:_0x439e7c,max:_0xf990fd}=xpRange(_0x25e0d1,global[_0xce1a56(0x1e7)]),_0x5c60c6=await _0x2934f6[_0xce1a56(0x148)](_0x46a206['sender']),_0x4b1e95=global['db'][_0xce1a56(0x177)]['users'][_0x46a206[_0xce1a56(0x247)]][_0xce1a56(0x1e6)],_0x2c6d14=''+(_0x4b1e95>0x0?_0xce1a56(0x1cb):_0xce1a56(0x1f0)),_0x5b9e51=_0x20cc43['platform'](),_0x2fbc23=_0xce1a56(0x1d2),_0x343aff=''+ucapan(),_0x178c9f=_0x46a206[_0xce1a56(0x1a2)]&&_0x46a206[_0xce1a56(0x1a2)][0x0]?_0x46a206[_0xce1a56(0x1a2)][0x0]:_0x46a206['fromMe']?_0x2934f6[_0xce1a56(0x150)][_0xce1a56(0x216)]:_0x46a206[_0xce1a56(0x247)],_0x1be796=new Date(new Date()+0x36ee80),_0x19b2c7='id',_0x46727d=[_0xce1a56(0x242),_0xce1a56(0x1d3),'Wage',_0xce1a56(0x24e),_0xce1a56(0x16f)][Math[_0xce1a56(0x1c7)](_0x1be796/0x50ae4c0)%0x5],_0x2ec444=_0x1be796[_0xce1a56(0x180)](_0x19b2c7,{'weekday':'long'}),_0x5da718=_0x1be796[_0xce1a56(0x180)](_0x19b2c7,{'day':_0xce1a56(0x1fb),'month':_0xce1a56(0x1b8),'year':'numeric'}),_0x2732d6=Intl['DateTimeFormat'](_0x19b2c7+_0xce1a56(0x20b),{'day':_0xce1a56(0x1fb),'month':_0xce1a56(0x1b8),'year':_0xce1a56(0x1fb)})['format'](_0x1be796),_0xeb1814=_0x1be796[_0xce1a56(0x142)](_0x19b2c7,{'hour':_0xce1a56(0x1fb),'minute':'numeric','second':_0xce1a56(0x1fb)}),_0x5aab06=process[_0xce1a56(0x1ff)]()*0x3e8,_0x172356;process[_0xce1a56(0x21b)]&&(process['send'](_0xce1a56(0x1ff)),_0x172356=await new Promise(_0x4bb815=>{const _0x57e3e1=_0xce1a56;process['once'](_0x57e3e1(0x1d1),_0x4bb815),setTimeout(_0x4bb815,0x3e8);})*0x3e8);let _0x236c37=clockString(_0x172356),_0x49a54e=clockString(_0x5aab06),_0x1d4a82=Object['keys'](global['db'][_0xce1a56(0x177)][_0xce1a56(0x1b9)])['length'],_0x1f41c7=Object[_0xce1a56(0x1d9)](global['db'][_0xce1a56(0x177)][_0xce1a56(0x1b9)])[_0xce1a56(0x14e)](_0x227ab0=>_0x227ab0[_0xce1a56(0x1c6)]==!![])[_0xce1a56(0x249)],_0x54250f=Object[_0xce1a56(0x1d9)](global['plugins'])[_0xce1a56(0x14e)](_0x9ae28f=>!_0x9ae28f[_0xce1a56(0x181)])[_0xce1a56(0x13b)](_0x359c9a=>{const _0x1c8f4d=_0xce1a56;return{'help':Array[_0x1c8f4d(0x18f)](_0x359c9a[_0x1c8f4d(0x239)])?_0x359c9a[_0x1c8f4d(0x169)]:[_0x359c9a[_0x1c8f4d(0x169)]],'tags':Array['isArray'](_0x359c9a[_0x1c8f4d(0x239)])?_0x359c9a[_0x1c8f4d(0x239)]:[_0x359c9a[_0x1c8f4d(0x239)]],'prefix':_0x1c8f4d(0x1b1)in _0x359c9a,'limit':_0x359c9a['limit'],'premium':_0x359c9a[_0x1c8f4d(0x21f)],'enabled':!_0x359c9a[_0x1c8f4d(0x181)]};}),_0x281770={};for(let _0x4f60b3 in _0x5e4076){_0x281770[_0x4f60b3]=[];for(let _0x86d7ac of _0x54250f)if(_0x86d7ac[_0xce1a56(0x239)]&&_0x86d7ac[_0xce1a56(0x239)]['includes'](_0x4f60b3)){if(_0x86d7ac[_0xce1a56(0x169)])_0x281770[_0x4f60b3][_0xce1a56(0x21d)](_0x86d7ac);}}_0x2934f6[_0xce1a56(0x147)]=_0x2934f6[_0xce1a56(0x147)]?_0x2934f6[_0xce1a56(0x147)]:{};let _0x32f257=_0x2934f6[_0xce1a56(0x147)]['before']||defaultMenu[_0xce1a56(0x267)],_0x417d6e=_0x2934f6[_0xce1a56(0x147)][_0xce1a56(0x248)]||defaultMenu['header'],_0x3e86b5=_0x2934f6['menu']['body']||defaultMenu['body'],_0x14c1b8=_0x2934f6['menu'][_0xce1a56(0x1ce)]||defaultMenu[_0xce1a56(0x1ce)],_0x522625=_0x2934f6[_0xce1a56(0x147)][_0xce1a56(0x240)]||(_0x2934f6['user']['jid']==global['conn'][_0xce1a56(0x150)]['jid']?'':_0xce1a56(0x13f)+global['conn']['user'][_0xce1a56(0x216)]['split']`@`[0x0])+defaultMenu[_0xce1a56(0x240)],_0x490cb6=[_0x32f257,...Object['keys'](_0x5e4076)['map'](_0x5472ba=>{const _0x25af93=_0xce1a56;return _0x417d6e[_0x25af93(0x198)](/%category/g,_0x5e4076[_0x5472ba])+'\x0a'+[..._0x54250f['filter'](_0x5b876d=>_0x5b876d[_0x25af93(0x239)]&&_0x5b876d[_0x25af93(0x239)]['includes'](_0x5472ba)&&_0x5b876d[_0x25af93(0x169)])[_0x25af93(0x13b)](_0x30ef41=>{const _0x3da9b4=_0x25af93;return _0x30ef41[_0x3da9b4(0x169)][_0x3da9b4(0x13b)](_0x24ef0e=>{const _0x18d63a=_0x3da9b4;return _0x3e86b5[_0x18d63a(0x198)](/%cmd/g,_0x30ef41['prefix']?_0x24ef0e:'%_p'+_0x24ef0e)[_0x18d63a(0x198)](/%islimit/g,_0x30ef41[_0x18d63a(0x1c0)]?_0x251587:'')[_0x18d63a(0x198)](/%isPremium/g,_0x30ef41[_0x18d63a(0x21f)]?_0x599e1d:'')[_0x18d63a(0x215)]();})[_0x3da9b4(0x257)]('\x0a');}),_0x14c1b8][_0x25af93(0x257)]('\x0a');}),_0x522625]['join']('\x0a'),_0x241619=typeof _0x2934f6[_0xce1a56(0x147)]==_0xce1a56(0x156)?_0x2934f6[_0xce1a56(0x147)]:typeof _0x2934f6['menu']=='object'?_0x490cb6:'',_0x55fd5a={'%':'%','p':_0x49a54e,'muptime':_0x236c37,'me':_0x2934f6[_0xce1a56(0x148)](_0x2934f6[_0xce1a56(0x150)][_0xce1a56(0x216)]),'npmname':_0x1c4ce4[_0xce1a56(0x14f)],'npmdesc':_0x1c4ce4[_0xce1a56(0x1f7)],'version':_0x1c4ce4[_0xce1a56(0x143)],'exp':_0x588197-_0x2a53bc,'maxexp':_0x439e7c,'totalexp':_0x588197,'xp4levelup':_0xf990fd-_0x588197,'github':_0x1c4ce4[_0xce1a56(0x1e9)]?_0x1c4ce4['homepage'][_0xce1a56(0x1f3)]||_0x1c4ce4[_0xce1a56(0x1e9)]:_0xce1a56(0x15a),'tag':_0xe30d3d,'dash':_0x5d0d8f,'m1':_0x490e6b,'m2':_0x393875,'m3':_0x5e1fc0,'m4':_0x1b4b6b,'cc':_0x5e539a,'c1':_0x49b793,'c2':_0x4cf97f,'c3':_0x5c5870,'c4':_0x517624,'lprem':_0x599e1d,'llim':_0x251587,'ucpn':_0x343aff,'platform':_0x5b9e51,'wib':_0x3d7094,'mode':_0x5edd6c,'_p':_0x294399,'money':_0x89193c,'age':_0x2b6821,'tag':_0xe30d3d,'name':_0x5c60c6,'prems':_0x2c6d14,'level':_0x25e0d1,'limit':_0x9c523c,'name':_0x5c60c6,'weton':_0x46727d,'week':_0x2ec444,'date':_0x5da718,'dateIslamic':_0x2732d6,'time':_0xeb1814,'totalreg':_0x1d4a82,'rtotalreg':_0x1f41c7,'role':_0x14cb4a,'readmore':readMore};_0x241619=_0x241619[_0xce1a56(0x198)](new RegExp('%('+Object[_0xce1a56(0x15b)](_0x55fd5a)[_0xce1a56(0x1bd)]((_0x2ddebe,_0x3fb661)=>_0x3fb661['length']-_0x2ddebe[_0xce1a56(0x249)])[_0xce1a56(0x257)]`|`+')','g'),(_0x30fd83,_0x5dfe38)=>''+_0x55fd5a[_0x5dfe38]);let _0x1dc0fb={'key':{'fromMe':![],'participant':''+_0x46a206[_0xce1a56(0x247)][_0xce1a56(0x1fe)]`@`[0x0]+'@s.whatsapp.net','remoteJid':_0xce1a56(0x266)},'message':{'productMessage':{'product':{'productImage':{'mimetype':'image/jpeg','jpegThumbnail':_0x34eb94[_0xce1a56(0x1d8)](_0xce1a56(0x1ad))},'title':''+ucapan(),'description':_0xce1a56(0x1ee)+_0x33311b,'currencyCode':'US','priceAmount1000':'100','retailerId':wm,'productImageCount':0x3e7},'businessOwnerJid':_0x46a206[_0xce1a56(0x247)][_0xce1a56(0x1fe)]`@`[0x0]+'@s.whatsapp.net'}}},_0x20b323={'key':{'remoteJid':'status@broadcast','participant':_0xce1a56(0x153)},'message':{'videoMessage':{'title':wm,'h':_0xce1a56(0x162),'duration':_0xce1a56(0x184),'gifPlayback':_0xce1a56(0x256),'caption':bottime,'jpegThumbnail':thumb}}},_0x53a59d={'key':{'fromMe':![],'participant':_0x46a206[_0xce1a56(0x247)][_0xce1a56(0x1fe)]`@`[0x0]+_0xce1a56(0x196),..._0x46a206[_0xce1a56(0x18b)]?{'remoteJid':_0xce1a56(0x1f2)}:{}},'message':{'contactMessage':{'displayName':''+_0x5c60c6,'vcard':_0xce1a56(0x1de)+_0x5c60c6+_0xce1a56(0x140)+_0x46a206[_0xce1a56(0x247)][_0xce1a56(0x1fe)]('@')[0x0]+':'+_0x46a206[_0xce1a56(0x247)][_0xce1a56(0x1fe)]('@')[0x0]+_0xce1a56(0x188)}}};await _0x2934f6[_0xce1a56(0x158)](_0x46a206['chat'],_0x241619['trim'](),wm,fotonya1,[['Owner','.owner'],[_0xce1a56(0x1cb),'.sewa'],[_0xce1a56(0x1e8),_0xce1a56(0x197)]],![],{'quoted':_0x53a59d});}catch(_0x1aad9f){_0x2934f6[_0xce1a56(0x1f6)](_0x46a206[_0xce1a56(0x18b)],_0xce1a56(0x200),_0x46a206);throw _0x1aad9f;}};handler[_0x4e4ee7(0x169)]=[_0x4e4ee7(0x19a),_0x4e4ee7(0x169),'!'],handler[_0x4e4ee7(0x239)]=[_0x4e4ee7(0x217)],handler[_0x4e4ee7(0x21e)]=/^(menu22)$/i,handler[_0x4e4ee7(0x199)]=![];export default handler;function pickRandom(_0x148694){const _0xbd46b1=_0x4e4ee7;return _0x148694[Math[_0xbd46b1(0x1c7)](Math['random']()*_0x148694[_0xbd46b1(0x249)])];}const more=String[_0x4e4ee7(0x165)](0x200e),readMore=more[_0x4e4ee7(0x1be)](0xfa1);function clockString(_0x319a3b){const _0x17fac5=_0x4e4ee7;let _0x549eb8=isNaN(_0x319a3b)?'--':Math[_0x17fac5(0x1c7)](_0x319a3b/0x36ee80),_0x118544=isNaN(_0x319a3b)?'--':Math[_0x17fac5(0x1c7)](_0x319a3b/0xea60)%0x3c,_0x51e145=isNaN(_0x319a3b)?'--':Math[_0x17fac5(0x1c7)](_0x319a3b/0x3e8)%0x3c;return[_0x549eb8,'\x20H\x20',_0x118544,_0x17fac5(0x25d),_0x51e145,_0x17fac5(0x193)][_0x17fac5(0x13b)](_0x27c4e8=>_0x27c4e8[_0x17fac5(0x253)]()[_0x17fac5(0x1bc)](0x2,0x0))[_0x17fac5(0x257)]('');}function _0x23e5(_0x4788fe,_0xe5d1bc){const _0xda3294=_0xda32();return _0x23e5=function(_0x23e5e4,_0x526076){_0x23e5e4=_0x23e5e4-0x13b;let _0x335a24=_0xda3294[_0x23e5e4];return _0x335a24;},_0x23e5(_0x4788fe,_0xe5d1bc);}function _0xda32(){const _0x14c980=['\x0aitem1.X-ABLabell:Ponsel\x0aEND:VCARD','「ღ」|\x20Stalking','database\x22,\x22quran','sender','header','length','textpro','\x0a╭─「\x20*Information*\x20」\x0a┊•\x20*Nama:*\x20','Al\x20Qur\x27an','RPG\x20Games','Kliwon','Premium\x20User','Voting','「ღ」|\x20Premium','\x0a┊•\x20*Status:*\x20','toString','Edukasi','.!\x20stress','true','join','No\x20Category','rpg','.!\x20quran','format','\x0a┊•\x20*Level:*\x20','\x20M\x20','berita','kerangajaib','parse','edukasi','Jadi\x20Bot','Ini\x20Fitur\x20Khusus\x20Yang\x20Stress\x20:v','news','「ღ」|\x20Rpg','status@broadcast','before','Random\x20Kata\x20Motivasi,\x20Bucin,\x20Inspirasi\x20Dan\x20Lainnya','map','「ღ」|\x20Stress','\x0a╰──────────┈༓','maker','Powered\x20by\x20https://wa.me/','\x0aitem1.TEL;waid=','「ღ」|\x20Al-Quran','toLocaleTimeString','version','7lmyNkl','Mari\x20Mendekatkan\x20Diri\x20Kepada\x20Sang\x20Pencipta','quotes','menu','getName','Publik','Mengirim\x20Pesan\x20Secara\x20Anonim','「ღ」|\x20Anonymous','.!\x20group','Jangan\x20Nyari\x20Yang\x20Aneh\x20Aneh\x20Ya\x20Kak','filter','name','user','「ღ」|\x20Database','sendMessage','0@s.whatsapp.net','\x0a┊•\x20*Time:*\x20','random','string',',;;;\x0aFN:','sendButton','Sticker','[unknown\x20github\x20url]','keys','.!\x20maker','stalker','cmenut','「ღ」|\x20Admin','6jdeehS','.!\x20anonymous','Nekohime','restrict','islamic','fromCharCode','Nulis\x20Doang\x20Kok\x20Males\x20Sih\x20Kak?','\x20Silahkan\x20Pilih\x20Salah\x20Satu\x20','News','help','.!\x20premium','Yes','group','Sekumpulan\x20Fitur\x20Ai','.!\x20ai','Legi','Mengobrol\x20Dengan\x20Orang\x20Yang\x20Tidak\x20Di\x20Kenal','.!\x20downloader','「ღ」|\x20Berita','653390JFFZHx','cmenub','「ღ」|\x20Group','anonymous','data','Info\x20Tentang\x20Bot','lopr','stress','333olMhLe','downloader','┆≼≽\x20%cmd\x20%isPremium\x20%islimit','Berita','owner','toLocaleDateString','disabled','toLowerCase','Sudah\x20Dini\x20Hari\x20Kok\x20Belum\x20Tidur\x20Kak?\x20🥱','99999999','BEGIN:VCARD\x0aVERSION:3.0\x0aN:XL;','internet','tools','\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','「ღ」|\x20Exp','menfess','chat','Kerang\x20Ajaib','\x20*Second\x20⏱️*','cmenuh','isArray','.!\x20nsfw','2836632lHqmLZ','.!\x20audio','\x20S\x20','\x20WIB\x0a┊•\x20*User:*\x20','Developer','@s.whatsapp.net','.tq','replace','register','menu2','role','.!\x20info','Quotes','.!\x20nocategory','\x0a┊•\x20*Limit:*\x20','opts','HH:mm:ss','mentionedJid','.!\x20berita','Mau\x20Stalking\x20Mantan\x20Yah\x20Kak\x20>,<','nocategory','Game','Asupan','Fitur\x20Tanpa\x20Kategory!','Maker','「ღ」|\x20Ai','lolm','Maker\x20Text','./thumbnail.jpg','「ღ」|\x20Tools','vote','Menampilkan\x20Semua\x20Fitur','customPrefix','Tidak\x20Punya','.!\x20rpg','\x20H\x20','defaultMenu','self','Anonymous\x20Chat','long','users','Info','nsfw','padStart','sort','repeat','Fitur\x20Pencuci\x20Mata\x20:v','limit','Rpg','「ღ」|\x20Quotes','Internet','Stalker','.!\x20all','registered','floor','「ღ」|\x20Fun','\x0a┊•\x20*Premium:*\x20','404','Premium','Fitur\x20Yang\x20Aman\x20Dan\x20Sangat\x20Bersahabat','\x20*Minute\x20⏰*\x0a','footer','.!\x20stalker','206049BvkfHG','message','./media/yntkts','Pon','(Dinonaktifkan)','Group','Simpan\x20Sesuatu\x20Di\x20Database\x20Bot','107230pahKzc','readFileSync','values','「ღ」|\x20All\x20Fitur','catch','jadibot','../package.json','BEGIN:VCARD\x0aVERSION:3.0\x0aN:;a,;;;\x0aFN:','audio','Menfess','dmenuf','「ღ」|\x20Menfess','database','nulis','「ღ」|\x20Kerang','premiumTime','multiplier','Thanks\x20To','homepage','\x0a┊•\x20*Role:*\x20','Main','game','.!\x20database','𝗧\x20𝗜\x20𝗠\x20𝗘\x20:\x20','.!\x20menfess','Free','Cari\x20Berita\x20Ter\x20Up\x20To\x20Date','16504228206@s.whatsapp.net','url','pasangan','Asia/Jakarta','reply','description','「ღ」|\x20Downloaders','Jangan\x20Download\x20Vokep\x20Ya','stiker','numeric','「ღ」|\x20Text\x20Pro','MagerNulis\x20&\x20Logo','split','uptime','Maaf,\x20menu\x20sedang\x20error','「ღ」|\x20Stikers','anime','Eitss\x20Dosa\x20Di\x20Tanggung\x20Sendiri\x20Ya\x20Kak\x20>,<','\x20*Month\x20🌙*\x0a','Ubah\x20Audio\x20Menggunakan\x20Filter','.!\x20kerangajaib','Stress','❏–––––『\x20*%category*\x20』','Database','4755952lXokFB','-TN-u-ca-islamic','Khusus\x20Admin\x20Grup','.!\x20xp','Asia/Makassar','info','.!\x20tools','╭───『\x20%name\x20』\x0a┆❏\x20*Tag:*\x20%tag\x0a┆❏︎\x20*Premium:*\x20%prems\x0a┆❏︎\x20*Limit:*\x20%limit\x0a┆❏︎\x20*Money:*\x20%money\x0a┆❏\x20*Role:*\x20%role\x0a┆❏︎\x20*Level:*\x20%level\x0a┆❏︎\x20*Xp:*\x20%exp\x20/\x20%maxexp\x0a┆❏︎\x20*Total\x20Xp:*\x20%totalexp\x0a┠──『\x20%me\x20』\x0a┆❏\x20*Mode:*\x20%mode\x0a┆❏\x20*Platform:*\x20Linux\x0a┆❏\x20*Type:*\x20Node.Js\x0a┆❏\x20*Baileys:*\x20Multidevice\x0a┆❏\x20*Platform:*\x20%platform\x0a┆❏\x20*Uptime:*\x20%muptime\x0a┆❏\x20*Type:*\x20Node.Js\x0a┆❏\x20*Database:*\x20%rtotalreg\x20Dari\x20%totalreg\x0a┠──『\x20Hari\x20Ini\x20』\x0a┆❏\x20*Hari:*\x20%week\x20%weton\x0a┆❏\x20*Tanggal:*\x20%date\x0a┆❏\x20*Tanggal\x20Islam:*\x20%dateIslamic\x0a┆❏\x20*Waktu:*\x20%wib\x0a╰–––––––––––––––༓\x0a%readmore\x0a','dmenub','Audio','661518PgVpZl','trim','jid','main','「ღ」|\x20Info','fun','readFile','send','Selamat\x20Sore\x20Kak\x20🌇','push','command','premium','money','update','Tenya\x20Apapun\x20Kepada\x20Ketua\x20Club','Islamic','Admin\x20','level','parseMention','dmenut','Ini\x20Khusus\x20Ownerku\x20!!','.!\x20nulis','defmenu1','.!\x20stiker','admin','Grup','Absen','「ღ」|\x20No\x20Category','dashmenu','.!\x20game','「ღ」|\x20Asupan','Malam\x20Kak\x20🌙','all','Nsfw','asupan','dmenub2','.!\x20asupan','tags','720258TNVrkf','\x20*Days\x20☀️*\x0a','cmenuf','Stiker','Anime','Downloader','after','「ღ」|\x20Game','Pahing','\x20*Years\x20🗓️*\x0a'];_0xda32=function(){return _0x14c980;};return _0xda32();}function clockStringP(_0x58d0fe){const _0x522595=_0x4e4ee7;let _0x23e65c=isNaN(_0x58d0fe)?'--':Math[_0x522595(0x1c7)](_0x58d0fe/0x73df16000)%0xa,_0x1247f6=isNaN(_0x58d0fe)?'--':Math[_0x522595(0x1c7)](_0x58d0fe/0x9a7ec800)%0xc,_0x4256dd=isNaN(_0x58d0fe)?'--':Math[_0x522595(0x1c7)](_0x58d0fe/0x5265c00)%0x1e,_0x769f45=isNaN(_0x58d0fe)?'--':Math[_0x522595(0x1c7)](_0x58d0fe/0x36ee80)%0x18,_0x20c2bf=isNaN(_0x58d0fe)?'--':Math[_0x522595(0x1c7)](_0x58d0fe/0xea60)%0x3c,_0x4f6b0b=isNaN(_0x58d0fe)?'--':Math['floor'](_0x58d0fe/0x3e8)%0x3c;return[_0x23e65c,_0x522595(0x243),_0x1247f6,_0x522595(0x204),_0x4256dd,_0x522595(0x23b),_0x769f45,'\x20*Hours\x20🕐*\x0a',_0x20c2bf,_0x522595(0x1cd),_0x4f6b0b,_0x522595(0x18d)][_0x522595(0x13b)](_0x434e3a=>_0x434e3a[_0x522595(0x253)]()[_0x522595(0x1bc)](0x2,0x0))['join']('');}function ucapan(){const _0x3ab5e8=_0x4e4ee7,_0x2617f4=_0x237757['tz']('Asia/Jakarta')[_0x3ab5e8(0x25b)]('HH');let _0x1011a6=_0x3ab5e8(0x183);return _0x2617f4>=0x4&&(_0x1011a6='Pagi\x20Kak\x20🌄'),_0x2617f4>=0xa&&(_0x1011a6='Selamat\x20Siang\x20Kak\x20☀️'),_0x2617f4>=0xf&&(_0x1011a6=_0x3ab5e8(0x21c)),_0x2617f4>=0x12&&(_0x1011a6=_0x3ab5e8(0x233)),_0x1011a6;}