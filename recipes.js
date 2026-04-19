const RECIPES = [
  // ─── VEG BREAKFAST ───
  {
    id:1, name:"Poha", emoji:"🍚", type:"veg", cat:"breakfast", time:20, serves:2,
    desc:"Flattened rice cooked with mustard, curry leaves & fresh veggies.",
    ingredients:["2 cups flattened rice (poha)","1 onion, chopped","2 green chillies","½ tsp mustard seeds","½ tsp turmeric","Salt to taste","Fresh coriander","Lemon juice","Oil"],
    steps:["Rinse poha in water and drain. Let it sit for 5 min.","Heat oil in a pan, add mustard seeds and let them splutter.","Add green chillies and onion. Sauté till golden.","Add turmeric and salt. Mix in poha gently.","Cook on low flame for 3 min. Squeeze lemon juice.","Garnish with coriander and serve hot."],
    tips:"Add roasted peanuts for extra crunch. Sev on top makes it street-style!"
  },
  {
    id:2, name:"Idli Sambar", emoji:"🫓", type:"veg", cat:"breakfast", time:40, serves:4,
    desc:"Fluffy steamed rice cakes served with piping hot sambar and chutneys.",
    ingredients:["2 cups idli batter (fermented)","1 cup toor dal","Tamarind pulp","Sambar masala","Mixed vegetables","Mustard seeds","Curry leaves","Dry red chillies","Oil, salt"],
    steps:["Pour batter into greased idli moulds. Steam for 12–15 min.","Pressure cook dal with vegetables and turmeric.","Add tamarind water, sambar masala, and salt.","Temper with mustard seeds, curry leaves and dry red chillies.","Simmer sambar for 10 min.","Serve idlis with sambar and coconut chutney."],
    tips:"Ferment batter for at least 8 hours for best fluffy idlis."
  },
  {
    id:3, name:"Aloo Paratha", emoji:"🫓", type:"veg", cat:"breakfast", time:35, serves:3,
    desc:"Crispy whole-wheat flatbread stuffed with spiced mashed potatoes.",
    ingredients:["2 cups wheat flour","3 boiled potatoes, mashed","1 tsp cumin seeds","1 tsp red chilli powder","½ tsp amchur","Fresh coriander","Ginger, grated","Salt, ghee"],
    steps:["Knead soft dough with flour and water. Rest 20 min.","Mix mashed potato with spices, coriander, and ginger.","Divide dough into balls. Roll out, place stuffing, seal and roll again.","Cook on hot tawa with ghee on both sides till golden.","Serve hot with butter, curd, and pickle."],
    tips:"Don't over-stuff; seal edges well to avoid filling spilling out."
  },
  {
    id:4, name:"Upma", emoji:"🍲", type:"veg", cat:"breakfast", time:20, serves:2,
    desc:"Savoury semolina porridge tempered with mustard, nuts and vegetables.",
    ingredients:["1 cup semolina (rava)","1 onion","2 green chillies","½ tsp mustard seeds","Cashews","Curry leaves","2 cups water","Salt","Oil"],
    steps:["Dry roast semolina till light golden. Keep aside.","Heat oil, add mustard seeds, cashews, curry leaves.","Add onions and chillies. Sauté till soft.","Add water and salt. Bring to boil.","Slowly add semolina stirring continuously.","Cover and cook 3 min. Serve hot."],
    tips:"Add lemon juice and grated coconut to elevate flavour."
  },

  // ─── VEG MAIN COURSE ───
  {
    id:5, name:"Palak Paneer", emoji:"🥬", type:"veg", cat:"main", time:40, serves:4,
    desc:"Cottage cheese cubes in a rich, creamy spinach gravy.",
    ingredients:["250g paneer, cubed","500g spinach","2 onions","3 tomatoes","Ginger-garlic paste","1 tsp garam masala","Fresh cream","Cumin, coriander powder","Oil, salt"],
    steps:["Blanch spinach in hot water, blend to smooth puree.","Sauté onions in oil till golden. Add ginger-garlic paste.","Add tomatoes and cook till oil separates.","Add all spices, cook 2 min. Add spinach puree.","Simmer 5 min, add paneer cubes.","Finish with fresh cream and garam masala."],
    tips:"Lightly fry paneer before adding for a golden texture."
  },
  {
    id:6, name:"Dal Makhani", emoji:"🫘", type:"veg", cat:"main", time:60, serves:4,
    desc:"Whole black lentils slow-cooked overnight with butter and cream.",
    ingredients:["1 cup whole black dal","¼ cup rajma","2 tomatoes, pureed","Ginger-garlic paste","3 tbsp butter","½ cup cream","Bay leaf","Whole spices","Salt"],
    steps:["Soak dal and rajma overnight. Pressure cook till soft.","Sauté whole spices in butter. Add ginger-garlic paste.","Add tomato puree and cook till thick.","Add cooked dal, salt, and simmer on very low flame 30 min.","Add cream and butter. Stir gently.","Serve with naan or rice."],
    tips:"Longer slow cooking (even overnight on low flame) gives restaurant taste."
  },
  {
    id:7, name:"Chole Bhature", emoji:"🫘", type:"veg", cat:"main", time:50, serves:4,
    desc:"Spicy chickpea curry paired with fluffy deep-fried bread.",
    ingredients:["2 cups chickpeas, soaked","2 onions","3 tomatoes","Chole masala","Ginger-garlic paste","Tea bag (for color)","2 cups maida","Yogurt","Baking powder","Oil for frying"],
    steps:["Pressure cook chickpeas with tea bag and salt till soft.","Make bhatura dough with maida, yogurt, baking powder. Rest 2 hours.","Sauté onions, ginger-garlic paste. Add tomatoes and chole masala.","Add chickpeas with water. Simmer 20 min.","Roll bhatura dough and deep fry till puffed.","Serve piping hot together."],
    tips:"Add dried amla to chole for depth and authentic flavour."
  },
  {
    id:8, name:"Baingan Bharta", emoji:"🍆", type:"veg", cat:"main", time:40, serves:3,
    desc:"Smoky roasted eggplant mashed with spices and herbs.",
    ingredients:["2 large brinjals","2 onions","3 tomatoes","Green chillies","Ginger-garlic paste","Coriander powder","Garam masala","Fresh coriander","Oil, salt"],
    steps:["Roast brinjals directly on flame till charred. Cool, peel, mash.","Heat oil, sauté onions till golden.","Add ginger-garlic paste, green chillies, tomatoes.","Cook till masala is thick. Add mashed brinjal.","Mix well, cook 5 min. Add spices.","Garnish with fresh coriander."],
    tips:"Roasting on open flame gives the authentic smoky bharta taste."
  },
  {
    id:9, name:"Matar Paneer", emoji:"🫛", type:"veg", cat:"main", time:35, serves:4,
    desc:"Green peas and paneer in a tangy tomato-onion gravy.",
    ingredients:["200g paneer","1 cup green peas","2 onions, pureed","3 tomatoes, pureed","Kashmiri chilli","Garam masala","Cardamom, cloves","Oil, butter","Salt, sugar"],
    steps:["Sauté onion puree in oil till golden brown.","Add tomato puree, cook till thick.","Add Kashmiri chilli, garam masala, and salt.","Add peas and cook 5 min.","Add paneer and ½ cup water.","Simmer 5 min. Finish with butter."],
    tips:"Add a pinch of sugar to balance the tomato acidity."
  },
  {
    id:10, name:"Kadhi Pakoda", emoji:"🍲", type:"veg", cat:"main", time:50, serves:4,
    desc:"Crispy gram flour fritters dunked in tangy yogurt kadhi.",
    ingredients:["2 cups yogurt","4 tbsp gram flour","Besan for pakodas","Onion rings","Mustard seeds","Dry red chillies","Fenugreek seeds","Turmeric, red chilli","Salt, oil"],
    steps:["Mix besan, onion, salt to make thick batter. Deep fry pakodas.","Whisk yogurt with gram flour, turmeric, and water.","Bring kadhi to boil stirring constantly. Simmer 20 min.","Make tempering with mustard, fenugreek, red chillies in oil.","Pour tempering over kadhi. Add pakodas.","Serve with steamed rice."],
    tips:"Sour yogurt makes the best kadhi. Keep stirring to avoid lumps."
  },

  // ─── VEG SNACKS ───
  {
    id:11, name:"Samosa", emoji:"🥟", type:"veg", cat:"snacks", time:60, serves:6,
    desc:"Crispy triangular pastries stuffed with spiced potato and peas.",
    ingredients:["2 cups maida","3 boiled potatoes","1 cup green peas","Ginger, green chillies","Cumin seeds","Coriander, amchur","Garam masala","Oil for frying","Salt"],
    steps:["Mix maida with oil and salt. Add water to make stiff dough. Rest 20 min.","Make filling: cook peas, mix with mashed potato and spices.","Divide dough into balls. Roll into ovals, cut in half.","Shape into cone, fill, and seal edges tightly.","Deep fry on medium heat till golden and crispy.","Serve with mint chutney and tamarind sauce."],
    tips:"Fry on medium-low heat for extra crunchiness that lasts."
  },
  {
    id:12, name:"Pav Bhaji", emoji:"🥙", type:"veg", cat:"snacks", time:40, serves:4,
    desc:"Buttery spiced mashed vegetable curry served with toasted bread rolls.",
    ingredients:["3 potatoes","1 cauliflower","1 capsicum","2 tomatoes","Pav bhaji masala","Butter","Dinner rolls (pav)","Onions, coriander","Lemon juice"],
    steps:["Boil and mash all vegetables together.","Heat butter, sauté onions and capsicum till soft.","Add tomatoes and pav bhaji masala. Cook till thick.","Add mashed vegetables and mash together. Cook 10 min.","Toast pavs on tawa with butter till golden.","Serve bhaji topped with butter, lemon, and raw onion."],
    tips:"Use a potato masher and don't over-mash — texture is key!"
  },
  {
    id:13, name:"Aloo Tikki", emoji:"🟡", type:"veg", cat:"snacks", time:30, serves:4,
    desc:"Crispy shallow-fried potato patties — the heart of street chaat.",
    ingredients:["4 boiled potatoes","Bread slices (soaked)","Green chillies","Cumin, coriander","Amchur, salt","Oil for shallow frying","Coriander leaves"],
    steps:["Mash potatoes with bread, spices, and salt.","Shape into round flat tikkis.","Shallow fry on hot tawa with oil till golden both sides.","Serve with mint chutney and tamarind chutney.","Top with curd and chaat masala for full chaat experience."],
    tips:"Adding soaked bread keeps tikkis from cracking while frying."
  },

  // ─── VEG SWEETS ───
  {
    id:14, name:"Gulab Jamun", emoji:"🍮", type:"veg", cat:"sweet", time:50, serves:8,
    desc:"Soft milk dumplings soaked in rose-flavoured sugar syrup.",
    ingredients:["1 cup khoya","4 tbsp maida","¼ tsp baking soda","Milk as needed","2 cups sugar","1½ cups water","Cardamom pods","Rose water","Oil for frying"],
    steps:["Make sugar syrup with sugar, water, cardamom, and rose water. Keep warm.","Mix khoya, maida, and baking soda. Knead with milk into soft dough.","Roll into smooth crack-free balls.","Fry on low flame till dark golden brown.","Drop immediately into warm (not hot) syrup.","Soak at least 2 hours before serving."],
    tips:"Keep oil temperature low while frying for even cooking inside."
  },
  {
    id:15, name:"Kheer", emoji:"🥛", type:"veg", cat:"sweet", time:45, serves:6,
    desc:"Creamy rice pudding with cardamom, saffron, and dry fruits.",
    ingredients:["½ cup basmati rice","1 litre full-fat milk","¾ cup sugar","Cardamom powder","Saffron strands","Cashews, almonds, raisins","Rose water"],
    steps:["Wash rice. Soak 30 min.","Boil milk in heavy pan. Add rice.","Cook on low flame stirring frequently for 30 min.","Add sugar, cardamom, and saffron.","Cook another 10 min till thick and creamy.","Garnish with dry fruits. Serve warm or chilled."],
    tips:"Bloom saffron in warm milk before adding for deeper colour."
  },
  {
    id:16, name:"Gajar ka Halwa", emoji:"🥕", type:"veg", cat:"sweet", time:60, serves:6,
    desc:"Rich carrot pudding cooked in ghee, milk, and sugar with cardamom.",
    ingredients:["1 kg red carrots, grated","1 litre milk","¾ cup sugar","4 tbsp ghee","Cardamom powder","Cashews, raisins","Khoya (optional)"],
    steps:["Cook grated carrots in milk on medium flame till milk is absorbed (40 min).","Add ghee and sugar. Stir well.","Cook till dry and glossy.","Add khoya if using. Cook 5 more min.","Add cardamom powder and dry fruits.","Serve hot garnished with nuts."],
    tips:"Use red Delhi carrots in winter for the authentic sweet taste."
  },
  {
    id:17, name:"Malpua", emoji:"🥞", type:"veg", cat:"sweet", time:40, serves:4,
    desc:"Soft Indian pancakes dipped in sugar syrup, topped with rabri.",
    ingredients:["1 cup maida","¼ cup semolina","1 cup milk","Sugar syrup","Cardamom, fennel seeds","Ghee/oil for frying","Rabri for topping"],
    steps:["Mix maida, semolina, milk to batter. Let rest 30 min.","Prepare sugar syrup (one string consistency).","Pour batter in hot ghee in small circles.","Fry till golden both sides.","Dip immediately in sugar syrup.","Serve topped with thick rabri."],
    tips:"Add mashed banana to batter for extra soft malpuas."
  },
  {
    id:18, name:"Ladoo", emoji:"🟠", type:"veg", cat:"sweet", time:30, serves:10,
    desc:"Classic besan ladoo — melt-in-mouth sweet balls with ghee and cardamom.",
    ingredients:["2 cups gram flour (besan)","1 cup ghee","1½ cups powdered sugar","Cardamom powder","Cashews, pistachios","A pinch of nutmeg"],
    steps:["Roast besan in ghee on low flame till fragrant and golden (20 min).","Remove from flame. Cool slightly.","Add powdered sugar, cardamom, and nutmeg. Mix well.","While warm, shape into round ladoos.","Press a nut in the centre. Cool and store."],
    tips:"Never stop stirring while roasting besan — it burns quickly!"
  },

  // ─── VEG RICE ───
  {
    id:19, name:"Vegetable Biryani", emoji:"🍛", type:"veg", cat:"rice", time:60, serves:4,
    desc:"Fragrant basmati rice layered with spiced vegetables and saffron.",
    ingredients:["2 cups basmati rice","Mixed vegetables (potato, carrot, beans)","Whole spices","Biryani masala","Fried onions","Saffron milk","Mint, coriander","Ghee, oil","Yogurt"],
    steps:["Soak and par-cook rice with whole spices till 70% done.","Marinate vegetables in yogurt and biryani masala.","Cook vegetables in oil till half done.","Layer in pot: vegetables, rice, fried onions, mint, saffron milk.","Seal with dough or tight lid. Dum cook 25 min on low flame.","Open and gently mix before serving."],
    tips:"Dum cooking on a tawa (heat diffuser) prevents burning the bottom."
  },
  {
    id:20, name:"Peas Pulao", emoji:"🫛", type:"veg", cat:"rice", time:25, serves:3,
    desc:"Lightly spiced basmati rice with fresh green peas.",
    ingredients:["1 cup basmati rice","1 cup green peas","Bay leaf","Cumin seeds","Cloves, cardamom","Onion","Ghee","Salt, water"],
    steps:["Wash and soak rice 20 min.","Heat ghee, add whole spices and bay leaf.","Add onion and sauté till golden.","Add peas and rice. Sauté 2 min.","Add water (1:2), salt. Bring to boil.","Cover and cook on low till done."],
    tips:"Use a thick-bottomed pot and cook on the lowest flame."
  },

  // ─── VEG BREADS ───
  {
    id:21, name:"Butter Naan", emoji:"🫓", type:"veg", cat:"bread", time:30, serves:4,
    desc:"Pillowy leavened flatbread cooked in tandoor-style, brushed with butter.",
    ingredients:["2 cups maida","½ cup yogurt","1 tsp yeast","1 tsp sugar","Salt","Butter and garlic","Sesame seeds"],
    steps:["Mix yeast with warm water and sugar. Let froth 10 min.","Knead maida with yogurt, yeast, salt into soft dough.","Rest covered 1 hour till doubled.","Roll into oval shapes. Brush with water one side.","Cook on preheated tawa or grill till charred spots appear.","Brush generously with garlic butter."],
    tips:"Press naan firmly on the tawa — it should stick while cooking."
  },
  {
    id:22, name:"Puri", emoji:"🫓", type:"veg", cat:"bread", time:25, serves:4,
    desc:"Deep-fried puffed whole wheat bread, perfect with sabzi.",
    ingredients:["2 cups wheat flour","1 tbsp oil","Salt","Water to knead","Oil for deep frying"],
    steps:["Knead firm dough with flour, oil, salt, and water.","Rest 15 min. Divide into small balls.","Roll into thin circles.","Fry in hot oil — press gently with ladle to help puff.","Remove when golden. Drain on paper.","Serve immediately with aloo sabzi."],
    tips:"The dough must be firm (not soft) for puris to puff properly."
  },

  // ─── VEG SOUP/DAL ───
  {
    id:23, name:"Dal Tadka", emoji:"🫘", type:"veg", cat:"soup", time:30, serves:4,
    desc:"Yellow toor dal with a fragrant smoky ghee tempering.",
    ingredients:["1 cup toor dal","Turmeric","2 tomatoes","Ginger, green chillies","Ghee","Cumin seeds","Dry red chillies","Hing (asafoetida)","Garlic cloves"],
    steps:["Pressure cook dal with turmeric, tomatoes, ginger, and salt.","Mash lightly. Adjust water consistency.","For tadka: heat ghee, add cumin, dry red chillies, garlic, and hing.","Pour sizzling tadka over dal.","Mix gently and simmer 2 min.","Serve with steamed rice and ghee."],
    tips:"A second tadka poured just before serving gives deeper flavour."
  },
  {
    id:24, name:"Tomato Soup", emoji:"🍅", type:"veg", cat:"soup", time:25, serves:3,
    desc:"Smooth, comforting homemade tomato soup with Indian spices.",
    ingredients:["6 tomatoes","1 onion","Garlic","Butter","Black pepper","Basil or coriander","Cream","Sugar, salt","Vegetable stock"],
    steps:["Sauté onion and garlic in butter till soft.","Add chopped tomatoes, cook 10 min till mushy.","Blend smooth. Strain for silky texture.","Add stock, salt, pepper, and a pinch of sugar.","Simmer 5 min. Swirl cream before serving.","Serve with croutons or toast."],
    tips:"Roasting tomatoes first adds a deeper, sweeter flavour."
  },

  // ─── VEG DRINKS ───
  {
    id:25, name:"Mango Lassi", emoji:"🥭", type:"veg", cat:"drinks", time:10, serves:2,
    desc:"Thick, chilled mango and yogurt blended drink.",
    ingredients:["1 cup fresh mango pulp","1 cup thick curd","½ cup milk","4 tbsp sugar","Cardamom powder","Ice cubes","Saffron (optional)"],
    steps:["Blend mango pulp, curd, and milk till smooth.","Add sugar and cardamom. Blend again.","Taste and adjust sweetness.","Pour over ice.","Garnish with saffron strands and a mango slice."],
    tips:"Use Alphonso mangoes for the richest lassi."
  },
  {
    id:26, name:"Masala Chai", emoji:"☕", type:"veg", cat:"drinks", time:10, serves:2,
    desc:"Spiced Indian tea with ginger, cardamom, and milk.",
    ingredients:["2 cups water","1 cup milk","2 tsp tea leaves","Ginger, grated","2 cardamom pods","1 cinnamon stick","Sugar to taste"],
    steps:["Boil water with ginger, cardamom, and cinnamon.","Add tea leaves. Boil 2 min.","Add milk and sugar. Bring to full boil.","Reduce to simmer 2 min.","Strain into cups. Serve hot."],
    tips:"Lightly crush cardamom pods before adding for more fragrance."
  },

  // ─── NON-VEG MAIN ───
  {
    id:27, name:"Butter Chicken", emoji:"🍗", type:"nonveg", cat:"main", time:60, serves:4,
    desc:"Tender chicken in a silky, buttery tomato cream sauce.",
    ingredients:["1 kg chicken","Marinade: yogurt, ginger-garlic paste, spices","Butter","3 tomatoes, pureed","Fresh cream","Kashmiri chilli paste","Fenugreek leaves (kasuri methi)","Cardamom, cloves","Salt, sugar"],
    steps:["Marinate chicken with yogurt and spices. Rest 4 hours or overnight.","Grill or cook chicken in pan till charred. Keep aside.","Sauté whole spices in butter. Add ginger-garlic paste.","Add tomato puree and Kashmiri chilli. Cook 15 min till thick.","Blend gravy smooth. Return to pan. Add cream.","Add chicken and kasuri methi. Simmer 10 min."],
    tips:"Char the chicken well before adding to gravy — it adds smokiness."
  },
  {
    id:28, name:"Mutton Biryani", emoji:"🍖", type:"nonveg", cat:"rice", time:90, serves:6,
    desc:"Royal slow-cooked mutton biryani layered with saffron and fried onions.",
    ingredients:["1 kg mutton","3 cups basmati rice","Biryani masala","Yogurt","Fried onions","Saffron milk","Mint, coriander","Whole spices","Ghee, oil"],
    steps:["Marinate mutton with yogurt, biryani masala, fried onions overnight.","Cook marinated mutton till 80% done.","Par-cook rice with whole spices till 70% done.","Layer: mutton, rice, fried onions, mint, saffron milk.","Seal pot with dough. Dum cook 35 min on low flame.","Rest 10 min before opening."],
    tips:"Aged basmati rice gives longer, non-sticky grains in biryani."
  },
  {
    id:29, name:"Chicken Tikka Masala", emoji:"🍗", type:"nonveg", cat:"main", time:55, serves:4,
    desc:"Charred tandoor-style chicken in a rich, spiced tomato masala.",
    ingredients:["800g chicken","Yogurt marinade","Tomato puree","Onion","Cashew paste","Heavy cream","Tikka masala","Kasuri methi","Butter, oil"],
    steps:["Marinate chicken with yogurt, lemon, and tikka spices. Grill or broil.","Sauté onion in butter till golden.","Add tomato puree and cashew paste. Cook till thick.","Add all spices, cream. Simmer 10 min.","Add grilled chicken to gravy.","Finish with kasuri methi and butter."],
    tips:"Cashew paste makes the gravy luxuriously thick and creamy."
  },
  {
    id:30, name:"Fish Curry", emoji:"🐟", type:"nonveg", cat:"main", time:40, serves:4,
    desc:"Coastal-style fish curry in tangy coconut and tomato gravy.",
    ingredients:["600g fish fillets","1 cup coconut milk","2 tomatoes","Tamarind","Mustard seeds","Curry leaves","Green chillies","Turmeric, red chilli","Coriander powder","Oil, salt"],
    steps:["Marinate fish with turmeric and salt. Keep 15 min.","Heat oil, add mustard seeds and curry leaves.","Add onions, green chillies. Sauté till golden.","Add tomatoes and tamarind. Cook till mushy.","Add coconut milk and spices. Bring to boil.","Add fish and cook gently 8–10 min."],
    tips:"Never stir fish curry vigorously — the fish will break apart."
  },
  {
    id:31, name:"Egg Curry", emoji:"🥚", type:"nonveg", cat:"main", time:35, serves:3,
    desc:"Boiled eggs simmered in spicy onion-tomato curry.",
    ingredients:["6 eggs, hard-boiled","2 onions","3 tomatoes","Ginger-garlic paste","Egg curry masala","Turmeric, red chilli","Garam masala","Oil, salt","Fresh coriander"],
    steps:["Boil eggs, peel and make small slits. Lightly fry in oil.","Sauté onion till dark golden.","Add ginger-garlic paste. Cook 2 min.","Add tomatoes and all spices. Cook till oil separates.","Add water and eggs. Simmer 10 min.","Garnish with coriander and serve."],
    tips:"Frying eggs before adding to curry prevents them from breaking."
  },
  {
    id:32, name:"Keema Matar", emoji:"🥩", type:"nonveg", cat:"main", time:40, serves:4,
    desc:"Minced lamb cooked with green peas in aromatic spices.",
    ingredients:["500g minced mutton (keema)","1 cup green peas","2 onions","3 tomatoes","Ginger-garlic paste","Whole spices","Keema masala","Fresh coriander","Oil, salt"],
    steps:["Sauté whole spices in oil. Add onions till dark brown.","Add ginger-garlic paste. Cook well.","Add keema and cook till dry and browned.","Add tomatoes and all spices. Cook till thick.","Add peas and ½ cup water. Cook 15 min.","Garnish with coriander."],
    tips:"Cook keema on high heat first to remove moisture and get nice browning."
  },

  // ─── NON-VEG SNACKS ───
  {
    id:33, name:"Chicken 65", emoji:"🍗", type:"nonveg", cat:"snacks", time:35, serves:4,
    desc:"Fiery, crispy deep-fried chicken — a South Indian pub classic.",
    ingredients:["500g chicken, cubed","Yogurt","Red chilli powder","Ginger-garlic paste","Egg","Cornflour","Curry leaves","Food colour (optional)","Oil for frying"],
    steps:["Marinate chicken with yogurt, spices, egg, and cornflour. Rest 1 hour.","Deep fry in hot oil till crispy and cooked.","In a pan, temper curry leaves and green chillies in oil.","Toss fried chicken in this tempering.","Squeeze lemon and serve immediately with onion rings."],
    tips:"Double frying (fry, rest 5 min, fry again) gives extra crunch."
  },
  {
    id:34, name:"Seekh Kebab", emoji:"🥩", type:"nonveg", cat:"snacks", time:40, serves:4,
    desc:"Minced meat mixed with spices, skewered and grilled to perfection.",
    ingredients:["500g minced mutton","Onion, grated","Ginger-garlic paste","Green chillies, mint","Kebab spices","Eggs","Besan (roasted)","Oil, salt"],
    steps:["Mix all ingredients with minced meat. Refrigerate 1 hour.","Wet hands and wrap meat around skewers in cylindrical shape.","Grill on charcoal or in oven at 220°C for 15–18 min.","Baste with butter midway.","Serve with green chutney and sliced onions."],
    tips:"Squeeze out excess moisture from grated onion to avoid mushy kebabs."
  },

  // ─── NON-VEG SWEET ───
  {
    id:35, name:"Sheer Khurma", emoji:"🥛", type:"nonveg", cat:"sweet", time:40, serves:6,
    desc:"Vermicelli cooked in rich milk with dry fruits — an Eid special.",
    ingredients:["100g thin vermicelli","1 litre milk","¾ cup sugar","Ghee","Dates, almonds, cashews","Cardamom","Rose water","Saffron"],
    steps:["Roast vermicelli in ghee till golden.","Boil milk in heavy pan.","Add vermicelli and cook till soft.","Add sugar, saffron, and cardamom.","Add all dry fruits and dates.","Finish with rose water. Serve warm or chilled."],
    tips:"Use full-fat milk and be patient — reduce for richness."
  },

  // ─── JAIN VEG BREAKFAST ───
  {
    id:36, name:"Jain Poha", emoji:"🍚", type:"jain", cat:"breakfast", time:20, serves:2,
    desc:"Jain-friendly poha made without onion, garlic, or root vegetables.",
    ingredients:["2 cups flattened rice","Green chillies","Mustard seeds","Cumin seeds","Curry leaves","Turmeric, sugar","Lemon juice","Peanuts","Oil, salt, coriander"],
    steps:["Rinse and drain poha. Rest 5 min.","Heat oil. Add mustard seeds, cumin, curry leaves.","Add green chillies and peanuts. Roast 1 min.","Add turmeric, sugar, salt. Mix in poha.","Cook on low 3 min. Add lemon juice.","Garnish with coriander."],
    tips:"Jain poha tastes great with a pinch of black salt (sendha namak on fasting days)."
  },
  {
    id:37, name:"Sabudana Khichdi", emoji:"⚪", type:"jain", cat:"breakfast", time:30, serves:2,
    desc:"Tapioca pearls cooked with peanuts and green chillies — a fasting favourite.",
    ingredients:["1 cup sabudana (tapioca)","½ cup roasted peanuts, coarsely ground","Green chillies","Cumin seeds","Ghee","Rock salt","Lemon juice","Coriander"],
    steps:["Soak sabudana 4–6 hours. Drain. Spread and dry 30 min.","Mix with ground peanuts and rock salt.","Heat ghee, add cumin seeds and green chillies.","Add sabudana mixture. Toss gently.","Cook on medium flame for 8 min, stirring occasionally.","Finish with lemon juice and coriander."],
    tips:"Soaking correctly (not too wet) is key — sabudana must not be sticky."
  },

  // ─── JAIN MAIN ───
  {
    id:38, name:"Jain Dal Fry", emoji:"🫘", type:"jain", cat:"main", time:30, serves:4,
    desc:"Flavorful toor dal fry made without onion and garlic — Jain approved.",
    ingredients:["1 cup toor dal","2 tomatoes","Green chillies","Ginger","Asafoetida (hing)","Cumin seeds","Dry red chillies","Turmeric, coriander powder","Ghee, salt"],
    steps:["Pressure cook dal with turmeric, tomatoes, ginger.","Heat ghee, add hing, cumin seeds, dry red chillies.","Add tomatoes and spices. Cook till thick.","Add cooked dal. Simmer 10 min.","Garnish with coriander.","Serve with roti or rice."],
    tips:"Hing (asafoetida) replaces the depth that garlic and onion provide in Jain cooking."
  },
  {
    id:39, name:"Jain Palak Paneer", emoji:"🥬", type:"jain", cat:"main", time:35, serves:4,
    desc:"Creamy spinach-paneer curry without onion, garlic, or root vegetables.",
    ingredients:["250g paneer","500g spinach","2 tomatoes","Green chillies","Ginger","Hing (asafoetida)","Fresh cream","Garam masala","Cumin, oil, salt"],
    steps:["Blanch spinach and blend smooth.","Sauté hing and ginger in oil. Add tomatoes.","Cook till thick. Add spinach puree.","Add spices and cream. Simmer 5 min.","Add paneer cubes. Cook 3 min.","Serve with naan."],
    tips:"Skip potato and root veg — use raw banana if you want extra body."
  },
  {
    id:40, name:"Jain Chole", emoji:"🫘", type:"jain", cat:"main", time:45, serves:4,
    desc:"Tangy chickpea curry cooked without onion, garlic, ginger, or root vegetables.",
    ingredients:["2 cups chickpeas, soaked","Tomatoes","Chole masala","Asafoetida","Cumin seeds","Amchur","Tamarind","Coriander","Ghee, salt"],
    steps:["Pressure cook chickpeas till soft.","Heat ghee, add hing and cumin.","Add tomatoes and cook till thick.","Add chole masala, amchur, tamarind.","Add chickpeas with water. Simmer 20 min.","Garnish with coriander."],
    tips:"Add a dried pomegranate peel while boiling chickpeas for Jain chole's depth."
  },

  // ─── JAIN SNACKS ───
  {
    id:41, name:"Jain Dhokla", emoji:"🟡", type:"jain", cat:"snacks", time:30, serves:6,
    desc:"Soft, spongy fermented gram flour steamed cake — light and tangy.",
    ingredients:["2 cups besan","1 cup sour curd","Eno fruit salt","Green chillies","Ginger","Turmeric, salt","Mustard seeds","Curry leaves","Sugar, lemon juice"],
    steps:["Mix besan, curd, turmeric, green chillies into smooth batter.","Rest 4–8 hours. Add salt before steaming.","Just before steaming add Eno + water mixture. Mix gently.","Pour in greased plate. Steam 15 min.","Make tempering with mustard seeds, curry leaves, sugar, and water.","Pour over dhokla. Cut and serve."],
    tips:"The Eno is added at the last moment — work fast and don't over-mix."
  },
  {
    id:42, name:"Jain Khandvi", emoji:"🟡", type:"jain", cat:"snacks", time:30, serves:4,
    desc:"Silky gram flour rolls with a tangy yogurt base — a Gujarat gem.",
    ingredients:["1 cup besan","1½ cups buttermilk","Turmeric, ginger","Mustard seeds","Sesame seeds","Green chillies","Fresh coconut, coriander","Sugar, salt"],
    steps:["Mix besan with buttermilk, turmeric, and ginger. No lumps.","Cook on medium flame stirring constantly till thick.","Spread thin layers on greased surface immediately.","Let it cool. Roll tightly.","Make tempering, pour over rolls.","Garnish with coconut and coriander."],
    tips:"Spreading fast while the mixture is hot is the trickiest part — work quickly!"
  },

  // ─── JAIN SWEET ───
  {
    id:43, name:"Jain Shrikhand", emoji:"🍮", type:"jain", cat:"sweet", time:15, serves:4,
    desc:"Strained yogurt sweetened with sugar and flavoured with saffron and cardamom.",
    ingredients:["500g thick curd (hung curd)","¾ cup powdered sugar","Saffron","Cardamom powder","Pistachios","Rose water"],
    steps:["Hang curd in muslin cloth overnight.","Bloom saffron in warm milk.","Mix hung curd with powdered sugar till smooth.","Add saffron, cardamom, rose water.","Chill for 1 hour.","Garnish with pistachios."],
    tips:"The longer you hang the curd, the richer and creamier the shrikhand."
  },
  {
    id:44, name:"Jain Mohanthal", emoji:"🟠", type:"jain", cat:"sweet", time:45, serves:10,
    desc:"Traditional Gujarati gram flour fudge with ghee and cardamom.",
    ingredients:["2 cups coarse besan","1 cup ghee","1½ cups sugar","½ cup water","Cardamom powder","Saffron","Pistachios, almonds"],
    steps:["Mix besan with a little ghee into crumbly texture. Rest 20 min.","Roast besan in remaining ghee on low flame till golden and fragrant.","Make 2-string consistency sugar syrup.","Remove besan from flame. Slowly add syrup, mixing fast.","Add cardamom and saffron. Pour in greased tray.","Cut when slightly set. Garnish with nuts."],
    tips:"Roasting besan slowly is the secret — don't rush this step."
  },
  {
    id:45, name:"Jain Peda", emoji:"⚪", type:"jain", cat:"sweet", time:25, serves:12,
    desc:"Soft milk-based sweet balls flavoured with cardamom and saffron.",
    ingredients:["500g khoya","1 cup powdered sugar","Cardamom powder","Saffron","Pistachio slices"],
    steps:["Cook khoya on low flame stirring till it leaves sides of pan.","Remove from heat. Let cool till warm.","Add powdered sugar and cardamom. Mix well.","Shape into small round flat pedas.","Press pistachio sliver on top.","Let set for 30 min."],
    tips:"Don't over-cook khoya or pedas will become hard."
  },

  // ─── JAIN RICE ───
  {
    id:46, name:"Jain Vegetable Pulao", emoji:"🍚", type:"jain", cat:"rice", time:30, serves:4,
    desc:"Fragrant basmati rice with Jain-safe vegetables — no root veg.",
    ingredients:["2 cups basmati rice","Green peas, capsicum, beans","Whole spices (bay leaf, cloves, cardamom)","Cumin seeds","Hing","Ghee, salt","Fresh coriander"],
    steps:["Wash and soak rice 20 min.","Heat ghee. Add hing, cumin, whole spices.","Add vegetables and sauté 3 min.","Add rice and sauté 2 min.","Add water (1:2), salt. Bring to boil.","Cover and cook on low till done."],
    tips:"Add a whole cinnamon stick for warm, woody fragrance."
  },

  // ─── JAIN SOUP ───
  {
    id:47, name:"Jain Tomato Soup", emoji:"🍅", type:"jain", cat:"soup", time:25, serves:3,
    desc:"Comforting tomato soup without onion or garlic — Jain kitchen approved.",
    ingredients:["6 tomatoes","Ginger","Butter","Black pepper","Basil","Cream","Sugar, salt","Cornflour for thickness"],
    steps:["Roast tomatoes and ginger till soft.","Blend smooth and strain.","Heat butter, pour strained soup.","Add water, cornflour paste, salt, sugar, and pepper.","Simmer 5 min till slightly thick.","Swirl cream and serve hot."],
    tips:"Roasting tomatoes deepens flavour beautifully in this Jain version."
  },

  // ─── SPECIAL ───
  {
    id:48, name:"Paneer Tikka", emoji:"🟧", type:"veg", cat:"snacks", time:40, serves:4,
    desc:"Marinated paneer and peppers charred on a skewer — restaurant showstopper.",
    ingredients:["300g paneer, cubed","Capsicum, onion, tomato","Thick yogurt","Tikka masala","Kashmiri chilli","Lemon juice","Ginger-garlic paste","Kasuri methi","Oil"],
    steps:["Mix yogurt with all spices, lemon, and ginger-garlic paste.","Marinate paneer and vegetables in it. Rest 2 hours.","Skewer alternating paneer and vegetables.","Grill or cook on hot tawa with oil.","Char on all sides. Finish with lemon squeeze.","Serve with mint chutney."],
    tips:"Hang the yogurt before marinating to get thick, clingy coating."
  },
  {
    id:49, name:"Chicken Biryani", emoji:"🍛", type:"nonveg", cat:"rice", time:90, serves:6,
    desc:"Aromatic basmati biryani layered with spiced chicken, fried onions, and saffron.",
    ingredients:["1.5 kg chicken","3 cups basmati rice","Biryani masala","Yogurt marinade","Fried onions","Saffron milk","Whole spices","Ghee, mint, coriander"],
    steps:["Marinate chicken with yogurt and biryani masala overnight.","Cook chicken till 80% done.","Par-boil rice with whole spices till 70% done.","Layer: chicken, rice, fried onions, mint, saffron milk, ghee.","Seal with tight lid. Dum cook 30 min.","Rest 10 min. Serve from the pot."],
    tips:"Always rest the biryani after cooking — it redistributes steam."
  },
  {
    id:50, name:"Rasgulla", emoji:"⚪", type:"veg", cat:"sweet", time:60, serves:8,
    desc:"Spongy cottage cheese balls floating in light sugar syrup.",
    ingredients:["1 litre full-fat milk","Lemon juice","Sugar (2 cups)","Water (4 cups)","Cardamom","Rose water"],
    steps:["Boil milk. Add lemon juice to curdle. Strain through cloth.","Knead chenna 10 min till smooth.","Roll into smooth balls. Keep covered.","Boil sugar syrup in wide pan.","Drop balls in boiling syrup. Cover and cook 15 min.","Cool. Chill 2 hours before serving."],
    tips:"Chenna must be dry but not crumbly — knead till it's like soft dough."
  }
];
