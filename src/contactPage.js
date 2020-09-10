let contactPage = (() => {

    const contactContainer = document.createElement('div')
    contactContainer.setAttribute('id', "contactContainer")

    const contactTitle = document.createElement('div') 
    contactTitle.setAttribute('id', 'contactTitle')
    contactTitle.innerHTML = "CONTACT"
    
    const contactForm = document.createElement('div')
    contactForm.setAttribute('id', "contactForm")

    const contactInfo = document.createElement('div')
    contactInfo.setAttribute('id', 'contactInfo')
    contactInfo.innerHTML = "Email: karen@pure.com <br><br>" + 
    "Phone: 123-456-7890" + "<br><br>" + 
    "Location: Karen's Garage"

    contactForm.appendChild(contactInfo)

    const instagramIcon = document.createElement('img')
    instagramIcon.src = "images/instagram.svg"
    const facebookIcon = document.createElement('img')
    facebookIcon.src = "images/facebook.svg"
    const twitterIcon = document.createElement('img')
    twitterIcon.src = "images/twitter.svg"

    const socialMediaTab = document.createElement('div')
    socialMediaTab.setAttribute('id', 'socialMediaTab')
    socialMediaTab.appendChild(instagramIcon)
    socialMediaTab.appendChild(facebookIcon)
    socialMediaTab.appendChild(twitterIcon)

    contactContainer.appendChild(contactTitle)
    contactContainer.appendChild(contactForm)
    contactContainer.appendChild(socialMediaTab.cloneNode(true))

    return {
        contactContainer,
        socialMediaTab
    }
})();

export{contactPage}