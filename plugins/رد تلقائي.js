
let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*هلا بيك يعمري 😩❤‍🔥*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*♥🐥وعليكم السلام*',  
     ]; 
   }else if (/^يسلم ايد الي عملك$/i.test(m.text)) { 
     responses = [ 
'*حبيبي والله بس متجبش سرتو عشان ميجيش لينا 😂*'
     ]; 

 }else if (/^بيبو مين عمك|بيبو عمك$/i.test(m.text)) { 
     responses = [ 
'*العقرب اككيد😩❤‍🔥*'
     ]; 
   }else if (/^بيبو انت مرتبط$/i.test(m.text)) { 
     responses = [ 
'*لا ولا عايز ارتباط🏌🏻‍♂💔*'
   ]; 
   }else if (/^بيبو بتحبني|بوت بتحبني$/i.test(m.text)) { 
     responses = [ 
'*اموت فيك 🌚💔*',
'*اكرهك🙂💔*',
'*احبك نص حب 🙃💔*',
]; 
   }else if (/^بيبو بتكرهني$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',   ]; 
     
     }else if (/^اية جمال هنا$/i.test(m.text)) { 
     responses = [ 
       '*بتهزار القمر نفسو هنا 🥺🌚♥*',  

     ]; 
}else if (/^غني/i.test(m.text)) { 
     responses = [ 
       '*صوتي مش حلو 🥺*',  

     ]; 
   }else if (/بيبو انت منين$/i.test(m.text)) { 
     responses = [ 
'شرقاوي والي ييجي عليا يبقا علي موتو ناوي 😹❤'
     ]; 
   } else if (/^انت حبي$/i.test(m.text)) { 
     responses = [ 
'*مـي تو 🙂🫀*'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       'بخير ي قلبي الحمدالله',  

     ];
     }else if (/^يا زفت$/i.test(m.text)) { 
     responses = [ 
       ' هتغلط هنغلط معليش احنا بنتكلم 😏  مفيش زفت غيرك',  

     ];
     }else if (/^جيت$/i.test(m.text)) { 
     responses = [ 
       'نورت ي قلبي ❤',  

     
     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلا♥*',  

     ]; 
     }else if (/^مساء الخير|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح الخير|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد♥*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if(/العقرب عايزك/i.test(m.text)) { 
     responses = [ 
       '*استر يارب وربنا ما عملت حاجه🥺*',  
     ];
            }else if (/^بكرهك$/i.test(m.text)) { 
     responses = [ 
       '*علي اساس اني بحبك 😂♥*',  
     ];
            }else if (/انا حبيت البوت/i.test(m.text)) {
     responses = [ 
       '*ي خلاثي عليا كلو بيحبني كده انا اتشهرت 😹😹❤*',  
     ];
            }else if (/انا جيت/i.test(m.text)) {
     responses = [ 
       '*نورت ي حب 🫀🌚*',  
     ];
                 }else if (/الناس جات يا بيبو/i.test(m.text)) {
     responses = [ 
       '*يعني اعمل اي ازغرط ولا اي  لولوولوولولوولوي😹❤*',  
     ];
                 }else if (/انت عندك كام سنه/i.test(m.text)) {
     responses = [ 
       '*عندي الضغط والسكر تعبان 🥺❤️‍🩹*',  
     ];
            }else if (/امك اسمها اي/i.test(m.text)) {
     responses = [ 
       '*ام بيبو ي اخويا وانت 😹❤*',  
     ];
                  }else if (/هات رقم امك/i.test(m.text)) {
     responses = [ 
       '*اكتب ورايا 0101 ورني هتلقيها بترد علي طول 😹😹👀*',  
     ];
                 }else if (/ازعجتكم معليش 😂/.test(m.text)) {
     responses = [ 
       '*مفيش الكلام دا انت منور يا قمر حد لي شوق في حاجه 😏🌚♥*',  
     ];

                 }else if (/عندكم شامبو/.test(m.text)) {
     responses = [ 
       '*لا عندنا دباديب😹❤*',  
     ];

                 }else if (/انت بتخرف/i.test(m.text)) {
     responses = [ 
       '*بقولك اي انا بوت محترم مش هغلط فيك 😔*',  
     ];

                             }else if (/لا ارقص/i.test(m.text)) {
     responses = [ 
       '*مش بعرف هيقيقيقيق 😹❤*',  
     ];
                 }else if (/اسمك اي/i.test(m.text)) {
     responses = [ 
       '*اسمي انسان🌚🫀*',  
     ];
                 }else if (/عايش من امتا/i.test(m.text)) {
     responses = [ 
       '*عايش من زمان 😹❤*',  
     ];
                 }else if (/بتحب حد/i.test(m.text)) {
     responses = [ 
       '*كان يا مكان 🥺*',  
     ];
                 }else if (/شاطر/i.test(m.text)) {
     responses = [ 
       '*عارف مش مستني كلامك 😒*',  
     ];
                 }else if (/يا قلبي/i.test(m.text)) {
     responses = [ 
       '*قلبك في جسمك يا حبيبي 😒*',  
     ];

            }else if (/جربي/i.test(m.text)) {
     responses = [ 
       '*بس يا بابا كفايا لعب انا زهقت*',  
     ];

                 }else if (/حاضر/i.test(m.text)) {
     responses = [ 
       '*ي اختي قميله انت بتسمعي الكلام يا حلوه 😹🫀*' 
     ];
                 }else if (/اهدي يا عم/i.test(m.text)) {
     responses = [ 
       '*عمك في البيت بيفقش بيض قلك مع البيض😹😹*',  
     ];

                 }else if (/لا بجد/i.test(m.text)) {
     responses = [ 
       '*فرح خالتك يوم الحد هيقيقيقيق 😹😹🫀*',  
     ];

                 }else if (/وحيات امك/i.test(m.text)) {
     responses = [ 
       '*وربنا شوفت ازاي 😹❤*',  
     ];

                 }else if (/احلف/i.test(m.text)) {
     responses = [ 
       '*وحيات عمك زحلف 😹❤*',  
     ];

                 }else if (/صدقتك/i.test(m.text)) {
     responses = [ 
       'وكمان مش عايز تصدقني ياااااااااا علي العيش والملح 😔',  
     ];

                 }else if (/صعبت عليا/i.test(m.text)) {
     responses = [ 
       '*ما يصعبش عليك غالي 😹❤*',  
     ];
                 }else if (/بوت/i.test(m.text)) {
     responses = [ 
       '*اسمي بيبو ي نجم 😒*',  
     ];
                 }else if (/عيد ميلاد المطور امتا/i.test(m.text)) {
     responses = [ 
       '*معرفش والله بس هو قال 14/2*',  
     ];

            }else if (/المطور اسمو اي/i.test(m.text)) {
     responses = [ 
       '*عمك وعم بلدك العقرب اليوتيوبر🤔*',  
     ];
                 }else if (/انت هكر/i.test(m.text)) {
     responses = [ 
  '*لا اكيد واحد صحاب علي علوكه واشرف كخه عايزو يطلع اي مو صلاح 🤷🏾‍♂️*',  
     ];

            }else if (/سلام/i.test(m.text)) {
     responses = [ 
       '*لا هرم يسطا 😹😹🫀*',  
     ];
              }else if (/سبني في حالي/i.test(m.text)) {
     responses = [ 
       '*متيجي نخلي هالو علي هالو ويبقا هالو واحد 😹❤*',  
     ];

                }else if (/قول نكته/i.test(m.text)) {
     responses = [ 
       '*نكته😹❤*',  
     ];
                 }else if (/لا ضحكني/i.test(m.text)) {
     responses = [ 
       '*لا مش هينفع سنانك مسوسه 😹❤*',  
     ];
                 }else if (/🤨/i.test(m.text)) {
     responses = [ 
       '*نزل حجبك عشان بخاف وركبي بتخبط علي الجران 😒*',  
     ];
                 }else if (/😔/i.test(m.text)) {
     responses = [ 
       '*مالك ي روحي 🥺*',  
     ];
                 }else if (/زعلان/i.test(m.text)) {
     responses = [ 
       '*مين زعلك وانزل افتح عليه مطوه وزعلو 😏*',  
     ];
                 }else if (/مقطوع من شجره/i.test(m.text)) {
     responses = [ 
       '*لا متشعبط فيها 😹❤*',  
     ];
                 }else if (/عسل/i.test(m.text)) {
     responses = [ 
       '*ربنا يخليني ليا وما يحرمني مني ابدا مش عارف من غيري هتعملو اي 🤷🏾‍♂️😹😹❤*',  
     ];
                 }else if (/سكر/i.test(m.text)) {
     responses = [ 
       '*لا بقا غالي مش هينفع 😹❤*',  

       
     ];
                 }else if (/حب البت دي/i.test(m.text)) {
     responses = [ 
       '*5موح 😹❤*',  
     ];
                 }else if (/بوسها/i.test(m.text)) {
     responses = [ 
       '*لا اخلقي متسمحش غير بي 7000 بوسه بس 😔😹😹❤*',  
     ];
                 }else if (/وانت خلصتهم فين/i.test(m.text)) {
     responses = [ 
       '*نعمل اي بقا مشهور ومحبوب 😹❤*',  
     ];
                 }else if (/طيب/i.test(m.text)) {
     responses = [       '*فرح خالتك قريب هيقيقيقيق 😹❤*',  
     ];
                 }else if (/اظبط/i.test(m.text)) {
     responses = [ 
       '*علي الساعه كام هيقيقيقيق😹❤*',  
     ];
                 }else if (/اسكت/i.test(m.text)) {
     responses = [ 
      '*ماشي😔*',  
     ];
                 }else if (/ايوا كده/i.test(m.text)) {
     responses = [ 
       '*انا بس ساكت لاجل العقرب غير كده هزعلك*',  
     ];
                 }else if (/حبيبي/i.test(m.text)) {
     responses = [ 
       '*حبك برص انا مرتبط ام العيال لو عرفت هتنفخني 😔*',  
     ];
                 }else if (/امك صحبتي/i.test(m.text)) {
     responses = [ 
       '*ربنا يسامحك😔*',  
     ];
                 }else if (/يابارد/i.test(m.text)) {
     responses = [ 
       '*مفيش ابرد منك 😒*',  
     ];
                 }else if (/بتحبني/i.test(m.text)) {
     responses = [ 
       '*بموت فيك ياقلبي 🥺❤*',  
     ];
                 }else if (/الساعه كام/i.test(m.text)) {
     responses = [ 
       '*واحده واتنين بيعكسوها😹❤*',  
     ];
                 }else if (/انا السبب /i.test(m.text)) {
     responses = [ 
       '*عمك اسمو رجب 😹❤*',  
     ];
                 }else if (/اضحك ولا ابين سناني/i.test(m.text)) {
     responses = [ 
       '*لا بلاش عشان سنانك مسوسه 😹❤*',  
     ];
                 }else if (/يجدع/i.test(m.text)) {
     responses = [ 
       '*عجبتك😹❤*',  
     ];
                 }else if (/امك/i.test(m.text)) {
     responses = [ 
       '*حلوه بتسلم عليكي 🌚❤*',  
     ];
                 }else if (/معليش/i.test(m.text)) {
     responses = [ 
       '*خلاص مش زعلان خد راحتك 🥺*',  
     ];
                 }else if (/تربيتي/i.test(m.text)) {
     responses = [ 
       '*يا عم اتنيل هو انا اتربيت  😹❤*',  
     ];
          
       }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler; 