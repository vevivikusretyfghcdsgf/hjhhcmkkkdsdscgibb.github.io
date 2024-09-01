'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f3e517af6ac2ac67203ec75270f11f1a",
"version.json": "fb8890d5e0f18f807233406d3ba88dc6",
"index.html": "2b00640df5160480ba29fb4ffdc245a7",
"/": "2b00640df5160480ba29fb4ffdc245a7",
"main.dart.js": "d6e4ad08b8ac89afb923847102af4329",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ce84d0d6bca0fc75523f28a111470207",
".git/AUTO_MERGE": "8c43287d8a01640315a92efd08a9c51d",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/ORIG_HEAD": "7b883706ae8519ded4b9055e2493ab8f",
".git/MERGE_MSG": "9e99c3522581ffa45ab9b21cbfd117e9",
".git/config": "e529f701991c9a1114a608e25526120c",
".git/objects/61/3e4478ab295b41dbff3951d5db67856d3f79f4": "fb65faec6085a65637d355b2a3fd318e",
".git/objects/61/4a7b2a2abaedf9e34b978daf35cbbc36870f0b": "8e7ebe224d3c0880a526eeac93d38b09",
".git/objects/95/1d11b18c94c0859abd7684612f6d6bf15a0a66": "834485a3b62f58d3a391cfe8d25d98bd",
".git/objects/92/00f742f46b32ffdddf737ec17a26f6c600edf7": "aba576f5bf6f705ee070895d19b6d613",
".git/objects/0c/28d7a82709b360867a8719092de55ab5b20875": "8518e8a6bcd916ff29057f3ec36718d7",
".git/objects/66/b5c66d9d692798967561b4fd8d57bb639df412": "64369746864dd0e0c58b91780046e64b",
".git/objects/3e/e7b4f75ae663cd48c1eb6a888993bb37c89fb2": "80460d69f8256cb51f46c5d77be0e094",
".git/objects/3e/8bc14edbc8336289087966e4cd2e7242aec40f": "5c09cb429248a1672d66c709e08dc3aa",
".git/objects/68/3a0d0e2d67817f6f194cfab4c20734f22b08cc": "ac1752ba5bcd6c122b49521013c8d702",
".git/objects/6f/824cafeb21e7219c9f85afbf46efd87c0c513e": "7de21820351b1a8d55409a9134629dc8",
".git/objects/6f/99ac3d34ba85101f9aeeab4fcc01edb96365c3": "fa8923b187e1986fd2d9d9753ffc2de8",
".git/objects/6f/cb17a8c8223f96c3d122e9704e596341fbed92": "5758fa8544d08f9288f2a06aea3e6608",
".git/objects/9b/252b57baa4615a3ae708c7e8079eab13ddf22c": "0f85fdb58e86b52adc55f0b68f34204d",
".git/objects/9e/e8355ed319b08c48098d43baf9bd6220ed2c60": "1ced1380517b92f6a65afd6cc90b8872",
".git/objects/9e/c33d9c4b9f97f5efa6ece1a8a87bdabf166953": "4fc53b497126fcbb0e9dd71cf4d4dda7",
".git/objects/9e/71e829a819c102eb008ca6c1c641e12561c697": "bf2db94676b65a312cb4abb3cb670097",
".git/objects/04/bb81bd657f5630a1889e4c74a3f553102d7e30": "58115f8db4b4633a637ddef9825d7086",
".git/objects/04/6e8a6bbf0b8a4aa8ffde83004ceb27e6cff9f8": "57126ab4cb0bb9e04ca0d9429002d69e",
".git/objects/32/572897bf8f5eb155b74402d7a0287d8ebbbf93": "408f271337370e6af917facfb177a142",
".git/objects/32/360c24271f2dc37311628b3a2d34e29f33712d": "916cde57da13f7c8b4be0f0de6dca132",
".git/objects/35/72dd11c16fbb749af602e7d7c984e9766f3c2a": "a4dc06b1acd3f140e018842a8b906741",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/69/560368f4f6c38ef9d7441a7d858257b6af41bd": "11de0583d4d84d13bbb8e24b8a33b9ca",
".git/objects/3c/e4f0aa9570f693670cbb07744ff366f9aa2901": "98070851c0756a0ea244068eec07de35",
".git/objects/3c/399887425fcdc3327c745f1ca3acce0b4a7b7f": "d5bc0c551ba84c9ab02ecd4bc46175c9",
".git/objects/51/45daa7ce873a93f45c6d395a1dfca32d735feb": "ad093f3ddc8638f41b64d1b23dc34300",
".git/objects/3d/1dda15473ad286c313f948372f2ce93b096994": "0fe2b759ff826b5ac68b8683a5d473de",
".git/objects/58/3898feaaabaaafac742ef0fabd8fe54a1cf841": "fc08f3235ad05ac06dc682a6d8f9fc5c",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/4788ed8691e75a222c6332dd6770fdd45449ba": "8716771565aa291131a05b942b4409b4",
".git/objects/67/03df99a93eb33c13b002ed2f020bac850bd54a": "52803dd6cf141b4cec44ec63fbe169f0",
".git/objects/67/38a12a6a69f5b79e5268ad9c59c56ad448cbfb": "dba98e0a5467c297e5372b7311bc0082",
".git/objects/0b/d5034dd5ea1e9098d1384ab8954aebaeed73fe": "b980afefc1ff59a3e5995f9f8947ad8c",
".git/objects/0b/71482b74cdbe3bb9fd3fbe91c5b5b1e558fc35": "d5e8ada2c333593dd1e284f53848548f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/94/3255f3d1284fa944b7de1e91176af95d98d9eb": "5d841a74c7fdf5bc4ddc96254e5deb90",
".git/objects/0e/d706400ba3d958b84a6db1a3f4a943ab650265": "13a9a9d76098d90e01024e54f5b24fed",
".git/objects/0e/9e05f7426be6f74325ec494f3a1eebc901e9d1": "394a836513d84965bc1e58af183c5f2c",
".git/objects/0e/56fa2f098899d163bc581629150045fc1e7ffd": "ff4abfb704da301848096e20277242a3",
".git/objects/60/e65a2c218fbeaa180552e2e200731f2de1b4cd": "741a703796b164f71450ffb605f44cf2",
".git/objects/60/15e28c6357441128f8459f5e4c61ff3805d5a2": "9745e5a7c92450bbd8f5c01490098629",
".git/objects/34/f9fb34fd42cf18681a97c19c7aa462738660fd": "2f242a680736a4b4975b7be62e9a97b3",
".git/objects/5a/fce93f279a4bbd78006896182207b9b14cdecb": "0edade263ebf8ee59bf0c504155fe365",
".git/objects/33/21c78aa3270c10038ea11be61cd1d3d3a793dd": "938b65baafaa249a396380fd48bb28c1",
".git/objects/33/727f9840312457e5c9673adfb4693c17881035": "e689b34d840b6f7ded71a41592a98061",
".git/objects/33/ad712444720294f20cbf04daf80aa6db5fa4d8": "7bb7295af3e679207aad56d7cec92e9e",
".git/objects/05/afe6da7b02e9d9e555b37c28eb96c55c7ed5da": "6993296a50f2afcb3b83bd10e42e13b7",
".git/objects/9d/1a50f74eae520efb86f70706569dd1e9081bf3": "7c8da00df0baeb577d0daeb375e27c6e",
".git/objects/9c/0af0c1cf4064903e4988c10b88aed5cde86fe2": "de0ea287406891419aac0aca149cf81b",
".git/objects/02/e0bf82504412750f042a563ba4fa678335d3f5": "958d87b9b270d10516e9a9a79efb256c",
".git/objects/02/065b819c5479b93c902b1374b730270ce93b1c": "dc562a84f82c1f6953f96b333a158d4f",
".git/objects/02/e50130e10fabe8372c08a2284284e7f92f3e84": "d1b7f757bf6c8ed801a9174f0b05a346",
".git/objects/a3/0d443955761a5c18666904a4deae874fdef4f2": "44b7d7c8c44122abda6b03d35e56882e",
".git/objects/b5/229dd929257ab027799af825497ff58a37b11a": "24f7389d52dd5d3ba5b7a5496c81b056",
".git/objects/b5/94dae97882d78d4882da7c9dcd5486cb4f9bfd": "a083be69a695ccee8ae3142116b40022",
".git/objects/b2/076b38472fd1d71c86736320b10d58d62c934c": "24655de252efebd0729dcfd6c5d42205",
".git/objects/d9/4892b0b418bc28e313053b1ef026c7ee064d59": "f8b3d346841180856e9eee554bbde1e9",
".git/objects/d9/06338740cfbce0ea418a429e7b85d9ef92741d": "9d64977339c2dea5692de001fde8eae7",
".git/objects/d9/6deceb6fafaaf6669952a5cdd1688de1902675": "fb4d5e5ef72749949f47c33feba9539e",
".git/objects/d7/9fbec05ef2ef80d97f878e162724f134b51ff9": "b0ca7f1a458ea65543cb1dee13ade637",
".git/objects/d7/1893bd905643466143bfcf3758a2b8576ddd84": "fa2bc3c4004f05297ff2578f02e08e56",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/da/16b5d228cde625f605246a4248f85160a12c75": "bdd5b3e1f4055ff69a01c72cb7a3f43e",
".git/objects/da/88d9b9848368f52fb0421cffb8536705758e86": "197eddd2e52c870f0754d3b597c3abc5",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/b4/5831143a0264ea3f5d4ff9e92ebd2f44a3bf83": "b54f795eb04597c819594832919b34c1",
".git/objects/a2/38e717b385c5bb9929fad5733542b50aa1933f": "4acd4a515eb14256e294c393cc2a6e54",
".git/objects/a2/22898798481a62b8563f220d964d10cee9a0a0": "4bff1daea40868c2144082192b647829",
".git/objects/a5/f59eeec86438e93b2abf144b5a5d87d024ea87": "833c720112ec0097fbb9d3f666be1eac",
".git/objects/a5/8271237291ad03bd0692c8d829480b71e24244": "dc8d1031f378f0d5f378326c3733bab5",
".git/objects/bd/dc87268f94846d164f2aebb5a7a7b14918323e": "969e2e5447cb6ef08a85115d1d529ae5",
".git/objects/bd/d0dca03ef8fe6a7a46f6908b1bc4febf4640a8": "9d522709e3926532fc5194ab7b1688f0",
".git/objects/d1/bb28c81db32a8219ab788785e63d71004a0579": "ec0b644ee38cfce1ab2ba0194bd52248",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/724aa7c335529c2c170f86f854a2fba414d9b2": "c8de6a9fe51192744b133acc3b49cbd0",
".git/objects/ae/173900953242619e9659d1ce2b4d54b19e6580": "f7b3a37169f86a6efee6d11eec99efbf",
".git/objects/d8/e9b51bcbdf1633d94b9b0a3b3ec400ed944037": "bd1288a13edc5670094a09bd574d0ddd",
".git/objects/d8/0d37a3f0a8d44c49d344e10109d3f5b90837e7": "d61974165512570d78ec8a574d447b06",
".git/objects/e5/e703f74d42bd4cf9ee28b6223e96b8c5f8a08c": "d1f2d58dc7d385fc63c54a6c4b131a36",
".git/objects/e5/75086d2f6834438fd6dc68145f0afcbcccf28d": "23af66157cecb7d49bc0df5bd9cd38ac",
".git/objects/e2/606ad889a865a748b2aacb786792f846599dd0": "dba5ecb485713426c0a71eea50c99586",
".git/objects/f4/67276559e7e7e3c7cfeb7807a138ae1c325ac6": "ad71e09d6b0f39cfd79dced78b2032e3",
".git/objects/f4/8ba89587a7d4642b6d256f1334d1e1bdf37ce3": "698a7726f0c6996b9aa9107f91fcb02c",
".git/objects/f3/0491d59f872b34f77928a17a6f758799682f07": "86fd3b634e662b8fc4b7b2092f0a1da1",
".git/objects/f3/6cb892c1e6c22ca9fa1e18ddedf4998ea5f8f0": "0ef298dc04ce879a85ab99640f353f3b",
".git/objects/f3/bbce34ee47f467992d802cac4b15b435557563": "b6833b0818277d23295a510043368464",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/74df0341b78c5224b4237cbcf96370107e6b77": "6673cd23a371f6a6e1063df366e9becb",
".git/objects/c0/f92b3dc2321d7282de19fd9a1b3566213bce6f": "c0e9d2e93e0bc7e6ab5f33226a7eec65",
".git/objects/c0/a85d1a121f5fbb9afc3380764ce1264bd51800": "73c2d7ee3b08504f800287e2158c723c",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/f0cfdfa27a608628c2e6c159f80577e82a24a2": "750b56cc93ed326213a0eacc0287f897",
".git/objects/fd/e74fb41ba514b205303b98085ced5602e8af34": "b1986f56ea1683da374f78ddfccc7f5f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/828f3da29e52e96cc5571ef60cbfb508252e4b": "f43a8d689a496776cdd26d5537486a45",
".git/objects/f2/1adf3cee8e3dd2ce91875a51b3ec71ead2097a": "da345b935aadffea34dbdc3f02e8aa81",
".git/objects/e3/74158dd783b7b48f53b15dc59bf34acb811c77": "23b8b0e1a67b0c4ac8a57f92f106a7a8",
".git/objects/e3/c7ff13243fb04beffce5215f56cb3c05acc715": "eaf9709c01faac3c424ee8a9b63cbe8c",
".git/objects/ca/df34dd8d2e0f543917204a70c01bf9c13ff3d5": "983684285e7bc98fa32003ff2803eaf9",
".git/objects/ca/227e7d1cfba048ad23a6ee8b9cf4900b16a6ce": "29f73d421cce570a2af4e35ec41d5701",
".git/objects/ca/283bc0b0eed62565b5835dd69ff9d847eb13cd": "59ffd8de1223afdbf85ef79b143b67d3",
".git/objects/fe/db6a2821f81b39e508019662b4f05c19ac3a4f": "485c9b16e728b2d45732a0ab1bc56930",
".git/objects/c8/e212df4611da81410e6ff27ef7100a36b5200e": "1d104d5fc0eef5641da62107b3a08eb0",
".git/objects/fb/a4661547ae6a6f3f980d5708b8b0eee30b6aa2": "462b346df4b63684b16f7cdddccdbb9a",
".git/objects/ed/47c6505a3714a91ca1cb3d69dbf9e675836545": "2072c2b2108ead06450816f0bf11fc02",
".git/objects/ed/38e850563e101f0a3f72b03b0e60e07d480e72": "638b3086003a77d7e020ec7a8daa4e65",
".git/objects/c1/61403fdaf149e11e95ccda3f8524f1fbcf88f7": "b5e35a6d6201e0855c3d0bfb4509e6b0",
".git/objects/c1/8c56941e288664cb8dba25a0dcd9f2e5cc0fe3": "20ae20a9c3839d3c4e093a177389c662",
".git/objects/c6/03a3c218d008ed05d031d94bd8d14d3c1b036f": "ebc6b5dbc5f3d30230056165705781f9",
".git/objects/c6/cf58a7c28df01e0adc2563bf914041778eb499": "8793bd696a01dedab4eae8c60246a0d3",
".git/objects/ec/f9ed338d2b959d9cdd8ccf7521123e05472f56": "350bb05ced51210e8b2317a44ce0be70",
".git/objects/ec/647cad7501b533331fdf092a4e8d40358b12ef": "4a4641e35dbbe556d075bfcd4f41bada",
".git/objects/4e/09d2060d10e6cdd386b09d5c722355f3aee505": "53805d78a8c0c0da12618e9b8eeac07e",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/3931de61bf3e6ba8d993afa7654a883296b6ef": "fa9b27ef2d14a08e55b3e13562acc3d4",
".git/objects/18/8eb88f2163a9098ce4e5d206d85bbe2f31862c": "ee74d9fb957998e8e1d05b3a4c96ef79",
".git/objects/18/cabb98d5c5abf7ec3d305262ceee84254ae514": "ec88d6f1f37c3e2810ee42f61da31a14",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/27/347c0168cbe3f0950aac79768a50e673bf0d8b": "d24ed06c0616561ba8e2996252a2b96f",
".git/objects/27/701d93ed11a82ae1544725a2b1fba6f4cfb451": "768bdd0e47bd60f04d453c5b0044aa99",
".git/objects/pack/pack-e32300092296eff8dc2be676a2ac0db51a57bdaa.pack": "d312427581b47f6a846b71477cf60da5",
".git/objects/pack/pack-111b51621a74f8310dd4c96be4120087fc57c8fb.pack": "94c1f5f4baf290343aaa129131f3b251",
".git/objects/pack/pack-85e1ccfd606239529c355755098423ff91de5cff.pack": "5b382b243ff8726f94ec552652c78a49",
".git/objects/pack/pack-1669776b664f319a64ea3a43aa191b4c0ce7b62e.idx": "ea8118230995af51881383f216723234",
".git/objects/pack/tmp_pack_Mfa3e6": "5bccc3d8ab083d817a42b3275f50dd3b",
".git/objects/pack/pack-e32300092296eff8dc2be676a2ac0db51a57bdaa.idx": "43ed2cb81859d8b4d0312e73182182ea",
".git/objects/pack/tmp_pack_YUHwxb": "a2aeac9a1180d58b326ebad338ecec92",
".git/objects/pack/pack-111b51621a74f8310dd4c96be4120087fc57c8fb.idx": "8fba904aad1f578588408f82cd91dd58",
".git/objects/pack/pack-6655601bd9db149e935e5aff8b6120bfd836749f.pack": "dd99295c8cf3f23112aa186934dc2711",
".git/objects/pack/pack-20e3bf21a2e9153b9e2e56676a97c0381af0a3db.idx": "9bc97a1eebe3538c4f7c466a315fb285",
".git/objects/pack/pack-20e3bf21a2e9153b9e2e56676a97c0381af0a3db.pack": "fb0058b0de48426090c42e2230d1c521",
".git/objects/pack/pack-1669776b664f319a64ea3a43aa191b4c0ce7b62e.pack": "dd0a27a85a5d4a998d80a507cf824aef",
".git/objects/pack/pack-85e1ccfd606239529c355755098423ff91de5cff.idx": "f4eee0745ac871a2978ee705d53e455b",
".git/objects/pack/pack-6655601bd9db149e935e5aff8b6120bfd836749f.idx": "35ecef430bdfe041065316a84161670a",
".git/objects/7d/1939471c3a238b413f1ac40880b3102c5360e6": "52291202ff0d1bd49a669382201ac8c3",
".git/objects/7d/3ef40cd8db6e2b07062c7d49a194cb9aab5bb8": "16891982ee846e5710207606a9911e01",
".git/objects/29/ca2b58dcfebc74a85613c0083f631e53ac706e": "6b6e9f4a1c8a20430b0b7dac811a2247",
".git/objects/29/17a3d4366c56d0e4f0d76b7fa96b32c6d26227": "20fa08cf37b90825b19144278aa8a657",
".git/objects/29/9451e09fdfc0af468c933f5eda9ae0639872ad": "043c102791a0d625d516bc4d1404a355",
".git/objects/7c/7e038f7e3ff26ca7d4f8139eda5de98380973d": "d647a9c0dae06472da1917370f077350",
".git/objects/89/6b63e9fa1c361105354f02f46a1a16224760ac": "4e15a3ec1e785071a3d93df36c608cb1",
".git/objects/89/5d6d0db3aaff0400e5d60e2bf25257db3ad0dd": "fc1d08095cba1c1b480e58430a1859d8",
".git/objects/45/7534e5145b89c1de2249cda5b8814fe8feaac3": "563a5287ef24d7f52806b9f1ff8b28ee",
".git/objects/45/7957eb58584a5dd5f5978d92e3c311c5898c82": "a3e28c81d2b0078f91e231d876990a47",
".git/objects/45/d2f8ff93abfb792b6b0b2340263464266333c8": "4f9f4ba9c8d1d0335b06defc847cd53f",
".git/objects/1f/51244d732c66c64cc41fc8f761d9007ea4b441": "56944ec3127b892fbe7669782206caf7",
".git/objects/73/7e7bdc6c3a3cec9d3d69edead4b2ff3e65fcb7": "20621280f03ba84d084f4142aa0dbe23",
".git/objects/80/13312ba57173cd65e1acc967241d1260b5aefb": "7d9ca9b3f45b6fd8c2c752e040d58ad8",
".git/objects/74/eb725702e8247a9c8bc14252de193b91f59c9a": "20304dc143d3bfa2583997f975d4aa1a",
".git/objects/74/fbbd1b570eecd41c9c7bf5dacaa7bdff5d6e5c": "94539234102f15d8780785375e99800f",
".git/objects/74/b8d11dade4a5c5a2a3ec7ea15b0a95da5fbf40": "aa5b91de92329ac08d54ecdf42652169",
".git/objects/1a/74fa1eba80e9c705294fe328ec4d5fcf299d82": "d13e2e2cf71b04b3484c12baed1117c1",
".git/objects/1a/d9b8c91700357f3e9ef41e81fbd980acb5329c": "567807a0793327785977c32824a75153",
".git/objects/17/8a7684279d6aa4abc2ce2bfb6376e692e0debd": "6a31cc9a584206636dfc5a9b25bdf0de",
".git/objects/8f/06b4d0e8a09b4d96369a941f413d779a1c95f0": "d7c847e5f203b7010a9203e573171bc2",
".git/objects/8a/89c1af13838d4b144793e4db72a83008ff6bd8": "83ec174c89720aeef686f139c2fb58a4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/26208c0d937c0abfcfe32f4f8955152385170f": "3b1f974c388d0391e6a7b60c7034ad5e",
".git/objects/19/3e9456b1d5e609aadce6db22b1be36e3e90d37": "4f9739ddee61dbf1085a45afba3f00d1",
".git/objects/19/f0f06fed21d7bdf8ec602a3b2aba86c8d6e7dc": "a06df370d6df0304d6508eaed12aa99a",
".git/objects/19/4658fb4b6ab1370b0213076313fc84e29ac551": "23ca5f9f3df270d5d2a849b8883c6931",
".git/objects/4c/e3b8ea714bf172ebc97be601166c026a0406cf": "ce792c7dce123ab92e13e19ad4714b46",
".git/objects/21/1bcc6bb67f52118395e8c083d3eb6873b18ee1": "fca2db6a8b310e3a78224b27a6a942fa",
".git/objects/21/edd45b193f6dcf3ebc835bc7e2db1c18a97848": "696aa4f31c67aa227191dfa1257f83f2",
".git/objects/75/8e856e1bf3077fa0b6d27f4063554af4e53ab9": "2e09c6b5fbb66aa6cbf9a2bf5b2c42b0",
".git/objects/75/b144fad28a0e054089a07564d5bc628bfecfa0": "550727e942bf54a35f4920edf808cb9c",
".git/objects/81/0b6c45d805f55041f134ce92a2b14316988a98": "e1eccc3f5a31f4c9bab55b583e31ed82",
".git/objects/86/60c6c34eb315491e6b2732ba9075bf87ff272d": "2c11a57abcb8aa4b5e9d97d8dd3033a1",
".git/objects/44/b0625fa5801e43c81998854223d1f23711e7dd": "7cea499e582e751687a898a6685eb2cb",
".git/objects/2a/a9e7ff3f1411aea7019e68ebd04957e789fb0d": "dcbb9b17aafea5126bdb2d60cbb77752",
".git/objects/2f/5081a9852f6cd8acf6b7db6fd2fc812cf8993e": "42ad738830944d52be829e00c8b0d3da",
".git/objects/2f/c69559dd1e855d7128cbb2dc57bf7a6c9da33c": "99fc4b3fdb4b280087ea6454d2dad835",
".git/objects/43/ab413128f6878e39feda0d53f0c23f823ff3f1": "de757ef96990c329701254bd5f6c6bc5",
".git/objects/88/fc935dce9bc5af39f99ec342813a75c6e02a51": "023002b7ff3356abad5e71e1e0451b90",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/9854f1585deaea59d2618b0929bae24b037d2b": "8b5afd30299c1b1f1b7189b8f434ff5d",
".git/objects/07/468c1b3c37c23cae7c1777c4387341495ba3d3": "f7850c74ed6699a3c4ceba5abf931a76",
".git/objects/07/7780b2bf3163974702dbf1a0d4f34f1dd386e4": "94629c99b1a34ac14159c2018aba0b38",
".git/objects/07/81ee29585dce6b063b2b4b5eec0065b4164cfc": "2ec80900c6f929e0967d2bb1a8932dd0",
".git/objects/00/c1170f961273ceb4e13b7a3ac7490cbbec9c15": "4b15879e78a8e5749a27674791a60400",
".git/objects/00/305e556da5cb0161703527877d756491dae7f5": "9f3673c27b9ecb51368672f91dc2360d",
".git/objects/6e/9d602e6506b6ed4594c55b568bcc391f274807": "0dbefa4958f26826672cb696cc04174f",
".git/objects/6e/869c48d5614bee39001ff70cd8fe1164a89f41": "5a3ddc1f6bc831ed58ae61dc5d6439fa",
".git/objects/36/6dfa65ae6d28465c5b89c2e3c3ecd1267331e0": "713380e1308578fe8c624525aa2a6316",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/6ae1bdcb668b95dfbf88dc38ec04a075cdb6ba": "7c83f62d1fe9bd465ed1278085f79eb0",
".git/objects/5d/2eb307c2bbd106f6bb318a19d1d52ad51e94e4": "da348fb2461277e61134b5bb58656ace",
".git/objects/31/6433b252cb2039c19c83be21a7cd3cf1080a94": "ce3f6f425dfa25df19baade9a9e830cb",
".git/objects/31/13b39f7eb15d8e544bf8191e7e85e3406176e6": "07ae5ca0daa20f5410e5f26f765a464e",
".git/objects/31/05b8600e0d156cef3d8ccd87887d88cd6043ad": "cdcd645c15b6c883865fc98bdfc718fd",
".git/objects/91/e5a4e28a2b4c1a1575d69ee47e2325785c1518": "9540a610883acc52eee82aa25a6608b0",
".git/objects/91/78d551b9d8dd5dcf4e4a140e12d6fea28e2fc8": "58aa7693c655185c4ebe1e7e4230fef0",
".git/objects/62/a3f4757d2c5dbf129e139d02f5b6b46fc658e3": "7f30495933d2e0738b7bf6877904e594",
".git/objects/96/209f82854e1a224622ebee085843df0c73158c": "26165690a501508488b31cdec9e698b1",
".git/objects/96/e4371d4ea8bb3b90e0218361f7239afe10c562": "7ad88ffb6393d1cce270a6702069722b",
".git/objects/3a/3d491988c7e587255d797e31ac84ff35224a9e": "1f3159bce0d37e410ab6f783ad2e161f",
".git/objects/3a/ee444cb10fa34b2a599e15c3d058e2fe1cd371": "4a3133a6f425b533a29d66d0a58ed429",
".git/objects/3a/8fd0efab624cf46fb19d262949de6366ec5c11": "c842c0075f443081c1ac45a096c60830",
".git/objects/54/55ad40d6b748b43e55c0bbac3c80d4d890dce4": "73bf17ef135d4f32c9a388402fed2423",
".git/objects/98/1f1d1866f6c3c6b8ea3392f736072e1de6e68c": "7300fa8a2a9f23a9e3a56508d7007980",
".git/objects/3f/881bd4817960d100208865f0434ff907c78c31": "25f6d5d00910ecec2e4dc676b30fffe7",
".git/objects/3f/374618f3467d323f27239850c8a86e803bfb1a": "25e978297a22c52afb47bcb4af8812b4",
".git/objects/5e/46d318cd7d2a62e13d3a97ee5129a59917833d": "9ba24d3a0bf6ebdfbb4715b35cd9bd02",
".git/objects/37/549814efe23a54c9137b3e762bb961be9d78d2": "c6b0bb1f0f07cb5667ca309f6118de3d",
".git/objects/08/1e4dd5858071eb23b7545dddab756e94ecbc65": "e420678c01b290c6cad8cfc5703952d8",
".git/objects/08/53023d7ae644b704b28c972f949b343846f3c5": "010ebc5be4c1c4cbdda7a670373061fe",
".git/objects/6d/a81b0cd5eb7350710db18b6bced1ddf1444259": "283717c061f56cd9a9fe1a5f4d0ef43e",
".git/objects/01/acaaece59cb4acb1cfbd98730c405a38b0ffe6": "d9cfda487ef15b534cc064d92925d59b",
".git/objects/06/e64f4dce6faaa73d4e3062765ae4e1edb80c9d": "9965b598e74ffe707efd6a59fc825166",
".git/objects/39/44b075ea3644972cecd68e8c074e74d967d667": "17235c744d50d5b3480def021ae59257",
".git/objects/39/6fd5438092c4d89c4f8c6ab08542bf4c1447b9": "e1cb7ac832f79d3ddb9041ae33616f48",
".git/objects/39/ac47b6f66b265113a829fd61763e727508b97d": "061c986cd1cf43e0b759d7d100fd384d",
".git/objects/99/afa3fdef040f3909abddde05e43f8222af1fd5": "a9ebe631c40382c4f45ed9c6a210d005",
".git/objects/52/af4800e4254ce1babe015a07ed49104be503e9": "e9c3807ad8a9fbe473a5508277dd2557",
".git/objects/52/cbad4384e5f30980edb74d38f5689be0c3ddcb": "77a43d4b9f40c10006edf03b951a2864",
".git/objects/52/6885ab34b232bbde917e9bbb2934f0da9211c0": "339c4739a634b092c3484899f3dec742",
".git/objects/55/bac0117b4f9989de818c6b0201e3729964b9dd": "6a27d7c4bf8701fc08c72e8cfd34f7b4",
".git/objects/55/96819d1f00a88148995f9ef133140e26f76b52": "dee8230f21a67f586c01e96cf97ce5cb",
".git/objects/0f/e338bdba7deb34f986cc088ec07ff64ac766ec": "7538369472f4f1f688dd084bc0984490",
".git/objects/0f/8680346bb770beaa5e6645ac20637da3567cc0": "6554f58f1440a5494cbb433f4a760440",
".git/objects/0a/7e856dc08322c6e8d9e0eae72f06f50e8b8465": "3be415b0516d6e2eb990191b90413edb",
".git/objects/64/a7b06c7d8e6cc256380ea406ffe6e0c103e505": "19a5efa44591f504051bd6a14adc298b",
".git/objects/90/05d18301326dd61a630f21cf9ebac611ba44bb": "32c457a40deaafe8172821d7097a48b7",
".git/objects/bf/af9e022924f00cfd9b9bce9d6578ab86826391": "01f81eed13af428b559b504416800bdb",
".git/objects/bf/edb93e9e1f9f888b69a16b5b1b4173480c2b76": "029efb839631b9f72e7757e318f0e031",
".git/objects/d3/e11661c962cb1a730321464ea6feb08eef4747": "5edb1308e1327fcaea98e7f0d046c440",
".git/objects/d3/4c55ca795041ced27961d7c92dda3f2ee223c3": "07629ab852486c05c9ef37d8180e100d",
".git/objects/d3/cc17401e0934e870497696c1de7c549c21b0cf": "a32a8f1ebb2f74d4be6f1e36a7f87395",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/47b0a8eb6946c3fe555733dd9bf88c8d766643": "ce0f64ef2cbec34464cd1312117056cc",
".git/objects/ba/b0b6d25e8498e457d043d140345e9da6c6600c": "39fbde8c37bd31b8e165878354505575",
".git/objects/a0/b03d9de4397cbc0e0f9bbaa1ef968cda456154": "e57c17584fc30383a0bbf951f9f521f3",
".git/objects/a0/11599477e339d4525cbbb838db05f9f7d81b68": "2608b79d3ddcf5067afec2e8f7ff237e",
".git/objects/a0/660410bdc280db0ec45ef78aa1ebdf1c325c5c": "a9dfd935e31b7cc914a295bef11b2ddb",
".git/objects/a0/95e385c1e91bdbadeb54692dca15d2af6918c3": "02552557462fa8ede9b5a1b1e94d5b00",
".git/objects/a7/bc8dec16c99bacb453715b0fc54dda883ed63f": "8deb0ce2c2210c4b5793c1d04dc25851",
".git/objects/dc/33fe519ba601bf59a13c7b52b7ae524e1e98e1": "b7c04b152cbc9dc5f8c2f2eba3f269a3",
".git/objects/b6/ed84238d2178a3fa4a634eaf31e8fb1524b13f": "7f89db5ec4b56b618153aa6b6ff50352",
".git/objects/d5/13ae3ff7ab69541c451da68a7441a51761268c": "1f4d6475b0d93f9907f83e3f809c74f0",
".git/objects/d5/45e80e22f124ba7788b6af16c2208178cdb678": "a82b31b080b77c6cb2b5479d71f271cc",
".git/objects/d2/f8f495356fadacb71421c163027fa3a5ba5a78": "cdfc1c229a65ceec7ed7eab21e2bd2b3",
".git/objects/aa/61403b2cbf3ca53a51fa7ee2ff7c4fed689ec2": "27ef96bd91e2a758b6b7db5b8051ea1d",
".git/objects/af/24fc0bd8386c88bdb7e3310fd3bc8d4661b3c1": "8764b76ebe60d3bb9b8824496aed426e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/7081d5e42d7c257525937382586221c8b0e39d": "6bc7ecc1aba5d9b365008322778b5e62",
".git/objects/b0/5fd3ab8aaed4c64dce46dcc0d53351d027fcd0": "559a4ac0582cc8ca5f84aea61b916a47",
".git/objects/b0/20effb315c29b81271731df556c4aaa79d5591": "8a5dd9c692c0e8726ebb4bcd3378261f",
".git/objects/a6/37796189477896596a5e35357c799639108dd8": "18c8700c9ad48162609c7fb05fce579b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/35e332c0189cff0e23309ba3f4cd88d3595fff": "a0fdc0cacafceee670afc169ac0e9cc5",
".git/objects/b9/18b5fd3b55af2cb0bb1a73d44255a8b6456dd6": "494e14abe5bc9e7a0afdf9e8e727159b",
".git/objects/a1/a515472f7d54c5c647f923bb839ed92bf0e0a0": "30b2af03cf1c5ba54b213692af6373d1",
".git/objects/ef/075f342e50a211b001693b9d62fe01d09b583a": "6b49af0949383517e899ab7d85d4e920",
".git/objects/c3/e2a607779851eea4382c54556bfd3d42dc8e75": "a053f6f10ab155fe6acd7c4d905a8f89",
".git/objects/c4/2da35e26ebeb5966eb928c0cd50d95fbde3b62": "08dae974b686c477bc03ab70e6280226",
".git/objects/c4/ea785c26b4e09a2b56af460ace426b42798bdb": "01342bf14f24dc10ee95962a896d4c84",
".git/objects/e1/bbdffaa16483a68c4dcf987758a3343adedf80": "b2a3fcbbc6475495c12a512b9d925861",
".git/objects/f9/452396be7979b8dde251b7c75dbfb771558461": "56cc4a4de1e909d9e93835ece83fd98c",
".git/objects/f9/cb81323e8e313cc9cafa91a000e7a3cfb350bb": "eb69a9730c969ebb4e9494878f562fad",
".git/objects/f0/9949967106ddc3f01ac0fa28deebeffea9ad80": "43276fd579fb1033070d376347c79599",
".git/objects/f7/2a7c41dfafe57b69185d5a854dd800e486498e": "934bc21986d2f9dba82c845a6623e4f6",
".git/objects/f7/4ee8422502ace2ea1ad0fcd9610062269ea695": "f874333b7adeb02cd22ac8bb1240f923",
".git/objects/e8/5e4ab0d927ea364364c2262ec45fb1dc03abc7": "fc630366e8a459c5586fd77702c8a765",
".git/objects/c5/7f4e1e0450d5e72f3c6f1827e1d48a27855542": "f408a0e4657c241db166707e469f1e11",
".git/objects/c2/df3b44e1d86d94409a4fbf41449a9d5b34fbd2": "c0c7a56d9ccd9993483f5e6ff9ae593c",
".git/objects/f6/61a7a761ed981e9ada32d7403e00aaec38ee18": "1e50f2765048605477e6a673ee7b864b",
".git/objects/f6/7b4651e911bfe5d77a29acff706f3d8e3cc97f": "f9f595449b57404fad2714390d724798",
".git/objects/e9/c0c5996bb441d21c6d9a2117110b44c22eeb5b": "1203aec68cedfb793c9c7360692d6d6d",
".git/objects/e7/cea152bc6b0e774c42b181158516f6d33c6143": "e6ceaf391e555c5d4abf90bbfd489e44",
".git/objects/e7/cdc1581baad8a02e25e3bc9b4fd2e892355eb3": "5b1744ebc5e1c5f2384788c4eda17ccd",
".git/objects/f8/595ab8a023a32c00d50b00b99fe2439ddd6022": "cf24a0515c570c7be2df60d1e53d587c",
".git/objects/f8/2de54a7794391ae6d113cc062fb954f47b87bf": "103dd16478388290a87eec3479e6ceca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/4b8d25497ae1f46b9fc70502333fd6f2e6a23c": "0dd585ef634aa5374ccadc08c8f3a156",
".git/objects/2d/cf99e3aa976e0aebdb5bc1cf601624f9441f4e": "60f4853a3f8ba6c66bd705b488499e61",
".git/objects/2d/22a7d45371864981327cb145c2c2c9edaac46d": "60b77fa22c7f76ed710be18fd15fdc39",
".git/objects/41/81bd44e6ce194d723d07c1e031768a1f6aef6b": "45346fbe6d632ab2aad7e335cf6f1c56",
".git/objects/83/a619a63f1bed0e137c159f0c2ca3303f09f784": "0cd4cc8a2a1c3c22570771e21e22c3cb",
".git/objects/83/1dce827198d7c3cc80f02d9119e8b7903f4151": "db30b9d88418ac3b55d6ded35de54392",
".git/objects/1b/b1e6120fc7137f29ef14d60eee90fbcf122f6e": "f1941c92736dc96ce180c626c75fb11a",
".git/objects/77/22d5931a02badba666a14f4826249a667274e5": "aa880cd8f169e21b37c541d246b3f45c",
".git/objects/77/7cc560ebecc044eb56aa4b5bf9f1e0c41b498c": "8b466c469bfc4ac5701a3ba9761aac39",
".git/objects/70/58fad0ac0fde161e4357aa08d99e2ec03db294": "ee4b0648ac45e67379578bceef1aa2e5",
".git/objects/1e/4bce3fa0f28091e6b0ae35eb5cf4fda3e606ff": "716a52f4d0f1e02dfa3c875555293402",
".git/objects/1e/5c8b4e97ce34b70cb0c25b9ad82d3588685810": "9152f6c630800ab5fb2958dddacbcef0",
".git/objects/1e/940c9b509c345599a041acd1521667b659042e": "02a06afa5ce054e848b7009a1c7c1fa6",
".git/objects/1e/8d81e8896db5eb48f4164e503be553d43d076a": "bca39617e8cb792a118e3708f3dfc776",
".git/objects/4a/043415c1c8bac91873910b3dcae963b12e237e": "d15a13835d48a98fc46c0fe7cd359d9b",
".git/objects/4a/71087e5e8536e2ecce9611d2981a58fa50769a": "c3d57eb2a2a83af505496fe9b3798d4e",
".git/objects/24/63c446e363e9e3d64ecde3b159c784b3bc4fa9": "b0986101b077955881bc1f0b9159bf84",
".git/objects/4f/414d77e3a67ed1fd2d3bb65fc51b78a7e09faf": "2e329329f3b8b4130df83b8d512a97a6",
".git/objects/4f/34ca79710c3c32bdd89202e3eae56180c08a33": "4e588472bea899d691fb72244ca22878",
".git/objects/15/a2e3b299eb7aac533a6c5cd317a048b654f19d": "4c8d8254a4f0c3446cd4376efff9c395",
".git/objects/15/f6f6125f4a2321fb7cda0f0349a3c2dd704155": "d70d94678d29e937807c4d6205d73515",
".git/objects/12/f7fc3030b1ee92a68767b07c7dbf3e315d3904": "4318ad49a970235863c0653e0aae174d",
".git/objects/85/ed113906cef1b84707dc12bb4ad929ae19cac5": "a0119bca89c55108495888850896d5ea",
".git/objects/85/cd768f1a5a76607b190047e7b52534ca1b832e": "01c107f69faddd631cf8f690bf8fb5ec",
".git/objects/1d/9bc91c2e6d2dd5dd31ada4445c4e471db9a817": "7e01e3d96dac1a6edc88bd7b04d3f6ea",
".git/objects/1d/39521d75045cbdc7a983f86a3c0e009b2a808b": "910951ce02faa05fafb7df104d74b896",
".git/objects/1d/1052daaacbb96cd07b3f5359bb12fc300382ee": "b9f22216e10fa31fd91672ab5a35b1e2",
".git/objects/1d/cc3771aa2a5d2c1ea04262de3bb3ca876d5708": "9225f961434f31012bd6e5affc61aa51",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/d5f10a3bc5a978aca7f3dc571af42d6e441f47": "c58af2f4acd9844456b6ba7bf82b0132",
".git/objects/76/0fb029b314131d10fb0df56bcd9b6725945dce": "89987f05232d7d2177f03dbe604ed987",
".git/objects/82/2af9a7feb37e4326718b477629cddf8156babd": "c6b5f646b12432fa7f63ea575b036b75",
".git/objects/82/0da723285b9823dc2cae8ae982c5802d042d88": "9f64a51b1ac72366db7d768b1e486c0a",
".git/objects/82/71a92058ee0ca0feaee298ab6acda53a2c7d0c": "a6d6683c518ed7683e8be290656975ab",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2e/d397c34ecae82626566f07814ede33e27965ac": "e26c43223ce8b5f9e26de7ddde7f4c28",
".git/objects/2e/95213bc5b4ca438149d0d3d7c0b69193e9a27c": "f5528b960da485e92500e149941a37a3",
".git/objects/2e/ad66e7facfee5930aa8c63482c007b6d60b5a1": "fb2d49884c1495b0bb6be66b4e992ceb",
".git/objects/8b/b720b8568810012474702261c97fc9a54d9d53": "92fa703e7bc67d305ffd39bad0187266",
".git/objects/13/a0aac4e6f5d935ebfb9bff772ee6a48ee06e5a": "6215e3186b22270d4105b7dac9b811fe",
".git/objects/13/6464a88bffd7201e1e2be45dc2044c3468d01b": "da51cb3b7951a1226c0b1edf24a92882",
".git/objects/13/68244219d9b89eebaaad14c3c3889698eaf101": "4a2f1762663a02a0bd3ad8334e1ffc66",
".git/objects/7a/33e706c53b37b85d9fe7d99076a1c6cd7296d1": "ba424640be7c8dda7a0f2321c2ad72c2",
".git/objects/22/07943f88df0aabab9aef4cc9d9ca61681182d9": "d588a9184ce795d781db97b74c920147",
".git/objects/22/8ac3fba5fa3918714824955272d11ad0b2f569": "c5c1579cac6e98fc3f70844d3604462d",
".git/objects/22/76f91cbd03e136f61499f3f78969768217cc12": "bfa2b44f0584fd015d23fbe18010c867",
".git/objects/25/3985f83f4fb6df9dd482c7388f2ee8271fa367": "de284910e5b269a66f6d514a045b4e6d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "63269b8565d690c7b7caff9d20d0b4ab",
".git/logs/refs/heads/main": "66146c8ffe7f727371ca13fddda56040",
".git/logs/refs/remotes/origin/main": "4b5d90144e6bbfae22a709ee4b50d093",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4d4c33ac18861ec2dd764dd80103e454",
".git/refs/remotes/origin/main": "4d4c33ac18861ec2dd764dd80103e454",
".git/index": "35222445887bbf72fecd2a12ff0eaec3",
".git/MERGE_HEAD": "42a764787c706e9f5732d5576af4652d",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "0ccdf754f947f0ad82e18d5af3c684c7",
"assets/AssetManifest.json": "cd8e3c9941a863b9702fbcf836dd0169",
"assets/NOTICES": "d4aaa002f136f99582c99e47f81cf562",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e67a06881740c4132ed3c505c2fcfac2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c3de2c7636ea35498a2681ae658f249f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "12af850bf2c8f310c2c93b487d023994",
"assets/fonts/MaterialIcons-Regular.otf": "e88e6f86b8a008b9802580ff63c4bb58",
"assets/assets/ascent-braam-magma-brass-d-cinematic-trailer-sound-effect-222269.mp3": "3946e2bfc79e83f331c8d903a47fcc24",
"assets/assets/Voicy_ure%2520trash%2520kid%2520sound%2520effect.mp3": "c0367ad63f23007d75f220f7064cd813",
"assets/assets/image_app/speaking.png": "ed87482c6f4a396572f186b26cdab659",
"assets/assets/image_app/bookche.png": "cc0853eb6f8fc959491fa4a976a0b85d",
"assets/assets/image_app/lis.png": "df4019edec444d96b8c9a1dd601e464a",
"assets/assets/image_app/reading.png": "79d466567f26479061129f0baf2e578f",
"assets/assets/image_app/writing.png": "ef43b9f1b7e666364044d697fa086364",
"assets/assets/alphabet/%25D0%25AE%25D1%258C.mp3": "42b03e5243a8474faeab0341f2b8de07",
"assets/assets/alphabet/%25D0%259FI.mp3": "cb9dd06f462a6a9381480c612da4f1fe",
"assets/assets/alphabet/%25D0%25A6I.mp3": "de84dc5e74c6facc5b5f93f58fc60b55",
"assets/assets/alphabet/%25D0%25A7I.mp3": "b19bc6fddc9cf47f93358b75f78610fd",
"assets/assets/alphabet/%25D0%2599.mp3": "3a56b1206ba77c905de4b85334dbe6bd",
"assets/assets/alphabet/%25D0%25AC.mp3": "c40ed40dc50afcf0fce31ec5acf8479d",
"assets/assets/alphabet/%25D0%25A5.mp3": "08a2a3e49c94a126cc4491a2f80cc781",
"assets/assets/alphabet/%25D0%25A4.mp3": "88efa3ed1aa9ec65bd2d9f3203796ff2",
"assets/assets/alphabet/%25D0%25AB.mp3": "c962baf7e92fc18a7dd1bfc6beee0104",
"assets/assets/alphabet/%25D0%2598.mp3": "825d7dbf82a32fb9135d4fa001117966",
"assets/assets/alphabet/%25D0%2593%2520(1).mp3": "22d90002d2507f248b92c7c7dfdc53ea",
"assets/assets/alphabet/%25D0%25A6.mp3": "80929aa8bcc761a941e8413ea3fff119",
"assets/assets/alphabet/%25D0%25A7.mp3": "bb9672c57398f915865bb20f4454488d",
"assets/assets/alphabet/%25D0%25AA.mp3": "edbb6fc3484dfee4cc5d79c9d17702c8",
"assets/assets/alphabet/%25D0%25A5%25D1%258C.mp3": "d179891752e113498a941be1984569f0",
"assets/assets/alphabet/%25D0%259A%25D1%258A.mp3": "1021a5e3fa1778b25823a288fc8b96fe",
"assets/assets/alphabet/%25D0%2590%25D1%258C.mp3": "cdd0067693a517b4cacf7597d34f9889",
"assets/assets/alphabet/%25D0%25A3.mp3": "5f4d1aa054a7d19e34c189720832f4c7",
"assets/assets/alphabet/%25D0%25AE.mp3": "2552e9b6e21271bb6a40b42891f3b435",
"assets/assets/alphabet/%25D0%25AD.mp3": "9814312931b35fbcd57732a832fec394",
"assets/assets/alphabet/%25D0%25A2.mp3": "470fad9959030f73ef3e34370e8d8733",
"assets/assets/alphabet/%25D0%25A3%25D1%258C.mp3": "b0faf41d11494f09c935056546182277",
"assets/assets/alphabet/%25D0%25A0.mp3": "64b3449fe38d45f8234b76ff2c611553",
"assets/assets/alphabet/%25D0%25AF.mp3": "fa533942bafb9aae34054037f0a54b31",
"assets/assets/alphabet/%25D0%25A1.mp3": "6f101a52189c4a7ffc1ec3f8d1897689",
"assets/assets/alphabet/%25D0%259AI.mp3": "6ff69957672e4167b3c1b960176ae48d",
"assets/assets/alphabet/%25D0%259A%25D1%2585.mp3": "0b45846fb370c89919b6c96c1231ff4a",
"assets/assets/alphabet/%25D0%25A2I.mp3": "35e9ca4bcc22aff4903ef1fe94a9e641",
"assets/assets/alphabet/%25D0%259F.mp3": "70b6b85451db4e94cb218d41eb1177fd",
"assets/assets/alphabet/%25D0%2591.mp3": "75d4d8d3fb596026a25f3b11342c6fd5",
"assets/assets/alphabet/%25D0%259E.mp3": "1b886500307bb3680c565f413096aa7b",
"assets/assets/alphabet/%25D0%259D.mp3": "30c06a299b3922f33b09d2c98ff4bcd4",
"assets/assets/alphabet/%25D0%2592.mp3": "fc3a947ca0bbbb085f9d2f163e666898",
"assets/assets/alphabet/%25D0%2590%2520(1).mp3": "f2b95e180712a2121a708fe909c0485b",
"assets/assets/alphabet/%25D0%2596.mp3": "b2556ee7b3656e7ae786829cee893d7b",
"assets/assets/alphabet/%25D0%2597.mp3": "d123aed6fff844029058aa4d9ea6b0f4",
"assets/assets/alphabet/%25D0%259A.mp3": "1b3e5a552d70c457388bfe0ae7ea1acb",
"assets/assets/alphabet/%25D0%259C.mp3": "53d240df01bf8eaffe9692d667615aef",
"assets/assets/alphabet/%25D0%2581.mp3": "5d677594d389f2a0e6164f0903ec7b80",
"assets/assets/alphabet/%25D0%2595.mp3": "827eef1db031d42b9bff5e6b37a36796",
"assets/assets/alphabet/%25D0%25A9.mp3": "6e3dc3605b10ebd6c5a4211396240142",
"assets/assets/alphabet/%25D0%25A8.mp3": "edcf4482bc5daabc16d272d0193f9ce4",
"assets/assets/alphabet/%25D0%2594.mp3": "15d57cf99777766b5058d24e5af8f45c",
"assets/assets/alphabet/%25D0%259B.mp3": "2440fa7b854879f18664e07eb04eea63",
"assets/assets/alphabet/I.mp3": "32cdba889b174c46b9d48d2f18abcc10",
"assets/assets/alphabet/%25D0%2593I.mp3": "2935d87ac8b66eb75bf94ae132d7e5be",
"assets/assets/alphabet/%25D0%25AF%25D1%258C.mp3": "2d911516d8cc85e605fabcd4e8cba6dd",
"assets/assets/alphabet/%25D0%259E%25D1%258C.mp3": "26e429a60bcc8660ef375ef9fc988507",
"assets/assets/alphabet/%25D0%25A5I.mp3": "18cb7348c904e7d272a6a88b40b0958c",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
