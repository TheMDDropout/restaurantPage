let aboutPage = (() => {

    const aboutTextMain = document.createElement('div')
    aboutTextMain.setAttribute('id', 'aboutTextMain')
    aboutTextMain.innerHTML = "About"

    const aboutTextSub = document.createElement('div')
    aboutTextSub.setAttribute('id', 'aboutTextSub')
    aboutTextSub.innerHTML = "pure was founded back in 2020 by " + 
    "amateur homecook Jillian 'Karen' Smith. What started off as " +
    "a social media ploy to gain Instagram followers, slowly grew into " +
    "the successful dine-in garage restaurant it is today. Here at pure, we " +
    "embrace holistic diets that both nourish the body and cleanse the soul." + 
    "<br> <br>" + "To ensure freshness, " +
    "all of our ingredients are locally sourced from Karen's " + 
    "mother-in-law's backyard as well as the neighborhood community garden" +
    " (although some ingredients are occasionally sourced from the local Walmart)." +
    "<br><br>" +
    "Though not formally trained, Karen draws upon her personal experiences" +
    " and thorough Google searches to construct healing meals known " +
    "to cure various ailments including: diabetes, atherosclerosis, " + 
    "pancreatitis, insomnia, fatigue, short stature, tall stature, " + 
    "unlikable personalities, etc."

    const textContainer = document.createElement('div')
    textContainer.setAttribute('id', "textContainer")
    textContainer.appendChild(aboutTextMain)
    textContainer.appendChild(aboutTextSub)

    const vegan1 = document.createElement('img')
    vegan1.src = "images/vegan1.jpeg"
    vegan1.setAttribute('id', 'vegan1')
    const imageContainer = document.createElement('div')
    imageContainer.setAttribute('id', "imageContainer")
    imageContainer.appendChild(vegan1)

    const vegan2 = document.createElement('img')
    vegan2.src = "images/vegan2.jpg"
    vegan2.setAttribute('id', 'vegan2')
    const imageContainer2 = document.createElement('div')
    imageContainer2.setAttribute('id', "imageContainer2")
    imageContainer2.appendChild(vegan2)

    const aboutContainer = document.createElement('div')
    aboutContainer.setAttribute('id', "aboutContainer")
    aboutContainer.appendChild(textContainer)
    aboutContainer.appendChild(imageContainer)
    aboutContainer.appendChild(imageContainer2)

    console.log ('bloop')
    return {
        aboutContainer
    }
})();

export {aboutPage}