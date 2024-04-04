let products = $('._1AtVbE div[data-tkid]')
  .toArray()
  .map((el) => {
    let $el = $(el);
    let desc_el = $(el).find("div._4rR01T");
    let title_el = $(el).find("div._4rR01T");
    let name_el =$(el).find("div._4rR01T");
    let rating_el = $(el).find("span[id] div");
    let image_el = $(el).find('img');
    let price_el = $(el).find("div._30jeq3");
    let previous_price_el = $(el).find("div._3I9_wc");
    let reviews = $(el).find("span._2_R_DZ");
    
    
    return {
      search: input.search,
      title: name_el.text().replace("\n", "").trim(),
      reviews: reviews ? +reviews.replace(/\D/, "") : null,
      price: price_el,
      previous_price: previous_price_el,
      image: image_el.attr("src"),
    };
  });

return { products };