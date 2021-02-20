const Image = require("@11ty/eleventy-img");

module.exports.data = async function() {
  return {
    permalink: "static/css/background-images.css"
  };
};

module.exports.render = async function () {
  let bgHero = await Image("./src/static/img/hero-bg.png", {
    formats: ["avif", "webp", "png"],
    widths: [1000],
    outputDir: "./_site/img/"
  });
  
  let bgMap = await Image("./src/static/img/map-bg.jpg", {
    formats: ["avif", "webp", "jpg"],
    widths: [1500],
    outputDir: "./_site/img/"
  });
  
  let bgPickaxe = await Image("./src/static/img/pick-axe.jpg", {
    formats: ["avif", "webp", "jpg"],
    widths: [1500],
    outputDir: "./_site/img/"
  });

  console.log(bgHero)
  
  return `
  .hero-bg {
    background-image: url(${bgHero.webp[0].url});
  }
  
  .map-bg {
    background-image: url(${bgMap.webp[0].url});
  }
  
  .pickaxe-bg {
    background-image: url(${bgPickaxe.webp[0].url});
  }
  `;
};