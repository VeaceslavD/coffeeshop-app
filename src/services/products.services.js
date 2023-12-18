const products = [
    {
        id: 18,
        name: 'Illy Colombia',
        description: 'Illy Whole Coffee is the perfect choice for coffee lovers who prefer to grind their beans to suit their own taste and brewing method.Illy is distinctive blend of fine Arabica coffees, with a smooth, rich and full-bodied taste, is created from the skillful blend of 100% sustainably grown Arabica beans, meticulously selected from different growing regions around the world.The result is an authentic Italian coffee, perfectly consistent, smooth, balanced and never bitter – perfect for all coffee preparations.',
        short_description: 'Using an exclusive process, Illy coffee is packaged in an airless, pressurized box that enhances and seals in the precious flavors and oils so you can enjoy the freshest taste – cup after cup.',
        brand: 'Illy',
        price: 200,
        weight: '250g',
        country: 'Hungary',
        beans: 'Arabica',
        flavor: 'with a smooth, rich and full-bodied taste',
        category: 'wholeBeans',
        image: 'illy-Colombia.webp'
    },
    {
        id: 4,
        name: 'Lavazza Tierra Colombia',
        description: 'Lavazza Tierra Colombia is a premium 100% Arabica coffee sourced from Colombia and packaged in a convenient package.It is carefully cultivated and selected by hand to guarantee its quality and unique flavor.This blend offers a balanced and persistent taste with notes of chocolate and exotic fruits.Ideal for those who appreciate coffee of safe origin and are looking for an authentic taste experience.It can be used to prepare a variety of coffee drinks, such as espresso, cappuccino or latte.',
        short_description: 'A unique blend of washed Colombian Arabica containing coffee from the Meta region, where the Lavazza Foundation supports more than 100 farming families to restore plantations..',
        brand: 'Lavazza',
        price: 450,
        weight: '1kg',
        country: 'Italy',
        beans: '100% Arabica',
        flavor: 'With hints of chocolate and exotic fruits.',
        category: 'wholeBeans',
        image: 'Lavazza-Tierra-Colombia.webp'
    },
    {
        id: 5,
        name: 'Lavazza Tierra Selection',
        description: 'Lavazza Tierra Selection is a premium 100% Arabica coffee sourced from Nicaragua and packaged in a convenient package.It is carefully cultivated and selected by hand to guarantee its quality and unique flavor.This blend offers a sweet and balanced taste with hints of berries and dark chocolate.Ideal for those who appreciate coffee of safe origin and are looking for an authentic taste experience.It can be used to prepare a variety of coffee drinks, such as espresso, cappuccino or latte.',
        short_description: '100% premium Arabica blend containing coffee from Jinotega (Nicaragua), where Lavazza has more than 25 coffee growing communities.',
        brand: 'Lavazza',
        price: 450,
        weight: '1kg',
        country: 'Italy',
        beans: '100% Arabica',
        flavor: 'With hints of berries and dark chocolate.',
        category: 'wholeBeans',
        image: 'Lavazza-Tierra-Selection.webp'
    },
    {
        id: 7,
        name: 'Lavazza Qualità Oro',
        description: 'Born in 1956, Qualità Oro has been passed down from father to son for 60 years.A true coffee connoisseur like you will know the pleasure of enjoying a fine blend every day.',
        short_description: 'A coffee with a dark color, velvety texture, notes of fruit and flowers.',
        brand: 'Lavazza',
        price: 130,
        weight: '250g',
        country: 'Italy',
        beans: '100% Arabica',
        flavor: '',
        category: 'groundBeans',
        image: 'Lavazza-Qualità-Oro.webp'
    },
    {
        id: 8,
        name: 'Lavazza Qualità Oro',
        description: 'Pretul afisat este pentru un set de 36 capsule.Compatibilitate: Lavazza A Modo MioMod de ambalare: bax 36 capsule.Gramaj: 8g/capsula.',
        short_description: '36 capsules containing ground coffee packed in a protected atmosphere designed by Lavazza for the A Modo Mio system. They contain high quality coffee, which stands out for its mild, delicate taste and strong aroma. These capsules can be used exclusively in coffee machines from the Lavazza A Modo Mio system. The box contains 36 capsules.',
        brand: 'Lavazza',
        price: 250,
        weight: '8g',
        country: 'Italy',
        beans: '100% Arabica',
        flavor: '',
        category: 'capsules',
        image: 'Lavazza-Qualità-Oro - Sinfonia-Perfetta.webp'
    },
    {
        id: 10,
        name: 'Julius Meinl Premium Espresso Arabica',
        description: 'Julius Meinl Premium Espresso is a specialty coffee made from beans, which is characterized by its intense aroma and full body.This coffee is the perfect blend between arabica and robusta coffee beans, which combine to create an espresso with a round and balanced taste.Julius Meinl Premium Espresso is roasted at low temperatures, in order to preserve the original flavor and aromas of the coffee beans.It is recommended for the preparation of espresso, but it can also be used for the preparation of other espresso drinks, such as lattes, cappuccinos or americanos.Julius Meinl Premium Espresso is packed in a 1 kg package, so that you have enough fresh coffee to prepare delicious drinks for the whole family or to make coffee at the office.',
        short_description: 'Carefully selected 100% Arabica beans from the most important coffee plantations in Brazil and Central America give this product a fresh aroma, a delicate, sweet taste and a particularly fine crema.',
        brand: 'Julius Meinl',
        price: 450,
        weight: '1kg',
        country: 'Austria',
        beans: '100% Arabica',
        flavor: 'Medium viscosity and fresh aroma with a delicate sweet taste',
        category: 'wholeBeans',
        image: 'Julius-Meinl-Premium-Espresso-Arabica.webp'
    },
    {
        id: 11,
        name: 'Julius Meinl Trend Caffe Crema Intenso',
        description: 'Julius Meinl Trend Caffe Crema Intenso is a specialty coffee made from beans, which is characterized by its intense aroma and full body.This coffee is the perfect blend between arabica and robusta coffee beans, which combine to create an espresso with a round and balanced taste.Julius Meinl Trend Caffe Crema Intenso is roasted at medium temperatures, to obtain a coffee with a rich and dense cream, which is perfect for preparing cappuccinos and lattes.It is recommended for preparing espresso, but it can also be used for preparing other espresso drinks, such as latte, cappuccino or Americano.Julius Meinl Trend Caffe Crema Intenso is packed in a 1 kg package, so that you have enough fresh coffee to prepare delicious drinks for the whole family or to make coffee at the office.',
        short_description: 'Composed of selected grains from South America and Asia, this rich blend is characterized by a full and strong aroma, a persistent taste and a very creamy texture',
        brand: 'Julius Meinl',
        price: 420,
        weight: '1kg',
        country: 'Austria',
        beans: 'Arabica and Robusta',
        flavor: 'Chocolatey and balanced',
        category: 'wholeBeans',
        image: 'Julius-Meinl-Trend-Caffe-Crema-Intenso.webp'
    },
    {
        id: 12,
        name: 'Julius Meinl Caffè Crema Selezione',
        description: 'Julius Meinl Caffè Crema Selezione is a premium quality coffee bean, originating from South America and West Africa.The coffee beans are roasted evenly and are characterized by the intense aroma of dark chocolate, with notes of spices and dried fruits.This type of coffee has a full and creamy body and is perfect for preparing espressos or other espresso drinks, such as lattes or cappuccinos.It is an excellent choice for coffee lovers who want a strong and full of flavor experience.',
        short_description: 'The best Arabica beans from Brazil and Central America, combined with specially selected Robusta beans from Asia, give this coffee a rich, nutty aroma – and provide a long-lasting velvety crema. In combination with milk, this mixture reveals its full potential.',
        brand: 'Julius Meinl',
        price: 400,
        weight: '1kg',
        country: 'Austria',
        beans: 'Arabica and Robusta',
        flavor: 'Warm notes of cocoa and dried fruit',
        category: 'wholeBeans',
        image: 'Julius-Meinl-Caffè-Crema-Selezione.webp'
    },
    {
        id: 3,
        name: 'Lavazza Crema Ricca',
        description: 'Lavazza Crema Ricca coffee is a high quality coffee, obtained from Arabica and Robusta coffee beans.This coffee has a creamy and full taste, with notes of chocolate and nutmeg.It is perfect for preparing espresso, but it can also be used to prepare other coffee drinks, such as lattes or cappuccinos.The coffee is packed in hermetic bags to preserve the aroma and quality of the beans.',
        short_description: 'Lavazza Crema Ricca coffee is a high quality coffee, obtained from Arabica and Robusta coffee beans. This coffee has a creamy and full taste, with notes of chocolate and nutmeg.',
        brand: 'Lavazza',
        price: 330,
        weight: '1kg',
        country: 'Italy',
        beans: 'Arabica and Robusta',
        flavor: 'Chocolate and nutmeg',
        category: 'wholeBeans',
        image: 'Lavazza-Crema-Ricca.webp'
    },
    {
        id: 13,
        name: 'Julius Meinl Präsident',
        description: 'Julius Meinl Classic Collection Prasident is a high quality coffee, packed in 500g packets.This coffee has a strong aroma and a unique flavor, resulting from the blend of freshly roasted coffee beans.Julius Meinl is a company renowned for its top quality coffee products, and Prasident is one of the most popular flavors in its Classic Collection range.This coffee blend is recommended to all coffee lovers who appreciate a premium quality product.',
        short_description: 'Julius Meinl Classic Collection Prasident is a high quality coffee, packed in 500g packets.',
        brand: 'Julius Meinl',
        price: 200,
        weight: '500g',
        country: 'Austria',
        beans: 'Arabica and Robusta',
        flavor: 'Rich with notes of dark chocolate and toast',
        category: 'groundBeans',
        image: 'Julius-Meinl-Präsident.webp'
    },
    {
        id: 14,
        name: 'Julius Meinl Jubiläum',
        description: 'Julius Meinl Jubilaum este o cafea de calitate superioară, realizată din boabe de cafea Arabica și Robusta de cea mai bună calitate, cultivate în cele mai bune regiuni de cafea din întreaga lume. Boabele sunt selecționate cu atenție și prăjite în mod tradițional, pentru a oferi o aromă și un gust plăcut, cu o notă de ciocolată neagră și nucșoară.Acest amestec este ideal pentru prepararea unei cafele espresso sau ca bază pentru diverse băuturi cu cafea.Julius Meinl Jubilaum este ambalată într-un recipient de 500 g, astfel încât să poată fi utilizată pe termen lung.',
        short_description: 'Julius Meinl Jubiläum is a high-quality coffee, packed in 500g packets.',
        brand: 'Julius Meinl',
        price: 200,
        weight: '500g',
        country: 'Austria',
        beans: 'Arabica and Robusta',
        flavor: 'Delicate aroma that lingers in the mouth',
        category: 'groundBeans',
        image: 'Julius-Meinl-Jubiläum.webp'
    },
    {
        id: 15,
        name: 'Illy Brasile',
        description: 'Illy Brasile is a blend of high-quality Arabica coffee, originally from Brazil.The beans are carefully selected by the Italian producer Illy and are finely ground to fit most coffee filters in the kettle or coffee maker.The natural flavors of Illy Brasile coffee are marked by sweet notes of chocolate, with a slight coconut finish.This is a medium coffee blend for coffee lovers who appreciate strong flavors and moderate acidity.Recommended products',
        short_description: 'Discover the single origin Illy Arabica Selection Brasile coffee, which individually highlights one of the unique flavor notes found in the legendary Illy blend. Coffee grown in Brazil is often used as a base for espresso blends for its intense, full flavor and caramel notes..',
        brand: 'Illy',
        price: 200,
        weight: '250g',
        country: 'Hungary',
        beans: 'Arabica and Robusta',
        flavor: 'caramel notes.',
        category: 'wholeBeans',
        image: 'illy-Brasile.webp'
    },
    {
        id: 16,
        name: 'Illy Arabica Guatemala',
        description: 'Guatemala grown coffee is an ideal addition to any blend for its acidity and bold chocolate notes, especially as a drip coffee.This sustainably grown coffee is made with 100% Arabica beans.Roasting from this origin is specially calibrated to enhance the natural aromatic notes and flavor profile of the coffee.Each Arabica Selection has its own unique roasting temperature and length of time to bring out the flavor and aroma of each origin.Guatemala has a bold taste with hints of chocolate.',
        short_description: 'Discover the Illy Arabica Selection Guatemala origin coffee, available exclusively online, which individually highlights one of the unique flavor notes found in the legendary Illy blend.',
        brand: 'Illy',
        price: 200,
        weight: '250g',
        country: 'Hungary',
        beans: 'Arabica',
        flavor: 'Guatemala has a bold taste with hints of chocolate.',
        category: 'wholeBeans',
        image: 'illy-Arabica-Guatemala.webp'
    },
    {
        id: 6,
        name: 'Lavazza Crema e Gusto Classico',
        description: 'A soft, rounded and inviting blend composed mainly of high quality Arabica and Robusta.Perfect harmony between body and spicy top notes.Ideal for milk-based dishes.',
        short_description: 'A quality coffee with a dark color, spicy notes and an inviting taste',
        brand: 'Lavazza',
        price: 130,
        weight: '250g',
        country: 'Italy',
        beans: 'Arabica and Robusta',
        flavor: '',
        category: 'groundBeans',
        image: 'Lavazza-Crema -Gusto-Classico.webp'
    },
    {
        id: 17,
        name: 'Illy Classico',
        description: 'This espresso is the balance between strength and finesse.The quintessence of clear chocolate and caramel flavor with a hint of flowers.This is a blend of nine top quality (100%) Arabica beans.More than half of them come from Brazil, which results in the unique flavor.The others come from Africa and Central America – which gives the coffee a hint of sweetness.This coffee is especially recommended for espresso machines under pressure.Medium roast 100% Arabica Low caffeine content – approx.1.5%',
        short_description: 'Illy Classico coffee has a persistent sweetness and delicate notes of caramel, orange blossom and jasmine.',
        brand: 'Illy',
        price: 200,
        weight: '250g',
        country: 'Hungary',
        beans: 'Arabica',
        flavor: 'clear chocolate and a caramel flavor with a hint of flowers',
        category: 'wholeBeans',
        image: 'illy-Classico.webp'
    },
    {
        id: 19,
        name: 'Illy Forte, compatibile Nespresso',
        description: 'Strong, very bold roast coffee has a lasting richness with hints of dark chocolate and an intense toasty aroma.',
        short_description: 'illy aluminum capsules have been specially designed for use in Nespresso coffee machines',
        brand: 'Illy',
        price: 100,
        weight: '8g',
        country: 'Hungary',
        beans: 'Arabica',
        flavor: 'with notes of dark chocolate and an intense aroma of toasted bread',
        category: 'capsules',
        image: 'illy-Forte-compatibile-Nespresso.webp'
    },
    {
        id: 20,
        name: 'Illy Intenso, compatibil Nespresso',
        description: 'Intense and bold roasted coffee has a pleasant and robust finish with warm notes of cocoa and dried fruit.',
        short_description: 'illy aluminum capsules have been specially designed for use in Nespresso coffee machines',
        brand: 'Illy',
        price: 100,
        weight: '8g',
        country: 'Hungary',
        beans: '100% Arabica',
        flavor: 'with warm notes of cocoa and dried fruit',
        category: 'capsules',
        image: 'illy-Intenso-compatibil-Nespresso.webp'
    },
    {
        id: 2,
        name: 'Lavazza Gusto Forte',
        description: 'LAVAZZA Gusto Forte is a high quality coffee, obtained from arabica and robusta coffee beans.This coffee has a strong and intense taste, with notes of chocolate and nutmeg.It is perfect for preparing espresso, but it can also be used to prepare other coffee drinks, such as lattes or cappuccinos.The coffee is packed in hermetic bags to preserve the aroma and quality of the beans.',
        short_description: 'LAVAZZA Gusto Forte is a high quality coffee, obtained from arabica and robusta coffee beans. This coffee has a strong and intense taste, with hints of chocolate and nutmeg.',
        brand: 'Lavazza',
        price: 240,
        weight: '1kg',
        country: 'Italy',
        beans: '100% Arabica',
        flavor: 'Notes of chocolate and nutmeg',
        category: 'wholeBeans',
        image: 'Lavazza-Gusto-Forte.webp'
    },
    {
        id: 21,
        name: 'Illy Classico, 125g',
        description: 'Illy Classico ground coffee is a blend of high-quality Arabica coffee beans from different regions of the world.The beans are finely ground to fit most kettle or coffee maker coffee filters.The natural flavors of Illy Classico coffee are marked by sweet notes of chocolate and berries, with a slightly acidic finish.This is a medium coffee blend for coffee lovers who appreciate a perfect balance between strong aromas and moderate acidity.',
        short_description: 'The classic roasted coffee has a lingering sweetness and delicate notes of caramel, orange blossom and jasmine. Thick, uninterrupted, hazel cream – that light brown layer on top – dyed with tiger stripes, darker brown.',
        brand: 'Illy',
        price: 100,
        weight: '125g',
        country: 'Hungary',
        beans: 'Arabica',
        flavor: 'sweet notes of chocolate and berriest',
        category: 'groundBeans',
        image: 'illy-Classico-125g.webp'
    },
    {
        id: 22,
        name: 'Melitta Bella Crema Espresso',
        description: 'Melitta Bella Crema Espresso coffee is an exceptional range of coffee, created to offer an authentic espresso experience.This coffee has been carefully selected from the highest quality Arabica coffee beans for you to enjoy an intense and aromatic taste.With a long passion for the art of coffee, Melitta created this coffee to give you an explosion of flavors and a velvety texture in every cup of espresso.The beans are carefully harvested and processed to ensure superior quality, and the result is a coffee with a balanced taste and full of flavor.When you prepare a cup of Melitta Bella Crema Espresso, you will be greeted by a seductive and intense fragrance that will envelop your senses.The rich and intense taste reveals notes of dark chocolate, berries and a subtle hint of caramel.Each sip is a journey into the world of fine coffee, with a velvety texture and a pleasant and persistent aftertaste.Whether you enjoy a cup of authentic espresso or treat yourself to a delicious cappuccino, Melitta Bella Crema Espresso will envelop your taste buds in a special experience.It is the perfect choice for those who appreciate a refined, intense and full of flavor coffee.Discover the joy of authentic coffee and treat yourself to a cup of Melitta Bella Crema Espresso, a coffee that represents Melitta is passion and experience in a perfectly packaged package.',
        short_description: 'Melitta Bella Crema Espresso coffee is an exceptional range of coffee, created to offer an authentic espresso experience. This coffee has been carefully selected from the highest quality Arabica coffee beans for you to enjoy an intense and aromatic taste.',
        brand: 'Melitta',
        price: 450,
        weight: '1kg',
        country: 'Germany',
        beans: '100% Arabica',
        flavor: 'notes of dark chocolate, berries',
        category: 'wholeBeans',
        image: 'Melitta-Bella-Crema-Espresso.webp'
    },
    {
        id: 23,
        name: 'Melitta Bella Crema Intenso',
        description: 'Bella Crema Intenso is an outstanding coffee, created for coffee lovers looking for a strong and intense taste.This unique coffee from Melitta is designed to provide an experience full of energy and refinement.The coffee beans used for Bella Crema Intenso are carefully selected and are an expert combination of Arabica and Robusta to create a balanced and captivating blend.The result is a strong coffee with a distinct personality and a robust note.When you open the pack of Bella Crema Intenso, you will be greeted by an intense and aromatic fragrance that will stimulate your senses.This assortment offers an explosion of rich flavors with distinct notes of dark chocolate, roasted nuts and spices in perfect balance.The strong taste of Bella Crema Intenso coffee will envelop your taste buds in an exciting taste journey.Each sip reveals a complexity of flavors with a velvety texture and remarkable intensity.This coffee offers a persistent and pleasant aftertaste, leaving you with a satisfying and refreshing feeling.Bella Crema Intenso is the ideal choice for those looking for an intense and bold coffee, perfect to start the day or to indulge in moments of relaxation.Whether you enjoy it as a strong espresso or as a base for milk drinks, Bella Crema Intenso will captivate your senses and give you a memorable coffee experience.Enjoy the power and intensity of exceptional coffee with Bella Crema Intenso, creating an authentic and passionate tasting experience.',
        short_description: 'Bella Crema Intenso is an outstanding coffee, created for coffee lovers looking for a strong and intense taste. This unique coffee from Melitta is designed to provide an experience full of energy and refinement.',
        brand: 'Melitta',
        price: 450,
        weight: '1kg',
        country: 'Germany',
        beans: '100% Arabica',
        flavor: 'with distinct notes of dark chocolate, roasted nuts',
        category: 'wholeBeans',
        image: 'Melitta-Bella-Crema-Intenso.webp'
    },
    {
        id: 9,
        name: 'Lavazza Crema e Gusto',
        description: 'From the meeting of Brazilian Arabica and African and Asian Robusta, a full-bodied and aromatic espresso enhanced by sweet and chocolate notes, lightly spiced.Absolutely delicious.',
        short_description: 'Lavazza A Modo Mio. Superior quality coffee, which stands out for its mild, delicate taste and strong aroma.',
        brand: 'Lavazza',
        price: 380,
        weight: '8g',
        country: 'Italy',
        beans: 'Arabica and Robusta',
        flavor: 'Intense with shades of hazelnut',
        category: 'capsules',
        image: 'Lavazza-Crema-e-Gusto.webp'
    },
    {
        id: 24,
        name: 'Melitta Bella Crema La Crema',
        description: 'Bella Crema La Crema represents a special coffee, with a special emphasis on creaminess and velvety texture.This premium coffee, produced by Melitta, is designed to offer an indulgent and refined experience, dedicated to coffee lovers who appreciate a silky consistency and a rich aroma.At the base of Bella Crema La Crema are the highest quality Arabica coffee beans, carefully selected to obtain a coffee with a distinct personality.The meticulous roasting process brings out the delicate flavors and gives them a subtle hint of sweetness.The name "La Crema" comes from the exceptional creaminess that this coffee offers.Each cup of Bella Crema La Crema is accompanied by a soft and rich cream that perfectly complements the aroma and taste.It is a coffee that melts delicately on the tongue, leaving a velvety and satisfying sensation behind.The complex flavors of Bella Crema La Crema reveal nuances of milk chocolate, fine vanilla and a subtle hint of toasted nuts.The balanced and delicate taste of this coffee is complemented by a pleasant acidity and a long and velvety aftertaste.Whether you choose to enjoy a cup of authentic espresso or enjoy a delicate cappuccino, Bella Crema La Crema will pamper your senses with a special experience.Every sip will delight your taste buds and take you on a taste journey full of sophistication and pleasure.Discover the pleasure of a creamy and velvety coffee with Bella Crema La Crema, and let yourself be enveloped by the refinement and elegance of a fine coffee, created with passion and craftsmanship.',
        short_description: 'Bella Crema La Crema represents a special coffee, with a special emphasis on creaminess and velvety texture. This premium coffee, produced by Melitta, is designed to offer an indulgent and refined experience, dedicated to coffee lovers who appreciate a silky consistency and a rich aroma.',
        brand: 'Melitta',
        price: 450,
        weight: '1kg',
        country: 'Germany',
        beans: '100% Arabica',
        flavor: 'shades of milk chocolate, fine vanilla and a subtle hint of toasted nuts',
        category: 'wholeBeans',
        image: 'Melitta-Bella-Crema-La-Crema.webp'
    },
    {
        id: 1,
        name: 'Lavazza Gusto Pieno',
        description: 'LAVAZZA Gusto Pieno is a high quality coffee, obtained from arabica and robusta coffee beans.This coffee has a strong and full taste, with hints of chocolate and berries.It is perfect for preparing espresso, but it can also be used to prepare other coffee drinks, such as lattes or cappuccinos.The coffee is packed in hermetic bags to preserve the aroma and quality of the beans.',
        short_description: 'Lavazza Gusto Pieno is a tasty and distinctive coffee with an intense aroma and full body, woody notes and a medium aftertaste.',
        brand: 'Lavazza',
        price: 320,
        weight: '1kg',
        country: 'Italy',
        beans: 'Arabica and Robusta',
        flavor: 'Chocolate and berries',
        category: 'wholeBeans',
        image: 'Lavazza-gusto-pieno.webp'
    },
    {
        id: 25,
        name: 'Melitta Bella Crema Speciale',
        description: 'Bella Crema Speciale is a distinguished and exceptional coffee that combines the superior quality of Arabica coffee beans with a strong character and an intense aroma.Produced by Melitta, this coffee was created to provide a remarkable and memorable experience to passionate coffee lovers.The coffee beans used for Bella Crema Speciale are carefully selected from the best Arabica coffee plantations, thus ensuring exceptional quality and authentic flavor.Each sip reveals a complex palette of flavors and nuances, offering a refined taste experience.The intense and robust taste of Bella Crema Speciale coffee delights the senses, offering a balanced combination of notes of dark chocolate, berries and a subtle hint of spice.Each cup of coffee is accompanied by a smooth and velvety crema, adding a pleasant texture and an attractive appearance.With every sip, you will experience a coffee full of character and depth.Bella Crema Speciale offers a perfect balance between the intensity of the aroma and the velvety finish, leaving you with a persistent and satisfying aftertaste.This coffee is ideal to treat yourself to every morning or to enjoy a relaxing moment during the day.No matter how you prepare it - espresso, lungo or in combination with milk, Bella Crema Speciale will captivate your senses and give you an authentic coffee experience.Discover the pleasure of an outstanding coffee and enjoy every sip with Bella Crema Speciale.This coffee assortment is a perfect choice for those who appreciate a coffee with strong character, intense aromas and superior quality in every cup.',
        short_description: 'Bella Crema Speciale is a distinguished and exceptional coffee that combines the superior quality of Arabica coffee beans with a strong character and an intense aroma. Produced by Melitta, this coffee was created to provide a remarkable and memorable experience to passionate coffee lovers.',
        brand: 'Melitta',
        price: 450,
        weight: '1kg',
        country: 'Germany',
        beans: '100% Arabica',
        flavor: 'notes of dark chocolate, berries and a subtle hint of spice',
        category: 'wholeBeans',
        image: 'Melitta-Bella-Crema-Speciale.webp'
    },
];

export const getProducts = () => {
    return products;
};

export const getProductById = (id) => {
    return products.find(product => product.id === id);
};

export const getPopularProducts = () => {
    const selectedItems = [4, 10, 15, 25];
    return products.filter(product => selectedItems.includes(product.id));
};

export const getProductsByFilters = (filters) => {
    let filteredProducts = getProducts();

    if (filters.sort) {
        if (filters.sort === 'maxMin') {
            filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
        } else if (filters.sort === 'minMax') {
            filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
        }
    }

    if (filters.brand) {
        filteredProducts = filteredProducts.filter(product => product.brand === filters.brand);
    }

    if (filters.category) {
        filteredProducts = filters.category === 'all' ? filteredProducts : filteredProducts.filter(product => product.category === filters.category);
    }

    if (filters.weight) {
        filteredProducts = filteredProducts.filter(product => product.weight === filters.weight);
    }

    if (filters.searchValue) {
        const lowerCaseSearch = filters.searchValue.toLowerCase();
        filteredProducts = filteredProducts.filter(product => (product.brand || product.name || product.description).toLowerCase().includes(lowerCaseSearch));
    }

    return filteredProducts;
};
