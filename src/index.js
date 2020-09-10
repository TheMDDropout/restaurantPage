//Goals for myself: create the website using only javascript, while maintaining using modules for each page
// and a modular pattern for for all the content within a page, ideally only needing to import/export a single IIFE?
import {aboutPage} from './aboutPage'
import {menuPage} from './menuPage'
import {contactPage} from './contactPage'

let mainPage = (() => {
 
    const background = document.createElement('div')
    background.setAttribute('id', "backgroundImage")
    background.style.backgroundImage = "url('https://images.unsplash.com/photo-1555734185-a8c2cbe4c31c?ixlib=rb-1.2.1&q=99&fm=jpg&crop=entropy&cs=tinysrgb&w=2048&fit=max&ixid=eyJhcHBfaWQiOjcwOTV9')"

    const restaurantName = document.createElement('div')
    restaurantName.setAttribute('id', "restaurantName")
    restaurantName.innerHTML = "pure"

    const restaurantSlogan = document.createElement('div')
    restaurantSlogan.setAttribute('id', "restaurantSlogan")
    restaurantSlogan.innerHTML = "...return to your roots"
    
    const arrowDown = document.createElement('img')
    arrowDown.setAttribute('id', 'arrowDown')
    arrowDown.src = 'images/arrow.svg'

    const mainTitleContainer = document.createElement('div')
    mainTitleContainer.setAttribute('id', 'mainTitleContainer')
    mainTitleContainer.appendChild(restaurantName)
    mainTitleContainer.appendChild(restaurantSlogan)
    mainTitleContainer.appendChild(arrowDown)

    const body = document.querySelector('body')
    body.appendChild(background)
    body.appendChild(mainTitleContainer)
    
    const tabContainer = document.createElement('div')
    tabContainer.setAttribute('id', "tabContainer")

    const menuTab = document.createElement('div')
    menuTab.setAttribute('id', 'menuTab')
    menuTab.innerHTML = "MENU"

    const aboutTab = document.createElement('div')
    aboutTab.setAttribute('id','aboutTab')
    aboutTab.innerHTML = "ABOUT"

    const contactTab = document.createElement('div')
    contactTab.setAttribute('id','contactTab')
    contactTab.innerHTML = "CONTACT"

    const dotSeperator = document.createElement('img')
    dotSeperator.src = "images/dot.svg"

    tabContainer.appendChild(aboutTab)
    tabContainer.appendChild(dotSeperator.cloneNode(true))
    tabContainer.appendChild(menuTab)
    tabContainer.appendChild(dotSeperator.cloneNode(true))
    tabContainer.appendChild(contactTab)

    arrowDown.addEventListener('click', scrollDown)
    function scrollDown(e) {
        mainTitleContainer.appendChild(tabContainer)
        mainTitleContainer.style.top = "10px"
        mainTitleContainer.removeChild(restaurantSlogan)
        mainTitleContainer.removeChild(arrowDown)
        backgroundImage.style.boxShadow = "0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12)"
        backgroundImage.style.height = "200px"
        backgroundImage.style.opacity = ".7"
        body.appendChild(aboutPage.aboutContainer.cloneNode(true))
        aboutContainer.style.top = '100%'
        setTimeout(() => {aboutContainer.style.top = "200px"}, 10)
    }

    let clickaboutTab = aboutTab.addEventListener('click', getAboutTab)
    function getAboutTab(e) {
        let aboutClone = aboutPage.aboutContainer.cloneNode(true)
        body.appendChild(aboutClone)
        aboutClone.style.top = "200px"
        body.removeChild(body.lastElementChild.previousElementSibling)
    }

    let clickMenuTab = menuTab.addEventListener('click', getMenuTab)
    function getMenuTab(e){
        let menuClone = menuPage.menuContainer.cloneNode(true)
        body.appendChild(menuClone)
        body.removeChild(body.lastElementChild.previousElementSibling);
    }

    let clickContactTab = contactTab.addEventListener('click', getContactTab)
    function getContactTab(e) {
        let contactClone = contactPage.contactContainer.cloneNode(true)
        body.appendChild(contactClone)
        body.removeChild(body.lastElementChild.previousElementSibling);
    }

})();